import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Guns from "../assets/images/hanter-foto/guns.webp";
import Cartridges from "../assets/images/hanter-foto/cartridges.webp";
import Accessories from "../assets/images/hanter-foto/accessories.webp"; 
import Knives from "../assets/images/hanter-foto/knives.svg";
import Cloth from "../assets/images/hanter-foto/cloth.webp"; 
import Care from "../assets/images/hanter-foto/care.webp"; 
import Stuffed from "../assets/images/hanter-foto/stuffed animals.webp";
import Target from "../assets/images/hanter-foto/target.webp";


const hanting = () => {
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
            <section className="section" id="section-hunting">
                <h3 className="section__title">полювання</h3>
                <div className="section__info">
                    <div className="section__foto"></div>
                    <div className="section__text">Давайте запитаємо себе: - навіщо ми полюють? І відповімо чесно, не кривлячи душею, бо обдурити себе неможливо. Кожен, мабуть, відповість по-різному. Хтось поставить головною причиною отримання додаткового доходу продукції полювання; інші назвуть основним мотивом відпочинок, спілкування із природою, емоційну розрядку; треті – спілкування з друзями у невимушеній обстановці тощо. Але всіх справжніх мисливців, які не випадково взяли в руки рушницю, об'єднує одне – мисливська пристрасть.</div>
                </div>
                <Slider {...settings} className='slider'>
                    <div className="menu">
                        <div className="front">
                            <img src={Guns} alt="foto guns" />
                            <p className="front-title">ружья</p>
                        </div>
                        <div className="back">
                            <p><Link to="/guns" className="back-title">Нарезные</Link></p>
                            <ul>
                                <li ><Link to="/guns" id="menu"  className="back-list">напівавтомотичні</Link></li>
                                <li ><Link to="/guns" id="menu"  className="back-list">Штуцери</Link></li>
                                <li ><Link to="/guns" id="menu"  className="back-list"> з поздовжньо-ковзним затвором</Link></li>
                            </ul>
                            <p ><Link to="/guns" id="menu" className="back-title">Гладкоствольные</Link></p>
                            <ul>
                                <li ><Link to="/guns" id="menu" className="back-list">переломні</Link></li>
                                <li ><Link to="/guns" id="menu" className="back-list">напівавтоматичні</Link></li>
                                <li ><Link to="/guns" id="menu" className="back-list">зі скобою Генрі</Link></li>
                                <li ><Link to="/guns" id="menu" className="back-list">помпові</Link></li>
                                <li ><Link to="/guns" id="menu" className="back-list">з продольно-ковзним затвором</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="menu">
                        <div className="front">
                            <img src={Cartridges} alt="foto cartridges" />
                            <p className="front-title">патрони</p>
                        </div>
                        <div className="back">
                            <p><Link to="/cartridges" className="back-title">патрони</Link></p>
                            <ul>
                                <li><Link to="/cartridges" className="back-list">Дробові патрони</Link></li>
                                <li><Link to="/cartridges" className="back-list">Картеч</Link></li>
                                <li><Link to="/cartridges" className="back-list">Кульові патрони</Link></li>
                                <li><Link to="/cartridges" className="back-list">Нарізні</Link></li>
                                <li><Link to="/cartridges" className="back-list">Гладкоствольні</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="menu">
                        <div className="front">
                            <img src={Accessories} alt="foto accessories" />
                            <p className="front-title">аксесуари</p>
                        </div>
                        <div class="back">
                            <p><a href="../pages/accessories.html" target="_blank" className="back-title">Аксесуари</a></p>
                            <ul>
                                <li><Link to="/accessories" className="back-list">Кейси</Link></li>
                                <li><Link to="/accessories" className="back-list">Чохли</Link></li>
                                <li><Link to="/accessories" className="back-list">Підсумки</Link></li>
                                <li><Link to="/accessories" className="back-list">Кобури</Link></li>
                                <li><Link to="/accessories" className="back-list">Коробки для патронів</Link></li>
                                <li><Link to="/accessories" className="back-list">Щбкладинки на документі</Link></li>
                                <li><Link to="/accessories" className="back-list">Патронташі</Link></li>
                                <li><Link to="/accessories" className="back-list">Фіксатори патронів</Link></li>
                                <li><Link to="/accessories" className="back-list">Ремені збройові</Link></li>
                            </ul>
                        </div>
                    </div>
                
                    <div className="menu">
                        <div className="front">
                            <img src={Knives} alt="foto knives" />
                            <p className="front-title">ножі</p>
                        </div>
                        <div className="back">
                            <p><a href="../pages/knives.html" target="_blank" className="back-title">ножі</a></p>
                            <ul>
                                <li><Link to="/knives" className="back-list">Ножі з фіксованим клинком</Link></li>
                                <li><Link to="/knives" className="back-list">Складні ножі</Link></li>
                                <li><Link to="/knives" className="back-list">Тренувальна зброя</Link></li>
                                <li><Link to="/knives" className="back-list">Комплектуючі для ножів</Link></li>
                                <li><Link to="/knives" className="back-list">Точильні пристрої</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="menu">
                        <div className="front">
                            <img src={Cloth} alt="foto cloth" />
                            <p className="front-title">ОДЯГ</p>
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
                            <img src={Care} alt="foto care" />
                            <p className="front-title">ДОГЛЯД ЗА ЗБРОЄЮ</p>
                        </div>
                        <div className="back">
                            <ul>
                                <p><Link to = '/care' className="back-title">Чистка та догляд</Link></p>
                                <li><Link to = '/care' className="back-list">Шомполи</Link></li>
                                <li><Link to = '/care' className="back-list">Набори для чищення</Link></li>
                                <li><Link to = '/care' className="back-list">Протяжки</Link></li>
                                <li><Link to = '/care' className="back-list">Насадки</Link></li>
                                <li><Link to = '/care' className="back-list">Направляючі</Link></li>
                                <li><Link to = '/care' className="back-list">Засоби для чишення</Link></li>
                                <li><Link to = '/care' className="back-list">Фарба</Link></li>
                                <li><Link to = '/care' className="back-list">Інші аксесуари</Link></li>
                            </ul>
                        </div>
                    </div>
                
                    <div className="menu">
                        <div class="front">
                            <img src={Stuffed} alt="foto stuffed animals" />
                            <p className="front-title">мисливськи аксесуари</p>
                        </div>
                        <div className="back">
                            <ul>
                                <p><Link to='/hunting accessories' className="back-title">Мисливськи аксесуари</Link></p>
                                <li><Link to='/hunting accessories' className="back-list">Вабці та комплектуючі</Link></li>
                                <li><Link to='/hunting accessories' className="back-list">Опудала</Link></li>
                                <li><Link to='/hunting accessories' className="back-list">Горни</Link></li>
                                <li><Link to='/hunting accessories' className="back-list">Маскування</Link></li>
                                <li><Link to='/hunting accessories' className="back-list">Радіостанціі</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="menu">
                        <div className="front">
                            <img src={Target} alt="foto target" />
                            <p className="front-title">стрілецьки аксесуари</p>
                        </div>
                        <div className="back">
                            <p><Link to='/shooting accessories' className="back-title">Стрілецьки аксесуари</Link></p>
                            <ul>
                                <li><Link to='/shooting accessories'  className="back-list">Мішені</Link></li>
                                <li><Link to='/shooting accessories'  className="back-list">Тарілки</Link></li>
                                <li><Link to='/shooting accessories'  className="back-list">Інше</Link></li>
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

export default hanting;


