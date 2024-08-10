import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Weapon from "../assets/images/weapon-foto/weapon.svg";
import Bullets from "../assets/images/weapon-foto/bullets.svg";
import Accessories from "../assets/images/weapon-foto/accessories.webp";
import Components from "../assets/images/weapon-foto/components.webp";
import Knives from "../assets/images/hanter-foto/knives.svg";
import Tool from "../assets/images/weapon-foto/tool.webp";
import Equipment from "../assets/images/weapon-foto/equipment.svg";
import Defense from "../assets/images/weapon-foto/means of self-defense.svg";
import { Link } from 'react-router-dom';

const weapon = () => {
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
            <section className="section" id="section-weapon">
                <h3 className="section__title" id="section-hunting">зброя та самооборона</h3>
                <div className="section__info">
                    <div className="section__foto self-defense"></div>
                    <div className="section__text">На жаль, поліція не завжди може захистити кожного з тих, хто перебуває на території України. Законодавством України передбачено широкі повноваження щодо самостійного здійснення самооборони. Конституція України проголошує, що «людина, її життя, здоров'я, честь та гідність, недоторканність та безпека вважаються в Україні найвищою соціальною цінністю» (ст.3 Конституції), закріплює право кожного «захищати своє життя та здоров'я інших людей від протиправних посягань» ( ст.27 Конституції).</div>
                </div>

                <Slider {...settings} className='slider'>
                    <div className="menu">
                        <div className="front">
                            <img src={Weapon} alt="foto weapon"/>
                                <p className="front-title">зброя</p>
                        </div>
                        <div class="back">
                            <p><Link to='/gun' className="back-title">зброя</Link></p>
                            <ul>
                                <li><Link to='/gun' className="back-list">Травматична зброя</Link></li>
                                <li><Link to='/gun' className="back-list">Пневматична зброя</Link></li>
                                <li><Link to='/gun' className="back-list">Зброя під патрон Флобер</Link></li>
                                <li><Link to='/gun' className="back-list">Сигнально - шумова зброя</Link></li>
                                <li><Link to='/gun' className="back-list">Метальна зброя</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="menu">
                        <div className="front">
                            <img src={Bullets} alt="foto bullets"/>
                                <p className="front-title">набої</p>
                        </div>
                        <div className="back">
                            <p><Link to='/bullets' className="back-title">набої</Link></p>
                            <ul>
                                <li><Link to='/bullets' className="back-list">Патрони</Link></li>
                                <li><Link to='/bullets' className="back-list">Релоадинг</Link></li>
                                <li><Link to='/bullets' className="back-list">Пневматичні патрони</Link></li>
                                <li><Link to='/bullets' className="back-list">Патрони Флобера</Link></li>
                                <li><Link to='/bullets' className="back-list">Стріли</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="menu">
                        <div className="front">
                            <img src={Accessories} alt="foto accessories"/>
                                <p className="front-title">Аксесуари</p>
                        </div>
                        <div className="back">
                            <p><Link to='/acces' className="back-title">Аксесуари</Link></p>
                            <ul>
                                <li><Link to='/acces' className="back-list">Зберігання та транспортування</Link></li>
                                <li><Link to='/acces' className="back-list">Чищення та догляд</Link></li>
                                <li><Link to='/acces' className="back-list">Стрілецькі аксесуари</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="menu">
                        <div className="front">
                            <img src={Components} alt="foto components"/>
                                <p className="front-title">комплектуючі</p>
                        </div>
                        <div className="back">
                            <p><Link to='/components' className="back-title">комплектуючі</Link></p>
                            <ul>
                                <li><Link to='/components' className="back-list">Комплектуючі до зброї</Link></li>
                                <li><Link to='/components' className="back-list">Кріплення для оптики</Link></li>
                                <li><Link to='/components' className="back-list">Травмотичній зброї</Link></li>
                                <li><Link to='/components' className="back-list">Пневматичній зброї</Link></li>
                                <li><Link to='/components' className="back-list">Мітальній зброї</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="menu">
                        <div className="front">
                            <img src={Knives} alt="foto knives"/>
                                <p className="front-title">ножі</p>
                        </div>
                        <div className="back">
                            <p><Link to="/knives"  className="back-title">ножі</Link></p>
                            <ul>
                                <li><Link to="/knives"  className="back-list">Ножі з фіксованим клинком</Link></li>
                                <li><Link to="/knives"  className="back-list">Складні ножі</Link></li>
                                <li><Link to="/knives"  className="back-list">Тренувальна зброя</Link></li>
                                <li><Link to="/knives"  className="back-list">Комплектуючі для ножів</Link></li>
                                <li><Link to="/knives"  className="back-list">Точильні пристрої</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="menu">
                        <div className="front">
                            <img src={Tool} alt="foto tool"/>
                                <p className="front-title">Інстремент</p>
                        </div>
                        <div className="back">
                            <p><Link to='/tool' className="back-title">Інстремент</Link></p>
                            <ul>
                                <li><Link to='/tool' className="back-list">Мультитули</Link></li>
                                <li><Link to='/tool' className="back-list">Мочете</Link></li>
                                <li><Link to='/tool' className="back-list">Тапори</Link></li>
                                <li><Link to='/tool' className="back-list">Лопати</Link></li>
                                <li><Link to='/tool' className="back-list">Пили</Link></li>
                                <li><Link to='/tool' className="back-list">Спецінструмент</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="menu">
                        <div className="front">
                            <img src={Equipment} alt="foto equipment"/>
                                <p className="front-title">Екіпірування</p>
                        </div>
                        <div className="back">
                            <p><Link to='/equipments' className="back-title">Екіпірування</Link></p>
                            <ul>
                                <li><Link to='/equipments' className="back-list">Розвантажувальні та бронежелети</Link></li>
                                <li><Link to='/equipments' className="back-list">Страхувальні желети</Link></li>
                                <li><Link to='/equipments' className="back-list">Бронепластини</Link></li>
                                <li><Link to='/equipments' className="back-list">Шоломи</Link></li>
                                <li><Link to='/equipments' className="back-list">Налокітники та наколінники</Link></li>
                                <li><Link to='/equipments' className="back-list">Навушники та беруші</Link></li>
                                <li><Link to='/equipments' className="back-list">Окуляри</Link></li>
                                <li><Link to='/equipments' className="back-list">Підсумки</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="menu">
                        <div className="front">
                            <img src={Defense} alt="foto means of self-defense"/>
                                <p className="front-title">засоби самозахисту</p>
                        </div>
                        <div className="back">
                            <p><Link to='/means' className="back-title">засоби самозахисту</Link></p>
                            <ul>
                                <li><Link to='/means' className="back-list">Газові балончики</Link></li>
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

export default weapon;