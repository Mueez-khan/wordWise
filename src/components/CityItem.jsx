import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import style from "./CityItem.module.css";

// const formatDate = (date) =>
//   new Intl.DateTimeFormat("en", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   }).format(new Date(date));


function CityItem({ city }) {
  const { currentCity } = useCities();
  const { cityName, emoji, date, id, position } = city;

  console.log("The date " + date);
  // console.log("Formating " + formatDate(date)); // Should print a formatted date

  return (
    <>
      <li>
       
        <Link
          className={`${style.cityItem} ${
            id === currentCity.id ? style['cityItem--active'] : ''
          }`}
          to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        >
          <span className={style.emoji}>{emoji}</span>
           <h3 className={style.name}>{cityName}</h3>
          <h5 className={style.date}>{(date)})</h5>
          <button className={style.deleteBtn}>&times;</button>
        </Link>
      </li>
    </>
  );
}

export default CityItem;
