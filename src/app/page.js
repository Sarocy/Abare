

export default function Home() {
  return (
    <body>
        <header>
        <div className="container">
            <nav className="nav-bar">
                <div className="logo-container">
                    <img src="img/LogoAbare.png" alt="logo" className="logo"></img>
                </div>

                <div className="buttons">
                    <a href="#section1" className="btn sign-in">Login</a>
                </div>
            </nav>

            <nav className="banner">
                <div className="banner-text">
                    <h1>O cenário educacional que nos conecta</h1>
                    <p>Te ajudando a gerir e integrar pessoas no contexto escola-família</p>
                    
                </div>
                <div className="banner-foto">
                    <img src="img/3.png" className="foto"></img>
                </div>
            </nav>
           
        </div>

        <section className="container_corpo_login" id="section1">
            <section className="container_login">
                <div className="corpo_texto">
                    <h2>
                        Bem-vindo, <br></br>administrador!
                    </h2>
                </div>

                <div className="vertical-line"></div>
            </section>



                <section className="formulario">
                        <form className="form">
                            <input type="email" id="email" name="email" placeholder="E-mail" required></input>

                            <input type="password" id="password" name="password" placeholder="Senha" required></input>
                          
                            <input type="submit" value="Connect"></input>
                          </form>
                          
                </section>


        </section>


        <footer className="footer">
            <p>&copy; 2024 Abare Technology. Todos os direitos reservados.</p>
        </footer>  
        

        </header>

      </body>
  );
}
