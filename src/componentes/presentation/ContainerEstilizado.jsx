import React from 'react';

// Componente de Layout Wrapper:
// Este componente demonstra a reautilziação do código e o uso da prop especial 'children'.
// Ele cria uma "caixa" padrão estilizada que pode ter qualquer outro conteúdo como formulários, listas, textos.
const ContainerEstilizado = ({ children, titulo }) => {
  
  // Objeto de estilo CSS para manter o visual do container consistente
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
      
      {/* O título só aparece se a prop titulo for fornecido */}
      {titulo && (
        <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px', color: '#333' }}>
            {titulo}
        </h2>
      )}
      
      {/* Prop Especial children: 
          Aqui é onde o React renderiza qualquer conteúdo que estiver dentro das tags <ContainerEstilizado> no componente pai.
      */}
      {children} 
    </div>
  );
};

export default ContainerEstilizado;