import './App.css';
import Usertext from './components/usertext';
import React, { useState } from 'react';


function App() {
  const [name, setName] = useState('');
  const [idade, setIdade] = useState('');

  return (
    <div className="App">
      <h1>User details</h1>
      <div className='user-details'>
        <p>Insira seu nome <input value={name} onChange={e => setName(e.target.value)} /></p>
        <p>Insira sua idade <input type="number" value={idade} onChange={e => setIdade(e.target.value)} /></p>
      </div>

      <Usertext name={name} idade={idade}/>
    </div>
  );
}

export default App;