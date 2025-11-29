import React from 'react';

// Componente genérico de layout (substitui o CardWrapper)
const ContainerEstilizado = ({ children, titulo }) => {
  const estiloContainer = {
    border: '1px solid #ddd',
    padding: '20px',
    margin: '20px auto',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    maxWidth: '800px'
  };

  return (
    <div style={estiloContainer}>
      {/* Título opcional */}
      {titulo && <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px', color: '#333' }}>{titulo}</h2>}
      
      {/* Conteúdo dinâmico (children) */}
      {children} 
    </div>
  );
};

export default ContainerEstilizado;