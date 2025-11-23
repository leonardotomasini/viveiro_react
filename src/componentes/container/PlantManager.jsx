// src/componentes/container/PlantManager.jsx
import React, { useState } from 'react';
import PlantCard from '../presentation/PlantCard';
import AddPlantForm from '../presentation/AddPlantForm'; 
import CardWrapper from '../presentation/CardWrapper';

const PlantManager = ({ profile }) => {
  
  const isDono = profile === 'Dono'; 
  
  // ESTADO INICIAL VAZIO
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
  
  // Função para voltar
  const handleGoBack = () => {
    window.location.reload(); 
  };

  return (
    <div className="plant-manager" style={{ padding: '20px', minHeight: '100vh', backgroundColor: '#f0fff0' }}>
      
      <button onClick={handleGoBack} style={{ marginBottom: '20px', padding: '10px 15px', cursor: 'pointer', background: '#555', color: 'white', border: 'none', borderRadius: '4px' }}>
        ← Voltar
      </button>

      {/* CORRIGIDO: Cor do título preta para leitura */}
      <h1 style={{ color: '#000', textAlign: 'center', marginBottom: '30px' }}>
         Viveiro Digital - Perfil: {profile}
      </h1>
      
      {/* Se for DONO, mostra o formulário */}
      {isDono && (
        <CardWrapper title="Adicionar Nova Planta">
          <AddPlantForm onAddPlant={handleAddPlant} /> 
        </CardWrapper>
      )}
      
      {/* Lista de Plantas */}
      <CardWrapper title={`Catálogo de Plantas (${plantas.length} Espécies):`}>
        {plantas.length === 0 && <p style={{textAlign: 'center', color: '#666'}}>Nenhuma planta cadastrada ainda.</p>}
        
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