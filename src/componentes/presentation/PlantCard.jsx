import React from 'react';

// 1. Este componente é um PRESENTER (Apresentação). Ele recebe
//    TODOS os dados e funções via PROPS.
const PlantCard = ({ id, nome, especie, watered, onToggleWatered }) => {
  // Uso de CSS inline para demonstração visual
  const cardStyle = {
    padding: '10px',
    margin: '15px 0',
    border: `2px solid ${watered ? 'green' : 'brown'}`,
    borderRadius: '8px',
    backgroundColor: watered ? '#e6ffe6' : '#fff0e6',
    maxWidth: '400px'
  };

  return (
    <div style={cardStyle}>
      <h3>{nome}</h3>
      <p>Espécie: {especie}</p>
      
      {/* Exibe o status */}
      <p>Status de Rega: 
        <strong>{watered ? ' 🌱 Regada' : ' 💧 Precisa Regar'}</strong>
      </p>

      {/* 2. Uso de props: O botão chama a função de LÓGICA fornecida pelo Container via props */}
      <button 
        onClick={() => onToggleWatered(id)}
        style={{ padding: '8px', cursor: 'pointer', background: 'lightblue', border: 'none' }}
      >
        {watered ? 'Desfazer Rega' : 'REGAR Planta'}
      </button>
      
      {/* Adicionei um comentário explicativo aqui, conforme a atividade pediu */}
      {/* Comentário: Este componente não contém lógica de estado; ele apenas renderiza a UI baseada nas props e dispara a ação onToggleWatered. */}
    </div>
  );
};

export default PlantCard;