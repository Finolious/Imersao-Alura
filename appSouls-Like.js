function pesquisar() {
    // Função responsável por realizar a pesquisa e exibir os resultados na página.
  
    let section = document.getElementById("resultados-pesquisa");
    // Obtém a seção HTML onde os resultados serão exibidos.

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

   //Se o campoPesquisa for uma string sem nada
   if (campoPesquisa ==""){
    section.innerHTML = "<p>You Died!</p>"
    return
   }

   campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descrição = "";
    let tags = "";
   
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descrição = dado.descrição.toLowerCase()
        tags = dado.tags.toLowerCase()
        //Se titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //cria um novo elemento
            resultados += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descrição}</p>
              <a href=${dado.link} target="_blank">Mais Informações</a>
            </div>
          `;
        }
         // Para cada dado na lista de dados, cria um elemento HTML para exibir os resultados.
      
    }
  
    if (!resultados){
        resultados = "<p>You Died!<p>"
    }    
    // Atribui a string com os resultados ao conteúdo HTML da seção.
    section.innerHTML = resultados;
  }