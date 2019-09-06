import React, { useState } from "react";
import ReactDOM from "react-dom";

const Title = props => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    );
};

const Button = props => {
    return (
        <button onClick={props.handleClick}>
            {props.name}
        </button>
    );
};

const Stat = props => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.value}</td>
        </tr>
    );
}

const Statistics = ({feedback}) => {
    const { good, neutral, bad } = feedback;
    
    const all = good + neutral + bad;
    const average = (good * 1) + (bad * -1);
    const percentage = (good / all) * 100;

    if (all > 0) {
        return (
            <table>
                <tbody>
                    <Stat name='good' value={good} />
                    <Stat name='neutral' value={neutral} />
                    <Stat name='bad' value={bad} />
                    <Stat name='all' value={all}/>
                    <Stat name='average' value={average} />
                    <Stat name='percentage' value={percentage}/>
                </tbody>
            </table>
        );
    } else {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        );
    }
}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const feedback = {
        good: good,
        neutral: neutral,
        bad: bad,
    };

    return (
        <div>
            <Title title="give feedback" />
            <Button name="good" handleClick={()=> setGood(good + 1)}/>
            <Button name="neutral" handleClick={()=> setNeutral(neutral + 1)}/>
            <Button name="bad" handleClick={()=> setBad(bad + 1)}/>
            <Title title="give statistics" />
            <Statistics feedback={feedback}/>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
