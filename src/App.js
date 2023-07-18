import './App.css';
// To use API call functions, use apiCalls as the module name, e.g., backend.getAllBoards() will return a promise of an array of Board objects. 
import * as backend from './APICalls.js'


const App = () => {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
