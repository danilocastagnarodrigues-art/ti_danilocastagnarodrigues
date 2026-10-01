// respota n1

// O que quebra imediatamente é a conexão entre a estrutura e a aparência da página.
// Como a tag <link> é a responsável por dizer ao navegador onde buscar as regras visuais,
// removê-la faz com que o navegador ignore completamente o arquivo styles.css,
// mesmo que ele continue existindo na mesma pasta.

// resposta n2

// Não, isso não significa que o defer era desnecessário.
// Colocar o <script> no final do </body> ou usar o atributo defer no <head> servem para resolver o mesmo problema

// resposta n3

// :root {
//  --cor-urgente: #C00000;
// }

// .cartao-urgente {
//  border: 3px solid var(--cor-urgente);
// }

// .titulo-urgente {
//  color: var(--cor-urgente);
// }

// resposta n4

// O que foi conferido para ter certeza de que tudo continuava funcionando foi
// estilo visual e caminho do CSS, navegação por teclado, interatividade do JavaScript e o console do desenvolvedor

//resposta n5

//  Não existe resposta única. O que se avalia é o nome escolhido: nomes que descrevem o papel
// (–cor-destaque, –espaco-padrao) valem mais do que nomes que descrevem só a aparência atual
// (–azul, –dezesseis-pixels). Se o aluno escolheu menos de quatro valores realmente repetidos,
// é a hora de olhar o CSS dele junto e achar mais.