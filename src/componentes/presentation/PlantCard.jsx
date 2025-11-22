// src/componentes/presentation/PlantCard.jsx
import React from 'react';

// Agora o card é simples: só recebe Nome e Espécie
const PlantCard = ({ nome, especie }) => {
  
  const cardStyle = {
    padding: '15px',
    margin: '10px 0',
    border: '1px solid #ddd', // Borda cinza simples
    borderRadius: '8px',
    backgroundColor: 'white', // Fundo branco limpo
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  };
  
  return (
    <div style={cardStyle}>
      <h4 style={{ margin: '0 0 5px 0', color: '#333' }}>{nome}</h4>
      <p style={{ margin: '0', color: '#666', fontStyle: 'italic' }}>Espécie: {especie}</p>
    </div>
  );
};

export default PlantCard;