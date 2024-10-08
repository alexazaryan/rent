import Cube from "../Cube/Cube";

import { useState } from "react";

export default function Header() {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    setInputValue("");
  };

  let isFirstAnimation = false;

  function showCategories() {
    let headerImgLeft = document.querySelector(".header__img__left");
    let headerImgRight = document.querySelector(".header__img__right");

    let message = document.querySelector(".message");
    let triangle = document.querySelector(".triangle");

    if (!isFirstAnimation) {
      headerImgLeft.classList.add("headerImgLeft");
      headerImgRight.classList.add("headerImgRight");

      triangle.style.opacity = "0";
      message.style.opacity = "0";
    } else if (isFirstAnimation) {
      headerImgLeft.classList.remove("headerImgLeft");
      headerImgRight.classList.remove("headerImgRight");
      // void headerImgRight.offsetWidth;

      triangle.style.opacity = "1";
      message.style.opacity = "1";
    }
    isFirstAnimation = !isFirstAnimation;
  }

  return (
    <div className="header__container">
      <div className="header__color">
        <div className="header__wrap">
          <div className="header__content">
            <Cube />
            {/* <div className="header__logo"> */}
            {/* <img
                className="header__logo__img"
                src="./img/logo.png"
                alt="logo"
              /> */}
            {/* </div> */}

            <ul className="header__brand__ul">
              <li className="header__brand">Doremi</li>
              <li className="header__brand__li">Buy, Sell Or Rent</li>
            </ul>
          </div>

          <div className="sandwich__menu">
            <div className="sandwich__menu__line"></div>
            <div className="sandwich__menu__line sandwich__menu__line_second"></div>
            <div className="sandwich__menu__line"></div>
          </div>

          <ul className="header__nav">
            <li className="header__nav__li header_line ">
              Explore
              <div className="header__box__img header__box__img_pointer">
                <img src="img/icon-arrow.svg" alt="#" />
              </div>
              {/* <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li> */}
            </li>
            <li className="header__nav__li header_line ">
              About Us
              <div className="header__box__img header__box__img_pointer">
                <img src="img/icon-arrow.svg" alt="#" />
              </div>
            </li>
            <li className="header__nav__li header_line ">
              Pages
              <div className="header__box__img header__box__img_pointer">
                <img src="img/icon-arrow.svg" alt="#" />
              </div>
            </li>
            <li className="header__nav__li header_line">
              <div className="header__box__img">
                <img
                  className="header__icon"
                  src="img/icon-enter.svg"
                  alt="#"
                />
              </div>
              Sign in or Register
            </li>

            <li className="header__nav__li header__nav__li_btn">
              <div className="header__box__img header__box__img_plus">
                <img
                  className="header__icon"
                  src="img/frame-plus.svg"
                  alt="#"
                />
              </div>
              List An Item
            </li>

            <li className="header__nav__li"> Eng</li>
            <li className="header__nav__li">
              <div className="header__box__img header__box__img_flag">
                <img className="header__icon" src="img/eng-flag.svg" alt="#" />
              </div>
            </li>
            <li className="header__nav__li">
              <div className="header__box__img header__box__img_pointer">
                <img
                  className="header__icon"
                  src="img/icon-arrow.svg"
                  alt="#"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="header__bg1"></div>

      <div className="header__second">
        <ul className="header__second__title">
          <li className="header__title__first">Get Anything On Rent</li>

          <li className="header__title__second">Find Thousands of Items</li>
          <li className="header__title__second header__title__second_mg">
            (Almost Anything) For Rent
          </li>
        </ul>

        <div className="header__second__search">
          <div className="blink"></div>
          <input
            className="header__input"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="btn" onClick={handleSearch}>
            search
          </button>
        </div>

        <ul className="header__second__ul">
          <li className="header__second__left">Popular Searches</li>

          <div className="wrap__box__img">
            <li className="header__second__img header__img__left">
              <img className="header__img" src="img/bag-1.svg" alt="#" />
            </li>

            <li className="header__second__img header__second__img_message">
              <img
                className="header__img header__img__click"
                src="img/car.svg"
                alt="#"
                onClick={showCategories}
              />

              <span className="message">search</span>
              <span className="triangle"></span>
            </li>

            <li className="header__second__img header__img__right ">
              <img className="header__img " src="img/icon-1.svg" alt="#" />
            </li>
          </div>

          {/* ================================= end */}

          <li className="header__second__right">
            Or <span className="text__red">List An Item For Rent</span>
          </li>
        </ul>
      </div>
      <div className="header__bg2"></div>
    </div>
  );
}
