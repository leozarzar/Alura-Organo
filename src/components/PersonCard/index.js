import './PersonCard.css'

const PersonCard = ({color,nome,cargo,imagem,fav,likePessoa,deletePessoa}) => {

    const clickedDelete = (event) => {

        deletePessoa(nome);
    }

    const clickedLike = (event) => {

        likePessoa(nome);
    }

    return (
        <div className='PersonCard'>
            <div className='divA' style={{backgroundColor: color}}>
                <div className='divD'>
                    <button className='like-button' onClick={clickedLike}> <i className={`${fav === true ? "fa-solid" : "fa-regular"} fa-heart`}></i> </button>
                    <button className='delete-button' onClick={clickedDelete}> <i className="fa-solid fa-xmark"></i> </button>
                </div>
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