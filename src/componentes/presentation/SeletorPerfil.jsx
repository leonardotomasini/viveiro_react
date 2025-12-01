import React from 'react';

// Esse é um componente de apresentação (Presenter). Ele foca apenas na interface visual.
// Aqui recebe a função 'aoSelecionarPerfil' através de props para comunicar a escolha ao componente pai.
const SeletorPerfil = ({ aoSelecionarPerfil }) => {
  return (
    // Aqui é o container Principal. Ele usa o flexbox para centralizar tudo na tela de maneira vertical e horizontal. O return está mandando as configurações
    <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh', 
        backgroundColor: '#f0fff0' 
    }}>
      <div style={{ 
          padding: '40px', 
          textAlign: 'center', 
          backgroundColor: '#ffffff', 
          borderRadius: '10px', 
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)', 
          maxWidth: '500px', 
          width: '90%', 
          aspectRatio: '1 / 1', 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
      }}>
        
        <h1 style={{ color: '#000', marginBottom: '20px', fontSize: '2.2rem' }}>
          Seja bem vindo(a) ao viveiro.
        </h1>
        
        <p style={{ fontSize: '1.1em', color: '#555', marginBottom: '40px' }}>
          Escolha uma opção para prosseguir.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <button 
            onClick={() => aoSelecionarPerfil('Dono')}
            style={{ padding: '12px 25px', fontSize: '17px', cursor: 'pointer', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
          >
            Sou o Viveirista (Dono)
          </button>

          <button 
            onClick={() => aoSelecionarPerfil('Visitante')}
            style={{ padding: '12px 25px', fontSize: '17px', cursor: 'pointer', background: '#2196F3', color: 'white', border: 'none', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
          >
            Sou Visitante
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeletorPerfil;