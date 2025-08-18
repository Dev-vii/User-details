import './App.css';
import Usertext from './components/usertext';
import React, { useState } from 'react';


function App() {
  const [name, setName] = useState('');

  return (
    <div className="App">
      <h1>User details</h1>
      <div className='user-details'>
        <p>Insira seu nome <input value={name} onChange={e => setName(e.target.value)} /></p>
        <p>Insira sua idade <input type='number' id='ageput' /></p>
        <button>Verificar</button>
      </div>

      <Usertext />
    </div>
  );
}

export default App;