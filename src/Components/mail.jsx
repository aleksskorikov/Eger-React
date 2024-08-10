
import React, { useEffect } from 'react';
import "../styles/scss/_mail.scss";
import Icons from "../assets/logo/icons.svg";

const Mail = () => {
    useEffect(() => {
        const sectionForm = document.querySelector(".wrapper");
        const openForm = document.querySelectorAll(".btn");
        const closeForm = document.querySelectorAll(".form-close");
        const nameError = document.querySelector(".name-error");
        const mailError = document.querySelector(".mail-error");
        const messageError = document.querySelector(".message-error");

        openForm.forEach(open => {
            open.addEventListener("click", () => {
                sectionForm.classList.add("form-activ");
            });
        });

        closeForm.forEach(close => {
            close.addEventListener("click", () => {
                sectionForm.classList.remove("form-activ");
            });
        });

        function hideError(elementId) {
            document.querySelector(`#${elementId}`).classList.remove("form-error");
        }

        function validateName() {
            const nameInput = document.getElementsByName("name")[0].value.trim();
            const nameValid = /^[a-zA-Zа-яА-ЯЁё]+$/;

            if (nameInput === "" || !nameValid.test(nameInput)) {
                document.querySelector("#formName").classList.add("form-error");
                nameError.style.display = 'block';
            } else {
                nameError.style.display = 'none';
                hideError('formName');
            }
        }

        function validateEmail() {
            const mailInput = document.getElementsByName("email")[0].value.trim();
            const emailValid = /^\S+@\S+\.\S+$/;

            if (mailInput === "") {
                document.querySelector("#formEmail").classList.add("form-error");
                mailError.style.display = 'block';
            } else if (!emailValid.test(mailInput)) {
                mailError.style.display = 'block';
            } else {
                mailError.style.display = 'none';
                hideError('formEmail');
            }
        }

        function validateMessage() {
            const messageInput = document.querySelector("#formMessage").value.trim();

            if (messageInput === "") {
                document.querySelector("#formMessage").classList.add("form-error");
                messageError.style.display = 'block';
            } else {
                messageError.style.display = 'none';
                hideError('formMessage');
            }
        }

        document.getElementsByName("name")[0].addEventListener('input', validateName);
        document.getElementsByName("email")[0].addEventListener('input', validateEmail);
        document.querySelector("#formMessage").addEventListener('input', validateMessage);

        document.querySelector("#contactForm").addEventListener('submit', function (event) {
            validateName();
            validateEmail();
            validateMessage();

            const hasError = document.querySelector(".form-error") !== null;

            if (hasError) {
                event.preventDefault();
            } else {
                alert("Форма успешно отправлена!");
            }
        });
    }, []);

    return (
        <>
            <div className="wrapper" id="section__form">
                <div className="form" id="contactForm">
                    <button className="form-close"><img src={Icons} alt="Close form" /></button>
                    <form id="contactForm">
                        <h1 className="form__title">Надсилання даних на пошту</h1>
                        <div className="form__item">
                            <label htmlFor="formName" className="form__label">Ім'я <span>*</span></label>
                            <span className="name-error">Форма повинна містити лише літери!</span>
                            <input id="formName" type="text" placeholder="Ваше ім'я" name="name" className="form__input" />
                        </div>
                        <div className="form__item">
                            <label htmlFor="formEmail" className="form__label">Эл. почта <span>*</span></label>
                            <span className="mail-error">Введіть правильну адресу!</span>
                            <input id="formEmail" type="email" name="email" placeholder="Ваш E-mail" className="form__input" />
                        </div>
                        <div className="form__item">
                            <label htmlFor="formMessage" className="form__label">Повідомлення <span>*</span></label>
                            <span className="message-error">Надішліть повідомлення!</span>
                            <textarea name="message" id="formMessage" placeholder="Ваше повідомлення" className="form__input message" ></textarea>
                        </div>
                        <button type="submit" className="form__button">Надіслати</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Mail;
