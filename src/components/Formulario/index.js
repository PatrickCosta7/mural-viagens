import { useState } from 'react';
import Campo from '../Campo';
import Botao from '../Botao';
import './Formulario.css';

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [viagem, setViagem] = useState('');
    const [nomePais, setNomePais] = useState('');
    const [corPrincipal, setCorPrincipal] = useState('');
    const [corSecundaria, setCorSecundaria] = useState('');

    const salvandoViagem = (evento) => {
        evento.preventDefault();
        props.novoLocal({
            nome,
            data, 
            viagem
        })
        setNome('');
        setData('');
        setViagem('');

    }

    const salvandoPais = (evento) => {
        evento.preventDefault();
        props.novoLocal({
            nomePais, 
            corPrincipal,
            corSecundaria
        })
        setNomePais('');
        setCorPrincipal('');
        setCorSecundaria('');
    }

    return(
        <section className='formulario'>
            <form onSubmit={salvandoViagem}>
                <h2>Preencha os dados para postar sua viagem no mural</h2>
                <Campo
                    obrigatorio
                    label="Nome"
                    placeholder="Digite aqui o nome do local"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <Campo
                    obrigatorio
                    label="Descrição"
                    placeholder="Descreva sua viagem"
                    valor={viagem}
                    aoAlterado={valor => setViagem(valor)}
                />

                <Campo
                    obrigatorio
                    type='date'
                    label="Data da viajem"
                    valor={data}
                    aoAlterado={valor => setData(valor)}
                />

                

                <Botao>
                    Fixar viagem
                </Botao>

            </form>

            <form onSubmit={salvandoPais}>
                <h2>Adicione um pais viajado</h2>
                <Campo
                    obrigatorio
                    label="Nome do País"
                    placeholder="Digite aqui o nome do País"
                    valor={nomePais}
                    aoAlterado={valor => setNomePais(valor)}
                />

                <Campo
                    obrigatorio
                    type='color'
                    label="Cor principal"
                    valor={corPrincipal}
                    aoAlterado={valor => setCorPrincipal(valor)}
                />
                
                <Campo
                    obrigatorio
                    type='color'
                    label="Cor Secundária"
                    valor={corSecundaria}
                    aoAlterado={valor => setCorSecundaria(valor)}
                />

                <Botao>
                    Adicionar País
                </Botao>

            </form>

        </section>
    )

};

export default Formulario;