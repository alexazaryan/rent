export default function Center() {
  return (
    <div className="center__wrap">
      <div className="center__content">
        <ul className="center__content__list">
          <li className="center__title">
            <div className="center__title__line"></div>
            Rent Things The Easier Way
            <div className="center__title__line"></div>
          </li>
          <li className="center__content__h3">How It Works</li>
          <li className="center__content__text">
            Eiusmod temporl incididunt utys labore dolore magna aliqua sed enim
            aud lorem ipsum dolor sit amet consectetur adipisicing elit.
          </li>
        </ul>
      </div>
      {/* ================================================================================ */}

      <div className="center__box__img">
        <ul className="center__box__img__list">
          <li className="center__box__li">
            <h3 className="center__box__h3">Find Your Perfect Item</h3>
            <p>
              Eiusmod tempora incididunt dolore magna aliqua sed enim lorem
              ipsum sit amet consectetur.
            </p>
            <div className="center__arrow1__img">
              <img
                className="center__arrow1__svg"
                src="./img/arrowBottom.svg"
                alt="arrow"
              />
            </div>
            {/*  */}
            <div className="center__arrow1__top__img">
              <img
                className="center__arrow1__top__svg"
                src="./img/arrowTop.svg"
                alt="arrow"
              />
            </div>
            {/*  */}
          </li>

          <li className="center__box__li">
            <h3 className="center__box__h3">Book Item With Seller</h3>
            <p>
              Eiusmod tempora incididunt dolore magna aliqua sed enim lorem
              ipsum sit amet consectetur.
            </p>
            <div className="center__arrow2__img">
              <img
                className="center__arrow2__svg"
                src="./img/arrowBottom.svg"
                alt="arrow"
              />
            </div>
            {/*  */}
            <div className="center__arrow5__top__img">
              <img
                className="center__arrow5__top__svg"
                src="./img/arrowTop.svg"
                alt="arrow"
              />
            </div>
            {/*  */}
          </li>
          {/* ================================================================================ */}
          <li className="center__box__li">
            <h3 className="center__box__h3">Play And Return Item</h3>
            <p>
              Eiusmod tempora incididunt dolore magna aliqua sed enim lorem
              ipsum sit amet consectetur.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
