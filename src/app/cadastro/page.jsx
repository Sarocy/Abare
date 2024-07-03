import  React from 'react';

const Cadastro = () => {
  return (
    <>
    <div className="logo-container cadastro_logo">
                    <img src="img/LogoAbare.png" alt="logo" className="logo"></img>
    </div>

    <div className='body_home'>
      <div className='home'>
        <div className="espelho">
          <section className="espelho_cabecalho">
              <h2 className='espelho_titulo'>Aluno</h2>
              <div className="botao_espelho">
                    <a href="" className="btn_espelho">Adicionar +</a>
              </div>

          </section>
          <section className="espelho_dados">
          <div className='cadastro-table-container'>
              <table className="cadastro-table"></table>
            </div>
          </section>
        </div>

        <div className="espelho">
          <section className="espelho_cabecalho">
              <h2 className='espelho_titulo'>Profissional</h2>
              <div className="botao_espelho">
                    <a href="" className="btn_espelho">Adicionar +</a>
              </div>

          </section>
          <section className="espelho_dados">
            <div className='cadastro-table-container'>
              <table className="cadastro-table"></table>
            </div>
          </section>
        </div>
      </div>      

      </div>

    <footer className="footer">
        <p>&copy; 2024 Abare Technology. Todos os direitos reservados.</p>
      </footer></>  
  );
};

export default Cadastro;
