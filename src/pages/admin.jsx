import React, { useState } from 'react';
import AdminProducs from '../Components/admin/adminProducts';
import { products } from '../products/gunProducts';
import '../styles/scss/_admin.scss';
import AddProductBtn from '../Components/admin/addProductBtn';


    const Admin = () => {
        const [selectedCategory, setSelectedCategory] = useState('');
        const [filteredProducts, setFilteredProducts] = useState([]);

    const handleCategoryClick = (category, arrayName) => {
        setSelectedCategory(category);

        if (arrayName && products[arrayName]) {
            let allArrayProducts = [];

            Object.values(products[arrayName]).forEach(categoryGroup => {
                Object.values(categoryGroup).forEach(productsArray => {
                    allArrayProducts = allArrayProducts.concat(productsArray);
                });
            });

            const filtered = allArrayProducts.filter(product => product.category === category);
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts([]);
        }
    };

    return (
        <>
            <div className="conteiner">
                <section className="sections">
                    <div className="hanter">
                    <p className="hanter-title">полювання</p>
                    <ol className="hanting__lists">
                        <li className="hanting__list" >
                        <div className="hanting__list-title">ружья</div>
                            <ul className='lists-nsme'>
                                <p className="hanter__list-subtitle" >Нарезные</p>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'guns')}>напівавтомотичні</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'guns')}>Штуцери</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'guns')}>з поздовжньо-ковзним затвором</li>
                            </ul>
                                <ul className='lists-nsme'>
                                <p className="hanter__list-subtitle">Гладкоствольные</p>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category-two1', 'guns')}>переломні</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category-two2', 'guns')}>напівавтоматичні</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category-two3', 'guns')}>помпові</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category-two4', 'guns')}>з продольно-ковзним затвором</li>
                            </ul>
                        </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">патрони</div>
                            <ul>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'cartridges')}>Дробові патрони</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'cartridges')}>Картеч</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'cartridges')}>Кульові патрони</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'cartridges')}>Нарізні</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'cartridges')}>Гладкоствольні</li>
                            </ul>
                        </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">аксесуари</div>
                            <ul>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'accessories')}>Кейси</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'accessories')}>Чохли</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'accessories')}>Підсумки</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'accessories')}>Коробки для патронів</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'accessories')}>Щбкладинки на документі</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category6', 'accessories')}>Патронташі</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category7', 'accessories')}>Фіксатори патронів</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category8', 'accessories')}>Ремені збройові</li>
                            </ul>
                        </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">ножі</div>
                            <ul>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'knives')}>Ножі з фіксованим клинком</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'knives')}>Складні ножі</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'knives')}>Тренувальна зброя</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'knives')}>Комплектуючі для ножів</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'knives')}>Точильні пристрої</li>
                            </ul>
                        </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">ОДЯГ</div>
                            <ul className='lists-nsme'>
                            <p className="hanter__list-subtitle">Верхній одяг</p>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'cloth')}>Куртки</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'cloth')}>Костюми</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'cloth')}>Футболки та джемпера</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'cloth')}>Штани та комбінезони</li>
                                </ul>
                            <ul className='lists-nsme'>
                            <p className="hanter__list-subtitle">Взуття</p>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category-two1', 'cloth')}>Черевики</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category-two2', 'cloth')}>Чоботи</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category-two3', 'cloth')}>Гумові чоботи</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category-two4', 'cloth')}>Заброди та комбінезони</li>
                            </ul>
                        </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">ДОГЛЯД ЗА ЗБРОЄЮ</div>
                            <ul>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'care')}>Шомполи</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'care')}>Набори для чищення</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'care')}>Протяжки</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'care')}>Насадки</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'care')}>Направляючі</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category6', 'care')}>Засоби для чишення</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category7', 'care')}>Фарба</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category8', 'care')}>Інші аксесуари</li>
                            </ul>
                        </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">мисливськи аксесуари</div>
                            <ul>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'hunting_accessories')}>Опудала</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'hunting_accessories')}>Горни</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'hunting_accessories')}>Маскування</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'hunting_accessories')}>Радіостанціі</li>
                            </ul>
                        </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">стрілецьки аксесуари</div>
                            <ul>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'shooting_accessories')}>Мішені</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'shooting_accessories')}>Тарілки</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'shooting_accessories')}>Інше</li>
                            </ul>
                        </li>
                    </ol>
                </div>
                <div className="fisthing">
                <p className="hanter-title">риболовля</p>
                <ol className="hanting__lists">
                        <li className="hanting__list">
                        <div className="hanting__list-title">вудки</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'fishing_rods')}>Спінінгові</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'fishing_rods')}>Кастингові</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'fishing_rods')}>Фідерні</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'fishing_rods')}>Морські</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'fishing_rods')}>Коропові</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category6', 'fishing_rods')}>Поплавочні</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category7', 'fishing_rods')}>Вершинки та камлі</li>
                        </ul>
                    </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">котушки</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'coils')}>Безінерційні</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'coils')}>Мультиплікаторні</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'coils')}>Провідні</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'coils')}>Додаткові шпулі</li>
                        </ul>
                    </li>
                        <li className="hanting__list">с
                        <div className="hanting__list-title">cнасті</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'tackle')}>Готові монтажі</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'tackle')}>Гачки</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'tackle')}>Грузила</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'tackle')}>Джиг - головки</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'tackle')}>Годівниці</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category6', 'tackle')}>Поплавки</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category7', 'tackle')}>Карабіни та застібки</li>
                        </ul>
                    </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">прикормки</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'lure')}>Блешні</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'lure')}>Балансири</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'lure')}>Воблери</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'lure')}>Силікон</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'lure')}>Діпи</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category6', 'lure')}>прикормки</li>
                        </ul>
                    </li>
                    <li className="hanting__list">
                        <div className="hanting__list-title">обладнання</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'equipment_fithing')}>Ракети та рогатки</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'equipment_fithing')}>Ємності для підгодовування</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'equipment_fithing')}>Тубуси та чохли</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'equipment_fithing')}>Сумки</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'equipment_fithing')}>Коробки для риболовлі</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category6', 'equipment_fithing')}>Платформи та станції</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category7', 'equipment_fithing')}>Ящики для риболовлі</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category8', 'equipment_fithing')}>Поводочниці та мотовила</li>
                        </ul>
                    </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">Ліхтарі</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'lanterns')}>Комплектуючі для ліхтарів</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'lanterns')}>Налобні ліхтарі</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'lanterns')}>Ручні ліхтарі</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'lanterns')}>Кемпенгові ліхтарі</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'lanterns')}>Ліхтарі зброї</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category6', 'lanterns')}>Елементи живлення</li>
                        </ul>
                    </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">Термобілизна</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'thermal_underwear')}>Термобілизна</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'thermal_underwear')}>Шкарпетки</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'thermal_underwear')}>Головні убори</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'thermal_underwear')}>Нашивки</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'thermal_underwear')}>Рукавички</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category6', 'thermal_underwear')}>Пояси</li>
                        </ul>
                    </li>
                </ol>
            </div>
                <div className="weapon">
                <p className="hanter-title">зброя та самооборона</p>
                <ol className="hanting__lists">
                        <li className="hanting__list">
                        <div className="hanting__list-title">зброя</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'gun')}>Травматична зброя</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'gun')}>Пневматична зброя</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'gun')}>Зброя під патрон Флобер</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'gun')}>Сигнально - шумова зброя</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'gun')}>Метальна зброя</li>
                        </ul>
                    </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">набої</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'bullets')}>Патрони</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'bullets')}>Пневматичні патрони</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'bullets')}>Патрони Флобера</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'bullets')}>Стріли</li>
                        </ul>
                    </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">Аксесуари</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'acces')}>Зберігання та транспортування</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'acces')}>Чищення та догляд</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'acces')}>Стрілецькі аксесуари</li>
                        </ul>
                    </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">комплектуючі</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'components')}>Комплектуючі до зброї</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'components')}>Кріплення для оптики</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'components')}>Травмотичній зброї</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'components')}>Пневматичній зброї</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'components')}>Мітальній зброї</li>
                        </ul>
                    </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">Інстремент</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'tool')}>Мультитули</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'tool')}>Мочете</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'tool')}>Тапори</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'tool')}>Лопати</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'tool')}>Пили</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category6', 'tool')}>Спецінструмент</li>
                        </ul>
                    </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">Екіпірування</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'equipments')}>Розвантажувальні та бронежелети</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'equipments')}>Страхувальні желети</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'equipments')}>Бронепластини</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'equipments')}>Шоломи</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'equipments')}>Налокітники та наколінники</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category6', 'equipments')}>Навушники та беруші</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category7', 'equipments')}>Окуляри</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category8', 'equipments')}>Підсумки</li>
                        </ul>
                    </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">засоби самозахисту</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'means')}>засоби самозахисту</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'means')}>Газові балончики</li>
                        </ul>
                    </li>
                </ol>
            </div>
            <div className="tourizm">
            <p className="hanter-title">туризм</p>
                <ol className="hanting__lists">
                    <li className="hanting__list">
                        <div className="hanting__list-title">Бівак</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'bivouac')}>Складні меблі</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'bivouac')}>Намети</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'bivouac')}>Спальні мішки</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'bivouac')}>Килимки та каремати</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'bivouac')}>Подушки</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category6', 'bivouac')}>Гігієна</li>
                        </ul>
                    </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">Сумки та рюкзаки</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'backpacks')}>Сумки</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'backpacks')}>Підсумки</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'backpacks')}>Рюкзаки</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'backpacks')}>Чохли для спорядження</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'backpacks')}>Гермопродукція</li>
                        </ul>
                    </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">Кухня та посуд</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'dishes')}>Пальники</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'dishes')}>Термопродукція</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'dishes')}>Туристичний посуд</li>
                        </ul>
                    </li>
                        </ol>
                        
                    </div>
                    
                </section>
                
            <p className='admin__products-clue'>выбери категорию</p>
                
            <section className="admin-block">
                <div className="products">
                    {selectedCategory && (
                        <>
                            {filteredProducts.length > 0 ? (
                                <AdminProducs products={filteredProducts} />
                            ) : (
                                <div>
                                    <p className='admin__products-text'>товарів немає</p>
                                    <AddProductBtn/>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

                
                
            </div>
        </>
    )
}

export default Admin;







