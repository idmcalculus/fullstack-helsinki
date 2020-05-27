import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Title = ({text}) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistic = ({text, value}) => {
  return (
    <div>
      <table width='50%'>
        <tbody>
          <tr>
            <td width='50%'>{text}</td>
            <td width='50%'>{value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const Statistics = ({allClicks}) => {

  let countG = 0;
  let countB = 0;
  let countN = 0;

  if (allClicks.length === 0) {
    return (
      <>
        <br/>
        <h2>statistics</h2>
        <div>No feedback given</div>
      </>
    )
  } else {
      allClicks.forEach(click => {
        click === 'G' ? countG = countG + 1 :
        click === 'B' ? countB = countB + 1 :
        countN = countN + 1
    })
  }

  const sum = countB + countG + countN;
  const avg = sum/3
  const positive = (countG/sum) * 100

  return (
    <div>
      <h2>statistics</h2>
      <table width='50%'>
        <tbody width='100%'>
          <Statistic text='good' value={countG} />
          <Statistic text='bad' value={countB} />
          <Statistic text='neutral' value={countN} />
          <Statistic text='all' value={sum} />
          <Statistic text='average' value={avg} />
          <Statistic text='positive' value={positive + '%'} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeut] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleGood = () => {
    setAll(allClicks.concat('G'))
    setGood(good + 1);
  }

  const handleBad = () => {
    setAll(allClicks.concat('B'))
    setBad(bad + 1);
  }

  const handleNeut = () => {
    setAll(allClicks.concat('N'))
    setNeut(neutral + 1);
  }

  return (
    <div>
      <Title text='give feedback' />
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleBad} text='bad' />
      <Button handleClick={handleNeut} text='neutral' />
      <Statistics allClicks={allClicks} />
    </div>
  )
}


ReactDOM.render( <App />, document.getElementById('root'));