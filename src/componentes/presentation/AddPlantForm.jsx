// src/componentes/presentation/AddPlantForm.jsx
import React, { useState } from 'react';

const AddPlantForm = ({ onAddPlant }) => {
  const [nome, setNome] = useState('');
  const [especie, setEspecie] = useState('');
  const [sobre, setSobre] = useState(''); // NOVO: Descrição
  const [foto, setFoto] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !especie) return;

    // Envia todos os dados, incluindo a descrição
    onAddPlant(nome, especie, foto, sobre); 
    
    // Limpa tudo
    setNome('');
    setEspecie('');
    setSobre('');
    setFoto('');
    document.getElementById('fileInput').value = "";
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const inputStyle = {
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #555',
    backgroundColor: '#333', 
    color: '#ffffff',        
    fontSize: '16px',
    outline: 'none'
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '500px', margin: '10px auto' }}>
      
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ color: '#333', marginBottom: '5px', fontWeight: 'bold' }}>Nome:</label>
        <input type="text" placeholder="Ex: Orquídea" value={nome} onChange={(e) => setNome(e.target.value)} style={inputStyle} />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ color: '#333', marginBottom: '5px', fontWeight: 'bold' }}>Espécie:</label>
        <input type="text" placeholder="Ex: Orchidaceae" value={especie} onChange={(e) => setEspecie(e.target.value)} style={inputStyle} />
      </div>

      {/* NOVO CAMPO SOBRE */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ color: '#333', marginBottom: '5px', fontWeight: 'bold' }}>Sobre a Planta:</label>
        <textarea 
          placeholder="Escreva detalhes sobre a planta..." 
          value={sobre} 
          onChange={(e) => setSobre(e.target.value)} 
          style={{...inputStyle, height: '80px', resize: 'vertical'}} 
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ color: '#333', marginBottom: '5px', fontWeight: 'bold' }}>Foto da Planta:</label>
        <input id="fileInput" type="file" accept="image/*" onChange={handleFileChange} style={{...inputStyle, cursor: 'pointer'}} />
        {foto && (
            <img src={foto} alt="Preview" style={{ width: '100px', height: '100px', objectFit: 'cover', marginTop: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
        )}
      </div>
      
      <button type="submit" style={{ padding: '12px', background: '#2e7d32', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '6px', fontSize: '16px', fontWeight: 'bold', marginTop: '10px' }}>
        Adicionar Nova Espécie
      </button>
      
    </form>
  );
};

export default AddPlantForm;