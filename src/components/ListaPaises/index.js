import './ListaPaises.css';

const ListaPaises = ({obrigatorio, label, valor, aoAlterado, itens}) => {

    return (
        <div className='lista-paises'>
            <label>{label}</label>
            <select onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio} value={valor}>
                <option value=""></option>
                {itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )

}


export default ListaPaises;