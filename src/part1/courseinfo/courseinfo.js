import React from "react";

const Header = (props) => <h1>{props.courseList.name}</h1>;

const Content = ({courseList}) => {
  const courseOutline = [];
  courseList.parts.forEach(({name, exercises},index) => courseOutline.push(
        <Part key={index} name={name} exercises={exercises}/>
      ));
  return courseOutline;
};

const Part = ({name, exercises}) => <p>{name} {exercises}</p>;

const Total = ({courseList}) => {
  let totalExercises = 0;
  courseList.parts.forEach(({exercises}) => totalExercises += exercises);
  return <p>Number of exercises {totalExercises}</p>;
};

const CourseInfo = () => {
const course = {
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}

  return (
    <div>
      <Header courseList={course} />
      <Content courseList={course} />
      <Total courseList={course} />
    </div>
  );
};

export default CourseInfo;