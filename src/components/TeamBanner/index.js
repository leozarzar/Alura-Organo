import './TeamBanner.css';
import PersonCard from '../PersonCard';

const TeamBanner = ({time,pessoas,deletePessoa,likePessoa}) => {

    return (
        pessoas.length > 0 && <section className='TeamBanner' style={{backgroundColor: time.bannerColor}}>
            <h3 style={{borderBottomColor: time.cardColor}} >{time.nome}</h3>
            <div className='Cards'>
                {pessoas.map((pessoa) => <PersonCard key={pessoa.nome} color={time.cardColor} nome={pessoa.nome} cargo={pessoa.cargo} imagem={pessoa.imagem} fav={pessoa.fav} deletePessoa={deletePessoa} likePessoa={likePessoa}/>)}
            </div>
        </section>
    )
}

export default TeamBanner;