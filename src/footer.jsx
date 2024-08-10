
import React from 'react';
import "./styles/scss/_footer.scss";
import Telefon from "./assets/logo/telefon.svg";
import Insta from "./assets/logo/insta 1.svg";
import Viber from "./assets/logo/Viber.svg";
import Telegramm from "./assets/logo/telegram.svg";
import Mail from "./assets/logo/mail 1.svg";
import "./styles/scss/_changeable.scss";
import "./styles/scss/_mixins.scss";
import "./styles/scss/_templates.scss";
import "./styles/scss/_footer.scss";


const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="conteiner ">
          <div className="footer__block">
            <div className="footer__block-sety">
              <p className="block__sety-title">ми в соцсетях</p>
              <div className="block__sety">
                <a href="https://instagram.com/egerzp?igshid=NTc4MTIwNjQ2YQ==">
                  <img src={Insta} alt="instagram icon" className="block__sety-icon"/>
                </a>
                <a href="#">
                  <img src={Viber} alt="Viber icon" className="block__sety-icon"/>
                </a>
                <a href="https://t.me/egerzp">
                  <img src={Telegramm} alt="telegram icon" className="block__sety-icon"/>
                </a>
                <a href="#">
                  <img src={Mail} alt="mail icon" className="block__sety-icon btn"/>
                </a>
              </div>
            </div>

            <div className="footer__body">
              <p className="footer__body-title">ЕГЕР</p>
              <p className="footer__body-subtitle">магазин зброї</p>
              <div className="footer__body-adress">
                <div className="body__adress-adress">м. Запоріжжя вул. Базарна 14б</div>
                <a href="tel:+380665629669">
                  <img src={Telefon} alt="phone icon" className="tel-logo"/> 055 555 55 55
                </a>
              </div>
            </div>

            <div className="footer__map" id="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2679.5352186734044!2d35.182213725481496!3d47.809844773921746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc5e723d482363%3A0x72d684f85f01200b!2z0JXQs9C10YDRjA!5e0!3m2!1sru!2sua!4v1684319526912!5m2!1sru!2sua"
                width="300"
                height="200"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="footer__map-body"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
