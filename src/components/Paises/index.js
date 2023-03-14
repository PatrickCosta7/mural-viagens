import Locais from '../Locais';
import './Mural.css';

const Paises = (props) => {
    
    return (
        <section className='mural'>
            <input value={props.corPrincipal} type='color' className='corPrincipal' />
            <input value={props.corSecundaria} type='color' className='corSecundaria' />
            <h3>{props.nome}</h3>
            <div className='locais'>
                {props.local.map( local => {
                    return (
                        <Locais 
                            imagem={props.imagem}
                        />
                    )
                })}

            </div>

        </section>
    )

}

export default Paises;