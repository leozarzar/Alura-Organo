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
      <Form saveData={(pessoa) => setPessoas([...pessoas,pessoa])} />
      <h1>{JSON.stringify(pessoas)}</h1> 
      {dataTimes.map((time) => <TeamBanner nome={time} />)}
    </div>
  );
}

export default App;
