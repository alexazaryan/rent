import { useInView } from "react-intersection-observer";

import PopularCategories from "./PopularCategories";
import FeaturedItems from "./FeaturedItems";
import Advertising from "./Advertising";
import Brand from "../Brand/Brand";
import ScrollBarCar from "./ScrollBarCar";
import PeopleReviews from "../PeopleReviews/PeopleReviews";

export default function Center() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div>
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
              Eiusmod temporl incididunt utys labore dolore magna aliqua sed
              enim aud lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
          </ul>
        </div>
        {/* ================================================================================ */}

        <div className="center__box__img">
          <ul className="center__box__img__list" ref={ref}>
            <li className="center__box__li">
              <div
                className={`wrap__group__png ${
                  inView ? "animationFadeIn" : ""
                }`}
              >
                <img src="./img/group1.png" alt="#" />
              </div>

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

              <div className="center__arrow1__top__img">
                <img
                  className="center__arrow1__top__svg"
                  src="./img/arrowTop.svg"
                  alt="arrow"
                />
              </div>
            </li>

            <li className="center__box__li">
              <div
                className={`wrap__group__png ${
                  inView ? "animationFadeIn" : ""
                }`}
              >
                <img src="./img/group2.png" alt="" />
              </div>

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

              <div className="center__arrow5__top__img">
                <img
                  className="center__arrow5__top__svg"
                  src="./img/arrowTop.svg"
                  alt="arrow"
                />
              </div>
            </li>
            <li className="center__box__li">
              <div
                className={`wrap__group__png ${
                  inView ? "animationFadeIn" : ""
                }`}
              >
                <img src="./img/group3.png" alt="" />
              </div>

              <h3 className="center__box__h3">Play And Return Item</h3>
              <p>
                Eiusmod tempora incididunt dolore magna aliqua sed enim lorem
                ipsum sit amet consectetur.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <PopularCategories />
      <FeaturedItems />
      <Advertising />
      <PeopleReviews />
      <Brand />

      <ScrollBarCar />
    </div>
  );
}
