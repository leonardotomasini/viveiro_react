import React, { useState, useEffect } from 'react';
import CartaoPlanta from '../presentation/CartaoPlanta';
import FormularioAdicionar from '../presentation/FormularioAdicionar'; 
import ContainerEstilizado from '../presentation/ContainerEstilizado';

// Componente Container, o inteligente-smart.
// Aqui é a "inteligencia" da aplicação. O foco não é no visual-Css. Ele serve para:
// Gerenciar o Estado (dados das plantas) , Salvar dados no LocalStorage e Definir as funções lógicas como adicionar, editar e Deletar.
const GerenciadorPlantas = ({ perfil }) => {
  const eDono = perfil === 'Dono'; 
  // aqui inicializa o uso do UseState, ele vai ver se tem dados salvos no LocalStorage, se tiver dados salvos ele os carrega.
  const [plantas, setPlantas] = useState(() => {
    const plantasSalvas = localStorage.getItem('meuViveiroDigital');
    return plantasSalvas ? JSON.parse(plantasSalvas) : [];
  });

  // Aqui salva a lista toda vez que o estado das plantas muda, assim os dados não são perdidos.
  useEffect(() => {
    localStorage.setItem('meuViveiroDigital', JSON.stringify(plantas));
  }, [plantas]);

  // Aqui é para a criação de plantas e suas caracteristicas.
  const adicionarPlanta = (nome, especie, foto, sobre) => {
    const novaPlanta = {
      id: Date.now(), // para gerar o ID.
      nome,
      especie,
      foto,
      sobre
    };
    setPlantas([...plantas, novaPlanta]);
  };

  // Esse serve para deletar, ele a seleciona ela pelo ID e pergunta se você realmente deseja deletar a planta.
  const deletarPlanta = (id) => {
    if (window.confirm('Tem certeza que deseja excluir esta planta?')) {
      setPlantas(plantas.filter(p => p.id !== id));
    }
  };

  // Serve para editar, vai percorrer a lista com o map, achar o ID certo e dai atualiza os dados dele.
  const editarPlanta = (id, novosDados) => {
    setPlantas(plantas.map(p => p.id === id ? { ...p, ...novosDados } : p));
  };
  
  // Para deletar todas as plantas ao invés de individualemnte
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
      
      {/* Aqui tem a opção de limpar tudo e de voltar, está aparecendo na tela graças ao return */}
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
        Viveiro Digital 
      </h1>
      <h2 style={{ color: '#000105ff', textAlign: 'center', marginBottom: '30px' }}>
        Catálogo das espécies disponiveis no momento.
      </h2>
      
      {/* Aqui funciona sob uma condição, caso seja selecionado como dono renderiza o componente de 
      formulário, passando a função de adicionar e etc.
      */}
      {eDono && (
        <ContainerEstilizado titulo="Adicionar Nova Planta">
          <FormularioAdicionar aoAdicionarPlanta={adicionarPlanta} /> 
        </ContainerEstilizado>
      )}
      
      {/* Aqui é a lista das plantas.
      Caso não tenha nenhuma planta, deixará claro que não tem plantas cadastradas.
          Ele sobre o array plantas e cria um componente CartaoPlanta para cada item.
          Passa as funções de deletar e editar como Props para que o filho possa chamá-las.
      */}
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