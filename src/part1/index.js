import React, { useState } from "react";
import CourseInfo from "./courseinfo/courseinfo";
import Unicafe from './unicafe/unicafe';

const Part1 = () => {
  const [exercise, setExercise] = useState(0);

  return (
    <>
    <br/>
      <button onClick={() => setExercise(1)}> Anecdotes </button>
      <button onClick={() => setExercise(2)}> CourseInfo </button>
      <button onClick={() => setExercise(3)}> Unicafe </button>

      {exercise === 2 && <CourseInfo />}
      {exercise === 3 && <Unicafe/>}
    </>
  );
};

export default Part1;
