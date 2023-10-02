import { useParams } from "react-router-dom";
import "../App.css";

function CountryDetails(props) {
  //have to delete it
  const { alpha3Code } = useParams();

  const selectedCountry = props.send?.filter(
    (country) => country.alpha3Code === alpha3Code
  );
  return (
    <div>
      <h1>Country Details</h1>
      {selectedCountry.map((currentCountry) => (
        <div className="each-country">
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${currentCountry.alpha2Code.toLowerCase()}.png`}
            style={{ width: "40px" }}
          />
          <h2>
           <strong> Country:{currentCountry.name.common}</strong>
          </h2>
          <h3>Capital:{currentCountry.capital}</h3>
          <h3>Area: {currentCountry.area}</h3>
          <h3>Borders: {currentCountry.borders}</h3>
        </div>
      ))}
    </div>
  );
}

export default CountryDetails;