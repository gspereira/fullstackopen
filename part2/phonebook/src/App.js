import React, { useState } from "react";
import Phonebook from "./components/Phonebook";
import Form from "./components/Form";
import Filter from "./components/Filter";

const App = props => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
      ]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [filter, setFilter] = useState("");

    const filteredPersons = filter === ""
    ? persons
    : persons.filter(person => person.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0)

    const addPerson = event => {
        event.preventDefault();
        if (persons.filter(person => person.name === newName).length > 0) {
            alert(`${newName} is already added to phonebook`);
        } else {
            const personObject = {
                name: newName,
                number: newNumber,
            };
            setPersons(persons.concat(personObject));
            
        }
        setNewName("");
        setNewNumber("");
    };

    const handleNameChange = event => {
        setNewName(event.target.value);
    };

    const handleNumberChange = event => {
        setNewNumber(event.target.value);
    }

    const handleFilterChange = event => {
        event.preventDefault();
        setFilter(event.target.value);
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter 
                filter={filter}
                handleFilterChange={handleFilterChange}
            />
            <h2>Add a new</h2>
            <Form 
                addPerson={addPerson}
                newName={newName}
                handleNameChange={handleNameChange}
                newNumber={newNumber}
                handleNumberChange={handleNumberChange}
            />
            <Phonebook persons={filteredPersons}/>
        </div>
    );
};

export default App;
