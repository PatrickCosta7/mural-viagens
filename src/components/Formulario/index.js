import { useState } from 'react';
import Campo from '../Campo';
import Botao from '../Botao';
import './Formulario.css';

const Formulario = (props) => {

    const [nome, setNome] = useState('');

    const salvando = (evento) => {
        evento.preventDefault();
        props.novoLocal({
            nome
        })
        setNome('');

    }

    return(
        <section className='formulario'>
            <form onSubmit={salvando}>
                <h2>Preencha os dados para postar sua viagem no mural</h2>
                <Campo
                    obrigatorio
                    label="Nome"
                    placeholder="Digite aqui o nome do local"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <Botao>
                    Fixar viagem
                </Botao>

            </form>
        </section>
    )

};

export default Formulario;