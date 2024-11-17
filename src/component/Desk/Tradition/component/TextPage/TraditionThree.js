import React, { useState } from 'react';
import '../../css/TraditionAllCss.css'

export default function TraditionThree() {
    const [selectedDrink, setSelectedDrink] = useState(null);

    const drinks = [
        {
            name: '이강주',
            image: require("../../../../../image/이강주.jpg"),
            description: '이강주는 전통 한국 술로, 맑고 투명한 색을 가진 증류주입니다. 주로 쌀, 누룩, 생강, 배, 꿀 등을 원료로 만들어집니다. 은은한 향과 부드러운 맛이 특징입니다.'
        },
        {
            name: '죽력고',
            image: require("../../../../../image/죽력고.jpg"),
            description: '죽력고는 대나무 수액을 발효시켜 만든 전통 한국 술입니다. 대나무의 청량한 향과 맑은 맛이 특징이며, 건강에 좋다고 알려져 있습니다.'
        },
        {
            name: '감홍로',
            image: require("../../../../../image/감홍로.jpg"),
            description: '감홍로는 붉은 빛깔의 전통 한국 술로, 쌀과 약재를 사용해 만듭니다. 달콤하면서도 은은한 약재의 향이 특징이며, 조선 시대 궁중에서 즐겨 마셨다고 합니다.'
        }
    ];

    const handleDrinkClick = (drinkName) => {
        setSelectedDrink(prevDrink => prevDrink === drinkName ? null : drinkName);
    };

    return(
        <div className="tradition-three-container">
            <h2>조선 3대 명주</h2>
            <div className="drink-list">
                {drinks.map((drink) => (
                    <div key={drink.name} className="drink-item">
                        <img
                            src={drink.image}
                            alt={drink.name}
                            onClick={() => handleDrinkClick(drink.name)}
                            className={selectedDrink === drink.name ? 'selected' : ''}
                        />
                        <h3>{drink.name}</h3>
                    </div>
                ))}
            </div>
            <div className="drink-description">
                {selectedDrink ? (
                    <>
                        <h3>{selectedDrink}</h3>
                        <p>{drinks.find(drink => drink.name === selectedDrink).description}</p>
                    </>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}