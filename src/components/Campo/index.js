import './Campo.css'

const Campo = ({label, valor, placeholder, obrigatorio, aoAlterado}) => {
    
    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return(
        <div className='campo'>
            <label>
                {label}
            </label>
            <input
                required={obrigatorio}
                value={valor}
                placeholder={placeholder}
                onChange={aoDigitado}
            />

        </div>
    )

}

export default Campo;