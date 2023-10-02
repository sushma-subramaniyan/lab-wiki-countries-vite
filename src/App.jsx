import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const fetchCountries = async () => {
    const response = await fetch(
      "https://ih-countries-api.herokuapp.com/countries"
    );
    const countryData = await response.json();
    console.log(countryData);
    setCountries(countryData);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<HomePage send={countries} />}>
          Go to homepage
        </Route>
        <Route
          path="/:alpha3Code"
          element={<CountryDetails send={countries} />}
        >
          Go to country details
        </Route>
      </Routes>
    </div>
  );
}

export default App;