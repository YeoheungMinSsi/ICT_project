import pandas as pd
import requests

df = pd.read_csv("./Drink/data/모든술.csv")

#drink_type
brewing = ["탁주", "청주", "약주", "사케", "와인", "매드", "사이더", "과기주", ]  # 발효주
split =  ["증류주", "위스키", "블랜디", "보드카", "진", "럼", "소츄", "테킬라", "아브생트", "아쿠아비트", "바이주",
          "피스코", "그라파", "우조", "캐시", "양메이주"]  # 증류주
liqueur = ["리큐르", "과실주", "하이볼", "칵테일", "베르무트", "강화주"]  # 혼성주
others = ["희석식 소주", "콤부차"]  # 기타 주류


def categorize_alcohol(categories):    # TODO: 타입 선언 -> serise랑 dataFrame 의 차이 확인
    # Check if the categories is NaN or None
    if pd.isna(categories):
        return 'unknown'

    if any(b in categories for b in brewing):    # TODO: 최적화(리펙토링)
        return 'brewing'
    elif any(s in categories for s in split):
        return 'split'
    elif any(l in categories for l in liqueur):
        return 'liqueur'
    elif any(o in categories for o in others):
        return 'others'
    else:
        return 'unknown'


# TODO: 지역명 시, 군 빼야함
gyeonggi = ["수원", "고양", "용인", "성남", "화성", "부천", "남양주", "안산", "안양", "평택", "시흥", "파주", "김포",
            "광주", "광명", "군포", "이천", "오산", "하남", "의정부", "양주", "구리", "안성", "포천", "의왕", "여주",
            "동두천", "과천", "서울", "인천", "가평", "양평", "연천", "강화", "옹진"]

chungcheong = ["대전", "천안", "공주", "보령", "아산", "서산", "논산", "계룡", "당진", "금산", "부여", "서천", "청양",
               "홍성", "예산", "태안", "세종", "청주", "충주", "제천", "보은", "옥천", "영동", "증평", "진천", "괴산",
               "음성", "단양"]

gyeongsang = ["부산", "대구", "울산", "포항", "경주", "김천", "안동", "구미", "영주", "영천", "상주", "문경", "경산",
              "의성", "청송", "영양", "영덕", "청도", "고령", "성주", "칠곡", "예천", "봉화", "울진", "울릉", "창원",
              "김해", "진주", "양산", "거제", "통영", "사천", "밀양", "함안", "거창", "창녕", "고성", "하동", "합천",
              "남해", "함양", "산청", "의령", "진해"]

jeolla = ["광주", "전주", "익산", "군산", "목포", "여수", "순천", "광양", "담양", "곡성", "구례", "고흥", "보성", "화순",
          "장흥", "강진", "해남", "영암", "무안", "함평", "영광", "장성", "완도", "진도", "신안", "남원", "정읍", "김제",
          "완주", "진안", "무주", "장수", "임실", "순창", "고창", "부안"]

gangwon = ["춘천", "원주", "강릉", "동해", "태백", "속초", "삼척", "홍천", "횡성", "영월", "평창", "정선", "철원", "화천",
           "양구", "인제", "고성", "양양"]

jeju = ["제주", "서귀포"]

# def categorize_region(regions):
#     if any(gg in regions for gg in gyeonggi):               #경기도 지방
#         return {"city": "gyeonggi", "province": gg}
#     elif any(gy in regions for gy in gyeongsang):           #경상도 지방
#         return {"city": "gyeongsang", "province": gy}
#     elif any(cc in regions for cc in chungcheong):          #충청도 지방
#         return {"city": "chungcheong", "province": cc}
#     elif any(jl in regions for jl in jeolla):               #전라도 지방
#         return {"city": "jeolla", "province": jl}
#     elif any(jj in regions for jj in jeju):                 #제주 지역
#         return {"city": "jeju", "province": jj}
#     elif any(gw in regions for gw in gangwon):              #강원도 지방
#         return {"city": "gangwon", "province": gw}

def categorize_region(region):
    # Check if the region is NaN or None
    if pd.isna(region):
        return {"province": "unknown", "city": None}

    for gg in gyeonggi:
        if gg in region:
            return {"province": "gyeonggi", "city": gg}  # 경기도 지방
    for gy in gyeongsang:
        if gy in region:
            return {"province": "gyeongsang", "city": gy}  # 경상도 지방
    for cc in chungcheong:
        if cc in region:
            return {"province": "chungcheong", "city": cc}  # 충청도 지방
    for jl in jeolla:
        if jl in region:
            return {"province": "jeolla", "city": jl}  # 전라도 지방
    for jj in jeju:
        if jj in region:
            return {"province": "jeju", "city": jj}  # 제주 지역
    for gw in gangwon:
        if gw in region:
            return {"province": "gangwon", "city": gw}  # 강원도 지방

    with open("누락됨.txt", "a", encoding="utf8") as fp:
        fp.write(f"{region}\n")

    # if not isinstance(region, str):
    if type(region) != str:
        print(f"{region} is not a string")

    # TODO: 미분류 지방 데이터를 남길 수 있도록 수정
    # TODO: region 타입 검증해서 문자열인지 보기 (아니면 문자열 되게 만들기)
    return {"province": region, "city": None}



# print(df)
print(df.columns)

# print(df["술 생산 지역"])
# print(df["술 생산 지역"][df["술 생산 지역"].isna()].shape)
# exit(-1)

df['drink_type'] = df["술 종류"].apply(categorize_alcohol)
region_info = df["술 생산 지역"].apply(categorize_region)
df['province'] = region_info.apply(lambda x: x['province'])
df['city'] = region_info.apply(lambda x: x['city'])

# names = df[["술 이름"]]  # pandas.DataFrame
categories = df["술 종류"].tolist()
drink_types = df['drink_type']   #함수를 이용한 술의 분류
names = df['술 이름']  # pandas.Series  # 술이름
abvs = df["술 도수"]                   # 술도수
ingredients = df["술 재료"]            # 술재료
foods = df["술과 같이 먹는 음식"]        # 술과 같이 먹는 음식
regions = df["술 생산 지역"]            # province : 전국 6도 / city : 시(여기서는 광역시, 군, 구, 도 등도 포함함)
provinces = df['province']
citys = df['city']


# print(provinces)
print(provinces[provinces == 'unknown'].shape)
# 술 생산지 등 필요한 데이터는 추가적으로 입력 또는 추출하기
exit(-1)

# TODO: requests 사용법 숙지
# TODO: Drink 테이블에 관계 이어진게 많은데, 한 번에 데이터 넣을 방법 없는지 알아보기
# TODO: 프로젝트의 진행을 위해서, "데이터 검색 방법" 알아보기, 아마도 기본적인 검색 기능은 Strapi가 지원할 것.

# for i in range(df.shape[0]):
#     category = categories[i]         # 술 종류
#     drink_type = drink_types         # 술 분류
#     name = names[i]                  #술 이름
#     abv = abvs[i]                    #술 도수
#     ingredient = ingredients[i]      #술 재료
#
#
#     requests.post(
#         "http://localhost:1337u/api/drinks",
#         {
#             "data": {
#                 "name": name,
#             }
#         }
#     )