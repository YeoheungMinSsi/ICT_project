from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
import time
import urllib.request
import os
import pandas as pd

# CSV 파일에서 술 이름 읽기
df = pd.read_csv("./data/all_tradition_drinks.csv")
drink_names = df["술 명"]

# 크롬 옵션 설정
chrome_options = Options()
chrome_options.add_argument("--start-maximized")
chrome_options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")

# 크롬 드라이버 설정
driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options=chrome_options)

# 이미지 저장 디렉토리 생성
if not os.path.exists("./images"):
    os.makedirs("./images")

# 각 술 이름에 대해 검색 및 이미지 다운로드
for index, drink_name in enumerate(drink_names):
    try:
        # 구글 이미지 검색 페이지 접속
        driver.get("https://www.google.co.kr/imghp")

        # 검색어 입력
        search_box = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.NAME, "q")))
        search_box.send_keys(drink_name)
        search_box.send_keys(Keys.RETURN)

        # 이미지 로딩 대기
        WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CSS_SELECTOR, ".rg_i.Q4LuWd")))

        # 이미지 요소 찾기
        images = driver.find_elements(By.CSS_SELECTOR, ".rg_i.Q4LuWd")

        # 이미지 다운로드 (최대 3개)
        for i, image in enumerate(images[:3]):
            try:
                image.click()
                time.sleep(2)
                img_url = WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.CSS_SELECTOR, "img.r48jcc.pT0Scc.iPVvYb"))
                ).get_attribute("src")

                # 이미지 다운로드
                urllib.request.urlretrieve(img_url, f"./images/{drink_name}_{i + 1}.jpg")
                print(f"Downloaded image {i + 1} for {drink_name}")
            except Exception as e:
                print(f"Error downloading image {i + 1} for {drink_name}: {e}")

        print(f"Completed downloading images for {drink_name} ({index+1}/{len(drink_names)})")
    except Exception as e:
        print(f"Error processing {drink_name}: {e}")

# 브라우저 종료
driver.quit()

print("크롤링 완료")