// src/componentes/container/PlantManager.jsx
import React, { useState, useEffect } from 'react';
import PlantCard from '../presentation/PlantCard';
import AddPlantForm from '../presentation/AddPlantForm'; 
import CardWrapper from '../presentation/CardWrapper';

const PlantManager = ({ profile }) => {
  
  const isDono = profile === 'Dono'; 
  
  const [plantas, setPlantas] = useState(() => {
    const savedPlants = localStorage.getItem('meuViveiroDigital');
    return savedPlants ? JSON.parse(savedPlants) : [];
  });

  useEffect(() => {
    localStorage.setItem('meuViveiroDigital', JSON.stringify(plantas));
  }, [plantas]);

  // ADICIONAR (Agora com 'sobre')
  const handleAddPlant = (nome, especie, foto, sobre) => {
    const newPlant = {
      id: Date.now(),
      nome,
      especie,
      foto,
      sobre
    };
    setPlantas([...plantas, newPlant]);
  };

  // NOVO: DELETAR
  const handleDeletePlant = (id) => {
    if (window.confirm('Tem certeza que deseja excluir esta planta?')) {
      setPlantas(plantas.filter(p => p.id !== id));
    }
  };

  // NOVO: EDITAR
  const handleEditPlant = (id, novosDados) => {
    setPlantas(plantas.map(p => p.id === id ? { ...p, ...novosDados } : p));
  };
  
  const handleGoBack = () => {
    window.location.reload(); 
  };

  return (
    <div className="plant-manager" style={{ padding: '20px', minHeight: '100vh', backgroundColor: '#f0fff0' }}>
      
      <button onClick={handleGoBack} style={{ marginBottom: '20px', padding: '10px 15px', cursor: 'pointer', background: '#555', color: 'white', border: 'none', borderRadius: '4px' }}>
        ← Voltar
      </button>

      <h1 style={{ color: '#000', textAlign: 'center', marginBottom: '30px' }}>
        💚 Viveiro Digital - Perfil: {profile}
      </h1>
      
      {isDono && (
        <CardWrapper title="Adicionar Nova Planta">
          <AddPlantForm onAddPlant={handleAddPlant} /> 
        </CardWrapper>
      )}
      
      <CardWrapper title={`Catálogo de Plantas (${plantas.length} Espécies):`}>
        {plantas.length === 0 && <p style={{textAlign: 'center', color: '#666'}}>Nenhuma planta cadastrada ainda.</p>}
        
        {plantas.map(planta => (
          <PlantCard
            key={planta.id}
            // Passamos todos os dados da planta
            id={planta.id}
            nome={planta.nome}
            especie={planta.especie}
            foto={planta.foto}
            sobre={planta.sobre}
            // Passamos permissão e funções de ação
            isDono={isDono}
            onDelete={handleDeletePlant}
            onEdit={handleEditPlant}
          />
        ))}
      </CardWrapper>
    </div>
  );
};

export default PlantManager;