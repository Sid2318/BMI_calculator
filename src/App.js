import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //use states
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  let calcBmi = (e) => {
    //prevent submitting to the server
    e.preventDefault()
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))
      //.toFixed(1) method ensures that the bmi is rounded to 1 decimal place.
 
      // Logic for message
 
      if (bmi < 25) {
        setMessage('You are underweight')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are a healthy weight')
      } else {
        setMessage('You are overweight')
      }
    }
  }

  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <form onSubmit={calcBmi}>
        <label>Weight (ibs)</label>
        <input type="number"  value = {weight}  onChange={(e) => setWeight(e.target.value)} ></input>
        <label>Height (inch)</label>
        <input type="number"  value = {height}  onChange={(e) => setHeight(e.target.value)} ></input>
        <div>
          <button type='submit'>Submit</button>
          <button onClick={reload} type='submit'>Reload</button>
        </div>
        <p className='final'>Your BMI is: {bmi}</p>
        <p>{message}</p>
      </form>
    </div>
  );
}

export default App;
