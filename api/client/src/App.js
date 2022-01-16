import {useEffect, useState} from 'react';

import logo from './logo.svg';
import './App.css';

function App() {

  const [response, setResponse] = useState([]);
  
  useEffect(() => {
    fetch('/hello')
      .then(res => res.json())
      .then(d => setResponse(d.message))
      // console.log(data)
    }, [])
    console.log(response)
    
    
  return (
    // <React.Fragment>

    // <div><p> what the heck</p>something here</div>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {response}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header>
    </div>
          // {/* </React.Fragment> */}
  );
}

export default App;
