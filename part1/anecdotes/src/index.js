import React, { useState } from "react";
import ReactDOM from "react-dom";

const MostVotes = ({ anecdotes, votes }) => {
    const mostVoted = Math.max(...votes);

    return (
        <div>
            <h1>Anecdote with most votes</h1>
            <p>{anecdotes[votes.indexOf(mostVoted)]}</p>
        </div>
    );
};

const App = ({ anecdotes }) => {
    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

    const addVotes = index => () => {
        const copyVotes = [...votes];
        copyVotes[index] += 1;
        return setVotes(copyVotes);
    };

    const getRandomAnecdote = () => () => {
        setSelected(Math.floor(Math.random() * anecdotes.length));
    };

    return (
        <div>
            <div>
                <h1>Anecdote of the day</h1>
                <p>{anecdotes[selected]}</p>
                <button onClick={addVotes(selected)}>vote</button>
                <button onClick={getRandomAnecdote()}>next anecdote</button>
            </div>
            <MostVotes anecdotes={anecdotes} votes={votes} />
        </div>
    );
};

const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
