let dados = [
    {
        titulo: "O enigma de Outro Mundo",
        descricao: "O Enigma de Outro Mundo é um filme de terror e ficção científica que nos leva a uma base de pesquisa na Antártida, onde uma equipe de cientistas descobre uma forma de vida alienígena capaz de se adaptar e se replicar assumindo a forma de suas vítimas. A trama se desenrola em meio a um clima de paranoia e desconfiança.",
        link: "https://pt.wikipedia.org/wiki/The_Thing_(1982)",
        tags: "Isolamento Sobrevivência Paranoia Alienígenas Transformação Ciência Antártica Isolamento Sobrevivencia Paranoia Alienigenas Transformacao Ciencia Antartica",
    },
    {
        titulo: "A Bolha Assassina",
        descricao: "A Bolha Assassina é um filme de terror e ficção científica que narra a história de uma pequena cidade ameaçada por uma criatura gelatinosa extraterrestre que cresce exponencialmente ao absorver matéria orgânica.",
        link: "https://www.adorocinema.com/filmes/filme-25031/",
        tags: "Terror Ficção científica B-movie Clássico dos anos 80 Ciencia ficção Filme de terror Filme cult Monstro Criatura Alienígena Invasão Horror corporal Suspense Ação Sobrenatural 80s Retro Nostalgia Cult movie Terror Ficcao cientifica B-movie Classico dos anos 80 Ciencia ficcao Filme de terror Filme cult Monstro Criatura Alienigena Invasao Horror corporal Suspense Acao Sobrenatural 80s Retro Nostalgia Cult movie",
    },
    {
        titulo: "Sharknado",
        descricao: "Sharknado é um filme de terror B que apresenta um cenário bizarro e divertido: um tornado catastrófico carrega tubarões para as ruas de Los Angeles, causando caos e destruição.",
        link: "https://www.adorocinema.com/filmes/filme-222634/",
        tags: "Sharknado Tubarão Tornado Los Angeles Desastre Monstro marinho Efeito especial Baixo orçamento Ian Ziering Tara Reid Filme trash Cinema divertido Verão Cinema B Máquina de fazer dinheiro (referindo-se à franquia) Filme para assistir com os amigos  Sharknado Tubarao Tornado Los Angeles Desastre Monstro marinho Efeito especial Baixo orçamento Ian Ziering Tara Reid Filme trash Cinema divertido Verao Cinema B Maquina de fazer dinheiro (referindo-se à franquia) Filme para assistir com os amigos",
    },
    {
    titulo: "Rubber: O Pneu Assassino",
    descricao: "Um pneu com vida própria desenvolve uma obsessão por destruir tudo ao seu redor.",
    link: "https://pt.wikipedia.org/wiki/Rubber", 
    tags: "Terror Comedia Bizarro Objeto Animado Pneu Assassino",
    },
    {
        titulo: "O Ataque dos Tomates Assassinos",
        descricao: "Vegetais mutantes atacam uma pequena cidade.",
        link: "https://www.adorocinema.com/filmes/filme-67890/",
        tags: "Terror Comedia Ficcao Cientifica Vegetal Mutante",
    },
    {
        titulo: "D.E.B.S. As Super Espiãs",
        descricao: "Um grupo de adolescentes descobre que são espiãs treinadas desde a infância e precisam salvar o mundo.",
        link: "https://www.adorocinema.com/filmes/filme-59890/",
        tags: "Acao Comedia Espionagem Adolescente Feminista"
      },
      {
        titulo: "O Monstro do Pântano",
        descricao: "Um cientista transformado em um monstro das águas luta contra a poluição ambiental.",
        link: "https://www.adorocinema.com/filmes/filme-67890/",
        tags: "Terror Ficcao Cientifica Monstro Ambiental"
      },
      {
        titulo: "Ursinho Pooh: Sangue e Mel",
        descricao: "Uma reimaginação sombria e violenta dos personagens da Disney.",
        link: "https://www.adorocinema.com/filmes/filme-98765/",
        tags: "Terror Horror Reimaginacao Infantil"
      },
      {
        titulo: "Terminal Force A Procura do Cristal Sagrado",
        descricao: "Uma equipe militar busca um artefato místico em uma selva hostil.",
        link: "https://www.adorocinema.com/filmes/filme-34567/",
        tags: "Acao Aventura Fantasia Militar"
      },
      {
        titulo: "Serpentes a Bordo",
        descricao: "Uma equipe de voo enfrenta uma infestação de cobras venenosas.",
        link: "https://www.imdb.com/title/tt0463433/",
        tags: "Terror, Aventura, Animal, Aviao"
    },
    {
        titulo: "Brinquedo Assassino 1988",
        descricao: "Um boneco de brinquedo possuído por um espírito maligno começa a matar.",
        link: "https://www.imdb.com/title/tt0094947/",
        tags: "Terror, Sobrenatural, Boneco"
    },
    {
        titulo: "Re-Animator: A Hora dos Mortos-Vivos",
        descricao: "Um cientista louco descobre uma fórmula para reanimar os mortos.",
        link: "https://www.imdb.com/title/tt0089568/",
        tags: "Terror, Ciencia Ficcao, Horror Corporal, Loucura"
    },
    {
        titulo: "A Geladeira Diabólica",
        descricao: "Uma geladeira antiga possui poderes demoníacos.",
        link: "https://www.imdb.com/title/tt0101814/",
        tags: "Terror, Sobrenatural, Objeto Assombrado"
    },
    {
        titulo: "A Noite dos Mortos-Vivos",
        descricao: "Um grupo de pessoas se refugia em uma fazenda isolada durante um apocalipse zumbi.",
        link: "https://www.imdb.com/title/tt0097376/",
        tags: "Terror, Zumbi, Classico, Apocalipse"
    },
    {
        titulo: "Halloween: A Noite do Terror",
        descricao: "Um jovem psicopata retorna à sua cidade natal para aterrorizar seus antigos vizinhos.",
        link: "https://www.imdb.com/title/tt0078322/",
        tags: "Terror, Slasher, Psicopata, Halloween"
    },
    {
        titulo: "A Freira Assassina",
        descricao: "Uma freira demoníaca aterroriza um convento.",
        link: "https://www.imdb.com/title/tt0080038/",
        tags: "Terror, Sobrenatural, Religioso"
    },
    {
        titulo: "Planeta Terror",
        descricao: "Um grupo de sobreviventes luta contra uma epidemia que transforma as pessoas em zumbis.",
        link: "https://www.adorocinema.com/filmes/filme-222634/",
        tags: "Terror, Zumbi, Epidemia, Explosivo",
    },
    {
        titulo: "Pink Flamingos",
        descricao: "Um filme cult extremamente controverso e perturbador.",
        link: "https://www.imdb.com/title/tt0067523/",
        tags: "Cult, Experimental, Controverso, Trash",
    },
    {
        titulo: "Barbarella",
        descricao: "Uma aventura espacial erótica e psicodélica.",
        link: "https://www.imdb.com/title/tt0062559/",
        tags: "Sci-fi, Aventura, Erótico, Psicodelico",
    },
    {
        titulo: "Fome Animal",
        descricao: "Um grupo de amigos se transforma em canibais após comerem uma carne contaminada.",
        link: "https://www.imdb.com/title/tt0102823/",
        tags: "Terror, Canibalismo, Survival",
    },
    {
        titulo: "O Monstro do Armário",
        descricao: "Uma criatura aterroriza uma família após ser libertada de um armário antigo.",
        link: "https://www.imdb.com/title/tt0093755/",
        tags: "Terror, Monstro, Sobrenatural",
    },


];




