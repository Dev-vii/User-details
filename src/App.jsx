import './App.css';

function App() {
  return (
    <div className="App">
      <h1>User details</h1>
      <div className='user-details'>
        <p>Insira seu nome <input type="text" /></p>
        <p>Insira sua idade <input type='number' /></p>
        <button>Verificar</button>
      </div>
    </div>
  );
}

export default App;
