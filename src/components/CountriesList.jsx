import Spinner from "./Spinner";
import style from "./CityList.module.css";
import CountriesItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
function CountriesList(props) {

  const {cities , isLoading} = useCities();

    if(!cities.length) return <Message message="Add your first city by clicking on map "></Message>


    if(isLoading) return <Spinner/>

    const countries = cities.reduce((arr, city) => {
        if (!arr.map((el) => el.country).includes(city.country))
          return [...arr, { country: city.country, emoji: city.emoji }];
        else return arr;
      }, []);





    return ( 

        <>

        <ul className={style.cityList}>

        {countries.map((Countries) =>
        <CountriesItem Countries={Countries}  />
        )}

        </ul>

        </>
     );
}

export default CountriesList;