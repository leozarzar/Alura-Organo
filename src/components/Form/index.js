import './Form.css'
import TextField from '../TextField/TextField'
import DropDownField from '../DropDownField'
import Button from "../Button"
import { useState } from 'react'
import dataTimes from '../../data/times'

const Form = (args) => {

    const [Nome, setNome] = useState("");
    const [Cargo, setCargo] = useState("");
    const [Time, setTime] = useState("");

    const receiveData = (event) => {

        event.preventDefault();
        args.saveData({
            nome: Nome,
            cargo: Cargo,
            time: Time
        })
    }

    return (
        <div className='Container'>
            <form onSubmit={receiveData} className='Form'>
                <h2 className='Form-Header'>Preencha os dados para criar o card do colaborador.</h2>
                <TextField value={Nome} setValue={setNome} required={true} label="Nome" placeholder="Digite o seu nome"></TextField>
                <TextField value={Cargo} setValue={setCargo} required={true} label="Cargo" placeholder="Digite o seu cargo"></TextField>
                <DropDownField value={Time} setValue={setTime} required={true} label="Time" list={dataTimes} />
                <Button label="Criar card"></Button>
            </form>
        </div>
    )
}

export default Form;