// src/componentes/presentation/PlantCard.jsx
import React, { useState } from 'react';

const PlantCard = ({ id, nome, especie, foto, sobre, isDono, onDelete, onEdit }) => {
  
  // Estados locais para controle visual
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Estados temporários para edição
  const [editNome, setEditNome] = useState(nome);
  const [editEspecie, setEditEspecie] = useState(especie);
  const [editSobre, setEditSobre] = useState(sobre);

  // Salvar edição
  const handleSave = () => {
    onEdit(id, { nome: editNome, especie: editEspecie, sobre: editSobre });
    setIsEditing(false);
  };

  // Estilos
  const cardStyle = {
    padding: '15px', margin: '10px 0', border: '1px solid #ddd', 
    borderRadius: '8px', backgroundColor: 'white', 
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    display: 'flex', flexDirection: 'column', gap: '10px'
  };

  const imgStyle = {
    width: '100%', height: '200px', objectFit: 'cover', 
    borderRadius: '4px', cursor: 'pointer', border: '1px solid #eee'
  };

  return (
    <>
      <div style={cardStyle}>
        {/* FOTO (Clicável) */}
        {foto && (
           <img 
             src={foto} 
             alt={nome} 
             style={imgStyle} 
             onClick={() => setIsModalOpen(true)} // Abre o modal
             title="Clique para ampliar"
           />
        )}

        {/* MODO DE EDIÇÃO OU VISUALIZAÇÃO */}
        {isEditing ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <input type="text" value={editNome} onChange={e => setEditNome(e.target.value)} style={{padding: '5px'}} />
                <input type="text" value={editEspecie} onChange={e => setEditEspecie(e.target.value)} style={{padding: '5px'}} />
                <textarea value={editSobre} onChange={e => setEditSobre(e.target.value)} style={{padding: '5px', height: '60px'}} />
                <div style={{display: 'flex', gap: '10px', marginTop: '5px'}}>
                    <button onClick={handleSave} style={{background: '#4CAF50', color: 'white', border:'none', padding:'5px 10px', cursor:'pointer', borderRadius:'4px'}}>Salvar</button>
                    <button onClick={() => setIsEditing(false)} style={{background: '#ccc', border:'none', padding:'5px 10px', cursor:'pointer', borderRadius:'4px'}}>Cancelar</button>
                </div>
            </div>
        ) : (
            <div>
                <h3 style={{ margin: '0', color: '#333' }}>{nome}</h3>
                <p style={{ margin: '5px 0', color: '#666', fontStyle: 'italic' }}>{especie}</p>
                {sobre && <p style={{ margin: '10px 0', color: '#444', fontSize: '0.95rem', lineHeight: '1.4' }}>{sobre}</p>}
            </div>
        )}

        {/* BOTÕES DE AÇÃO (Só para o Dono e se não estiver editando) */}
        {isDono && !isEditing && (
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px', borderTop: '1px solid #eee', paddingTop: '10px' }}>
                <button onClick={() => setIsEditing(true)} style={{ background: '#FFC107', border: 'none', padding: '8px 12px', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold', color: '#333' }}>
                    Editar
                </button>
                <button onClick={() => onDelete(id)} style={{ background: '#F44336', color: 'white', border: 'none', padding: '8px 12px', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' }}>
                    Excluir
                </button>
            </div>
        )}
      </div>

      {/* MODAL DE IMAGEM (Tela Cheia) */}
      {isModalOpen && (
        <div 
            onClick={() => setIsModalOpen(false)} // Fecha ao clicar fora
            style={{
                position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 1000,
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
        >
            <img 
                src={foto} 
                alt="Zoom" 
                style={{ maxWidth: '90%', maxHeight: '90%', borderRadius: '8px', boxShadow: '0 0 20px rgba(255,255,255,0.2)' }} 
            />
            <span style={{ position: 'absolute', top: '20px', right: '30px', color: 'white', fontSize: '30px', cursor: 'pointer' }}>&times;</span>
        </div>
      )}
    </>
  );
};

export default PlantCard;