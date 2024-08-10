import React from 'react';
import Logo from "./assets/logo/logo 1.svg";
import Telefon from "./assets/logo/telefon.svg";
import Insta from "./assets/logo/insta 1.svg";
import Viber from "./assets/logo/Viber.svg";
import Telegramm from "./assets/logo/telegram.svg";
import Mail from "./assets/logo/mail 1.svg";
import "./styles/scss/_changeable.scss";
import "./styles/scss/_mixins.scss";
import "./styles/scss/_templates.scss";
import "./styles/scss/_header.scss";



const header = () => {
  
  return (
    <>
    <header className="header" id="header">
    <div className="conteiner">
        <div className="header__block">
            <div className="header__block-logo">
                <img src={Logo} alt="" className='logo__block-img' />
            </div>
            <div class="header__block-title">
                <h1 className="block__title-title">ЄГЕР</h1>
                <h2 className="block__title-subtitle">магазин зброї</h2>
            </div>
            <div class="header__block-items">
                <div className="block-items-data">
                    <p className="items-data-sity">м. Запоріжжя </p>
                    <p className="items-data-adress">вул. Базарна 14б</p>
                <p className="items-data-tel">
                <img src={Telefon} alt="phone icon" className="data__tel-img"/>
                  055 555 55 55</p>
                </div>
                <div className="header__block-sety">
              <a href="https://instagram.com/egerzp?igshid=NTc4MTIwNjQ2YQ==">
                <img src={Insta} alt="instagram icon" className="block__sety-icons" />
              </a>
              <a href="#">
                <img src={Viber} alt="Viber icon" className="block__sety-icons" />
              </a>
              <a href="https://t.me/egerzp">
                <img src={Telegramm} alt="telegram icon" className="block__sety-icons" />
              </a>
              <a href="#">
                <img src={Mail} alt="mail icon" className="block__sety-icons btn" />
              </a>
                </div>
            </div>
        </div>
      </div>
      </header>

    </>
  )
}

export default header