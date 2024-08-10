import React, { useState } from 'react';
import MenuImg from "../assets/images/menu img/gans.jpg";
import MenuImg1 from "../assets/images/menu img/gans1.jpg";
import MenuImg2 from "../assets/images/menu img/gans2.jpg";
import MenuImg3 from "../assets/images/menu img/gans3.jpg";
import MenuImg4 from "../assets/images/menu img/gans4.jpg";
import MenuImg5 from "../assets/images/menu img/gans5.jpg";
import MenuImg6 from "../assets/images/menu img/gans6.jpg";
import MenuImg7 from "../assets/images/menu img/guns7.jpg";
import ProductSlider from '../Components/productSlider';
import ProductCard from "../Components/productCard";
import "../styles/scss/_productPages.scss";
import OllAll from '../Components/oll-all';
import Mail from '../Components/mail';
import ToMainBtn from '../Components/toMainBtn';
import { products } from '../products/gunProducts.js';


const Guns = () => {
    const [activeMenuOne, setActiveMenuOne] = useState('all');
    const [activeMenuTwo, setActiveMenuTwo] = useState('all');

    return (
        <>
            <ProductSlider />
            <ToMainBtn/>
            <div className="menu">
                <h1 className="menu__title">Ружья</h1>
                <h2 className="menu__subtitle">Нарезні</h2>
                <div className="menu__one" id="menu-one">
                    <div className="menu__items">
                        <img
                            src={MenuImg}
                            alt="Menu"
                            className={`menu__img ${activeMenuOne === 'all' ? 'activ' : ''}`}
                            data-id="all"
                            onClick={() => setActiveMenuOne('all')}
                        />
                        <p className="menu__name">Всі нарезні</p>
                    </div>
                    <div className="menu__items">
                        <img
                            src={MenuImg1}
                            alt="Menu"
                            className={`menu__img ${activeMenuOne === 'product-category1' ? 'activ' : ''}`}
                            data-id="product-category1"
                            onClick={() => setActiveMenuOne('product-category1')}
                        />
                        <p className="menu__name">напівавтомотичні</p>
                    </div>
                    <div className="menu__items">
                        <img
                            src={MenuImg2}
                            alt="Menu"
                            className={`menu__img ${activeMenuOne === 'product-category2' ? 'activ' : ''}`}
                            data-id="product-category2"
                            onClick={() => setActiveMenuOne('product-category2')}
                        />
                        <p className="menu__name">Штуцери</p>
                    </div>
                    <div className="menu__items">
                        <img
                            src={MenuImg3}
                            alt="Menu"
                            className={`menu__img ${activeMenuOne === 'product-category3' ? 'activ' : ''}`}
                            data-id="product-category3"
                            onClick={() => setActiveMenuOne('product-category3')}
                        />
                        <p className="menu__name">з поздовжньо-ковзним затвором</p>
                    </div>
                </div>

                <ProductCard products={products.guns.productsOne} activeCategory={activeMenuOne} />

                <h2 className="menu__subtitle">Гладкоствольные</h2>
                <div className="menu__one" id="menu-two">
                    <div className="menu__items">
                        <img
                            src={MenuImg}
                            alt="Menu"
                            className={`menu-two__img ${activeMenuTwo === 'all' ? 'activ' : ''}`}
                            data-id="all"
                            onClick={() => setActiveMenuTwo('all')}
                        />
                        <p className="menu__name">Всі гладкоствольні</p>
                    </div>
                    <div className="menu__items">
                        <img
                            src={MenuImg7}
                            alt="Menu"
                            className={`menu-two__img ${activeMenuTwo === 'product-category-two1' ? 'activ' : ''}`}
                            data-id="product-category-two1"
                            onClick={() => setActiveMenuTwo('product-category-two1')}
                        />
                        <p className="menu__name">переломні</p>
                    </div>
                    <div className="menu__items">
                        <img
                            src={MenuImg4}
                            alt="Menu"
                            className={`menu-two__img ${activeMenuTwo === 'product-category-two2' ? 'activ' : ''}`}
                            data-id="product-category-two2"
                            onClick={() => setActiveMenuTwo('product-category-two2')}
                        />
                        <p className="menu__name">напівавтоматичні</p>
                    </div>
                    <div className="menu__items">
                        <img
                            src={MenuImg5}
                            alt="Menu"
                            className={`menu-two__img ${activeMenuTwo === 'product-category-two3' ? 'activ' : ''}`}
                            data-id="product-category-two3"
                            onClick={() => setActiveMenuTwo('product-category-two3')}
                        />
                        <p className="menu__name">помпові</p>
                    </div>
                    <div className="menu__items">
                        <img
                            src={MenuImg6}
                            alt="Menu"
                            className={`menu-two__img ${activeMenuTwo === 'product-category-two4' ? 'activ' : ''}`}
                            data-id="product-category-two4"
                            onClick={() => setActiveMenuTwo('product-category-two4')}
                        />
                        <p className="menu__name">з продольно-ковзним затвором</p>
                    </div>
                </div>

                <ProductCard products={products.guns.productsTwo} activeCategory={activeMenuTwo} />
            </div>
            <OllAll />
            <Mail/>
        </>
    );
};

export default Guns;


