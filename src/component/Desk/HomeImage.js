import React from 'react';
import {imageData} from "./ImageData";

const HomeImage = ({ id, ...props }) => {
    const image = imageData[id];

    if (!image) {
        return null; // 또는 기본 이미지를 반환
    }

    return (
        <img
            src={image.src}
            alt={image.alt}
            {...props}
        />
    );
};

export default HomeImage;