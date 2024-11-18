import { useState } from 'react'; // Import the useState hook from React

// Main App component
const App = () => {
  // State variables to keep track of feedback counts
  const [good, setGood] = useState(0);       // For "Good" feedback
  const [neutral, setNeutral] = useState(0); // For "Neutral" feedback
  const [bad, setBad] = useState(0);         // For "Bad" feedback

  // Event handlers to update the state when buttons are clicked
  const handleGoodClick = () => setGood(good + 1);         // Increment good count
  const handleNeutralClick = () => setNeutral(neutral + 1); // Increment neutral count
  const handleBadClick = () => setBad(bad + 1);             // Increment bad count

  return (
    <div>
      <h1>Give Feedback</h1>
      {/* Render buttons for each type of feedback */}
      <Button onClick={handleGoodClick} text="Good" />
      <Button onClick={handleNeutralClick} text="Neutral" />
      <Button onClick={handleBadClick} text="Bad" />

      {/* Render the Statistics component and pass the feedback counts as props */}
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

// Reusable Button component
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button> // Render a button with an onClick handler and label
);

// Statistics component to display the feedback statistics
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad; // Calculate total feedback

  // If no feedback has been given yet, display a message
  if (total === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  }

  // Calculate average score (good: +1, neutral: 0, bad: -1)
  const average = (good - bad) / total;
  // Calculate the percentage of positive feedback
  const positivePercentage = (good / total) * 100;

  return (
    <div>
      <h2>Statistics</h2>
      {/* Display the statistics in a table format */}
      <table>
        <tbody>
          {/* Use StatisticLine component to display each statistic */}
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={total} />
          {/* Format average and positive percentage to two decimal places */}
          <StatisticLine text="Average" value={average.toFixed(2)} />
          <StatisticLine text="Positive" value={`${positivePercentage.toFixed(2)}%`} />
        </tbody>
      </table>
    </div>
  );
};

// Component to display a single line of statistic in the table
const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>   {/* Name of the statistic */}
    <td>{value}</td>  {/* Value of the statistic */}
  </tr>
);

export default App
