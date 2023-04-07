import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from './components/Banner'
import Paises from './components/Paises';
import Rodape from './components/Rodape';
import Formulario from './components/Formulario';

function App() {

  const [paises, setPaises] = useState([
    {
      id: uuidv4(),
      nomePais: 'Brasil',
      corPrincipal: '#009b3a',
      corSecundaria: '#fedf00'
    },
    {
      id: uuidv4(),
      nomePais: 'Japão',
      corPrincipal: '#c3c3c3',
      corSecundaria: '#BC002D'
    },
    {
      id: uuidv4(),
      nomePais: 'Noruega',
      corPrincipal: '#BA0C2F',
      corSecundaria: '#00205B'
    },
    {
      id: uuidv4(),
      nomePais: 'Grécia',
      corPrincipal: '#001489',
      corSecundaria: '#ffffff'
    },
    {
      id: uuidv4(),
      nomePais: 'Turquia',
      corPrincipal: '#C8102E',
      corSecundaria: '#ffffff'
    }
  ])

  const inicial = [
    {
      id: uuidv4(),
      nome: 'Salvador',
      data: '17/11/2019',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      imagem: 'https://a.cdn-hotels.com/gdcs/production67/d1025/9c42e257-fce5-4600-97d1-c3f3c6afd86b.jpg',
      pais: paises[0].nomePais
    },
    {
      id: uuidv4(),
      nome: 'Lençóis maranhenses',
      data: '04/06/2016',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      imagem: 'https://magazine.zarpo.com.br/wp-content/uploads/2021/05/oq-fazer-no-maranhao_zarpo.jpg',
      pais: paises[0].nomePais
    },
    {
      id: uuidv4(),
      nome: 'Canyon do Poty',
      data: '30/09/2022',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      imagem: 'https://upload.wikimedia.org/wikipedia/pt/d/de/Images%284%29.jpg',
      pais: paises[0].nomePais
    },
    {
      id: uuidv4(),
      nome: 'Rio de Janeiro',
      data: '26/02/2013',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      imagem: 'https://media.staticontent.com/media/pictures/e63f71e3-03fb-4c1b-a1e6-c8b1586a7e73',
      pais: paises[0].nomePais
    },
    {
      id: uuidv4(),
      nome: 'Osaka',
      data: '14/05/2018',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      imagem: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/477000/477571-Osaka.jpg',
      pais: paises[1].nomePais
    },
    {
      id: uuidv4(),
      nome: 'Monte Fuji',
      data: '20/05/2018',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      imagem: 'https://www.qualviagem.com.br/wp-content/uploads/2021/02/iStock-1192780580.jpg',
      pais: paises[1].nomePais
    },
    {
      id: uuidv4(),
      nome: 'Naoshima',
      data: '25/05/2018',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      imagem: 'https://dasartes.com.br/dasartes.com.br/wp-content/uploads/2022/10/naoshima-island-5.jpg',
      pais: paises[1].nomePais
    },
    {
      id: uuidv4(),
      nome: 'Tokyo',
      data: '30/05/2018',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      imagem: 'https://content.r9cdn.net/rimg/dimg/ea/d1/34822ae1-city-21033-1647f45cd43.jpg?width=1366&height=768&xhint=1518&yhint=1265&crop=true',
      pais: paises[1].nomePais
    },
    {
      id: uuidv4(),
      nome: 'Olso',
      data: '07/07/2016',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      imagem: 'https://a.cdn-hotels.com/gdcs/production7/d1296/9e2b1691-4f1f-4ccc-902b-f945c05e7dcb.jpg',
      pais: paises[2].nomePais
    },
    {
      id: uuidv4(),
      nome: 'Gudvangen',
      data: '12/07/2016',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      imagem: 'https://mundopraviver.com.br/wp-content/uploads/2020/08/credito-Gisele-Rodrigues-9-1-1024x683.jpg',
      pais: paises[2].nomePais
    },
    {
      id: uuidv4(),
      nome: ' Tromso',
      data: '18/07/2016',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      imagem: 'https://mundopraviver.com.br/wp-content/uploads/2020/08/angela-compagnone-l9cneQNE03Y-unsplash-1024x683.jpg',
      pais: paises[2].nomePais
    },
    {
      id: uuidv4(),
      nome: 'Bergen',
      data: '23/07/2016',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      imagem: 'https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/blt156394aa70c56334/61bc5185130d606170802e59/UK_Bergen_Norway_Header.jpg',
      pais: paises[2].nomePais
    }
  ]

  const [locais, setLocais] = useState(inicial);


  const adicionarNovoLocal = (local) => {
    setLocais([...locais, local])
  }

  function cadastrarPais(novoPais){
    setPaises([...paises, {...novoPais, id: uuidv4()}])
  }

  function mudarCorPrincipalPais(cor, id){
    setPaises(paises.map(pais => {
      if(pais.id === id){
        pais.corPrincipal = cor;
      }
      return pais;
    }))
  }

  function mudarCorSecundariaPais(cor, id){
    setPaises(paises.map(pais => {
      if(pais.id === id){
        pais.corSecundaria = cor;
      }
      return pais;
    }))
  }

  return (
    <div className="App">
      
      <Banner />
      <Formulario
        cadastrarPais={cadastrarPais}
        paises={paises.map(pais => pais.nomePais)}
        novoLocal={local => adicionarNovoLocal(local)}
      />
      
      {paises.map(pais => 
        <Paises
          mudarCorPrincipal={mudarCorPrincipalPais}
          mudarCorSecundaria={mudarCorSecundariaPais}
          key={pais.nomePais}
          nome={pais.nomePais}
          id={pais.id}
          corPrincipal={pais.corPrincipal}
          corSecundaria={pais.corSecundaria}
          locais={locais.filter(local => local.pais === pais.nomePais)}
        />
      )}
    
      <Rodape />

    </div>
  );
}

export default App;
