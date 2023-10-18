import './Form.css'
import TextField from '../TextField/TextField'

const Form = (args) => {

    return (
        <div>
            <form className='Form'>
                <h2 className='Form-Header'>Preencha os dados para criar o card do colaborador.</h2>
                <TextField label="Nome" placeholder="Digite o seu nome"></TextField>
                <TextField label="Cargo" placeholder="Digite o seu cargo"></TextField>
                <button className='Form-Button'>Criar card</button>
            </form>
        </div>
    )
}

export default Form;