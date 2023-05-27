import React, { useState } from 'react';
import './App.css';


function App() {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  let calcBmi = (e) => {
    e.preventDefault();

    if(weight === 0 || height === 0){
      alert("Please Enter valid weight and height")
    }else{
      let bmi= (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))

      //Logic for message

      if(bmi < 18.5){
        setMessage('Your are underweight')
      }
      else if(bmi >=18.5 && bmi< 24.9){
        setMessage('You are Healthy')
      }else{
        setMessage('You are overweight')
      }
    }
  }
  
  let imgSrc ;

if (bmi < 1){
  imgSrc = require('./assets/bmi.jpeg');
}else{
  if (bmi < 18.5){
    imgSrc = require('./assets/underweight.jpeg');
  } else if(bmi >= 18.5 && bmi < 24.9){
    imgSrc= require('./assets/healthy.png');
  }else{
    imgSrc= require('./assets/overweight.jpeg');
  }
}

  let reload= ()=> {
    window.location.reload() 
  }

  return (
    <div className="app">
      <div className="container">
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input  placeholder='Enter Weight' onChange={e => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (inches)</label>
            <input placeholder='Enter Height' onChange={e => setHeight(e.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Calculate</button>
            <button className='btn btn-outline' type='submit' onClick={reload}>Reload</button>
          </div>
        </form>

        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className='img-container'>
          
          <img src={imgSrc} />
        </div>
      </div>
    </div>
  );
}

export default App;