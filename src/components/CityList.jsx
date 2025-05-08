import Spinner from "./Spinner";
import style from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext"; // Import with the correct casing

function CityList() {
  const { cities, isLoading } = useCities(); // Destructure cities and isLoading from the hook's return

  if (!cities.length) {
    return (
      <Message message="Add your first city by clicking on map "></Message>
    );
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <ul className={style.cityList}>
        {cities.map((city) => (
          <CityItem city={city} key={city.id} />
        ))}
      </ul>
    </>
  );
}

export default CityList;
