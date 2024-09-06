
const form = document.querySelector('form');
const resultadosContainer = document.getElementById('resultados-container');

function buscar(termoBusca, tipoBusca) {
  const termos = termoBusca.toLowerCase().split(/\s+/);
  const resultados = [];

  function corresponde(item, termos) {
    const todasPalavras = [item.titulo, item.sinopse, ...(item.palavrasChave || []), item.artista, item.letra]
      .join(' ')
      .toLowerCase()
      .split(/\s+/);
    
    console.log('Termos de busca:', termos);  // Log dos termos de busca
    console.log('Palavras do item:', todasPalavras);  // Log das palavras do item
    
    return termos.every(termo => todasPalavras.some(palavra => palavra.includes(termo)));
  }
  

  filmes.forEach(filme => {
    if (filme.tipo === tipoBusca && corresponde(filme, termos)) {
      resultados.push(filme);
    }
  });

  musicas.forEach(musica => {
    if (musica.tipo === tipoBusca && corresponde(musica, termos)) {
      resultados.push(musica);
    }
  });

  return resultados;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const termoBusca = document.getElementById('busca').value;
  const tipoBusca = document.getElementById('tipo-busca').value;

  if (!termoBusca) {
    alert('Por favor, insira um termo de busca.');
    return;
  }

  const resultados = buscar(termoBusca, tipoBusca);

  resultadosContainer.innerHTML = '';

  if (resultados.length > 0) {
    const lista = document.createElement('ul');
    resultados.forEach(item => {
      const li = document.createElement('li');
      if (item.tipo === 'filme') {
        li.innerHTML = `
          <h2>${item.titulo}</h2>
          <img src="${item.capa || 'url_da_imagem_padrao.jpg'}" alt="Capa do filme ${item.titulo}" style="width:200px; height:auto;">
          <p>Ano: ${item.ano}<p>
          <p>Gênero: ${item.genero || "Gênero não informado"}</p>
          <p>Sinopse: ${item.sinopse}</p>
        `;
      } else {
        li.innerHTML = `
          <h2>${item.titulo} - ${item.artista}</h2>
          <p>Álbum: ${item.album}</p>
          <p>Letra: ${item.letra}</p>
        `;


        
      }
      lista.appendChild(li);
    });
    resultadosContainer.appendChild(lista);
  } else {
    resultadosContainer.textContent = 'Nenhum resultado encontrado.';
  }
});