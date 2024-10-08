import { useInView } from "react-intersection-observer";

export default function Brand() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div className="brand">
      <div className="brand__wrap" ref={ref}>
        <h4>As Seen & featured In...</h4>
        <ul className="brand__box__li">
          <li
            className={`brand__li brand__li__first ${
              inView ? "animationFadeInLeft" : ""
            }`}
          >
            <img src="./img/brandMilk.png" alt="brand" />
          </li>

          <li
            className={`brand__li brand__li__second ${
              inView ? "animationFadeInLeft" : ""
            }`}
          >
            <img src="./img/brandPlay.png" alt="brand" />
          </li>

          <li
            className={`brand__li brand__li__third ${
              inView ? "animationFadeInLeft" : ""
            }`}
          >
            <img src="./img/brandLirik.png" alt="brand" />
          </li>

          <li
            className={`brand__li brand__li__fourth ${
              inView ? "animationFadeInLeft" : ""
            }`}
          >
            <img src="./img/brandArk.png" alt="brand" />
          </li>

          <li
            className={`brand__li brand__li__fifth ${
              inView ? "animationFadeInLeft" : ""
            }`}
          >
            <img src="./img/brandEight.png" alt="brand" />
          </li>
        </ul>
      </div>
    </div>
  );
}
