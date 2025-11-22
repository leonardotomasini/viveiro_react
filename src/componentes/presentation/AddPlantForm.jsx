// CÓDIGO COMPLETO PARA src/componentes/presentation/AddPlantForm.jsx
import React, { useState } from 'react';

// Comentário: O Presenter recebe a função de LÓGICA 'onAddPlant' como prop do Container.
const AddPlantForm = ({ onAddPlant }) => {
  // Estado local (da UI) para gerenciar os inputs do formulário
  const [nome, setNome] = useState('');
  const [especie, setEspecie] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !especie) return;

    // CHAMA a função de LÓGICA que veio do Container via prop
    onAddPlant(nome, especie); 

    // Limpa os inputs (lógica local da UI)
    setNome('');
    setEspecie('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px', margin: '10px auto' }}>
      
      <input
        type="text"
        placeholder="Nome da Planta (Ex: Rosa)"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', color: '#333' }}
      />
      
      <input
        type="text"
        placeholder="Espécie (Ex: Rosa rubiginosa)"
        value={especie}
        onChange={(e) => setEspecie(e.target.value)}
        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', color: '#333' }}
      />
      
      <button 
        type="submit"
        style={{ padding: '12px', background: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}
      >
        Adicionar Nova Espécie
      </button>
      
      {/* Comentário: O Presenter coleta os dados e os envia ao Container via callback prop. */}
    </form>
  );
};

export default AddPlantForm;