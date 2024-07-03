import  React from 'react';

const Aluno = () => {
  return (
    <>  <div className="logo-container cadastro_logo">
            <img src="img/LogoAbare.png" alt="logo" className="logo"></img>
        </div>

        <div className='body_aluno'>
            <section className='cabecalho'>
                <div className='menu_opcoes'>
                    <div className="botao_menu_opcoes">
                        <a href="" className="btn_menu_opcoes btn_pagina">Aluno</a>
                        <div class="horizontal-line"></div>
                    </div>
                    <div className="botao_menu_opcoes">
                        <a href="" className="btn_menu_opcoes">Turma</a>
                        <div class="horizontal-line"></div>
                    </div>
                    <div className="botao_menu_opcoes">
                        <a href="" className="btn_menu_opcoes">Familia</a>
                        <div class="horizontal-line"></div>
                    </div>
                    <div className="botao_menu_opcoes">
                        <a href="" className="btn_menu_opcoes">Confirmação</a>
                        <div class="horizontal-line"></div>
                    </div>
                </div>
            </section>

            <div className='escopo'>
                <form>
                    <table className="cadastro-tabela">
                        <tbody>
                            <tr>
                                <td><label htmlFor="nome">Nome:</label></td>
                                <td><input type="text" id="nome" name="nome" required /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="dataNascimento">Data de Nascimento:</label></td>
                                <td><input type="date" id="dataNascimento" name="dataNascimento" required /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="email">E-mail:</label></td>
                                <td><input type="email" id="email" name="email" required /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="telefone">Telefone:</label></td>
                                <td><input type="tel" id="telefone" name="telefone" required /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="endereco">Endereço:</label></td>
                                <td><input type="text" id="endereco" name="endereco" required /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="curso">Curso:</label></td>
                                <td>
                                    <select id="curso" name="curso" required>
                                    <option value="">Selecione o curso</option>
                                    <option value="curso1">Curso 1</option>
                                    <option value="curso2">Curso 2</option>
                                    <option value="curso3">Curso 3</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='submit-button_container'>
                                    <button type="submit" className="submit-button">Próximo</button>
                            
                </div>
                </form>
                

            </div>
        </div>

        <footer className="footer">
            <p>&copy; 2024 Abare Technology. Todos os direitos reservados.</p>
        </footer></> 


  );
};

export default Aluno;