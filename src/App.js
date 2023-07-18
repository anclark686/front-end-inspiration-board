import './App.css';

import NewCardForm from './components/NewCardForm';

const App = () => {
  return (
    <div className="App">
      <h1>Hello World</h1>

      <section className="NewCardForm__container">
        <NewCardForm boardId={boardId} createNewBoard={backend.createNewBoard}/>
      </section>
    </div>
  );
}

export default App;
