from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
import time

# Selenium WebDriver 설정
options = webdriver.ChromeOptions()
options.add_argument('--headless')  # 헤드리스 모드 (브라우저 창을 띄우지 않음)
service = Service()
driver = webdriver.Chrome(service=service, options=options)

# 총 페이지 수
# pageNum = 111

for i in range(1, 112):
    url = f"https://thesool.com/front/find/M000000082/list.do?searchType=2&searchKey=&searchKind=&levelType=&searchString=&productId=&pageIndex={i}&categoryNm=&kind="

    driver.get(url)

    # 페이지 로딩 대기
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CLASS_NAME, "product-list")))

    # '문배술' 검색
    if '문배술' in driver.page_source:
        print(f"'문배술'이 {i}페이지에서 발견되었습니다.")

        # 제품 상세 페이지 URL (실제 URL 구조에 맞게 수정 필요)
        view_url = f"https://thesool.com/front/find/M000000082/view.do?searchType=2&searchKey=&searchKind=&levelType=&searchString=&productId=&pageIndex={i}&categoryNm=&kind="

        driver.get(view_url)

        # 페이지 로딩 대기
        try:
            result = driver.find_element(By.CSS_SELECTOR,
                                         '#content > div > div > div.product-view > dl > dd.detail > div.info > ul > li')
            print(result.text)
        except:
            print("원하는 요소를 찾을 수 없습니다.")

        # 필요한 경우 여기서 추가 정보 추출

        break  # '문배술'을 찾았으므로 루프 종료

    time.sleep(1)  # 과도한 요청 방지를 위한 대기

driver.quit()