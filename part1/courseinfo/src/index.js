import React from "react";
import ReactDOM from "react-dom";

const Header = props => {
    console.log(props);
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    );
};

const Content = props => {
    console.log(props);
    return (
        <div>
           <Part parts={props.parts} />
        </div>
    );
};
const Total = props => {
    console.log(props);
    return (
        <div>
            <p>Number of exercises: {props.amount}</p>
        </div>
    );
};

const Part = props => {
    console.log(props);
    return (
        <p>
            {props.parts.map(part => part.name + " " + part.exercises)}
        </p>
    );
};

const App = () => {
    const course = {
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10
            },
            {
                name: "Using props to pass data",
                exercises: 7
            },
            {
                name: "State of a component",
                exercises: 14
            }
        ],
    };


    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total
                amount={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
