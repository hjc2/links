import logo from './logo.svg';
import cow from './cow.gif';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cow} className="App-cow" alt="cow" />

        <p>
          hjc2
        </p>
        <a
          className="App-link"
          href="https://cs.trinity.edu/~hcolema1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          my site
        </a>
      </header>
    </div>
  );
}

export default App;
