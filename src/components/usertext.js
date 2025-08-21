import React, { useState } from 'react'

const Usertext = (props) => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    if (props.name === "" && props.idade === "") {
      setMessage("Digite uma informação válida");
    } else {
      setMessage(`Oi ${props.name}, você tem ${props.idade} anos!`);
    }
  };

  return (
    <div>
      <button className="button" onClick={handleClick}>Verificar</button>
      <p>{message}</p>
    </div>
  );
};

export default Usertext;