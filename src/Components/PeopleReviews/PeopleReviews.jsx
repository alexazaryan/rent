import { useState, useEffect } from "react";

const initialReviews = [
  {
    id: 0,
    photo: "./img/boy1.png",
    name: "Ameda Zendu",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, itaque.Lorem ipsum dolor s.",
    rating: 0,
  },
  {
    id: 1,
    photo: "./img/boy2.png",
    name: "Ameda Hilson",
    text: "Eiusmod temporl incididunt utys labore dolormagna aliqua sed enim audy. Lorem ipsum dodolor sit amet consectetur adipisicing elit sedeiusmod tempor incididunt",
    rating: 0,
  },
  {
    id: 2,
    photo: "./img/boy3.png",
    name: "Linus William",
    text: "iporl incididunt utys labore dolormagna aliqua sed enim audy. Lorem ipsum dodolor sit amet consectetur adipisicing elit sedeiusmod tempor incidid t amet consectetur adipisicing eli consectetur adipisicing elit. Non, itaque",
    rating: 0,
  },
  {
    id: 3,
    photo: "./img/boy4.png",
    name: "Oliver Zendu",
    text: "Eiusmod temporl incididunt utys labore dolormagna aliqua sed enim audy. Lorem ipsum dodolor sit amet consectetur adipisicing elit sedeiusmod tempor incididunt",
    rating: 0,
  },
  {
    id: 4,
    photo: "./img/boy5.png",
    name: "Linus William",
    text: "ELorem ipsum, dolor sit amet consectetur adipisicing elit. Totam maxime architecto odit magnam iusto quaerat suscipit quidem vero repudiandae quod.mpor incididunt",
    rating: 0,
  },
  {
    id: 5,
    photo: "./img/boy6.png",
    name: "Oliver Zendu",
    text: "Eiusmod temporl incididuLorem ipsum, dolor sit amet consectetur adipisicing elit. Totam maxime architecto odit magnam iusto quaerat suscipit quidem vero repudiandae quod.na aliqua sed enim audy. Lorem ipsum dodolor sit amet consectetur adipisicing elit sedeiusmod tempor incididunt",
    rating: 0,
  },
  {
    id: 6,
    photo: "./img/boy7.png",
    name: "Oliver Zendu",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam maxime architecto odit magnam iusto quaerat suscipit quidem vero repudiandae quod. dolormagna aliqua sed enim audy. Lorem ipsum dodolor sit amet consectetur adipisicing elit sedeiusmod tempor incididunt",
    rating: 0,
  },
  {
    id: 7,
    photo: "./img/boy3.png",
    name: "Oliver Zendu",
    text: "Eiusmod temporl incididunt Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam maxime architecto odit magnam iusto quaerat suscipit quidem vero repudiandae quod.dy. Lorem ipsum dodolor sit amet consectetur adipisicing elit sedeiusmod tempor incididunt",
    rating: 0,
  },
  {
    id: 8,
    photo: "./img/boy5.png",
    name: "Oliver Zendu",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam maxime architecto odit magnam iusto quaerat suscipit quidem vero repudiandae quod.",
    rating: 0,
  },
];

export default function PeopleReviews() {
  const [itemsToShow, setItemsToShow] = useState(3); // Начальное количество карточек для отображения
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews, setReviews] = useState(initialReviews); // Состояние для отзывов

  const handleClick = (index, reviewId) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === reviewId ? { ...review, rating: index + 1 } : review
      )
    );
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 360 && window.innerWidth < 768) {
        setItemsToShow(1); // Показывать 1 карточку при ширине от 360px до 768px
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1200) {
        setItemsToShow(2); // Показывать 2 карточки при ширине от 768px до 1200px
      } else {
        setItemsToShow(3); // Показывать 3 карточки при ширине более 1200px
      }
    };

    handleResize();

    // Добавляем обработчик события при изменении размера окна
    window.addEventListener("resize", handleResize);

    // Очищаем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsToShow < reviews.length ? prevIndex + itemsToShow : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsToShow >= 0
        ? prevIndex - itemsToShow
        : Math.max(0, reviews.length - itemsToShow)
    );
  };

  return (
    <div>
      <ul className="ps__wrap">
        <li className="ps__section">
          <div className="center__title__line"></div>
          Read The User’s Testimonials
          <div className="center__title__line"></div>
        </li>
        <li className="ps__title">What People Saying</li>
        <li className="ps__summary">
          Eiusmod tempor dui incididunt utes labore dolore magna ipsum aliqua
          sed enim aud lorem ipsum dolor sit amet consectetur adipisicing elit.
        </li>
      </ul>

      <div>
        <div className="sp__cards">
          {reviews
            .slice(currentIndex, currentIndex + itemsToShow)
            .map((review) => (
              <div className="sp__card" key={review.id}>
                <div>
                  <div className="sp__content">
                    <div className="sp__wrap__img">
                      <img className="sp__img" src={review.photo} alt="photo" />
                    </div>
                    <div>
                      {review.text.slice(0, 100)}...
                      <div>
                        <div className="ps__name">{review.name}</div>

                        <div className="star-container">
                          {[...Array(5)].map((_, index) => (
                            <div
                              className={`star ${
                                index < review.rating ? "highlighted" : ""
                              }`}
                              key={index}
                              onClick={() => handleClick(index, review.id)}
                            >
                              <img src="./img/starRuiting.svg" alt="star" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          <button className="ps__button__prev" onClick={prevSlide}></button>
          <button className="ps__button__next" onClick={nextSlide}></button>
        </div>
      </div>
    </div>
  );
}
