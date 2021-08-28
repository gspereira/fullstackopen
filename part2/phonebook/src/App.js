import React, { useState, useEffect } from 'react'

//Components
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'
import ErrorMessage from './components/ErrorMessage'

//API
import PhoneService from './services/phonebook'

const App = () => {
  const [ persons, setPersons ] = useState({}) 
  const [ newFilter, setNewFilter ] = useState('')
  const [ showAll, setShowAll ] = useState(true)
  const [ errorMessage, setErrorMessage ] = useState('')
  const [ messageType, setMessageType ] = useState(true)

  console.log(errorMessage)

  const getData = () => {
    PhoneService.getAll().then(list => setPersons(list))
    console.log(persons)
  }

  useEffect(getData, [])

  const handleFilterChange = (event) => {
    newFilter.length > 0 ? setShowAll(false) : setShowAll(true)
    setNewFilter(event.target.value)
  }

  const personToShow = showAll
    ? persons
    : persons.filter(person => person.name.includes(newFilter))

  return (
    <div>
      <h2>Phonebook</h2>
      {errorMessage !== '' && errorMessage !== null ? <ErrorMessage errorMessage={errorMessage} messageType={messageType} /> : ''}
      <Filter value={newFilter} handle={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm 
        persons={persons} 
        setPersons={setPersons} 
        createPerson={PhoneService.create} 
        updateNumber={PhoneService.update} 
        setErrorMessage={setErrorMessage} 
        setMessageType={setMessageType}
      />
      <h2>Numbers</h2>
      { 
        persons.length > -1 
        ? 
          <PersonList 
            persons={personToShow} 
            setPersons={setPersons} 
            deletePerson={PhoneService.deleteEntry} 
            setErrorMessage={setErrorMessage} 
            setMessageType={setMessageType} 
          /> 
        : 
        ''
      }
    </div>
  )
}

export default App