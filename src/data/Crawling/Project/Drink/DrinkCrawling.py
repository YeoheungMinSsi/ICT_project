from bs4 import BeautifulSoup
import requests

# 더술 사이트 크롤링 할 예정 111p까지 술 목록이 있음
# 총 페이지 수 --> pageNum
# def 더술(findNum):
#     pageNum = findNum
#     for i in range(1, 10000):
#         url = f"https://thesool.com/front/find/M000000083/view.do?searchType=2&searchKey=&searchKind=&levelType=&searchString=&productId=PR00000{i}"
#         req = requests.get(url)
#         soup = BeautifulSoup(req.text, 'html.parser')
#         result = soup.select_one('content > div > div > div.product-view > dl > dd.detail > div.info > ul > li:nth-child(1) > span')
#         if "증류" in result.text:
#             try:
#                 print(result.text)
#             except:
#                 print('없음')
#         else:
#             print('없음')

for i in range(1000, 10000):
    url = f"https://thesool.com/front/find/M000000083/view.do?searchType=2&searchKey=&searchKind=&levelType=&searchString=&productId=PR0000{i}"
    req = requests.get(url)
    soup = BeautifulSoup(req.text, 'html.parser')
    # 전통주 종류로 찾음(리큐르, 탁주, 증류주 등)
    # result = soup.select_one('#content > div > div > div.product-view > dl > dd.detail > div.info > ul > li:nth-child(1) > span')
    # 술 이름으로 찾음
    result = soup.select_one('#content > div > div > div.product-view > dl > dt')
    # 종류로 찾을경우에는(리큐르, 탁주 등으로 찾음), 이름으로 찾는경우는 이름을 입력
    if "증류주" in getattr(result, 'text', ''):
        print(result.text)
        print(f"0000{i}")  # 있다면 있는 페이지 저장
        break;
    else:
        print('pass')

# nt > div > div > div.product-view > dl > dd.detail > div.info > ul > li:nth-child(1) > span
#content > div > div > div.product-view > dl > dt