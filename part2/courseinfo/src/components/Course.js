import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Total = ({parts}) => {
  return (
    <p>Number of exercises {parts.reduce((s, {exercises}) => s + exercises, 0)}</p>
  )
}

const Course = ({course}) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </>
  )
}
 
export default Course;