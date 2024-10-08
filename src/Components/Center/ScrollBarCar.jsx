
import { useEffect, useState } from "react";

export default function ScrollBarCar() {
  const [rotate, setRotate] = useState(0); // Состояние для управления поворотом

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Если скролл вниз, поворачиваем на 180 градусов по оси Y, если вверх - на 0 градусов
      if (currentScrollY > lastScrollY) {
        setRotate(0); // Поворот на 180 градусов по Y
      } else {
        setRotate(180); // Возврат к 0 градусам
      }

      lastScrollY = currentScrollY; // Обновляем позицию скролла
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="scrollBarCar"
      style={{
        transform: `rotateY(${rotate}deg)`, // Поворот по оси Y
        transition: "transform 0.5s ease", // Плавный переход при повороте
      }}
    >
      <img className="scrollBarCar__img" src="./img/carRent.svg" alt="car" />
    </div>
  );
}
