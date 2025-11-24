// src/componentes/container/PlantManager.jsx
import React, { useState, useEffect } from 'react';
import PlantCard from '../presentation/PlantCard';
import AddPlantForm from '../presentation/AddPlantForm'; 
import CardWrapper from '../presentation/CardWrapper';

const PlantManager = ({ profile }) => {
  
  const isDono = profile === 'Dono'; 
  
  // 1. ESTADO COM LOCALSTORAGE
  // Começa vazio ou com o que o usuário salvou antes
  const [plantas, setPlantas] = useState(() => {
    const savedPlants = localStorage.getItem('meuViveiroDigital');
    return savedPlants ? JSON.parse(savedPlants) : [];
  });

  // 2. SALVAR AUTOMATICAMENTE
  useEffect(() => {
    localStorage.setItem('meuViveiroDigital', JSON.stringify(plantas));
  }, [plantas]);

  // ADICIONAR
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

  // DELETAR
  const handleDeletePlant = (id) => {
    if (window.confirm('Tem certeza que deseja excluir esta planta?')) {
      setPlantas(plantas.filter(p => p.id !== id));
    }
  };

  // EDITAR
  const handleEditPlant = (id, novosDados) => {
    setPlantas(plantas.map(p => p.id === id ? { ...p, ...novosDados } : p));
  };
  
  // LIMPAR TUDO (Opcional, mas útil para o Dono zerar a lista)
  const handleClearAll = () => {
    if(window.confirm('Tem certeza que deseja apagar TODAS as plantas?')) {
        setPlantas([]);
    }
  };

  const handleGoBack = () => {
    window.location.reload(); 
  };

  return (
    <div className="plant-manager" style={{ padding: '20px', minHeight: '100vh', backgroundColor: '#f0fff0' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <button onClick={handleGoBack} style={{ padding: '10px 15px', cursor: 'pointer', background: '#555', color: 'white', border: 'none', borderRadius: '4px' }}>
          ← Voltar
        </button>

        {isDono && plantas.length > 0 && (
            <button onClick={handleClearAll} style={{ padding: '10px', cursor: 'pointer', background: '#d32f2f', color: 'white', border: 'none', borderRadius: '4px' }}>
                Limpar Tudo
            </button>
        )}
      </div>

      <h1 style={{ color: '#000', textAlign: 'center', marginBottom: '30px' }}>
        💚 Viveiro Digital - Perfil: {profile}
      </h1>
      
      {isDono && (
        <CardWrapper title="Adicionar Nova Planta">
          <AddPlantForm onAddPlant={handleAddPlant} /> 
        </CardWrapper>
      )}
      
      <CardWrapper title={`Catálogo de Plantas (${plantas.length} Espécies):`}>
        {plantas.length === 0 && <p style={{textAlign: 'center', color: '#666'}}>Nenhuma planta cadastrada.</p>}
        
        {plantas.map(planta => (
          <PlantCard
            key={planta.id}
            id={planta.id}
            nome={planta.nome}
            especie={planta.especie}
            foto={planta.foto}
            sobre={planta.sobre}
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