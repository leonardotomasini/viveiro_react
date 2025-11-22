// CÓDIGO COMPLETO PARA src/App.jsx
import React, { useState } from 'react';
import PlantManager from './componentes/container/PlantManager';
import ProfileSelector from './componentes/presentation/ProfileSelector';
// Não precisa importar index.css/App.css aqui, pois já estão no main.jsx

function App() {
  // Estado que guarda o perfil selecionado: null, 'Dono', ou 'Visitante'
  const [profile, setProfile] = useState(null); 

  // Função passada para o seletor para mudar o estado
  const handleSelectProfile = (selectedProfile) => {
    setProfile(selectedProfile);
  };

  let content;

  if (profile === null) {
    // Se profile for null, mostra a tela de escolha
    content = <ProfileSelector onSelectProfile={handleSelectProfile} />;
  
  } else {
    // Se profile for 'Dono' ou 'Visitante', mostra o Viveiro
    // Passamos o perfil como prop para o PlantManager
    content = <PlantManager profile={profile} />; 
  }

  return (
    // Adiciona um estilo básico para garantir a cor de fundo e altura mínima (solução para o fundo escuro)
    <div className="App" style={{ backgroundColor: '#f0fff0', minHeight: '100vh' }}>
      {content}
    </div>
  );
}

export default App;