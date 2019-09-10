import React from 'react';

const Part = ({part}) => {
    console.log("Parts: ",part);
    return <p>{part.name} {part.exercises}</p>;
};

const Header = props => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    );
};

const Content = props => {
    return (
        <div>
            {props.parts.map(part => <Part key={part.id} part={part}/>)}
            <b>total of {props.parts.reduce( (sum, {exercises}) => sum + exercises ,0)} exercises</b>
        </div>
    );
};

const Course = ({course}) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
        </div>
    );
};

export default Course;