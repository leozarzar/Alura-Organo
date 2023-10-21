import './PersonCard.css'

const PersonCard = ({color,nome,cargo,imagem}) => {

    return (
        <div className='PersonCard'>
            <div className='divA' style={{backgroundColor: color}}>
                <img src={imagem} alt='Foto de Leonardo Zarzar'/>
            </div>
            <div className='divB'>
                <h4>{nome}</h4>
                <div className='divC'>
                    <h5>{cargo}</h5>
                </div> 
            </div>
        </div>
    )
}

export default PersonCard;