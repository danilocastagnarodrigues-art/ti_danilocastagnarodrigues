// ex1
// O texto do link deve descrever claramente para onde ele leva (como "Escolas") porque muitas pessoas navegam ouvindo apenas uma lista isolada de todos os links da página. Se houver vários "clique aqui", o usuário não tem contexto para saber o destino de cada um. Os mais prejudicados são os usuários que dependem de leitores de tela (pessoas cegas ou com baixa visão), embora links descritivos ajudem qualquer pessoa a navegar melhor.

// ex2
// Visualmente, os dois deixam o texto em negrito, mas o significado é diferente: a tag <b> serve apenas para estética (deixar a letra grossa), enquanto <strong> indica que aquela palavra tem grande importância semântica. Para um leitor de tela, o <strong> faz com que a voz dê ênfase na leitura, alertando que aquilo merece atenção, o que não acontece com o <b>.

// ex3
// O erro é empilhar várias tags <br> para tentar criar um espaçamento visual. Espaço entre elementos é função do CSS (usando margin ou padding), e não do HTML. O <br> deve ser usado apenas uma vez quando a quebra de linha faz parte da estrutura do próprio texto.
// Reescrita correta no HTML:
// <p>Radar de Evasao<br>NRE Cascavel</p>
// (E para afastar esse parágrafo do próximo elemento, usa-se margin-bottom no CSS).

// ex4
// <a href="https://www.apoio.exemplo.org" target="_blank" rel="noopener">Canal de apoio</a>

// ex5
// Criei os arquivos index.html e styles.css do zero com a estrutura da tag <nav class="sidebar">, a marca com <br> e a lista <ul> com os 6 links.
// O que não funcionou de primeira: esqueci de colocar "list-style: none;" na classe .menu e "text-decoration: none;" nos links, então a barra apareceu inicialmente com as bolinhas padrão da lista e os textos sublinhados. Depois de corrigir no CSS e testar no navegador, os 6 itens ficaram alinhados, o item ativo recebeu o fundo de realce e a borda de foco apareceu ao navegar com a tecla Tab.

// ex6
// Trouxe os tokens do Figma para o :root do styles.css (--bg-primary, --surface, --muted, --canvas, --text-primary e --text-secondary).
// Tokens aplicados na barra:
// - --surface: usado no background-color da .sidebar;
// - --muted: usado no background-color do link ativo (.menu a.ativo);
// - --bg-primary: usado na cor do texto do link ativo e na borda do :focus;
// - --text-secondary: usado na cor padrão dos links do menu.