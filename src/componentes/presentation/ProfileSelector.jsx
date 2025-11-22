// CÓDIGO COMPLETO PARA src/componentes/presentation/ProfileSelector.jsx
import React from 'react';

// Comentário: Este componente não tem estado; ele usa props para retornar a escolha ao App.jsx.
const ProfileSelector = ({ onSelectProfile }) => {
  return (
    <div style={{ padding: '60px', textAlign: 'center', backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <h1>Bem-vindo ao Viveiro Digital 🌱</h1>
      <p style={{ fontSize: '1.2em', color: '#555' }}>Selecione seu perfil para continuar:</p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '40px' }}>
        <button 
          onClick={() => onSelectProfile('Dono')}
          style={{ padding: '15px 30px', fontSize: '18px', cursor: 'pointer', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
        >
          Sou o Viveirista (Dono)
        </button>

        <button 
          onClick={() => onSelectProfile('Visitante')}
          style={{ padding: '15px 30px', fontSize: '18px', cursor: 'pointer', background: '#2196F3', color: 'white', border: 'none', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
        >
          Sou Visitante
        </button>
      </div>
    </div>
  );
};

export default ProfileSelector;