import React from 'react';

const PersonList = ({ persons, setPersons, deletePerson, setErrorMessage, setMessageType }) => {

  const handleDelete = (id, name) => {
    window.confirm(`Delete ${name}?`) 
    ?
    deletePerson(id)
      .then(response => {
        setPersons(persons.filter(n => n.id !== id))
        response.status === 200 ? alert('Number Removed') : ''
      })
      .catch(error => {
        setMessageType(false)
        setErrorMessage(`Information of ${name} has already been removed from server`)
        setPersons(persons.filter(n => n.id !== id))
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
    :
    ''
  }

  return (
    <div>
      {persons.map( person => {
          return <p key={person.name}>{person.name} {person.number} <button onClick={() => handleDelete(person.id, person.name)}>Delete</button></p>
      })}
    </div>
  )
}
 
export default PersonList;