import { useState } from 'react';
import './App.css'
import Banner from './components/Banner/Banner';
import Form from './components/Form';
import dataPessoas from "./data/pessoas.js"
import TeamBanner from './components/TeamBanner';
import dataTimes from './data/times';

function App() {

  const [pessoas,setPessoas] = useState(dataPessoas);

  return (
    <div className="App">
      <Banner/>
      <Form times={dataTimes.map(time => time.nome)} saveData={(pessoa) => setPessoas([...pessoas,pessoa])} />
      {dataTimes.map((time) => <TeamBanner time={time} key={time.nome} pessoas={pessoas.filter( pessoa => pessoa.time === time.nome)}/>)}
    </div>
  );
}

export default App;
