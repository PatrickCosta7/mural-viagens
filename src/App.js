import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from './components/Banner'
import Formulario from './components/Formulario';
import Mural from './components/Mural';

function App() {

  const [paises, setPaises] = useState([
    {
      id: uuidv4(),
      nome: 'Brasil',
      corPrincipal: '#009b3a',
      corSecundaria: '#fedf00'
    },
    {
      id: uuidv4(),
      nome: 'Japão',
      corPrincipal: '#ffffff',
      corSecundaria: '#BC002D'
    },
    {
      id: uuidv4(),
      nome: 'Noruega',
      corPrincipal: '#BA0C2F',
      corSecundaria: '#00205B'
    },
    {
      id: uuidv4(),
      nome: 'Grécia',
      corPrincipal: '#001489',
      corSecundaria: '#ffffff'
    },
    {
      id: uuidv4(),
      nome: 'Turquia',
      corPrincipal: '#C8102E',
      corSecundaria: '#ffffff'
    },
  ])

  const [locais, setLocais] = useState('');

  const adicionarNovoLocal = (local) => {
    setLocais({...locais, local})
  }

  function cadastrarPais(novoPais){
    setPaises([...paises, {novoPais, id: uuidv4()}])
  }

  return (
    <div className="App">
      
      <Banner />
      <Formulario
        novoLocal={local => adicionarNovoLocal(local)}
        cadastrarPais={cadastrarPais}
        paises={paises.map(pais => pais.nome)}
      />
      <Mural
        
      />

    </div>
  );
}

export default App;
