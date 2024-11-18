import { useState } from 'react' // Import the useState hook from React to manage state in this functional component

// Main App component
const App = () => {
  // Array containing all the anecdotes
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  // State variable to keep track of the currently selected anecdote index
  const [selected, setSelected] = useState(0)
  // State variable to keep track of votes for each anecdote, initialized with zeros
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  // Handler function to select a random anecdote
  const handleNextAnecdote = () => {
    // Generate a random index between 0 and the length of the anecdotes array
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex); // Update the selected anecdote index
  };
  
  // Handler function to vote for the currently displayed anecdote
  const handleVote = () => {
    // Create a copy of the votes array to avoid mutating the state directly
    const votesCopy = [...votes];
    votesCopy[selected] += 1; // Increment the vote count for the current anecdote
    setVotes(votesCopy); // Update the votes state with the new votes array
  };
  
  // Find the highest number of votes received by any anecdote
  const highestVotes = Math.max(...votes);
  // Find the index of the anecdote with the highest votes
  const topAnecdoteIndex = votes.indexOf(highestVotes);

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      {/* Display the currently selected anecdote */}
      <p>{anecdotes[selected]}</p>
      {/* Display the number of votes the current anecdote has received */}
      <p>This anecdote has {votes[selected]} votes.</p>
      {/* Button to vote for the current anecdote */}
      <button onClick={handleVote}>Vote</button>
      {/* Button to display the next random anecdote */}
      <button onClick={handleNextAnecdote}>Next Anecdote</button>
      
      <h1>Anecdote with Most Votes</h1>
      {/* If there are any votes, display the anecdote with the most votes */}
      {highestVotes > 0 ? (
        <div>
          {/* Display the anecdote that has the highest number of votes */}
          <p>{anecdotes[topAnecdoteIndex]}</p>
          {/* Display how many votes it has */}
          <p>This anecdote has {highestVotes} votes.</p>
        </div>
      ) : (
        // If no votes have been cast yet, display a message indicating so
        <p>No votes yet.</p>
      )}
    </div>
  )
}

export default App
