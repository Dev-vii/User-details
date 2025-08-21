import React, { useState } from 'react'

const Usertext = (props) => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    if (props.name === "") {
      setMessage("Digite uma informação válida");
    } else {
      setMessage(`Oi ${props.name}`);
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