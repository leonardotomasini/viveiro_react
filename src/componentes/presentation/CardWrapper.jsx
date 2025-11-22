// CÓDIGO COMPLETO PARA src/componentes/presentation/CardWrapper.jsx
import React from 'react';

// Comentário: Este é um componente de LAYOUT genérico.
// Ele demonstra o uso da prop 'children' para envolver qualquer conteúdo.
const CardWrapper = ({ children, title }) => {
  const wrapperStyle = {
    border: '1px solid #ddd',
    padding: '20px',
    margin: '20px auto',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    maxWidth: '800px'
  };

  return (
    <div style={wrapperStyle}>
      {/* O uso de 'title' demonstra props */}
      {title && <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px', color: '#333' }}>{title}</h2>}
      
      {/* O uso de 'children' permite que o CardWrapper seja reutilizado em qualquer contexto */}
      {children} 
    </div>
  );
};

export default CardWrapper;