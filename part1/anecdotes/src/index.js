import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Anecdotes = ({text, votes}) => {
  return (
    <div>
      <div>{text}</div>
      <div>has {votes} votes</div>
    </div>
  )
}

const App = ({anecdotes}) => {
  let [selected, setSelected] = useState(0);
  let [votes, setVote] = useState(Array.apply(null, new Array(16)).map(Number.prototype.valueOf,0));

  const votesCopy = [...votes];

  const next = () => {
    selected = Math.floor(Math.random() * anecdotes.length);
    setSelected(selected);
  };

  const vote = () => {
    votesCopy[selected] += 1;
    setVote(votesCopy);
  };

  const max = Math.max(...votesCopy);
  const maxVotesIndex = votesCopy.indexOf(max);

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <Anecdotes 
        text={anecdotes[selected]}
        votes={votesCopy[selected]}
      />
      <br/>
      <button onClick={vote}>vote</button>
      <button onClick={next}>next anecdote</button>
      <h2>Anecdote with most vote</h2>
      <Anecdotes 
        text={anecdotes[maxVotesIndex]}
        votes={max}
      />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  "Just because you don't know a technology, doesn't mean you won't be called upon to work with it.",
  "PHP is a minor evil perpetrated and created by incompetent amateurs, whereas Perl is a great and insidious evil, perpetrated by skilled but perverted professionals.",
  "More good code has been written in languages denounced as \"bad'' than in languages proclaimed \"wonderful'' -- much more.",
  "A language that doesn't have everything is actually easier to program in than some that do.",
  "I did say something along the lines of \"C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows your whole leg off.\"",
  "UNIX is simple. It just takes a genius to understand its simplicity",
  "When someone says, \"I want a programming language in which I need only say what I want done,\" give him a lollipop.",
  "As we said in the preface to the first edition, C \"wears well as one's experience with it grows.\" With a decade more experience, we still feel that way.",
  "C++ tries to guard against Murphy, not Machiavelli.",
  "Perl is another example of filling a tiny, short-term need, and then being a real problem in the longer term."
]

ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'));
