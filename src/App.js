import { useState } from 'react';
import Banner from './components/Banner'
import Formulario from './components/Formulario';

function App() {

  const [locais, setLocais] = useState('');

  const adicionarNovoLocal = (local) => {
    setLocais({...locais, local})
  }

  return (
    <div className="App">
      
      <Banner />
      <Formulario
        novoLocal={local => adicionarNovoLocal(local)}
      />

    </div>
  );
}

export default App;
