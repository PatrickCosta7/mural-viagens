import './Rodape.css';


const Rodape = () => {
    
    return(
        <footer className='footer'>

            <section>
                <ul>
                    <li>
                        <button>
                            <img src='/imagens/fb.png' alt='Facebook'/>
                        </button>
                    </li>
                    <li>
                        <button>
                            <img src='/imagens/tw.png' alt='Twitter'/>
                        </button>
                    </li>
                    <li>
                        <button>
                            <img src='/imagens/ig.png' alt='Instagram'/>
                        </button>
                    </li>

                </ul>
            </section>
            
            <section className='copy'>
                <img src='/imagens/copy.png' alt='copyright' className='cp'/>
                <p>2023 copyright </p>
            </section>

            <section>
                <p>LOGO</p>
            </section>
            
        </footer>
    )

}

export default Rodape;


