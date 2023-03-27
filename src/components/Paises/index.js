import hexToRgba from 'hex-and-rgba';
import Locais from '../Locais';
import './Paises.css';


const Paises = (props) => {
    const css = {backgroundColor:  hexToRgba(props.corPrincipal, '0.5')}


    return (
        <section className='pais'>
            <input value={props.corPrincipal} type='color' className='corPrincipal' />
            <input value={props.corSecundaria} type='color' className='corSecundaria' />
            <h3>{props.nome}</h3>
            <div className='locais'>
                {props.locais.map( local => {
                    return (
                        <Locais 
                            imagem={local.imagem}
                            nome={local.nome}
                            data={local.data}
                            descricaoViagem={local.descricaoViagem}
                            cor={props.corSecundaria}

                        />
                    )
                })}

            </div>

        </section>
    )

}

export default Paises;