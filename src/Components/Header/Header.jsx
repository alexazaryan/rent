export default function Header() {
  return (
    <div className="header__container">
      <div className="header__wrap">
        {/* ----------------------------------------------------------------- */}
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

        <div className="sandwich__menu">
          <div className="sandwich__menu__line"></div>
          <div className="sandwich__menu__line sandwich__menu__line_second"></div>
          <div className="sandwich__menu__line"></div>
        </div>
      </div>
      <div className="header__bg"></div>
    </div>
  );
}
