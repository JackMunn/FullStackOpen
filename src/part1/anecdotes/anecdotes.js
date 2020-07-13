import React, { useState } from "react";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const randomAnecdoteSelector = (setSelected) => {
  const indexPicker = Math.floor(Math.random() * anecdotes.length);
  setSelected(indexPicker);
};

const upVote = (
  up,
  selectedPoints,
  selected,
  setSelectedPoints,
) => {
  const points = [...selectedPoints];
  up ? points[selected]++ : points[selected]--;
  setSelectedPoints(points);
};




const Anecdotes = () => {
  const [selected, setSelected] = useState(0);
  const [selectedPoints, setSelectedPoints] = useState([0, 0, 0, 0, 0, 0]);
//   const [popularAnecdote, setPopularAnecote] = useState(null);

  const combinedArray = [];
  anecdotes.forEach((el, index) =>
    combinedArray.push([el, selectedPoints[index]])
  );
  combinedArray.sort((a, b) => b[1] - a[1]);
  const popularAnecdote = combinedArray[0][0];
  const unpopularAnecdote = combinedArray[combinedArray.length -1][0];

  return (
    <div>
      <br />
      <br />
      {anecdotes[selected]}
      <br />
      <button onClick={() => randomAnecdoteSelector(setSelected)}>
        next anecdote!
      </button>
      <br />
      Votes: {selectedPoints[selected]}
      <br />
      <button
        onClick={() =>
          upVote(
            true,
            selectedPoints,
            selected,
            setSelectedPoints,
          )
        }
      >
        upvote
      </button>
      <button
        onClick={() =>
          upVote(
            false,
            selectedPoints,
            selected,
            setSelectedPoints,
          )
        }
      >
        downvote
      </button>
      <br />
      <h1>Anecdote with the most votes</h1>
      {popularAnecdote}
      <br />
      <h1>Anecdote with the least votes</h1>
      {unpopularAnecdote}
      <br />
    </div>
  );
};

export default Anecdotes;
