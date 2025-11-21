import React, { useState } from 'react';
import PlantCard from '../presentation/PlantCard'; // Importa o Presenter!

// 1. Este componente é o CONTAINER (Inteligente).
// Ele cuida da LÓGICA DE NEGÓCIO e do ESTADO central do viveiro.
const PlantManager = () => {
  const [plantas, setPlantas] = useState([
    { id: 1, nome: 'Pé de Alface', especie: 'Lactuca sativa', watered: false },
    { id: 2, nome: 'Tomate Cereja', especie: 'Solanum lycopersicum', watered: true },
    { id: 3, nome: 'Cacto Mandacaru', especie: 'Cereus jamacaru', watered: false },
  ]);

  // Lógica para Regar (Demonstra Imutabilidade: cria um NOVO array)
  const handleToggleWatered = (id) => {
    setPlantas(plantas.map(p =>
      p.id === id ? { ...p, watered: !p.watered } : p
    ));
  };
  
  // (Futuramente, Adicionaremos o handleAddPlant aqui)

  return (
    <div className="plant-manager" style={{ padding: '20px' }}>
      <h1>🌱 Viveiro Digital (Container Principal)</h1>
      <p>Demonstração do Padrão Container/Presenter:</p>

      {/* 2. O Container renderiza os Presenters e passa dados/funções via props */}
      {plantas.map(planta => (
        <PlantCard
          key={planta.id}
          id={planta.id}
          nome={planta.nome}
          especie={planta.especie}
          watered={planta.watered}
          // Passando a função de LÓGICA como prop para o Presenter:
          onToggleWatered={handleToggleWatered} 
        />
      ))}
    </div>
  );
};

export default PlantManager;