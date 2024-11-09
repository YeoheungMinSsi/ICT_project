import React from 'react';
import '../../css/allCss.css';

export default function CarouselImage({text}) {
    return (
            <>
                <div className="carousel-image">
                    <img src={require(`../../image/${text}.png`)}
                         alt={`${text}`}/>
                </div>
            </>
        );
}



// import React from 'react';
// import {imageData} from "./ImageData";
// import '../../css/allCss.css';

// export default function CarouselImage({imageData}) {
//     return (
//         <>
//             <div className="carousel-image">
//                 {imageData.map(image =>
//                     <img key={image.id}
//                          src={image.src}
//                          alt={image.name}
//                     />
//                 )}
//             </div>
//         </>
//     );
// }