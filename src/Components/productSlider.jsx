

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from '../assets/images/pages-img/patron1.jpg';
import Slide2 from '../assets/images/pages-img/patron2.jpg';
import Slide3 from '../assets/images/pages-img/patron3.jpg';
import Slide4 from '../assets/images/pages-img/patron4.jpg';
import Slide5 from '../assets/images/pages-img/guns1.jpg';
import Slide6 from '../assets/images/pages-img/guns2.jpg';
import Slide7 from '../assets/images/pages-img/guns1.jpg';
import Slide8 from '../assets/images/pages-img/guns4.jpg';
import "../styles/scss/_productSlider.scss";


const settings = {
    dots: false,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
};

const ProductSlider = () => {
    return (
        <Slider {...settings} className='slider'>
            <div className="slide-item">
                <img src={Slide1} alt="Slide 1"/>
            </div>
            <div className="slide-item">
                <img src={Slide5} alt="Slide 5"/>
            </div>
            <div className="slide-item">
                <img src={Slide2} alt="Slide 2"/>
            </div>
            <div className="slide-item">
                <img src={Slide6} alt="Slide 6"/>
            </div>
            <div className="slide-item">
                <img src={Slide3} alt="Slide 3"/>
            </div>
            <div className="slide-item">
                <img src={Slide7} alt="Slide 7"/>
            </div>
            <div className="slide-item">
                <img src={Slide4} alt="Slide 4"/>
            </div>
            <div className="slide-item">
                <img src={Slide8} alt="Slide 8"/>
            </div>
        </Slider>
    );
};

export default ProductSlider;


