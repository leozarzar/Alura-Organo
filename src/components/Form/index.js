import './Form.css'
import TextField from '../TextField/TextField'
import DropDownField from '../DropDownField'
import Button from "../Button"
import { useState } from 'react'

const Form = ({times,saveData}) => {

    const [Nome, setNome] = useState("");
    const [Cargo, setCargo] = useState("");
    const [Imagem, setImagem] = useState("https://github.com/.png");
    const [Time, setTime] = useState("");

    const receiveData = (event) => {

        event.preventDefault();
        saveData({
            nome: Nome,
            cargo: Cargo,
            imagem: Imagem,
            time: Time
        })

        setNome('');
        setCargo('');
        setImagem("https://github.com/.png");
        setTime('');
    }

    return (
        <div className='Container'>
            <form onSubmit={receiveData} className='Form'>
                <h2 className='Form-Header'>Preencha os dados para criar o card do colaborador.</h2>
                <TextField value={Nome} setValue={setNome} required={true} label="Nome" placeholder="Digite o seu nome"></TextField>
                <TextField value={Cargo} setValue={setCargo} required={true} label="Cargo" placeholder="Digite o seu cargo"></TextField>
                <TextField value={Imagem} setValue={setImagem} required={true} label="Imagem" placeholder="Digite endereço da imagem"></TextField>
                <DropDownField value={Time} setValue={setTime} required={true} label="Time" list={times} placeholder="Escolha um time"/>
                <Button label="Criar card"></Button>
            </form>
        </div>
    )
}

export default Form;