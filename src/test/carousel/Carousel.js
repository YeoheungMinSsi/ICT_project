import React, {useImmer, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';
import HomeImage from './HomeImage';
import {imageData} from './ImageData'
import '../../css/allCss.css';

export default function Carousels() {
    const [carouselState, updateCarouselState] = useImmer({
        imageIds: Object.keys(imageData),
        currentIndex: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            updateCarouselState(draft => {
                draft.currentIndex = (draft.currentIndex + 1) % draft.imageIds.length;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    // const img
    return (
        <Carousel slide={true}>
            <Carousel.Item interval={5000}>
                {carouselState.imageIds.map((id, index) => (
                    <div
                        key={id}
                        className={`carousel-image ${index === carouselState.currentIndex ? 'active' : ''}`}
                    >
                        <HomeImage
                            id={id}
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        />
                    </div>
                ))}
            </Carousel.Item>
            <Carousel.Item interval={500000}>
                <CarouselImage text="Second slide" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500000}>
                <CarouselImage text="Third slide" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
