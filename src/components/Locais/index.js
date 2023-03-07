import './Locais.css'

const Locais = (props) => {
    
    return(
        <div className='local'>
            <div className='cabecalho'>
                <img src={props.imagem} alt={props.nome} />
            </div>
            <div className='rodape'>
                

            </div>

        </div>
    )

}


export default Locais;