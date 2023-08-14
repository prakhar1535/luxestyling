import './App.css';
import React, {useState} from 'react';
function App() {

  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); 
  };

  return (
<div className='body'>
      <div className='form'>
        <h2 className='heading'>Join Waitlist !!</h2>
        {submitted ? (
          <h2 className='heading'>You became more fashionable!</h2>
        ) : (
          <form onSubmit={handleSubmit}> 
            <div className='Inputcontainer'>
              <input className='input' type="text" placeholder="Email" />
              <input className='input' type="password" placeholder="Password" />
            </div>
            <div className='button-contain'>
              <button className='button' type='submit'>JOIN</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
