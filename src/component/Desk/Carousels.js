import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';
import '../../css/allCss.css';

export default function Carousels() {
    return (
        <React.Fragment>
            <Carousel slide={true} className="home-carousel">
                <Carousel.Item interval={2000}>
                    <CarouselImage text={1}/>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <CarouselImage text={2}/>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <CarouselImage text={3}/>
                </Carousel.Item>
            </Carousel>
        </React.Fragment>
    );
}

// import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import CarouselImage from './CarouselImage';
// import {imageData} from './ImageData';
// import '../../css/allCss.css';

// export default function Carousels() {
//
//     return (
//         <Carousel slide={true}>
//             <Carousel.Item interval={1000}>
//                 <CarouselImage imageData={imageData}/>
//             </Carousel.Item>
//         </Carousel>
//     );
// }