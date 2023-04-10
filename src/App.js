import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Boton from './Components/Boton';

function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('')
  const [displayAlert, setDisplayAlert] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayAlert(true);
    if (name === 'ADL@desLatam.cl' && password === '252525') {
      setMessage('Los datos son correctos');
    } else {
      setMessage('Los datos son incorrectos');
    }
  };

  return (
    <div className="App container">
      <h1>Desafío Estado de los<br/> componentes y eventos</h1>
      <hr/>
      {displayAlert && <div className='alert alert-danger'>{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="formulario">
          <label htmlFor='name'>Name</label>
          <input className="form-control" type="text" defaultValue={name} onChange={(e) => {
            setName(e.target.value);
            }} id='name' placeholder="Name..." />
        </div>
        <div className="formulario">
          <label htmlFor='password'>Password</label>
          <input className="form-control" type="password" defaultValue={password} onChange={(e) => {
            setPassword(e.target.value);
            }} id='password' placeholder="Pass..." />
        </div>
        <div className='mt-2'>{
        (name !== '' && password !== '') && <Boton text="Iniciar sesión" />
        }</div>
      </form>
    </div>
  );
};

export default App;

