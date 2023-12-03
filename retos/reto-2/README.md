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

La solución se basa en filtrar los regalos que cumplan con que el `Set` de la unión de `g` (regalo) y `materials` (`g + materials`), tengan la misma longitud que `materials`, esto se logra porque `Set` no va a permitir elementos repetidos.

Usamos *spread operator* para separar en letras `g + materials`, ya que al ser un string, no se puede ver como un arreglo, así que lo convertimos a uno. Luego se vuelve a usar para convertir `Set` en un arreglo. *Spread operator* separa en pedacitos cada uno, así que al ponerlo dentro de un arreglo vacío, cada parte va a pasar a formar parte del arreglo.

## Ejemplo

```ts
const g = "tren" // g en la primer iteración

const x = [...new Set(...[g + materials])]

console.log(x) // [ "t", "r", "e", "n", "o", "s", "a" ]

```

En este caso `materials` es exactamente igual a `x`, por lo tanto tienen la misma longitud, es decir que **sí** podemos construir este regalo.