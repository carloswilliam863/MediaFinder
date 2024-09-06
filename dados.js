const filmes = [
    {
    tipo: 'filme',
    id: 1,
    titulo: 'O Senhor dos Anéis: A Sociedade do Anel',
    ano: 2001,
    genero: 'Fantasia, Aventura',
    sinopse: `Em um mundo mágico e perigoso, um hobbit chamado Frodo Bolseiro recebe a tarefa monumental de destruir um anel mágico poderoso que ameaça a Terra-média. O Anel, criado pelo sombrio Senhor das Trevas, Sauron, possui o poder de dominar todos os outros anéis de poder e conceder seu portador o controle absoluto sobre o mundo. Frodo, acompanhado por um grupo diversificado de aliados, incluindo humanos, elfos, anões e outros hobbits, deve enfrentar desafios imensos e forças malignas enquanto tenta destruir o Anel no vulcão de Mordor, o único lugar onde ele pode ser destruído. Sua jornada épica é repleta de batalhas, traições e sacrifícios, enquanto ele e seus companheiros lutam contra as trevas que ameaçam consumir a Terra-média.`,
    capa: 'img/senhordosaneis.jpg',
    palavrasChave: ['fantasia', 'aventura', 'Tolkien', 'épico', 'Terra-média', 'Sauron', 'Anel', 'A Sociedade do Anel']
    },

    {
      tipo: 'filme',
      id: 2,
      titulo: 'Cidade de Deus',
      ano: 2002,
      genero: 'Drama, Crime',
      capa: 'img/CidadedeDeus.jpg',
      sinopse: `Cidade de Deus retrata o crescimento do crime organizado em uma favela do Rio de Janeiro durante as décadas de 1960 e 1970. A história é contada através dos olhos de Buscapé, um jovem que sonha em se tornar fotógrafo. Ele presencia a ascensão de perigosos criminosos, como Zé Pequeno e Mané Galinha, enquanto luta para evitar ser sugado pelo ciclo de violência e pobreza ao seu redor. O filme explora temas como a desigualdade social, o impacto das drogas e a luta pela sobrevivência em um ambiente brutalmente dominado pelo tráfico de drogas.`,
      palavrasChave: ['crime', 'favela', 'tráfico de drogas', 'violência', 'desigualdade social', 'Rio de Janeiro', 'fotografia', 'anos 60', 'anos 70']
  },

  {
    tipo: 'filme',
    id: 3,
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    genero: 'Comédia, Drama, Aventura',
    sinopse: `O Auto da Compadecida é uma adaptação da obra homônima de Ariano Suassuna. A história se passa no sertão nordestino e segue as aventuras de João Grilo, um nordestino pobre e astuto, e Chicó, seu amigo covarde, enquanto eles enfrentam situações difíceis e enganosas para sobreviver. A trama é uma mistura de realismo mágico e elementos da cultura popular brasileira, onde o humor, a crítica social e a fé se entrelaçam. O ponto alto é o julgamento final, onde a Compadecida (Nossa Senhora) intervém para salvar as almas dos protagonistas.`,
    capa: 'img/autodacompadecida.jpg',
    palavrasChave: ['comédia', 'drama', 'nordeste', 'cultura popular', 'religião', 'aventura', 'realismo mágico', 'Ariano Suassuna', 'Brasil'],
},

{
  tipo: 'filme',
  id: 4,
  titulo: 'Tropa de Elite',
  ano: 2007,
  genero: 'Ação, Drama, Policial',
  sinopse: `Tropa de Elite é um filme que retrata a dura realidade do BOPE (Batalhão de Operações Policiais Especiais) do Rio de Janeiro, um batalhão de elite especializado em operações de combate ao tráfico de drogas e à violência urbana. O filme segue o Capitão Nascimento, que enfrenta a difícil tarefa de treinar novos recrutas e lidar com a corrupção dentro da polícia, enquanto enfrenta a violência crescente nas favelas da cidade. A trama explora a complexidade do trabalho policial e as consequências de viver em um ambiente onde a moralidade e a lei estão frequentemente em conflito.`,
  capa: 'img/tropadeelite.jpg',
  palavrasChave: ['BOPE', 'tráfico de drogas', 'violência urbana', 'corrupção', 'Rio de Janeiro', 'ação', 'drama', 'policial'],
},

{
  tipo: 'filme',
  id: 5,
  titulo: 'Central do Brasil',
  ano: 1998,
  genero: 'Drama',
  sinopse: `Central do Brasil é um drama que conta a história de Dora, uma ex-professora que escreve cartas para analfabetos na Central do Brasil, no Rio de Janeiro. Após um trágico acidente que mata a mãe de um menino de 9 anos, Dora é encarregada de levar o menino, Josué, para encontrar seu pai no nordeste do Brasil. Durante a jornada, Dora e Josué enfrentam diversas adversidades e desenvolvem um vínculo profundo. O filme explora temas como a solidariedade, a luta pela dignidade e a busca por um futuro melhor.`,
  capa: 'img/centraldobrasil.jpg',
  palavrasChave: ['Central do Brasil', 'Dora', 'Josué', 'jornada', 'solidariedade', 'analfabetismo', 'família', 'Brasil'],
},


{
  tipo: 'filme',
  id: 7,
  titulo: 'Os Vingadores',
  ano: 2012,
  genero: 'Ação, Aventura, Ficção Científica',
  sinopse: `Os Vingadores é um filme de ação e aventura baseado nos personagens da Marvel Comics. Quando Loki, o Deus da Trapaça, ameaça dominar a Terra com um exército alienígena, Nick Fury, diretor da S.H.I.E.L.D., reúne um grupo de super-heróis para enfrentar essa ameaça. Este grupo inclui o Homem de Ferro, Capitão América, Thor, Hulk, Viúva Negra e Gavião Arqueiro. Juntos, eles devem superar suas diferenças e trabalhar como uma equipe para impedir que Loki e seu exército conquistem o mundo. O filme é conhecido por suas cenas de ação emocionantes e pela reunião de vários heróis icônicos da Marvel.`,
  capa: 'img/vingadores.jpg',
  palavrasChave: ['Os Vingadores', 'Marvel', 'super-heróis', 'Loki', 'S.H.I.E.L.D.', 'Homem de Ferro', 'Capitão América', 'Thor', 'Hulk', 'Viúva Negra', 'Gavião Arqueiro'],
},

{
  tipo: 'filme',
  id: 8,
  titulo: 'Star Wars: Episódio IV - Uma Nova Esperança',
  ano: 1977,
  genero: 'Ação, Aventura, Ficção Científica',
  sinopse: `Star Wars: Episódio IV - Uma Nova Esperança é o primeiro filme da icônica saga de Star Wars criada por George Lucas. A história se passa em uma galáxia distante, onde a Princesa Leia Organa é capturada pelo maligno Império Galáctico, que busca destruir a Aliança Rebelde. Com a ajuda do jovem Luke Skywalker, o contrabandista Han Solo, a co-piloto Chewbacca, e os droids R2-D2 e C-3PO, Leia tenta escapar e levar os planos de uma arma poderosa, a Estrela da Morte, que pode destruir planetas inteiros. O filme é um épico de ficção científica que introduziu muitos dos personagens e elementos centrais da saga Star Wars.`,
  capa: 'img/umanovaesperanca.jpg',
  palavrasChave: ['Star Wars', 'Episódio IV', 'Uma Nova Esperança', 'George Lucas', 'galáxia', 'Império Galáctico', 'Aliança Rebelde', 'Estrela da Morte', 'Luke Skywalker', 'Han Solo', 'Chewbacca', 'R2-D2', 'C-3PO'],
},

{
  tipo: 'filme',
  id: 9,
  titulo: 'Deadpool',
  ano: 2016,
  genero: 'Ação, Aventura, Comédia',
  sinopse: `Deadpool é um filme de ação e comédia baseado no anti-herói da Marvel Comics. A história segue Wade Wilson, um ex-soldado das forças especiais que se torna um mercenário. Após um experimento médico falho, Wilson ganha habilidades de cura acelerada e um visual desfigurado. Adotando o alter ego Deadpool, ele busca vingança contra o homem que quase destruiu sua vida. Com um humor irreverente e uma abordagem não convencional, Deadpool quebra a quarta parede e desafia os clichês dos filmes de super-heróis, oferecendo uma experiência única e cheia de ação.`,
  capa: 'img/deadpool.jpg',
  palavrasChave: ['Deadpool', 'Marvel', 'anti-herói', 'Wade Wilson', 'superpoderes', 'vingança', 'quebra da quarta parede', 'comédia', 'ação'],
},

{
  tipo: 'filme',
  id: 10,
  titulo: 'Titanic',
  ano: 1997,
  genero: 'Drama, Romance',
  sinopse: `Em 1912, o RMS Titanic, o maior e mais luxuoso navio de passageiros da época, está prestes a fazer sua viagem inaugural. A bordo, um romance inesperado floresce entre Jack Dawson, um artista de classe baixa, e Rose DeWitt Bukater, uma jovem aristocrática prestes a se casar com um rico, porém controlador, noivo. Quando o navio colide com um iceberg e começa a afundar, Jack e Rose lutam para sobreviver e escapar das convenções sociais e das adversidades, enquanto a tragédia se desenrola ao redor deles. O filme combina um romance épico com a recriação do desastre histórico, explorando temas de amor, perda e coragem.`,
  capa: 'img/titanic.jpg',
  palavrasChave: ['Titanic', 'romance', 'drama', 'iceberg', 'desastre histórico', 'amor proibido', 'viagem inaugural', 'século XX'],
},

{
  tipo: 'filme',
  id: 11,
  titulo: 'Avatar',
  ano: 2009,
  genero: 'Ficção Científica, Ação, Aventura',
  sinopse: `No ano de 2154, em um futuro distante, a Terra está em crise devido à escassez de recursos naturais. A humanidade colonizou Pandora, uma lua habitada por uma espécie alienígena chamada Na'vi. Jake Sully, um ex-fuzileiro naval paraplégico, é selecionado para participar do programa Avatar, que permite que ele controle um corpo Na'vi geneticamente modificado para interagir com os nativos. Jake é enviado para investigar os Na'vi e suas terras, mas ao se envolver com eles, ele começa a questionar a ética da missão e os verdadeiros motivos da corporação humana. A tensão aumenta quando um conflito surge entre a corporação e os Na'vi, levando a uma batalha épica pelo futuro de Pandora.`,
  capa: 'img/avatar.jpg',
  palavrasChave: ['Avatar', 'Pandora', 'Na\'vi', 'ficção científica', 'realidade virtual', 'ecologia', 'conflito', 'colonização'],
},

{
  tipo: 'filme',
  id: 12,
  titulo: 'O Poderoso Chefão',
  ano: 1972,
  genero: 'Crime, Drama',
  sinopse: `Don Vito Corleone é o patriarca de uma das mais poderosas famílias mafiosas de Nova York. Quando um atentado contra sua vida leva a uma série de eventos violentos e intrigas, seu filho Michael, inicialmente distante dos negócios da família, é forçado a assumir o controle. À medida que Michael se aprofunda no mundo do crime organizado, ele enfrenta traições, rivalidades e desafios que testam sua moralidade e a lealdade de sua família. O filme explora temas de poder, lealdade e a complexidade das relações familiares, enquanto Michael transforma a família Corleone em uma das mais influentes do crime organizado.`,
  capa: 'img/poderosochefao.jpg',
  palavrasChave: ['mafia', 'crime', 'poder', 'família', 'Don Vito Corleone', 'Michael Corleone', 'tradição', 'violência'],
},

{
  tipo: 'filme',
  id: 13,
  titulo: 'Matrix',
  ano: 1999,
  genero: 'Ficção Científica, Ação',
  sinopse: `Thomas Anderson, um programador de computador, leva uma vida dupla como hacker sob o codinome Neo. Ele é contatado por um grupo de rebeldes liderados por Morpheus, que revelam a verdade chocante: o mundo que Neo conhece é uma simulação virtual criada por máquinas inteligentes para controlar a humanidade. Morpheus acredita que Neo é o "Escolhido", uma figura profetizada que pode derrotar as máquinas e libertar a humanidade da Matrix. Com a ajuda de Trinity, Neo enfrenta desafios mortais e descobre suas próprias habilidades extraordinárias enquanto luta para desvendar a verdade e salvar a humanidade.`,
  capa: 'img/matrix.jpg',
  palavrasChave: ['Matrix', 'realidade virtual', 'hacker', 'Neo', 'Morpheus', 'Trinity', 'ficção científica', 'tecnologia', 'inteligência artificial'],
},

{
  tipo: 'filme',
  id: 14,
  titulo: 'Jurassic Park',
  ano: 1993,
  genero: 'Aventura, Ficção Científica',
  sinopse: `O bilionário industrial John Hammond e sua empresa, InGen, criaram um parque temático revolucionário em uma ilha isolada, onde dinossauros clonados vivem em um ambiente controlado. Quando um grupo de especialistas é convidado para inspecionar o parque antes da sua abertura ao público, eles descobrem que a tecnologia de clonagem é mais instável do que imaginavam. Um acidente de segurança libera os dinossauros, levando a um caos mortal. O filme segue a luta dos personagens para sobreviver e escapar da ilha enquanto enfrentam dinossauros predadores e tentam restaurar a ordem em meio à desordem.`,
  capa: 'img/jurassicpark.jpg',
  palavrasChave: ['dinossauros', 'clonagem', 'parque temático', 'aventura', 'ficção científica', 'T-Rex', 'Jurassic Park', 'tecnologia'],
},

{
  tipo: 'filme',
  id: 15,
  titulo: 'Harry Potter e a Pedra Filosofal',
  ano: 2001,
  genero: 'Fantasia, Aventura',
  sinopse: `Harry Potter, um garoto de 11 anos, descobre que é um bruxo quando recebe uma carta de aceitação para a Escola de Magia e Bruxaria de Hogwarts. Ele aprende sobre seu passado mágico e seu legado como o "Garoto que Sobreviveu", após ter sobrevivido a um ataque do temido bruxo das trevas, Voldemort. Na escola, Harry faz amigos leais, como Hermione Granger e Ron Weasley, e enfrenta vários desafios enquanto investiga o mistério da Pedra Filosofal, um artefato mágico que concede imortalidade. A aventura leva Harry e seus amigos a confrontar perigos e descobrir mais sobre o seu próprio destino.`,
  capa: 'img/potter.jpg',
  palavrasChave: ['Harry Potter', 'Hogwarts', 'magia', 'bruxaria', 'Pedra Filosofal', 'Voldemort', 'fantasia', 'aventura', 'mundo mágico'],
},

{
  tipo: 'filme',
  id: 16,
  titulo: 'A Origem',
  ano: 2010,
  genero: 'Ficção Científica, Ação',
  sinopse: `Dom Cobb é um ladrão especializado em extrair segredos valiosos do subconsciente das pessoas enquanto elas dormem, um talento que o tornou um jogador importante no mundo da espionagem corporativa. Ele é oferecido uma oportunidade de redenção quando um cliente propõe um desafio quase impossível: em vez de roubar uma ideia, Cobb deve plantar uma. Para realizar essa "origem", Cobb reúne uma equipe e enfrenta desafios dentro de um complexo mundo dos sonhos, onde nada é o que parece e os limites da realidade se tornam cada vez mais nebulosos.`,
  capa: 'img/aorigem.jpg',
  palavrasChave: ['sonhos', 'subconsciente', 'realidade', 'inception', 'ação', 'ficção científica', 'dom cobb', 'mind-bending'],
}














  
  
    // ... outros filmes
];

const musicas = [
    {
        tipo: "musica",
        titulo: "Tempo Perdido",
        album: "Dois",
        artista: "Legião Urbana",
        letra:  `Todos os dias quando acordo<br>
                Não tenho mais<br>
                O tempo que passou<br>
                Mas tenho muito tempo<br>
                Temos todo o tempo do mundo<br>
                Todos os dias<br>
                Antes de dormir<br>
                Lembro e esqueço<br>
                Como foi o dia<br>
                Sempre em frente<br>
                Não temos tempo a perder<br>
                Nosso suor sagrado<br>
                É bem mais belo<br>
                Que esse sangue amargo<br>
                E tão sério<br>
                E selvagem! Selvagem!<br>
                Selvagem!<br>
                Veja o sol<br>
                Dessa manhã tão cinza<br>
                A tempestade que chega<br>
                É da cor dos teus olhos<br>
                Castanhos<br>
                Então me abraça forte<br>
                E diz mais uma vez<br>
                Que já estamos<br>
                Distantes de tudo<br>
                Temos nosso próprio tempo<br>
                Temos nosso próprio tempo<br>
                Temos nosso próprio tempo<br>
                Não tenho medo do escuro<br>
                Mas deixe as luzes<br>
                Acesas agora<br>
                O que foi escondido<br>
                É o que se escondeu<br>
                E o que foi prometido<br>
                Ninguém prometeu<br>
                Nem foi tempo perdido<br>
                Somos tão jovens<br>
                Tão jovens! Tão jovens!`
    },
    {
      tipo: "musica",
      titulo: "Dias de Luta, Dias de Glória",
      album: "Imunidade Musical",
      artista: "Charlie Brown Jr.",
      letra: `Canto minha vida com orgulho<br>
              Na minha vida e tudo acontece<br>
              Mas quanto mais a gente rala, mais a gente cresce<br>
              Hoje estou feliz porque sonhei com você<br>
              E amanhã posso chorar por não poder te ver<br>
              Mas o seu sorriso vale mais que um diamante<br>
              Se você vier comigo aí nós vamo adiante<br>
              Com a cabeça erguida, e mantendo a fé em Deus<br>
              O seu dia mais feliz vai ser o mesmo que o meu<br>
              A vida me ensinou a nunca desistir<br>
              Nem ganhar, nem perder, mas procurar evoluir<br>
              Podem me tirar tudo que tenho<br>
              Só não podem me tirar as coisas boas<br>
              Que eu já fiz pra quem eu amo<br>
              Eu sou feliz e canto<br>
              O universo é uma canção eu vou que vou<br>
              Histórias, nossas histórias<br>
              Dias de luta, dias de glória<br>
              Histórias, nossas histórias<br>
              Dias de luta, dias de glória<br>
              Histórias, nossas histórias<br>
              Dias de luta, dias de glória<br>
              Histórias, nossas histórias<br>
              Dias de luta, dias de glória<br>
              Oh, minha gata, morada dos meus sonhos<br>
              Todo dia, se pudesse, eu ia estar com você<br>
              Já te via muito antes nos meus sonhos<br>
              Eu procurei a vida inteira por alguém como você<br>
              Por isso eu canto minha vida com orgulho<br>
              Com melodia, alegria e barulho<br>
              Eu sou feliz e rodo pelo mundo<br>
              Sou correria, mas também sou vagabundo<br>
              Mas hoje dou valor de verdade<br>
              Pra minha saúde, pra minha liberdade<br>
              Que bom te encontrar nesta cidade<br>
              Esse brilho intenso me lembra você<br>
              Histórias, nossas histórias<br>
              Dias de luta, dias de glória<br>
              Histórias, nossas histórias<br>
              Dias de luta, dias de glória<br>
              Histórias, nossas histórias<br>
              Dias de luta, dias de glória<br>
              Histórias, nossas histórias<br>
              Dias de luta, dias de glória<br>
              Hoje estou feliz, acordei com o pé direito<br>
              E vou fazer de novo, vou fazer muito bem feito<br>
              Sintonia<br>
              Telepatia<br>
              Comunicação pelo córtex<br>
              Bum, bye bye`
  },
  {
      tipo: "musica",
      titulo: "Primeiros Erros",
      album: "Acústico MTV",
      artista: "Capital Inicial",
      letra: `Meu caminho é cada manhã<br>
            Não procure saber onde vou<br>
            Meu destino não é de ninguém<br>
            Eu não deixo os meus passos no chão<br>
            Se você não entende, não vê<br>
            Se não me vê, não entende<br>
            Não procure saber onde estou<br>
            Se o meu jeito te surpreende<br>
            Se o meu corpo virasse sol<br>
            Minha mente virasse sol<br>
            Mas só chove e chove<br>
            Chove e chove<br>
            Se um dia eu pudesse ver<br>
            Meu passado inteiro<br>
            E fizesse parar de chover<br>
            Nos primeiros erros, oh<br>
            O meu corpo viraria sol<br>
            Minha mente viraria...<br>
            Mas só chove e chove<br>
            Chove e chove<br>
            Se um dia eu pudesse ver<br>
            Meu passado inteiro<br>
            E fizesse parar de chover<br>
            Nos primeiros erros, oh<br>
            O meu corpo viraria sol<br>
            Minha mente viraria...<br>
            Mas só chove e chove<br>
            Chove e chove, oh<br>
            O meu corpo viraria sol<br>
            Minha mente viraria sol<br>
            Mas só chove e chove<br>
            Chove e chove, oh<br>
            Chove e chove, oh<br>
            Chove e chove, oh<br>
            Chove e chove`
  },
  {
      tipo: "musica",
      titulo: "Mulher de Fases",
      album: "Só no Forévis",
      artista: "Raimundos",
      letra: `Que mulher ruim<br>
            Jogou minhas coisa' fora<br>
            Disse que em sua cama eu não deito mais não<br>
            A casa é minha, você que vá embora<br>
            Já pra saia da sua mãe e deixa meu colchão<br>
            Ela é pró' na arte de pentelhar e aziar<br>
            É campeã do mundo<br>
            A raiva era tanta que eu nem reparei que a lua diminuía<br>
            A doida 'tá me beijando há horas<br>
            Disse que se for sem eu não quer viver mais não<br>
            Me diz, Deus, o que é que eu faço agora?<br>
            Se me olhando desse jeito ela me tem na mão<br>
            Meu filho, aguenta<br>
            Quem mandou você gostar<br>
            Dessa mulher de fases?<br>
            Complicada e perfeitinha<br>
            Você me apareceu<br>
            Era tudo que eu queria<br>
            Estrela da sorte<br>
            Quando à noite ela surgia<br>
            Meu bem, você cresceu<br>
            Meu namoro é na folhinha<br>
            Mulher de fases (go, go, go)<br>
            Põe fermento, põe as bomba'<br>
            Qualquer coisa que aumente e a deixe bem maior que o sol<br>
            Pouca gente sabe que na noite<br>
            O frio é quente e arde e eu acendi<br>
            Até sem luz dá pra te enxergar no lençol<br>
            Fazendo congo-blue<br>
            É pena, eu sei, amanhã já vai miar, se aguente<br>
            Que lá vem chumbo quente<br>
            Complicada e perfeitinha<br>
            Você me apareceu<br>
            Era tudo que eu queria<br>
            Estrela da sorte<br>
            Quando à noite ela surgia<br>
            Meu bem, você cresceu<br>
            Meu namoro é na folhinha<br>
            Mulher de fases (mulher de fases, de fases, de fases)<br>
            Mulher de fases (mulher de fases, de fases, de fases)`
  },
  {
    tipo: "musica",
    titulo: "Exagerado",
    album: "Exagerado",
    artista: "Cazuza",
    letra: `Amor da minha vida<br>
            Daqui até a eternidade<br>
            Nossos destinos foram traçados<br>
            Na maternidade<br>
            Paixão cruel, desenfreada<br>
            Te trago mil rosas roubadas<br>
            Pra desculpar minhas mentiras<br>
            Minhas mancadas<br>
            Exagerado<br>
            Jogado aos teus pés<br>
            Eu sou mesmo exagerado<br>
            Adoro um amor inventado<br>
            Eu nunca mais vou respirar<br>
            Se você não me notar<br>
            Eu posso até morrer de fome<br>
            Se você não me amar<br>
            Por você eu largo tudo<br>
            Vou mendigar, roubar, matar<br>
            Até nas coisas mais banais<br>
            Pra mim é tudo ou nunca mais<br>
            Exagerado<br>
            Jogado aos teus pés<br>
            Eu sou mesmo exagerado<br>
            Adoro um amor inventado<br>
            E por você eu largo tudo<br>
            Carreira, dinheiro, canudo<br>
            Até nas coisas mais banais<br>
            Pra mim é tudo ou nunca mais<br>
            Exagerado<br>
            Jogado aos teus pés<br>
            Eu sou mesmo exagerado<br>
            Adoro um amor inventado<br>
            Jogado aos teus pés<br>
            Com mil rosas roubadas, exagerado<br>
            Eu adoro um amor inventado<br>
            Jogado aos teus pés, baby, baby<br>
            Eu sou mesmo exagerado<br>
            Adoro um amor inventado`
},

{
  tipo: 'musica',
  id: 2,
  titulo: 'Velha Infância',
  artista: 'Tribalistas',
  album: 'Tribalistas',
  letra: `Você é assim<br>
          Um sonho pra mim<br>
          E quando eu não te vejo<br>
          Eu penso em você<br>
          Desde o amanhecer<br>
          Até quando eu me deito<br>
          Eu gosto de você<br>
          E gosto de ficar com você<br>
          Meu riso é tão feliz contigo<br>
          O meu melhor amigo é o meu amor<br>
          E a gente canta<br>
          E a gente dança<br>
          E a gente não se cansa<br>
          De ser criança<br>
          Da gente brincar<br>
          Da nossa velha infância<br>
          Seus olhos, meu clarão<br>
          Me guiam dentro da escuridão<br>
          Seus pés me abrem o caminho<br>
          Eu sigo e nunca me sinto só<br>
          Você é assim<br>
          Um sonho pra mim<br>
          Quero te encher de beijos<br>
          Eu penso em você<br>
          Desde o amanhecer<br>
          Até quando eu me deito<br>
          Eu gosto de você<br>
          E gosto de ficar com você<br>
          Meu riso é tão feliz contigo<br>
          O meu melhor amigo é o meu amor<br>
          E a gente canta<br>
          A gente dança<br>
          A gente não se cansa<br>
          De ser criança<br>
          A gente brinca<br>
          A nossa velha infância<br>
          Seus olhos meu clarão<br>
          Me guiam dentro da escuridão<br>
          Seus pés me abrem o caminho<br>
          Eu sigo e nunca me sinto só<br>
          Você é assim<br>
          Um sonho pra mim<br>
          Você é assim<br>
          Você é assim<br>
          Um sonho pra mim<br>
          Você é assim<br>
          Você é assim<br>
          Um sonho pra mim<br>
          E quando eu não te vejo<br>
          Eu penso em você<br>
          Desde o amanhecer<br>
          Até quando eu me deito<br>
          Eu gosto de você<br>
          E gosto de ficar com você<br>
          Meu riso é tão feliz contigo<br>
          O meu melhor amigo é o meu amor`
},
{
  tipo: 'musica',
  id: 1,
  titulo: 'Garota de Ipanema',
  artista: 'Tom Jobim',
  album: 'Inédito',
  letra: `Olha que coisa mais linda, mais cheia de graça<br>
          É ela, menina, que vem e que passa<br>
          Num doce balanço a caminho do mar<br>
          Moça do corpo dourado, do Sol de Ipanema<br>
          O seu balançado é mais que um poema<br>
          É a coisa mais linda que eu já vi passar<br>
          Ah, por que estou tão sozinho?<br>
          Ah, por que tudo é tão triste?<br>
          Ah, a beleza que existe<br>
          A beleza que não é só minha<br>
          Que também passa sozinha<br>
          Ah, se ela soubesse que quando ela passa<br>
          O mundo inteirinho se enche de graça<br>
          E fica mais lindo por causa do amor<br>
          Ah, por que estou tão sozinho?<br>
          Ah, por que tudo é tão triste?<br>
          Ah, a beleza que existe<br>
          A beleza que não é só minha<br>
          Que também passa sozinha<br>
          Ah, se ela soubesse que quando ela passa<br>
          O mundo inteirinho se enche de graça<br>
          E fica mais lindo por causa do amor<br>
          Por causa do amor<br>
          Por causa do amor`
},

{
  tipo: 'musica',
  id: 2,
  titulo: 'Aquarela',
  artista: 'Toquinho',
  album: 'Aquarela',
  letra: `Numa folha qualquer<br>
          Eu desenho um sol amarelo<br>
          E com cinco ou seis retas<br>
          É fácil fazer um castelo<br>
          Corro o lápis em torno da mão e me dou uma luva<br>
          E se faço chover com dois riscos, tenho um guarda-chuva<br>
          Se um pinguinho de tinta<br>
          Cai num pedacinho azul do papel<br>
          Num instante imagino uma linda gaivota a voar no céu<br>
          Vai voando, contornando<br>
          A imensa curva norte-sul<br>
          Vou com ela viajando<br>
          Havai, Pequim ou Istambul<br>
          Pinto um barco à vela<br>
          Branco navegando<br>
          É tanto céu e mar num beijo azul<br>
          Entre as nuvens vem surgindo<br>
          Um lindo avião, rosa e grená<br>
          Tudo em volta colorindo<br>
          Com suas luzes a piscar<br>
          Basta imaginar e ele está partindo, sereno e lindo<br>
          E se a gente quiser<br>
          Ele vai pousar<br>
          Numa folha qualquer<br>
          Eu desenho um navio de partida<br>
          Com alguns bons amigos<br>
          Bebendo de bem com a vida<br>
          De uma América à outra<br>
          Eu consigo passar num segundo<br>
          Giro um simples compasso<br>
          E num círculo eu faço o mundo<br>
          Um menino caminha<br>
          E caminhando chega no muro<br>
          E ali logo em frente<br>
          A esperar pela gente o futuro está<br>
          E o futuro é uma astronave<br>
          Que tentamos pilotar<br>
          Não tem tempo, nem piedade<br>
          Nem tem hora de chegar<br>
          Sem pedir licença, muda a nossa vida<br>
          E depois convida a rir ou chorar<br>
          Nessa estrada não nos cabe<br>
          Conhecer ou ver o que virá<br>
          O fim dela, ninguém sabe<br>
          Bem ao certo onde vai dar<br>
          Vamos todos numa linda passarela de uma aquarela<br>
          Que um dia enfim (descolorirá)<br>
          Numa folha qualquer<br>
          Eu desenho um sol amarelo (que descolorirá)<br>
          E com cinco ou seis retas<br>
          É fácil fazer um castelo (que descolorirá)<br>
          Giro um simples compasso<br>
          E num círculo eu faço o mundo (que descolorirá)`
},

{
  tipo: 'musica',
  id: 3,
  titulo: 'Evidências',
  artista: 'Chitãozinho e Xororó',
  album: 'Cowboy Do Asfalto',
  letra: `Quando eu digo que deixei de te amar<br>
          É porque eu te amo<br>
          Quando eu digo que não quero mais você<br>
          É porque eu te quero<br>
          Eu tenho medo de te dar meu coração<br>
          E confessar que eu estou em tuas mãos<br>
          Mas não posso imaginar<br>
          O que vai ser de mim<br>
          Se eu te perder um dia<br>
          Eu me afasto e me defendo de você<br>
          Mas depois me entrego<br>
          Faço tipo, falo coisas que eu não sou<br>
          Mas depois eu nego<br>
          Mas a verdade<br>
          É que eu sou louco por você<br>
          E tenho medo de pensar em te perder<br>
          Eu preciso aceitar que não dá mais<br>
          Pra separar as nossas vidas<br>
          E nessa loucura de dizer que não te quero<br>
          Vou negando as aparências<br>
          Disfarçando as evidências<br>
          Mas pra que viver fingindo<br>
          Se eu não posso enganar meu coração?<br>
          Eu sei que te amo!<br>
          Chega de mentiras<br>
          De negar o meu desejo<br>
          Eu te quero mais que tudo<br>
          Eu preciso do seu beijo<br>
          Eu entrego a minha vida<br>
          Pra você fazer o que quiser de mim<br>
          Só quero ouvir você dizer que sim!<br>
          Diz que é verdade, que tem saudade<br>
          Que ainda você pensa muito em mim<br>
          Diz que é verdade, que tem saudade<br>
          Que ainda você quer viver pra mim`
},

{
  tipo: 'musica',
  id: 4,
  titulo: 'País Tropical',
  artista: 'Jorge Ben Jor',
  album: 'Jorge Ben Jor',
  letra: `Moro num país tropical, abençoado por Deus,<br>
          E bonito por natureza (mas que beleza)<br>
          Em fevereiro (em fevereiro)<br>
          Tem carnaval (tem carnaval)<br>
          Eu tenho um fusca e um violão<br>
          Sou Flamengo<br>
          Tenho uma nêga<br>
          Chamada Tereza<br>
          Sambaby<br>
          Sambaby<br>
          Sou um menino de mentalidade mediana<br>
          (Pois é) mas assim mesmo sou feliz da vida<br>
          Pois eu não devo nada a ninguém<br>
          (Pois é) pois eu sou feliz<br>
          Muito feliz comigo mesmo<br>
          Moro num país tropical, abençoado por Deus,<br>
          E bonito por natureza (mas que beleza)<br>
          Em fevereiro (em fevereiro)<br>
          Tem carnaval (tem carnaval)<br>
          Eu tenho um fusca e um violão<br>
          Sou Flamengo<br>
          Tenho uma nêga<br>
          Chamada Tereza<br>
          Sambaby<br>
          Sambaby<br>
          Eu posso não ser um band leader<br>
          (Pois é) mas assim mesmo lá em casa<br>
          Todos meus amigos, meus camaradinhas me respeitam<br>
          (Pois é) essa é a razão da simpatia<br>
          Do poder, do algo mais e da alegria<br>
          Moro num país tropical, abençoado por Deus,<br>
          E bonito por natureza (mas que beleza)<br>
          Em fevereiro (em fevereiro)<br>
          Tem carnaval (tem carnaval)<br>
          Eu tenho um fusca e um violão<br>
          Sou Flamengo<br>
          Tenho uma nêga<br>
          Chamada Tereza<br>
          Mó num pa tropí<br>
          Abençoá por Dê<br>
          E boní por naturê (mas que belê)<br>
          Em feverê (em feverê)<br>
          Tem carná (tem carná)<br>
          Eu tenho um fu e um viô<br>
          Sou Flamê<br>
          Tê uma nê<br>
          Chamá Terê<br>
          Sou Flamê<br>
          Tê uma nê<br>
          Chamá Terê<br>
          Do meu Brasil<br>
          Moro num país tropical, abençoado por Deus,<br>
          E bonito por natureza (mas que beleza)<br>
          Em fevereiro (em fevereiro)<br>
          Tem carnaval (tem carnaval)<br>
          Eu tenho um fusca e um violão<br>
          Sou Flamengo<br>
          Tenho uma nêga<br>
          Chamada Tereza<br>
          Moro num país tropical, abençoado por Deus,<br>
          E bonito por natureza (mas que beleza)<br>
          Em fevereiro (em fevereiro)<br>
          Tem carnaval (tem carnaval)<br>
          Eu tenho um fusca e um violão<br>
          Sou Flamengo<br>
          Tenho uma nêga<br>
          Chamada Tereza<br>
          Moro num país tropical, abençoado por Deus,<br>
          E bonito por natureza (mas que beleza)<br>
          Em fevereiro (em fevereiro)<br>
          Sou Flamengo<br>
          E tenho uma nêga<br>
          Chamada Tereza`
},

{
  tipo: 'musica',
  id: 5,
  titulo: 'Gostava Tanto de Você',
  artista: 'Tim Maia',
  album: 'Tim Maia 1973',
  letra: `Nem sei porque você se foi<br>
          Quantas saudades eu senti<br>
          E de tristezas vou viver<br>
          E aquele adeus, não pude dar<br>
          Você marcou em minha vida<br>
          Viveu, morreu na minha história<br>
          Chego a ter medo do futuro<br>
          E da solidão, que em minha porta bate<br>
          E eu<br>
          Gostava tanto de você<br>
          Gostava tanto de você<br>
          Eu corro fujo desta sombra<br>
          Em sonhos vejo este passado<br>
          E na parede do meu quarto<br>
          Ainda está o seu retrato<br>
          Quero ver pra não lembrar<br>
          Pensei até em me mudar<br>
          Lugar qualquer que não exista<br>
          O pensamento em você<br>
          E eu<br>
          Gostava tanto de você<br>
          Gostava tanto de você<br>
          Não sei porque você se foi<br>
          Quantas saudades eu senti<br>
          E de tristezas vou viver<br>
          E aquele adeus, não pude dar<br>
          Você marcou em minha vida<br>
          Viveu, morreu na minha história<br>
          Chego a ter medo do futuro<br>
          E da solidão, que em minha porta bate<br>
          E eu<br>
          Gostava tanto de você<br>
          Gostava tanto de você<br>
          Eu corro fujo desta sombra<br>
          Em sonhos vejo este passado<br>
          E na parede do meu quarto<br>
          Ainda está o seu retrato<br>
          Eu quero ver pra não lembrar<br>
          Pensei até em me mudar<br>
          Lugar qualquer que não exista<br>
          O pensamento em você<br>
          E eu<br>
          Gostava tanto de você<br>
          Gostava tanto de você<br>
          E eu gostava tanto de você<br>
          E eu gostava tanto de você<br>
          Eu gostava tanto de você<br>
          Eu gostava tanto de você<br>
          Eu gostava, eu gostava<br>
          Eu gostava tanto de você<br>
          Eu gostava tanto de você<br>
          Gostava tanto<br>
          Eu gostava tanto de você<br>
          Eu gostava, de Tim Maia`
}







];