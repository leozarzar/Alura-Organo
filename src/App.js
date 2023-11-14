import { useState } from 'react';
import './App.css'
import Banner from './components/Banner/Banner';
import Form from './components/Form';
import dataPessoas from "./data/pessoas.js"
import TeamBanner from './components/TeamBanner';
import dataTimes from './data/times';

function App() {

  const [pessoas,setPessoas] = useState(dataPessoas);

  const deletePessoa = (nome) => {

    const newSet = pessoas.filter(pessoa => pessoa.nome !== nome);
    localStorage.setItem("pessoas",JSON.stringify(newSet));
    setPessoas(newSet);
  }

  const likePessoa = (nome) => {

    const newSet = pessoas.map((pessoa) => {
      if(pessoa.nome === nome) pessoa.fav = pessoa.fav === true ? false : true;
      return pessoa;
    });
    localStorage.setItem("pessoas",JSON.stringify(newSet));
    setPessoas(newSet);
  }

  return (
    <div className="App">
      <Banner/>
      <Form times={dataTimes.map(time => time.nome)} saveData={(pessoa) => setPessoas([...pessoas,pessoa])} />
      {dataTimes.map((time) => <TeamBanner time={time} key={time.nome} pessoas={pessoas.filter( pessoa => pessoa.time === time.nome)} deletePessoa={deletePessoa} likePessoa={likePessoa}/>)}
    </div>
  );
}

export default App;
