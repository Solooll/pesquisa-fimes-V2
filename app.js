function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById
  ("resultados-pesquisa");

  let campoPesquisa = document.getElementById
  ("campo-pesquisa").value

  //se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
      section.innerHTML = "<p>Digite o nome de um filme ou palavra chave</P>"
      return
  } 

    campoPesquisa  = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo = "";
  let descricao = ""; 
  let tags = "";

  // Itera sobre cada dado da lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
      // se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)  ||  tags.includes(campoPesquisa)) {
        // cria um novo elemento
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
    `;
      }
          // então, faça...


    console.log(dado.titulo.includes(campoPesquisa))
     
     
  }

    if (!resultados ) {
        resultados = "<p>nada foi encontrado</p>"
    }




  // Atribui os resultados gerados à seção HTML
  section.innerHTML = resultados;
}