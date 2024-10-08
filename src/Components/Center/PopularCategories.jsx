export default function PopularCategories() {
  return (
    <div className="popular__categories__wrap">
      <div className="popular__title">
        <img className="p__bg__img" src="./img/ellipses.svg" alt="" />
        <div className="center__title__line"></div>
        <div className="p__title__first">Rent Things The Easier Way</div>
        <div className="center__title__line"></div>
      </div>

      <div className="p__ctg__title__second">Popular Categories</div>
      <div className="p__description">
        Eiusmod temporl incididunt utys labore dolore magna aliqua sed enim aud
        lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>

      <ul className="popular__ul__wrap__img">
        <li className="p__li__box__img">
          <div className="box__wrap__img">
            <img className="p__img" src="./img/tv.svg" alt="" />
          </div>
          <ul className="bloc__title__describe">
            <li className="p__title__p">Electronic Items</li>
            <li>508 Searches</li>
          </ul>
        </li>

        <li className="p__li__box__img">
          <div className="box__wrap__img">
            <img className="p__img" src="./img/bike.svg" alt="" />
          </div>
          <ul className="bloc__title__describe">
            <li className="p__title__p">Cars Or Bikes</li>
            <li>2k Searches</li>
          </ul>
        </li>

        <li className="p__li__box__img">
          <div className="box__wrap__img">
            <img className="p__img" src="./img/svirt.svg" alt="" />
          </div>
          <ul className="bloc__title__describe">
            <li className="p__title__p">New Clothes</li>
            <li>74 Searches</li>
          </ul>
        </li>

        <li className="p__li__box__img">
          <div className="box__wrap__img">
            <img className="p__img" src="./img/camera.svg" alt="" />
          </div>
          <ul className="bloc__title__describe">
            <li className="p__title__p">DSLR Cameras</li>
            <li>158 Searches</li>
          </ul>
        </li>

        <li className="p__li__box__img">
          <div className="box__wrap__img">
            <img className="p__img" src="./img/quadcopter.svg" alt="" />
          </div>
          <ul className="bloc__title__describe">
            <li className="p__title__p">Drones</li>
            <li>120 Searches</li>
          </ul>
        </li>

        <li className="p__li__box__img">
          <div className="box__wrap__img">
            <img className="p__img" src="./img/home.svg" alt="" />
          </div>
          <ul className="bloc__title__describe">
            <li className="p__title__p">Properties</li>
            <li>68 Searches</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
