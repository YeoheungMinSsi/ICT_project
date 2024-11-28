import pandas as pd
from bs4 import BeautifulSoup
import requests, csv, os, sys

# csv파일을 저장하는 함수
def append_to_csv(data, filename):
    # 현재 스크립트의 디렉토리 경로
    current_dir = os.path.dirname(os.path.abspath(__file__))
    # data 디렉토리 경로
    data_dir = os.path.join(current_dir, 'data')

    file_path = os.path.join(data_dir, filename)

    # with open(file_path, 'a', newline='', encoding='utf-8') as f:
    #     writer = csv.writer(f)
    #     writer.writerow(data)
    with open(file_path, 'a', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(data)


# 전통주 찾는 사이트에서 크롤링(술 종류를 입력해야 함-> 증류주, 탁주, 약주/청주,과실주, 기타주류)
def thesool():

    # 각 csv 파일의 해더
    header = ['술 종류', '술 이름', '술 도수', '술 재료', '술 소개', '술과 같이 먹는 음식', '술 생산 지역']
    # 만들 술 csv 파일들
    sool_csv_file = ['모든술.csv', '증류주.csv', '탁주(막걸리).csv', '약주,청주.csv', '과실주(리큐르).csv', '기타주류.csv']

    # 생성한 append함수를 이용해 각 파일에 header를 지정함
    for file in sool_csv_file:
        append_to_csv(header, file)

    # 술 정보에 대한 크롤링 하는 부분
    for i in range(1, 10000):
        #999까지
        if i < 1000:
            prNum = f'PR00000{i}'
        #1000부터
        else:
            prNum = f'PR0000{i}'

        print(f'{i}')
        url = f"https://thesool.com/front/find/M000000083/view.do?searchType=2&searchKey=&searchKind=&levelType=&searchString=&productId={prNum}"
        req = requests.get(url)
        soup = BeautifulSoup(req.text, 'html.parser')

        #전통주 종류를 찾음(리큐르, 탁주, 증류주 등)
        result = soup.select_one('#content > div > div > div.product-view > dl > dd.detail > div.info > ul > li:nth-child(1) > span')
        #술 이름을 찾음
        soolname = soup.select_one('#content > div > div > div.product-view > dl > dt')
        # 술 재료
        soolingre = soup.select_one('#content > div > div > div.product-view > dl > dd.detail > div.info > ul > li:nth-child(2) > span')
        # 술 도수
        soolproof = soup.select_one('#content > div > div > div.product-view > dl > dd.detail > div.info > ul > li:nth-child(3) > span')
        # 술 소개
        soolinfo = soup.select_one('#content > div > div > div.product-view > dl > dd.intro > div.text')
        # 술과 같이 먹는 음식
        soolfood = soup.select_one('#content > div > div > div.product-view > dl > dd.food > div.text')
        #술을 만든 지역
        soolregion = soup.select_one("#content > div > div > div.product-view > dl > dd.place > div.text > ul > li:nth-child(2) > span")

        # 만약 결과가 있다면  if문 실행
        if result:
            sool_type = result.text.strip()

            # 크롤링한 페이지에서 술에 대한 정보를 가지고 오는 부분
            sool_data = [
                sool_type,  # 술 종류를 저장
                getattr(soolname, 'text', '').strip(),
                getattr(soolproof, 'text', '').strip(),
                getattr(soolingre, 'text', '').strip(),
                getattr(soolinfo, 'text', '').strip(),
                getattr(soolfood, 'text', '').strip(),
                getattr(soolregion, 'text', '').strip()
            ]

            # 모든 술에 대한 정보를 저장하는 리스트 1
            append_to_csv(sool_data, '모든술.csv')


            if "증류주" in sool_type:
                append_to_csv(sool_data, '증류주.csv')
            elif "탁주" in sool_type:
                append_to_csv(sool_data, '탁주(막걸리).csv')
            elif "약주, 청주" in sool_type:
                append_to_csv(sool_data, '약주,청주.csv')
            elif "과실주" in sool_type:
                append_to_csv(sool_data, '과실주(리큐르).csv')
            elif "기타주류" in sool_type:
                append_to_csv(sool_data, '기타주류.csv')
            else:
                pass
        else:
            print('없음')


if __name__ == "__main__":
    thesool()
    print("작업이 끝났습니다. 프로그램을 종료합니다.")
    sys.exit()