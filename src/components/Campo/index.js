import './Campo.css'

const Campo = ({label, valor, placeholder, obrigatorio, aoAlterado, type="text"}) => {
    
    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return(
        <div className={`campo campo-${type}`}>
            <label>
                {label}
            </label>
            <input
                required={obrigatorio}
                type={type}
                value={valor}
                placeholder={placeholder}
                onChange={aoDigitado}
            />

        </div>
    )

}

export default Campo;