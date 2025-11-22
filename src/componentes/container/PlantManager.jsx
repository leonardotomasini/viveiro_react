// src/componentes/container/PlantManager.jsx
import React, { useState } from 'react';
import PlantCard from '../presentation/PlantCard';
import AddPlantForm from '../presentation/AddPlantForm'; 
import CardWrapper from '../presentation/CardWrapper';

const PlantManager = ({ profile }) => {
  
  const isDono = profile === 'Dono'; 
  
  // ESTADO INICIAL VAZIO (Sem plantas pré-cadastradas)
  const [plantas, setPlantas] = useState([]);

  // Lógica de ADIÇÃO
  const handleAddPlant = (nome, especie) => {
    const newPlant = {
      id: Date.now(),
      nome,
      especie
    };
    setPlantas([...plantas, newPlant]);
  };
  
  // Função para voltar ao menu
  const handleGoBack = () => {
    window.location.reload(); 
  };

  return (
    <div className="plant-manager" style={{ padding: '20px', minHeight: '100vh' }}>
      <button onClick={handleGoBack} style={{ marginBottom: '20px', padding: '10px', cursor: 'pointer', background: '#ccc', border: 'none', borderRadius: '4px' }}>
        ← Voltar para Seleção
      </button>

      <h1>💚 Viveiro Digital - Perfil: {profile}</h1>
      
      {/* Se for DONO, mostra o formulário de adicionar */}
      {isDono && (
        <CardWrapper title="Adicionar Nova Planta">
          <AddPlantForm onAddPlant={handleAddPlant} /> 
        </CardWrapper>
      )}
      
      {/* Lista de Plantas (Começa vazia e enche conforme você adiciona) */}
      <CardWrapper title={`Catálogo de Plantas (${plantas.length} Espécies):`}>
        {plantas.length === 0 && <p style={{textAlign: 'center', color: '#888'}}>Nenhuma planta cadastrada ainda.</p>}
        
        {plantas.map(planta => (
          <PlantCard
            key={planta.id}
            nome={planta.nome}
            especie={planta.especie}
          />
        ))}
      </CardWrapper>
    </div>
  );
};

export default PlantManager;