import './Locais.css'

const Locais = (props) => {
    
    return(
        <div className='local'>
            <div className='cabecalho'>
                <img src={props.imagem} alt={props.nome} />
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.data}</h5>
                <h5>{props.descricao}</h5>
                
            </div>

        </div>
    )

}


export default Locais;