import React from "react";

import CountryDetailed from "./CountryDetailed";

const List = ({ countries, setCountry }) => {

  console.log(countries)

  if (countries.length >= 10) {
    return <p>Too many matches, specify another filter</p>
  } 
  else if (countries.length === 1) {
    return <CountryDetailed country={countries[0]} />
  }
  else if (countries.length < 10 ) {
    return (
      countries.map(country => {
        return <p key={country.alpha2Code}>{country.name} <button onClick={() => setCountry(country.name)}>Show</button></p>
      })
    )
  }
  else {
    return <p>Loading</p>
  }
}
 
export default List;