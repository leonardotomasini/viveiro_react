// src/componentes/presentation/AddPlantForm.jsx
import React, { useState } from 'react';

const AddPlantForm = ({ onAddPlant }) => {
  const [nome, setNome] = useState('');
  const [especie, setEspecie] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !especie) return;

    onAddPlant(nome, especie); 
    setNome('');
    setEspecie('');
  };

  // Estilo para os inputs: Fundo ESCURO e Letra BRANCA
  const inputStyle = {
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #555',
    backgroundColor: '#333', // Fundo escuro
    color: '#ffffff',        // Letra branca (digitada)
    fontSize: '16px',
    outline: 'none'
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '500px', margin: '10px auto' }}>
      
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ color: '#333', marginBottom: '5px', fontWeight: 'bold' }}>Nome:</label>
        <input
          type="text"
          placeholder="Ex: Rosa"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={inputStyle}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ color: '#333', marginBottom: '5px', fontWeight: 'bold' }}>Espécie:</label>
        <input
          type="text"
          placeholder="Ex: Rosa rubiginosa"
          value={especie}
          onChange={(e) => setEspecie(e.target.value)}
          style={inputStyle}
        />
      </div>
      
      <button 
        type="submit"
        style={{ padding: '12px', background: '#2e7d32', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '6px', fontSize: '16px', fontWeight: 'bold', marginTop: '10px' }}
      >
        Adicionar Nova Espécie
      </button>
      
    </form>
  );
};

export default AddPlantForm;