import React, { useState } from 'react';

const PersonForm = ({persons, setPersons, createPerson, updateNumber, setErrorMessage, setMessageType}) => {
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const personObj = {
      name: newName,
      number: newNumber
    }
    if (persons.findIndex(x => x.name === personObj.name) === -1) {
      createPerson(personObj)
        .then(response => setPersons(persons.concat(response)))
      setMessageType(true)
      setErrorMessage(`Added ${personObj.name}`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      setNewName('')
      setNewNumber('')
    } else {
      window.confirm(`${personObj.name} is already added to the phonebook, replace the old number with a new one?`)
      ?
        updateNumber(persons[persons.findIndex(x => x.name === personObj.name)].id, personObj)
          .then(person => setPersons(persons.map(n => n.id !== person.id ? n : person)))
      :
        ''
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <form>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button onClick={handleSubmit} type="submit">add</button>
      </div>
    </form>
  );
}
 
export default PersonForm;