export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <ul className="footer__ul__container1">
          <li>
            <div className="header__content">
              <div className="header__logo">
                <img
                  className="header__logo__img"
                  src="./img/logo.png"
                  alt="logo"
                />
              </div>

              <ul className="header__brand__ul">
                <li className="header__brand">Doremi</li>
                <li className="header__brand__li">Buy, Sell Or Rent</li>
              </ul>
            </div>
          </li>

          <li className="footer__text">
            Eiusmod tempora incididunt dolore magna aliqua sed enim lorem ipsum
            sit amet consectetur.
          </li>

          <li>
            <strong>Email</strong>: support@domain.com
          </li>
          <li>
            <strong>Phone</strong>: +1 (040) 2351 3690
          </li>
        </ul>

        <ul className="footer__ul__container2">
          <li className="footer__text__title"> Join Our Community</li>
          <li>Continue exploring the great places.</li>
          <li className="footer__icon__img">
            <img
              className="footer__icon"
              src="./img/groupFooterIcon.png"
              alt="icon"
            />
          </li>
        </ul>

        <ul className="footer__ul__container3">
          <li className="footer__text__title footer__text__title_li3">
            Connect Socially
          </li>
          <ul className="footer__group__icon">
            <li className="footer__box__icon">
              <img src="./img/icon2w.svg" alt="icon" />
            </li>
            <li className="footer__box__icon footer__box__icon_fb">
              <img src="./img/icon3w.svg" alt="icon" />
            </li>
            <li className="footer__box__icon">
              <img src="./img/icon4w.svg" alt="icon" />
            </li>
            <li className="footer__box__icon">
              <img src="./img/icon5w.svg" alt="icon" />
            </li>
            <li className="footer__box__icon">
              <img src="./img/icon6w.svg" alt="icon" />
            </li>
          </ul>
        </ul>
      </div>
      {/* ============================================================================================= */}
      <div className="footer__line"></div>

      <p className="footer__text__p">
        © 2020 Doremi - Buy Sell or Rent. All rights reserved.
      </p>
    </div>
  );
}
