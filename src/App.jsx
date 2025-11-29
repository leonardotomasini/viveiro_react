import React, { useState } from 'react';
import SeletorPerfil from './componentes/presentation/SeletorPerfil';
import GerenciadorPlantas from './componentes/container/GerenciadorPlantas';
import './index.css';
import './App.css';

function App() {
  // Estado que guarda o perfil selecionado: null, 'Dono', ou 'Visitante'
  const [perfil, setPerfil] = useState(null); 

  // Função passada para o seletor para mudar o estado
  const aoSelecionarPerfil = (perfilSelecionado) => {
    setPerfil(perfilSelecionado);
  };

  let conteudo;

  if (perfil === null) {
    // Se perfil for null, mostra a tela de escolha
    conteudo = <SeletorPerfil aoSelecionarPerfil={aoSelecionarPerfil} />;
  
  } else {
    // Se perfil for 'Dono' ou 'Visitante', mostra o Viveiro
    conteudo = <GerenciadorPlantas perfil={perfil} />; 
  }

  return (
    <div className="App" style={{ backgroundColor: '#f0fff0', minHeight: '100vh' }}>
      {conteudo}
    </div>
  );
}

export default App;