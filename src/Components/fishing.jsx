import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rods from "../assets/images/fishing-foto/fishing rods.jpg";
import Coils from "../assets/images/fishing-foto/coils.webp";
import Tackle from "../assets/images/fishing-foto/tackle.jpg";
import Bait from "../assets/images/fishing-foto/bait.jpg";
import Equipment from "../assets/images/fishing-foto/equipment.jpg";
import Cloth from "../assets/images/hanter-foto/cloth.webp";
import Lanterns from "../assets/images/fishing-foto/lanterns.svg";
import Underwear from "../assets/images/fishing-foto/thermal underwear.svg";
import { Link } from 'react-router-dom';


const fishing = () => {
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
            <section className="section" id="section-fishing">
                <h3 className="section__title" id="section-hunting">риболовля</h3>
                <div className="section__info">
                    <div className="section__foto fishing"></div>
                    <div className="section__text">Чоловік не може пригадати, відколи риболовля з'явилася у його житті. Вчили премудростям прадід , дідусь та батько. «Всі були азартні рибалки, вони просто таки інтуїтивно відчували рибні місця. Риболовля – спосіб життя. Це хоббі, це спосіб для релаксу. На риболовлы краще думається. От треба прийняти якесь складне рішення, скажімо. Закидаєш вудку, сидиш на березі, і рішення приходить само собою».</div>
                </div>

                <Slider {...settings} className='slider'>
                    <div class="menu">
                        <div className="front">
                            <img src={Rods} alt="foto fishing rods" />
                            <p className="front-title">вудки</p>
                        </div>
                        <div className="back">
                            <p><Link to='/fishing rods' className="back-title">вудки</Link></p>
                            <ul>
                                <li><Link to='/fishing rods' className="back-list">Спінінгові</Link></li>
                                <li><Link to='/fishing rods' className="back-list">Кастингові</Link></li>
                                <li><Link to='/fishing rods' className="back-list">Фідерні</Link></li>
                                <li><Link to='/fishing rods' className="back-list">Морські</Link></li>
                                <li><Link to='/fishing rods' className="back-list">Коропові</Link></li>
                                <li><Link to='/fishing rods' className="back-list">Поплавочні</Link></li>
                                <li><Link to='/fishing rods' className="back-list">Вершинки та камлі</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="menu">
                        <div className="front">
                            <div className="img"></div>
                            <img src={Coils} alt="foto coils" />
                            <p className="front-title">котушки</p>
                        </div>
                        <div className="back" target="_blank">
                            <p><Link to='/coils' className="back-title">котушки</Link></p>
                            <ul>
                                <li><Link to='/coils' className="back-list">Безінерційні</Link></li>
                                <li><Link to='/coils' className="back-list">Мультиплікаторні</Link></li>
                                <li><Link to='/coils' className="back-list">Провідні</Link></li>
                                <li><Link to='/coils' className="back-list">Додаткові шпулі</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="menu">
                        <div className="front">
                            <img src={Tackle} alt="foto tackle" />
                            <p className="front-title">снасті</p>
                        </div>
                        <div className="back">
                            <p><Link to='/tackle' className="back-title">снасті</Link></p>
                            <ul>
                                <li><Link to='/tackle' className="back-list">Готові монтажі</Link></li>
                                <li><Link to='/tackle' className="back-list">Гачки</Link></li>
                                <li><Link to='/tackle' className="back-list">Грузила</Link></li>
                                <li><Link to='/tackle' className="back-list">Джиг - головки</Link></li>
                                <li><Link to='/tackle' className="back-list">Годівниці</Link></li>
                                <li><Link to='/tackle' className="back-list">Поплавки</Link></li>
                                <li><Link to='/tackle' className="back-list">Карабіни та застібки</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="menu">
                        <div className="front">
                            <img src={Bait} alt="foto bait" />
                            <p className="front-title">прикормки</p>
                        </div>
                        <div className="back">
                            <p><Link to='/lure' className="back-title">прикормки</Link></p>
                            <ul>
                                <li><Link to='/lure' className="back-list">Блешні</Link></li>
                                <li><Link to='/lure' className="back-list">Балансири</Link></li>
                                <li><Link to='/lure' className="back-list">Воблери</Link></li>
                                <li><Link to='/lure' className="back-list">Силікон</Link></li>
                                <li><Link to='/lure' className="back-list">Діпи</Link></li>
                                <li><Link to='/lure' className="back-list">прикормки</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="menu">
                        <div className="front">
                            <img src={Equipment} alt="foto equipment" />
                            <p className="front-title">обладнання</p>
                        </div>
                        <div className="back">
                            <p><Link to='/equipment' className="back-title">обладнання</Link></p>
                            <ul>
                                <li><Link to='/equipment' className="back-list">Ракети та рогатки</Link></li>
                                <li><Link to='/equipment' className="back-list">Ємності для підгодовування</Link></li>
                                <li><Link to='/equipment' className="back-list">Тубуси та чохли</Link></li>
                                <li><Link to='/equipment' className="back-list">Сумки</Link></li>
                                <li><Link to='/equipment' className="back-list">Коробки для риболовлі</Link></li>
                                <li><Link to='/equipment' className="back-list">Платформи та станції</Link></li>
                                <li><Link to='/equipment' className="back-list">Ящики для риболовлі</Link></li>
                                <li><Link to='/equipment' className="back-list">Поводочниці та мотовила</Link></li>
                            </ul>
                        </div>
                    </div>
                
                    <div className="menu">
                        <div className="front">
                            <img src={Cloth} alt="foto cloth" />
                            <p className="front-title">одяг</p>
                        </div>
                        <div className="back">
                            <p><Link  to="/cloth" className="back-title">Верхній одяг</Link></p>
                            <ul>
                                <li><Link  to="/cloth" className="back-list">Куртки</Link></li>
                                <li><Link  to="/cloth" className="back-list">Костюми</Link></li>
                                <li><Link  to="/cloth" className="back-list">Футболки та джемпера</Link></li>
                                <li><Link  to="/cloth" className="back-list">Штани та комбінезони</Link></li>
                            </ul>
                            <p><Link  to="/cloth" className="back-title">Взуття</Link></p>
                            <ul>
                                <li><Link  to="/cloth" className="back-list">Черевики</Link></li>
                                <li><Link  to="/cloth" className="back-list">Чоботи</Link></li>
                                <li><Link  to="/cloth" className="back-list">Гумові чоботи</Link></li>
                                <li><Link  to="/cloth" className="back-list">Заброди та комбінезони</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="menu">
                        <div className="front">
                            <img src={Lanterns} alt="foto lanterns" />
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
                            <img src={Underwear} alt="foto thermal underwear" />
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

export default fishing