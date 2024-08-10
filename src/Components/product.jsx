
import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../products/gunProducts';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/scss/_product.scss';
import Buttom from './buyBtn';
import Mail from '../Components/mail';
import OllAll from '../Components/oll-all';
import BackTuMenuBtn from './backTuMenuBtn';
import MarqueeСontent from './marqueeСontent';

const Product = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const { id } = useParams();

    const allProducts = [
        ...Object.values(products.guns.productsOne).flat(),
        ...Object.values(products.guns.productsTwo).flat(),
        ...Object.values(products.cartridges).flat(),
        ...Object.values(products.accessories).flat(),
        ...Object.values(products.knives).flat(),
        ...Object.values(products.cloth.productsOne).flat(),
        ...Object.values(products.cloth.productsTwo).flat(),
        ...Object.values(products.care).flat(),
        ...Object.values(products.hunting_accessories).flat(),
        ...Object.values(products.shooting_accessories).flat(),
        ...Object.values(products.fishing_rods).flat(),
        ...Object.values(products.coils).flat(),
        ...Object.values(products.tackle).flat(),
        ...Object.values(products.lure).flat(),
        ...Object.values(products.equipment_fithing).flat(),
        ...Object.values(products.thermal_underwear).flat(),
        ...Object.values(products.lanterns).flat(),
        ...Object.values(products.gun).flat(),
        ...Object.values(products.bullets).flat(),
        ...Object.values(products.acces).flat(),
        ...Object.values(products.components).flat(),
        ...Object.values(products.tool).flat(),
        ...Object.values(products.equipments).flat(),
        ...Object.values(products.means).flat(),
        ...Object.values(products.bivouac).flat(),
        ...Object.values(products.backpacks).flat(),
        ...Object.values(products.dishes).flat(),
    ];

    const product = allProducts.find(p => p.id === id);

    if (!product) {
        return <p>Продукт не найден</p>;
    }

    const images = [
        product.imgSrc,
        product.img2,
        product.img3,
        product.img4,
        product.img5
    ].filter(img => img);

    return (
        <>
            <BackTuMenuBtn />
            <div>
                <Slider {...settings} className='product__slider'>
                    {images.map((image, index) => (
                        <div key={index} className='product__slider-item'>
                            <img src={image} alt={`Slide ${index}`} className='product__slider-image' />
                        </div>
                    ))}
                </Slider>
                <h2 className='products-name'>{product.name}</h2>
                <div className='products-description'>
                    Опис: {product.description}
                    <ol className='product-lists'>
                        {product.list1 && <li className='product-list'>{product.list1}</li>}
                        {product.list2 && <li className='product-list'>{product.list2}</li>}
                        {product.list3 && <li className='product-list'>{product.list3}</li>}
                        {product.list4 && <li className='product-list'>{product.list4}</li>}
                        {product.list5 && <li className='product-list'>{product.list5}</li>}
                        {product.list6 && <li className='product-list'>{product.list6}</li>}
                        {product.list7 && <li className='product-list'>{product.list7}</li>}
                        {product.list8 && <li className='product-list'>{product.list8}</li>}
                        {product.list9 && <li className='product-list'>{product.list9}</li>}
                        {product.list10 && <li className='product-list'>{product.list10}</li>}
                    </ol>
                </div>
                <p className='products-price'>Ціна: {product.price}</p>
            </div>
            <Buttom />
            <Mail />
            <OllAll />
            <MarqueeСontent style={'product'} children={"УВАГА!!!!! Наявність товару та ціну будь ласка уточнюйте у продавця!"}/>
        </>
    );
};

const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            &lt;
        </div>
    );
};

const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            &gt;
        </div>
    );
};

export default Product;





