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
gyeonggi = ["수원시", "고양시", "용인시", "성남시", "화성시", "부천시", "남양주시", "안산시", "안양시", "평택시", "시흥시",
            "파주시", "김포시", "광주시", "광명시", "군포시", "이천시", "오산시", "하남시", "의정부시", "양주시", "구리시",
            "안성시", "포천시", "의왕시", "여주시", "동두천시", "과천시", "서울특별시", "인천광역시", "가평군", "양평군",
            "연천군", "강화군", "옹진군"]
chungcheong = ["대전광역시", "천안시", "공주시", "보령시", "아산시", "서산시", "논산시", "계룡시", "당진시", "금산군",
               "부여군", "서천군", "청양군", "홍성군", "예산군", "태안군", "세종특별자치시", "청주시", "충주시", "제천시",
               "보은군", "옥천군", "영동군", "증평군", "진천군", "괴산군", "음성군", "단양군"]

gyeongsang = ["부산광역시", "대구광역시", "울산광역시", "포항시", "경주시", "김천시", "안동시", "구미시", "영주시", "영천시",
              "상주시", "문경시", "경산시", "의성군", "청송군", "영양군", "영덕군", "청도군", "고령군", "성주군", "칠곡군",
              "예천군", "봉화군", "울진군", "울릉군", "창원시", "김해시", "진주시", "양산시", "거제시", "통영시", "사천시",
              "밀양시", "함안군", "거창군", "창녕군", "고성군", "하동군", "합천군", "남해군", "함양군", "산청군", "의령군", "진해시"]

jeolla = ["광주광역시", "전주시", "익산시", "군산시", "목포시", "여수시", "순천시", "광양시", "담양군", "곡성군", "구례군",
          "고흥군", "보성군", "화순군", "장흥군", "강진군", "해남군", "영암군", "무안군", "함평군", "영광군", "장성군",
          "완도군", "진도군", "신안군", "남원시", "정읍시", "김제시", "완주군", "진안군", "무주군", "장수군", "임실군", "순창군",
          "고창군", "부안군"]

gangwon = ["춘천시", "원주시", "강릉시", "동해시", "태백시", "속초시", "삼척시", "홍천군", "횡성군", "영월군", "평창군",
           "정선군", "철원군", "화천군", "양구군", "인제군", "고성군", "양양군"]

jeju = ["제주시", "서귀포시"]

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