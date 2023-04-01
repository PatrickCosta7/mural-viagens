import Locais from '../Locais';
import './Paises.css';
import hexToRgba from 'hex-to-rgba';

const Paises = (props) => {
    
    var css = {backgroundColor : hexToRgba( props.corPrincipal , '0.75')};

    return (
        (props.locais.length > 0) ? <section className='pais' style={css}>
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
                            descricao={local.descricao}
                            cor={props.corSecundaria}

                        />
                    )
                })}

            </div>

        </section> : ''
    )

}

export default Paises;