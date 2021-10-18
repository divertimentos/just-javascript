# Just JavaScript

Just JavaScript é um curso de JavaScript puro ministrado por Dan Abramov e Maggie Appleton.

# Parte 1: Mental Models

Na primeira parte, aprendemos que as metáforas que usamos para aprender a programar (como a das variáveis que "guardam valores") nem sempre nos ajudam a entender conceitos mais abstratos conforme avançamos. Em algumas vezes elas estão simplesmente erradas. É o velho dilema de sacrificar precisão em nome do didatismo.

O Dan também explicou brevemente o "slow thinking vs fast thinking", apontando com um exemplo que para programar precisamos usar quase sempre o slow. Disse também que não tem problema se não conseguiu nem notar o bug nem entendê-lo, pois esse tipo de pessoa é o que mais vai aproveitar o conteúdo do curso. Muito bom saber, pois é o meu caso.

Uma função recebe um arquivo original e cria uma cópia/duplicata dele. Em algum momento, segundo o Dan, a função altera o título do arquivo original. Eu não consegui entender o porquê. Segue o baile.

# Parte 2: The JavaScript Universe

### Valores e Código

O conceito de "valor" é tão fundamental para o JS que chega a ser axiomático. Impossível defini-lo através de outros termos. Resta-nos explicá-lo através de exemplos: números são valores, strings são valores etc.

Podemos dividir os valores do JS em dois: os próximos (core) e os distantes. Os próximos são `undefined`, `strings`, `booleanos` e os tipos numéricos. Já os distantes são os Objetos (`{}`) e as Funções (`x => x * 2`)

### Tipos de valores

Uma coisa que eu não fazia ideia (assim como os outros 99% desse curso maravilhoso):

- O `undefined` serve para valores vazios não **intencionais**;
- Já o `null` serve para valores vazios **intencionais**.

Outra coisa digna de nota é que todos os outros tipos de valores (como os arrays), para o JavaScript são objetos. Eles não fazem parte da lista de tipos fundamentais (primitivos) do JS. Isso explica por que arrays são objetos, assim como instâncias de classes, queries de regex etc.

Uma terceira coisa é notar que a frase "tudo no JS é um objeto" não é verdadeira. Quando você chama um método de string qualquer, como o `.toUpperCase()`, um objeto temporário é criado, o que não significa que strings são objetos. Strings são tipos primitivos, são strings.

### Expressões

Expressões podem ser entendidas como perguntas que você faz e o JavaScript é capaz de responder. Se você perguntar `2 + 2`, o JS vai responder `4`. Se você perguntar `console.log(typeof(2))` o JS vai responder `number`. E qual é a forma através da qual o JavaScript responde as perguntas das expressões? Sim, por meio de valores. O retorno de expressões são sempre valores.

# Parte 3: Values and Variables

# Parte 4: Studying from the inside

# Parte 5: Printing the Primitive Values

# Parte 6: Meeting Objects and Functions

# Parte 7: Equity of Values

# Parte 8: Properties

# Parte 9: Mutation

# Parte 10: Prototypes
