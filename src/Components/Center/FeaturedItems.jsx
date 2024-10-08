import { useEffect, useState } from "react";
import cards from "../../mock/cards.json";

export default function FeaturedItems() {
  const [visibleCards, setVisibleCards] = useState(cards.length);
  const [ratings, setRatings] = useState(Array(cards.length).fill(0));

  const updateVisibleCards = () => {
    const width = window.innerWidth;

    if (width < 768) {
      setVisibleCards(1);
    } else if (width < 1200) {
      setVisibleCards(2);
    } else {
      setVisibleCards(cards.length);
    }
  };

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  const handleClick = (cardIndex, starIndex) => {
    const newRatings = [...ratings];
    newRatings[cardIndex] = starIndex + 1; // Обновляем рейтинг для конкретной карточки
    setRatings(newRatings);
  };

  return (
    <div className="featured__items__wrap">
      <ul className="box__title__ap">
        <li className="f__title">
          <div className="center__title__line"></div>
          Rent Things The Easier Way
          <div className="center__title__line"></div>
        </li>
        <li className="f__title__second">Featured Items</li>
        <li>
          Eiusmod tempor incididunt ut labore dolore magna aliqua sed enim ad
          lorem ipsum dolor sit amet consectetur adipisicing elit.
        </li>
      </ul>

      <div className="card">
        {cards.slice(0, visibleCards).map((card, cardIndex) => (
          <ul key={card.id} className="card__ul">

            <li className="card__photo__wrap">
              <img className="card__photo" src={card.imgPhoto} alt="photo" />
            </li>
            
            <li className="card__title">{card.title}</li>
            <li className="card__description">{card.description}</li>
            <li>
              <span>Rent For</span>
              <span className="card__price">{card.price}</span>
            </li>

            {Array.from({ length: 5 }, (_, starIndex) => (
              <li
                key={starIndex}
                className="card__grade"
                onClick={() => handleClick(cardIndex, starIndex)} // Передаем индексы карточки и звезды
              >
                <img
                  src={card.grade}
                  alt="star"
                  style={{
                    filter:
                      starIndex < ratings[cardIndex]
                        ? "brightness(1)"
                        : "brightness(0.5)",
                  }}
                />
              </li>
            ))}

            <div className="card__line"></div>
            <li className="card__name">
              <img
                src="./img/nameFace.svg"
                alt="nameFace"
                className="card__name__ing"
              />
              <p>{card.name}</p>
            </li>

            <li className="card__name">
              <img
                src="./img/location.svg"
                alt="location"
                className="card__name__ing"
              />
              <p> {card.address}</p>
            </li>
          </ul>
        ))}
      </div>

      <button className="featured__btn">START YOUR SEARCH</button>
    </div>
  );
}
