import './Locais.css'

const Locais = (props) => {
    
    return(
        <div className='local'>
            <div className='cabecalho' style={{ backgroundColor: props.cor }}>
                <img src={props.imagem} alt={props.nome} />
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.data}</h5>   
                <h5>{props.descricaoViagem}</h5>
                
            </div>

        </div>
    )

}


export default Locais;