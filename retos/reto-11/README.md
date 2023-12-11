# Reto 11

En el taller de Santa, los elfos aman los acertijos 🧠. Este año, han creado uno especial: un desafío para formar un palíndromo navideño.

**Un palíndromo es una palabra que se lee igual hacia adelante y hacia atrás.** Los elfos quieren saber si es posible formar un palíndromo haciendo, como mucho, un intercambio de letras.

Crea una función getIndexsForPalindrome que reciba una cadena de caracteres y devolverá:

- Si ya es un palíndromo, un array vacío.
- Si no es posible, null.
- Si se puede formar un palíndromo con un cambio, un array con las dos posiciones (índices) que se deben intercambiar para poder crearlo.

Por ejemplo:

```js
getIndexsForPalindrome('anna') // []
getIndexsForPalindrome('abab') // [0, 1]
getIndexsForPalindrome('abac') // null
getIndexsForPalindrome('aaaaaaaa') // []
getIndexsForPalindrome('aaababa') // [1, 3]
getIndexsForPalindrome('caababa') // null
```

Si se puede formar el palíndromo con diferentes intercambios, **siempre se debe devolver el primero que se encuentre.**

# Solución

Recorreremos todos los `swaps` posibles, es decir, cada una de las posibilidades que tenemos para intercambiar dos posiciones, así que debemos generar primero los índices que vamos a intercambiar:

```js
for (let a = 0; a < word.length; a++) {
  for (let b = 0; b < word.length; b++) {
    console.log([a, b]);
  }
}
```

Este código nos dará por cada letra de `word`, todas las otras letras de `word` con las que puede intercambiarse, si `word` es `"Hola"`, la `"H"` tendrá otro ciclo (el ciclo de b), donde estará en la primera iteración `"H"`, luego `"o"`, luego `"l"` y luego `"a"`.

Ahora realizaremos el intercambio, por comodidad trabajaremos `word` como un arreglo, cuidado con la variable `aux`, ya que sin esta no es posible el intercambio.

```js
let swapped = [...word];
let aux = word[a];
swapped[a] = word[b];
swapped[b] = aux;
```

Ahora solo debemos comparar cada mitad de la palabra, esto es posible porque en los casos de tamaño impar, la letra del centro da igual. Así que cortaremos desde 0 hasta el `Math.floor(word.length/2)`, que redondeará hacia abajo, y luego desde `Math.ceil(word.length/2)` que redondeará hacia arriba.

```js
let left = swapped.slice(0, Math.floor(word.length / 2)).join("");
let right = swapped
  .slice(Math.ceil(word.length / 2))
  .reverse()
  .join("");
```

Para revisar si es palíndromo uno de los strings debe de estar reversado. Si los dos índices son iguales, eso significa que la palabra es palíndroma y no necesita ningún cambio, entonces tendremos que usar otro condicional:

```js
if (left == right) {
  if(a == b) {
    return []
  }
  return [a, b];
}
```

# Optimización

Muy similar a retos anteriores, se usa `for .. of` y arreglos con dos posiciones en lugar de condicionales, revisar retos anteriores donde está mejor explicada este tipo de optimización.