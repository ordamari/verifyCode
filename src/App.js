import { useState } from 'react';
import './App.css';
import VerifyCode from './components/VerifyCode';

function App() {

  const [verifyCode, setVerifyCode] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = () => {
    if (verifyCode.length < 4) return;
    else setIsLoggedIn(true);
  }


  return (
    <div className="App">
      {
        isLoggedIn ? (
          <div>
            <h1>You logged in</h1>
          </div>
        ) : (
          <div className='login-container' >
            <h1>Enter verify code</h1>

            <VerifyCode
              length={4}
              enterCallBack={logIn}
              setVerifyCode={setVerifyCode}
            />
            <button onClick={logIn} >Log in</button>
          </div>
        )
      }
    </div>
  );
}

export default App;
