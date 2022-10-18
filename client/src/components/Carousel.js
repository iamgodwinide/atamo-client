import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import UAParser from "ua-parser-js";
import './carousel.css'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30
    }
};
const images = [
    "/atamo export fine 1.png",
    "/atamo export fine 2.png",
    "/atamo export fine 3.png",
    "/atamo export fine 4.png",
    "/atamo export fine 5.png",
    "/atamo export fine 6.png",
    "/atamo export fine 7.png",
    "/atamo export fine 8.png",
];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const CarouselCompnent = () => {
    const userAgent = navigator.userAgent;
    const parser = new UAParser();
    parser.setUA(userAgent);
    const result = parser.getResult();
    const deviceType = (result.device && result.device.type) || "desktop";
    return (
        <Carousel
            ssr
            partialVisbile
            deviceType={deviceType}
            itemClass="image-item"
            responsive={responsive}
        >
            {images.map(image => {
                return (
                    <Image
                        draggable={false}
                        style={{ width: "100%", height: "100%" }}
                        src={image}
                    />
                );
            })}
        </Carousel>
    );
};

export default CarouselCompnent;
