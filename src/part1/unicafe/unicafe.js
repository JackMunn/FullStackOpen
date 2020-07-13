import React, { useState } from "react";

const Statistic = ({ text, value }) => (
  <tbody>
    <tr>
      <td>
        <strong>{text}</strong>
      </td>
      <td>{value}</td>
    </tr>
  </tbody>
);

const Statistics = ({good, neutral, bad}) => {
  const totalFeedback = good + neutral + bad;
  const averageFeedback = (
    (good + bad * -1 + neutral * 0) /
    (good + bad + neutral)
  ).toFixed(1);
  const percentPositive = ((good / totalFeedback) * 100).toFixed(0) + "%";
  return (
    <table>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="Total Feedback:" value={totalFeedback} />
      <Statistic text="Average Score: " value={averageFeedback} />
      <Statistic text="Positive %: " value={percentPositive} />
    </table>
  );
};

const Button = (props) => (
  <button onClick={props.handleClick}>{props.children}</button>
);

const Unicafe = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)}>good</Button>
      <Button handleClick={() => setNeutral(neutral + 1)}>neutral</Button>
      <Button handleClick={() => setBad(bad + 1)}>bad</Button>

      <h1>statistics</h1>

      {good + neutral + bad > 0 ? <Statistics good={good} neutral={neutral} bad={bad} /> : <p>No feedback given</p>}
    </>
  );
};

export default Unicafe;
