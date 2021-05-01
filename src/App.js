//import logo from './logo.svg';
import './App.css';

function App() {
  const bio = {
    name: 'Shogo Okuda',
    linkedIn: <a href="https://www.linkedin.com/in/shogo-okuda-42b7389/">LinkedIn</a>,
    github:   <a href="https://github.com/shougees">Github</a>,
    twitter: <a href="https://twitter.com/ShogoOkuda">Twitter</a>
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {Object.keys(bio).map(key=> (
            <p>{bio[key]}</p>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
