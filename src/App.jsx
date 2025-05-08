
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";


import Product from "./pages/Product";
import Price from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import PageLayout from "./pages/PageLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountriesList from "./components/CountriesList";
import City from "./components/City";
import Form from "./components/Form";
// import "./App.css";

import CitiesContext from "./contexts/CitiesContext";

function App() {


  return (
    <>
    <CitiesContext>
      <BrowserRouter>
        <Routes>
          <Route path="product" element={<Product></Product>} />
          <Route path="price" element={<Price></Price>} />
          <Route path="/" element={<Homepage></Homepage>} />
          <Route path="/app" element={<PageLayout></PageLayout>}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList  />} />
            <Route path="countries" element={<CountriesList />} />
          <Route path="form" element={<Form/>} />
          <Route path="cities/:id" element={<City/>}></Route>
          </Route>

          <Route path="/login" element={<Login></Login>} />
          <Route path="*" element={<PageNotFound></PageNotFound>} />
        </Routes>
      </BrowserRouter>
      </CitiesContext>
    </>
  );
}

export default App;
