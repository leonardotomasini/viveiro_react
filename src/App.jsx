import React, { useState } from 'react';
import SeletorPerfil from './componentes/presentation/SeletorPerfil';
import GerenciadorPlantas from './componentes/container/GerenciadorPlantas';
import './index.css';
import './App.css';

// Componente Principal.
// Funciona como o ponto de entrada e roteador do viveiro.
// Serve para gerenciar qual tela o usuário vê.
function App() {
  
  // Aqui tem o estado do perfil que armazena a escolha do usuário. no null usuário ainda não escolheu, que é na seleção.
  // Dono o usuário é o administrador, mostrando a mostra tela com CRUD.
  // O usuário é visitante mostra apenas vizualização sem o CRUD.
  const [perfil, setPerfil] = useState(null); 

  // Essa função é passada para o componente filho (SeletorPerfil) o botão é clicado lá dentro, essa função roda aqui e atualiza o estado.
  const aoSelecionarPerfil = (perfilSelecionado) => {
    setPerfil(perfilSelecionado);
  };

  // Essa variável serve para armazenar o conteúdo a ser renderizado.
  let conteudo;

  // Aqui ocorre a renderização Condicional (Logica de Navegação):
  if (perfil === null) {
    // Se não tiver perfil, mostra o componente da seleção.
    conteudo = <SeletorPerfil aoSelecionarPerfil={aoSelecionarPerfil} />;
  } else {
    // já tendo perfil, mostra o Container Principal. 
    conteudo = <GerenciadorPlantas perfil={perfil} />; 
  }

  return (
    <div className="App" style={{ backgroundColor: '#f0fff0', minHeight: '100vh' }}>
      {conteudo}
    </div>
  );
}

export default App;