import { useState } from 'react';
import Campo from '../Campo';
import Botao from '../Botao';
import ListaPaises from '../ListaPaises';
import './Formulario.css';

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [imagem, setImagem] = useState('');
    const [descricao, setDescricao] = useState('');
    const [pais, setPais] = useState('');
    const [nomePais, setNomePais] = useState('');
    const [corPrincipal, setCorPrincipal] = useState('');
    const [corSecundaria, setCorSecundaria] = useState('');

    const salvandoViagem = (evento) => {
        evento.preventDefault();
        props.novoLocal({
            nome,
            data,
            imagem, 
            descricao,
            pais
        })
        setNome('');
        setData('');
        setImagem('');
        setDescricao('');
        setPais('');
    }

    const salvandoPais = (evento) => {
        evento.preventDefault();
        props.cadastrarPais({
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
                    type='date'
                    label="Data da viajem"
                    valor={data}
                    aoAlterado={valor => setData(valor)}
                />

                <Campo
                    obrigatorio
                    label="Descrição"
                    placeholder="Descreva sua viagem"
                    valor={descricao}
                    aoAlterado={valor => setDescricao(valor)}
                />

                <Campo
                    obrigatorio
                    label="Imagem"
                    placeholder="Digite o link para a imagem de sua viagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaPaises
                    obrigatorio
                    label="Selecione aqui o País visitado"
                    itens={props.paises}
                    valor={pais}
                    aoAlterado={valor => setPais(valor)}
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