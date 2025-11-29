import React, { useState } from 'react';

const FormularioAdicionar = ({ aoAdicionarPlanta }) => {
  const [nome, setNome] = useState('');
  const [especie, setEspecie] = useState('');
  const [sobre, setSobre] = useState('');
  const [foto, setFoto] = useState('');
  
  const lidarComEnvio = (e) => {
    e.preventDefault();
    if (!nome || !especie) return;

    aoAdicionarPlanta(nome, especie, foto, sobre); 
    
    setNome('');
    setEspecie('');
    setSobre('');
    setFoto('');
    document.getElementById('inputArquivo').value = "";
  };

  const lidarComArquivo = (e) => {
    const arquivo = e.target.files[0];
    if (arquivo) {
      const leitor = new FileReader();
      leitor.onloadend = () => {
        setFoto(leitor.result);
      };
      leitor.readAsDataURL(arquivo);
    }
  };

  const estiloInput = {
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #555',
    backgroundColor: '#333', 
    color: '#ffffff',        
    fontSize: '16px',
    outline: 'none'
  };

  return (
    <form onSubmit={lidarComEnvio} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '500px', margin: '10px auto' }}>
      
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ color: '#333', marginBottom: '5px', fontWeight: 'bold' }}>Nome:</label>
        <input type="text" placeholder="Ex: Orquídea" value={nome} onChange={(e) => setNome(e.target.value)} style={estiloInput} />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ color: '#333', marginBottom: '5px', fontWeight: 'bold' }}>Espécie:</label>
        <input type="text" placeholder="Ex: Orchidaceae" value={especie} onChange={(e) => setEspecie(e.target.value)} style={estiloInput} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ color: '#333', marginBottom: '5px', fontWeight: 'bold' }}>Sobre a Planta:</label>
        <textarea 
          placeholder="Escreva detalhes sobre a planta..." 
          value={sobre} 
          onChange={(e) => setSobre(e.target.value)} 
          style={{...estiloInput, height: '80px', resize: 'vertical'}} 
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ color: '#333', marginBottom: '5px', fontWeight: 'bold' }}>Foto da Planta:</label>
        <input id="inputArquivo" type="file" accept="image/*" onChange={lidarComArquivo} style={{...estiloInput, cursor: 'pointer'}} />
        {foto && (
            <img src={foto} alt="Pré-visualização" style={{ width: '100px', height: '100px', objectFit: 'cover', marginTop: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
        )}
      </div>
      
      <button type="submit" style={{ padding: '12px', background: '#2e7d32', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '6px', fontSize: '16px', fontWeight: 'bold', marginTop: '10px' }}>
        Adicionar Nova Espécie
      </button>
      
    </form>
  );
};

export default FormularioAdicionar;