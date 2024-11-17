interface Polygon {
    id: string;
    name: string;
    d: string; // 폴리곤 모양
}

interface Region {
    id: string; // 서버/데이터베이스가 인식하는 ID
    name: string; // 지역 이름
    polygon: Polygon;
}

