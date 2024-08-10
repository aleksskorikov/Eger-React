import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tents from "../assets/images/tourizm-foto/tents.jpg";
import Backpacks from "../assets/images/tourizm-foto/backpacks.webp";
import Dishes from "../assets/images/tourizm-foto/dishes.jpg";
import Lanterns from "../assets/images/fishing-foto/lanterns.svg";
import Underwear from "../assets/images/fishing-foto/thermal underwear.svg";
import { Link } from 'react-router-dom';





const tourizm = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 541,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
        ]
    };
    return (
        <>
            <section className="section" id="section-tourism">
                <h3 className="section__title" id="section-hunting">туризм</h3>
                <div className="section__info">
                    <div className="section__foto tourism"></div>
                    <div className="section__text">Туризм дає можливість познайомитися з культурою інших країн та регіонів, задовольняє допитливість людини, збагачує її духовно, оздоровлює фізично, сприяє розвитку особистості. Він дозволяє поєднувати відпочинок із пізнанням нового.</div>
                </div>

                <Slider {...settings} className='slider'>
                    <div className="menu">
                        <div className="front">
                            <img src={Tents} alt="foto tents"/>
                                <p className="front-title">Бівак</p>
                        </div>
                        <div className="back">
                            <p><a to='/bivouac' class="back-title">Бівак</a></p>
                            <ul>
                                <li><Link to='/bivouac' className="back-list">Складні меблі</Link></li>
                                <li><Link to='/bivouac' className="back-list">Намети</Link></li>
                                <li><Link to='/bivouac' className="back-list">Спальні мішки</Link></li>
                                <li><Link to='/bivouac' className="back-list">Килимки та каремати</Link></li>
                                <li><Link to='/bivouac' className="back-list">Подушки</Link></li>
                                <li><Link to='/bivouac' className="back-list">Гігієна</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="menu">
                        <div className="front">
                            <img src={Backpacks} alt="foto backpacks"/>
                                <p className="front-title">Сумки та рюкзаки</p>
                        </div>
                        <div className="back">
                            <p><Link to='/backpacks' className="back-title">Сумки та рюкзаки</Link></p>
                            <ul>
                                <li><Link to='/backpacks' className="back-list">Сумки</Link></li>
                                <li><Link to='/backpacks' className="back-list">Підсумки</Link></li>
                                <li><Link to='/backpacks' className="back-list">Рюкзаки</Link></li>
                                <li><Link to='/backpacks' className="back-list">Чохли для спорядження</Link></li>
                                <li><Link to='/backpacks' className="back-list">Гермопродукція</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="menu">
                        <div className="front">
                            <img src={Dishes} alt="foto dishes"/>
                                <p className="front-title">Кухня та посуд</p>
                        </div>
                        <div className="back">
                            <p><Link to='/dishes' className="back-title"> Кухня та посуд</Link></p>
                            <ul>
                                <li><Link to='/dishes' className="back-list">Пальники</Link></li>
                                <li><Link to='/dishes' className="back-list">Термопродукція</Link></li>
                                <li><Link to='/dishes' className="back-list">Туристичний посуд</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="menu">
                        <div className="front">
                            <img src={Lanterns} alt="foto lanterns"/>
                                <p className="front-title">Ліхтарі</p>
                        </div>
                        <div className="back">
                            <p><Link to='/lanterns' className="back-title">Ліхтарі</Link></p>
                            <ul>
                                <li><Link to='/lanterns' className="back-list">Комплектуючі для ліхтарів</Link></li>
                                <li><Link to='/lanterns' className="back-list">Налобні ліхтарі</Link></li>
                                <li><Link to='/lanterns' className="back-list">Ручні ліхтарі</Link></li>
                                <li><Link to='/lanterns' className="back-list">Кемпенгові ліхтарі</Link></li>
                                <li><Link to='/lanterns' className="back-list">Ліхтарі зброї</Link></li>
                                <li><Link to='/lanterns' className="back-list">Елементи живлення</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="menu">
                        <div className="front">
                            <img src={Underwear} alt="foto thermal underwear"/>
                                <p className="front-title">Термобілизна</p>
                        </div>
                        <div className="back">
                            <p><Link to='/thermal underwear' className="back-title">Термобілизна</Link></p>
                            <ul>
                                <li><Link to='/thermal underwear' className="back-list">Термобілизна</Link></li>
                                <li><Link to='/thermal underwear' className="back-list">Шкарпетки</Link></li>
                                <li><Link to='/thermal underwear' className="back-list">Головні убори</Link></li>
                                <li><Link to='/thermal underwear' className="back-list">Нашивки</Link></li>
                                <li><Link to='/thermal underwear' className="back-list">Рукавички</Link></li>
                                <li><Link to='/thermal underwear' className="back-list">Пояси</Link></li>
                            </ul>
                        </div>
                    </div>
                </Slider>
            </section>
        </>
    )
};

    const PrevArrow = (props) => (
    <div className="slick-arrow slick-prev" {...props}>
        &lt;
    </div>
    );

    const NextArrow = (props) => (
    <div className="slick-arrow slick-next" {...props}>
        
    </div>
    );

export default tourizm