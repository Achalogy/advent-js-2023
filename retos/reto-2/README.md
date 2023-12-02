# Reto 2

En el taller de Santa, los elfos tienen una **lista de regalos** que desean fabricar y un conjunto limitado de materiales.

Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una **lista de los regalos que se pueden fabricar**.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

```js
const gifts = ["tren", "oso", "pelota"];
const materials = "tronesa";

manufacture(gifts, materials); // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts = ["juego", "puzzle"];
const materials = "jlepuz";

manufacture(gifts, materials); // ["puzzle"]

const gifts = ["libro", "ps5"];
const materials = "psli";

manufacture(gifts, materials); // []
```

# Solución

Vamos a basar la solución en un `Set` que al cambiar de tamaño nos dirá si ese regalo contiene más letras de las que contenemos en materiales.

Ya que vamos a tener que crear un arreglo de cada letra, vamos primero a separar materiales, porque no es óptimo realizarlo por cada regalo, siempre será el mismo: `const mate = materials.split("")`.

Ahora solo queda filtrar los regalos que cumplan con que el `Set` de la unión de `g` (regalo) y `mate`, tengan la misma longitud que `mate`, esto se logra porque `Set` no va a permitir elementos repetidos.

## Ejemplo

```ts
const mate = ["t", "r", "o", "n", "e", "s", "a"]

const regalo1 = ["t", "r", "e", "n"]

const x = [...new Set([...regalo1, ...mate])]

console.log(x) // [ "t", "r", "e", "n", "o", "s", "a" ]

```

En este caso `mate` es exactamente igual a `x`, porque no agregamos nada nuevo, es decir que **si** podemos construir este regalo.