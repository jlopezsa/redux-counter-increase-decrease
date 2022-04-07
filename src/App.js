import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
import Increment from './components/Increment/Increment';

function App() {
  return (
    <div className="App">
      <Counter />
      <br />
      <Increment />
    </div>
  );
}

export default App;
