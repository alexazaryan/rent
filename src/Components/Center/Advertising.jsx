import { useInView } from "react-intersection-observer";

export default function Advertising() {

  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });
  
  return (
    <div className="advertising__wrap" ref={ref}>
      <div className="advertising__first">
        <h3 className="advertising__first__title">
          Get Anything On Rent With Doremi’s Rental Service
        </h3>

        {/* =============================================== */}

        <ul className="advertising__box__li">
          <li
            className={`advertising__wrap__img bg__color__second ${
              inView ? "animationMoveUp" : ""
            }`}
          >
            <img src="./img/reverse.svg" className="advertising__img" alt="" />
          </li>

          <li className="advertising__ttl__li">Easier to buy, sell or rent</li>

          <li className="advertising__txt__li ">
            Eiusmod tempora incididunt dolore magna aliqua enim lorem ipsum sit
            amet consectetur.
          </li>
        </ul>

        {/* =============================================== */}

        <ul className="advertising__box__li">
          <li
            className={`advertising__wrap__img bg__color__first ${
              inView ? "animationMoveUp" : ""
            }`}
          >
            <img src="./img/play.svg" className="advertising__img" alt="" />
          </li>

          <li className="advertising__ttl__li">Easier to buy, sell or rent</li>
          <li className="advertising__txt__li">
            Eiusmod tempora incididunt dolore magna aliqua enim lorem ipsum sit
            amet consectetur.
          </li>
        </ul>

        {/* =============================================== */}

        <ul className="advertising__box__li">
          <li
            className={`advertising__wrap__img bg__color__third ${
              inView ? "animationMoveUp" : ""
            }`}
          >
            <img
              src="./img/calkulator.svg"
              className="advertising__img "
              alt=""
            />
          </li>

          <li className="advertising__ttl__li">Easier to buy, sell or rent</li>
          <li className="advertising__txt__li">
            Eiusmod tempora incididunt dolore magna aliqua enim lorem ipsum sit
            amet consectetur.
          </li>
        </ul>

        {/* =============================================== */}
      </div>

      <div
        className={`advertising__second ${
          inView ? "animationOpacityGroup" : ""
        }`}
      >
        <img
          className="advertising__second__img"
          src="./img/group55.png"
          alt="#"
        />
      </div>
    </div>
  );
}
