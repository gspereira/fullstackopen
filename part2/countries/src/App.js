import React, {useState, useEffect } from "react"
import axios from 'axios'

import './App.css'

import Country from "./components/Country"
import List from "./components/List"

function App() {

  const [countryList, setCountryList] = useState({})
  const [inputCountry, setInputCountry] = useState()
  const [filteredList, setFilteredList] = useState({})

  const handleCountryChange = (event) => {
    setInputCountry(event.target.value)
    setFilteredList(countryList.filter(country => country.name.includes(event.target.value)))
  }

  const clickShowButton = (name) => {
    setInputCountry(name)
    setFilteredList(countryList.filter(country => country.name.includes(name)))
  }

  const getCountries = () => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountryList(response.data)
      setFilteredList(response.data)
    })
  }
  useEffect(getCountries, [])

  return (
    <div>
      <div>
        find countries <input value={inputCountry} onChange={handleCountryChange} />
      </div>
      <div>
        { filteredList !== {} ? <List countries={filteredList} setCountry={clickShowButton} /> : <p>Loading</p>}
      </div>
    </div>
  )
}

export default App
