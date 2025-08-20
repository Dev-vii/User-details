import React from 'react'

const usertext = (props) => {
  return (
    <div>
      <button className="button" onClick={props.name ==="" ? (
        () => alert('Digite uma informação válida')
      ) : (
        () => <p>Oi ${props.name}</p>
      )} >Verificar</button>
    </div>
  )
}

export default usertext;