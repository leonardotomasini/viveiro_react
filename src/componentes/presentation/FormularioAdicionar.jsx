import React, { useState } from 'react';

// Este é um componente de apresentação Presenter:
// Ele é responsável pela interface do formulário, gerenciando o estado dos inputs temporariamente
// Ele envia os dados finais para o Container através da função 'aoAdicionarPlanta'.
const FormularioAdicionar = ({ aoAdicionarPlanta }) => {
  // Estados locais para controlar o que for digitado nos campos
  const [nome, setNome] = useState('');
  const [especie, setEspecie] = useState('');
  const [sobre, setSobre] = useState('');
  const [foto, setFoto] = useState('');
  
  // Função executada ao clicar no botão de Adicionar.
  const lidarComEnvio = (e) => {
    e.preventDefault(); // Impede que a página recarregue ao enviar o formulário.
    
    // Para impedir o envio se o nome ou espécies estiverem vazios.
    if (!nome || !especie) return;

    // Chama a função recebida via props, passando os dados preenchidos para o Container.
    aoAdicionarPlanta(nome, especie, foto, sobre); 
    
    // Aqui limpa os campos do formulário após o envio.
    setNome('');
    setEspecie('');
    setSobre('');
    setFoto('');
    // Limpa o input de arquivo visualmente.
    document.getElementById('inputArquivo').value = "";
  };

  // Aqui é importante pois é a função para processar o upload da imagem no viveiro.
  const lidarComArquivo = (e) => {
    const arquivo = e.target.files[0];
    if (arquivo) {
      // Com o FileReader ela converte a imagem em uma string Base64
      // Assim é possível salvar a imagem diretamente no localStorage sem backend
      const leitor = new FileReader();
      leitor.onloadend = () => {
        setFoto(leitor.result); // Aqui salva a imagem convertida no estado
      };
      leitor.readAsDataURL(arquivo);
    }
  };

  // Os estilos CSS locais para os inputs
  const estiloInput = {
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #a8a2a2ff',
    backgroundColor: '#333', 
    color: '#ffffffff',     
    fontSize: '16px',
    outline: 'none'
  };

  return (
    <form onSubmit={lidarComEnvio} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '500px', margin: '10px auto' }}>
      
      {/* Campo para digitar o nome */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ color: '#333', marginBottom: '5px', fontWeight: 'bold' }}>Nome:</label>
        <input type="text" placeholder="Exemplo: Araucária" value={nome} onChange={(e) => setNome(e.target.value)} style={estiloInput} />
      </div>
      
      {/* Campo para digitar a espécie */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ color: '#333', marginBottom: '5px', fontWeight: 'bold' }}>Espécie:</label>
        <input type="text" placeholder="Exemplo: Araucariaceae" value={especie} onChange={(e) => setEspecie(e.target.value)} style={estiloInput} />
      </div>

      {/* Para escrever sobre as caracteristicas das plantas */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ color: '#333', marginBottom: '5px', fontWeight: 'bold' }}>Sobre a Planta:</label>
        <textarea 
          placeholder="Exemplo: Árvore conífera que pode atingir 40 metros" 
          value={sobre} 
          onChange={(e) => setSobre(e.target.value)} 
          style={{...estiloInput, height: '80px', resize: 'vertical'}} 
        />
      </div>

      {/* Muito importante, campo de upload de foto da planta */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ color: '#333', marginBottom: '5px', fontWeight: 'bold' }}>Foto da Planta:</label>
        <input id="inputArquivo" type="file" accept="image/*" onChange={lidarComArquivo} style={{...estiloInput, cursor: 'pointer'}} />
        
        {/* Aqui é a pré-visualização da imagem */}
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