import './Rodape.css';


const Rodape = () => {
    
    return(
        <footer className='footer'>

            <section>
                <ul>
                    <li>
                        <a href='#' target='_blank'>
                            <img src='/imagens/fb.png' alt='Facebook'/>
                        </a>
                    </li>
                    <li>
                        <a href='#' target='_blank'>
                            <img src='/imagens/tw.png' alt='Twitter'/>
                        </a>
                    </li>
                    <li>
                        <a href='#' target='_blank'>
                            <img src='/imagens/ig.png' alt='Instagram'/>
                        </a>
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


