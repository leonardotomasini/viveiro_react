import React, { useState, useEffect } from 'react';
import CartaoPlanta from '../presentation/CartaoPlanta';
import FormularioAdicionar from '../presentation/FormularioAdicionar'; 
import ContainerEstilizado from '../presentation/ContainerEstilizado';

const GerenciadorPlantas = ({ perfil }) => {
  
  const eDono = perfil === 'Dono'; 
  
  const [plantas, setPlantas] = useState(() => {
    const plantasSalvas = localStorage.getItem('meuViveiroDigital');
    return plantasSalvas ? JSON.parse(plantasSalvas) : [];
  });

  useEffect(() => {
    localStorage.setItem('meuViveiroDigital', JSON.stringify(plantas));
  }, [plantas]);

  // ADICIONAR
  const adicionarPlanta = (nome, especie, foto, sobre) => {
    const novaPlanta = {
      id: Date.now(),
      nome,
      especie,
      foto,
      sobre
    };
    setPlantas([...plantas, novaPlanta]);
  };

  // DELETAR
  const deletarPlanta = (id) => {
    if (window.confirm('Tem certeza que deseja excluir esta planta?')) {
      setPlantas(plantas.filter(p => p.id !== id));
    }
  };

  // EDITAR
  const editarPlanta = (id, novosDados) => {
    setPlantas(plantas.map(p => p.id === id ? { ...p, ...novosDados } : p));
  };
  
  // LIMPAR TUDO
  const limparTudo = () => {
    if(window.confirm('Tem certeza que deseja apagar TODAS as plantas?')) {
        setPlantas([]);
    }
  };

  const voltar = () => {
    window.location.reload(); 
  };

  return (
    <div className="gerenciador-plantas" style={{ padding: '20px', minHeight: '100vh', backgroundColor: '#f0fff0' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <button onClick={voltar} style={{ padding: '10px 15px', cursor: 'pointer', background: '#555', color: 'white', border: 'none', borderRadius: '4px' }}>
          ← Voltar
        </button>

        {eDono && plantas.length > 0 && (
            <button onClick={limparTudo} style={{ padding: '10px', cursor: 'pointer', background: '#d32f2f', color: 'white', border: 'none', borderRadius: '4px' }}>
                Limpar Tudo
            </button>
        )}
      </div>

      <h1 style={{ color: '#000', textAlign: 'center', marginBottom: '30px' }}>
        💚 Viveiro Digital - Perfil: {perfil}
      </h1>
      
      {eDono && (
        <ContainerEstilizado titulo="Adicionar Nova Planta">
          <FormularioAdicionar aoAdicionarPlanta={adicionarPlanta} /> 
        </ContainerEstilizado>
      )}
      
      <ContainerEstilizado titulo={`Catálogo de Plantas (${plantas.length} Espécies):`}>
        {plantas.length === 0 && <p style={{textAlign: 'center', color: '#666'}}>Nenhuma planta cadastrada.</p>}
        
        {plantas.map(planta => (
          <CartaoPlanta
            key={planta.id}
            id={planta.id}
            nome={planta.nome}
            especie={planta.especie}
            foto={planta.foto}
            sobre={planta.sobre}
            eDono={eDono}
            aoDeletar={deletarPlanta}
            aoEditar={editarPlanta}
          />
        ))}
      </ContainerEstilizado>
    </div>
  );
};

export default GerenciadorPlantas;