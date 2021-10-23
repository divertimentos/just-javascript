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

- Valores primitivos são imutáveis. São read-only.
  Embora pareça que strings são um tipo de array, isso não é verdade. Isso significa que, embora seja possível acessar índices de strings da mesma forma que fazemos com índices de arrays, códigos como o seguinte não irão funcionar:
  console.log(reaction) // 'yikes'

```javascript
let reaction = "yikes";
reaction[0] = "l";
console.log(reaction); // 'yikes'
```

> "Contradictions reveal gaps in mental models." (Dan Abramov)

### Variables are wires

Embora não seja possível "editar" strings, é possível fazê-lo com variáveis que guardam strings, pois:

- **Variables are not values**
- **_Variables point to values_**

As variáveis, criadas com `let` são mutáveis. Você pode sobrescrevê-las. É por isso que usamos `const` quando queremos que os valores definidos originalmente sejam, além de imutáveis, impossíveis de serem sobrescritos.

O conceito-chave aqui é imaginar que variáveis/constantes não "guardam" valores, elas apontam para valores localizados em endereços de memória do computador.

### Rules of Assignment

Um outro detalhe, que se torna óbvio neste contexto porém é importantíssimo, é que variáveis/constantes não guardam necessariamente valores; elas, na verdade quartam expressões, que retornam valores.

- Expressões retornam valores.

- `2` é uma expressão, `hello` é uma expressão. Se você perguntar `2` para o JavaScript, ele irá te responder "2". Se, no entanto, você pedir `let`, o compilador retornará um "_Uncaught ReferenceError: let is not defined_" porque `let` não é uma expressão que resulta em um valor. Chamamos de "**literais**" as expressões cujos valores retornados são os mesmos que passamos para o compilador.

# Parte 4: Studying from the inside

Existem duas formas de observar o JS: por dentro e por fora. A parte de fora analisa como humanos interagem com as máquinas, como se comportam ponteiros e endereços de memória. Já a parte de dentro trata de valores. Olharemos para o baixo nível das máquinas apenas quando necessário, pois isso não é imprescindível para aprender.

# Parte 5: Printing the Primitive Values

![celestialSpheres](https://github.com/divertimentos/JustJavaScript/blob/main/media/celestialspheres-v2.png)

### undefined

Esse é _straightforward_ porque existe apenas um valor associado a ele, que é ele próprio. Ou seja, podemos considerar o `undefined` um literal.

```javascript
console.log(typeof undefined); // "undefined"
```

O `undefined` é um valor... que está indefinido não intencionalmente. Ele se posiciona no lugar de um outro valor que deveria estar lá, mas que, por causa de algum side-effect, não está. Quando o JavaScript não sabe qual valor mostrar, ele retorna `undefined`.

```javascript
let bandersnatch;
console.log(bandersnatch); // undefined
```

É importantar evitar achar que o `undefined` significa que a variável não está definida, pois ela está e a prova disso é justamente o fato do `undefined` ser um valor, um valor primitivo, assim como o "hello" e o `1234`.

### null

Assim como o `undefined`, o `null` também é um tipo que possui um único valor. Um #funFact sobre ele é que o JavaScript possui um antigo bug que faz com que o `typeof(null)` retorn `object`, o que não é verdade. O `null` é do tipo `null`. A "prova" de que `null` não é um objeto é o duck typing: ele não caminha como um objeto, não nada como um objeto, não grasna como um objeto, então não é um objeto.

Como mencionado anteriormente, esse tipo é usado para valores vazios intencionais. Declarar um estado inicial no React com um valor indefinido? Use `null` no lugar de `undefined`. O `undefined` vai dar as caras se você renderizar um elemento antes do fetch à API terminar.

### booleanos

- "Should I stay or should I go?"
- "Yes"

### números

Bom, enquanto `null` e `undefined` possuem um único valor/item cada em seu conjunto-universo, os pertencentes aos `number` são 18 quintilhões, 437 quadrilhões, 736 trilhões, 874 bilhões, 454 milhões, 812 mil, 124 itens.

> JavaScript uses numbers with limited precision (Dan Abramov)

Isso significa que quanto mais próximos estivermos do `0` (zero), mais precisos estamos sendo. A linguagem de programação só vai usar seu maquinário de precisão para os números mais usados (por exemplo, os inteiros). É como a engine de um game que não gasta poder de processamento para renderizar uma árvore para a qual o personagem não está olhando, ou renderizar peixes dentro de um rio que o personagem está passando ao lado mas não entrou.

Na prática, quaisquer números inteiros entre `Number.MIN_SAFE_INTEGER` e `Number.MAX_SAFE_INTEGER` são exatos. É por isso que:

`0.1 + 0.2 === 0.3 // false`,

mas

`10 + 20 === 30 // true`

### Números especiais (`NaN`, `Infinity`, `-Infinity`, `-0`) :sparkles:

```javascript
let scale = 0;
let a = 1 / scale; // Infinity
let b = 0 / scale; // NaN
let c = -a; // -Infinity
let d = 1 / c; // -0
```

O `NaN` é retornado quando você tenta realizar cálculos considerados inválidos, como dividir algum número por 0 (zero). O interessante é que o próprio `NaN` é do tipo `number`. Embora soe paradoxal, o fato do `NaN` ser um `number` é parecido com o motivo pelo qual o retorno de `typeof` ser do tipo `string`. Ele só poder ser um tipo numérico; não faria sentido ele ser `string`, `null` ou `undefined`.

### BigInts

# Parte 6: Meeting Objects and Functions

# Parte 7: Equity of Values

# Parte 8: Properties

# Parte 9: Mutation

# Parte 10: Prototypes
