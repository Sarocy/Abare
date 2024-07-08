"use client";

import React, { useState } from 'react';
  

const Familia = () => {
    const [opcao, setOpcao] = useState('existente'); 

    const handleOpcaoChange = (event) => {
    setOpcao(event.target.value);
  };

  return (
    <><div className="logo-container cadastro_logo">
    <img src="img/LogoAbare.png" alt="logo" className="logo"></img>
</div>

<div className='body_aluno'>
<div className='menu_opcoes'>
            <div className="botao_menu_opcoes">
              <a href="http://localhost:3000/aluno" className="btn_menu_opcoes btn_pagina">Aluno</a>
              {/* <div className="horizontal-line"></div> */}
            </div>
            <div className="botao_menu_opcoes">
              <a href="http://localhost:3000/turma" className="btn_menu_opcoes btn_pagina">Turma</a>
              {/* <div className="horizontal-line"></div> */}
            </div>
            <div className="botao_menu_opcoes">
              <a href="http://localhost:3000/familia" className="btn_menu_opcoes btn_pagina">Familia</a>
              {/* <div className="horizontal-line"></div> */}
            </div>
            <div className="botao_menu_opcoes">
              <a href="http://localhost:3000/confirmacao" className="btn_menu_opcoes">Confirmação</a>
              {/* <div className="horizontal-line"></div> */}
            </div>
          </div>
<div className='escopo'>
    <div className="banner-foto" id='foto_form'>
                    <img src="img/3.png" className="foto"></img>
    </div>
    <section className='container_selecao_cadastro'>
        <div className='opcao_cadastro'>
              <label className='opcao_cadastro_un'>
                <input 
                  type="radio" 
                  value="existente" 
                  checked={opcao === 'existente'} 
                  onChange={handleOpcaoChange} 
                />
                Selecionar Familia Existente
              </label>
              <label className='opcao_cadastro_un'>
                <input 
                  type="radio" 
                  value="nova" 
                  checked={opcao === 'nova'} 
                  onChange={handleOpcaoChange} 
                />
                Cadastrar Nova Familia
              </label>
            </div>

            {opcao === 'existente' && (
              <div>
                <h2 className='opcao_cadastro_texto'>Selecionar Familia Existente</h2>
                <select>
                  <option value="Familia1">Familia 1</option>
                  <option value="Familia2">Familia 2</option>
                </select>
              </div>
            )}

            {opcao === 'nova' && (
              <div>
                <h2 className='opcao_cadastro_texto'>Cadastrar Nova Familia</h2>
                <table className="cadastro-tabela">
                  <tbody>
                    <tr>
                      <td><label htmlFor="nomeFamilia">Nome da Familia:</label></td>
                      <td><input type="text" id="nomeFamilia" name="nomeFamilia" required /></td>
                    </tr>
                    <tr>
                      <td><label htmlFor="descricao">Descrição:</label></td>
                      <td><textarea id="descricao" name="descricao" required></textarea></td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            )}
            </section>
</div>
</div>

<footer className="footer">
    <p>&copy; 2024 Abare Technology. Todos os direitos reservados.</p>
</footer></> 
    
  )
}

export default Familia;