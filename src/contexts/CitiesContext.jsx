import { useState, createContext, useEffect, useContext } from "react";

const CitiesProvider = createContext();

const BASE_URL = "http://localhost:8000";

function CitiesContext({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity , setCurrentCity] = useState({});
  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("Error not able to load the data...!");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id)
  {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      alert("Error not able to load the data...!");
    } finally {
      setIsLoading(false);
    }
  }
  
 async function createCity(newCity)
 {
   try {
     setIsLoading(true);
     const res = await fetch(`${BASE_URL}/cities` , {
      method: "POST",
      body: JSON.stringify(newCity),
      headers: {
        "Content-Type" : "application/json",
      },

     });
     const data = await res.json();

     setCities((cities) => [...cities , data]);

   } catch {
     alert("Error not able to load the data...!");
   } finally {
     setIsLoading(false);
   }
 }

  return (
    <CitiesProvider.Provider
      value={{
        cities,
        isLoading,
       currentCity, 
       getCity,
       createCity,
      }}
    >
      {children}
    </CitiesProvider.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesProvider);
  if (context === undefined)  throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

export default CitiesContext;
export {  useCities };
