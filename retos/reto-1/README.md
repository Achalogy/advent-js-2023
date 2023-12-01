# Reto 1

En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.

Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.

¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!

En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.

```ts
const giftIds = [2, 1, 3, 5, 3, 2];
const firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId); // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4];
const firstRepeatedId2 = findFirstRepeated(giftIds2);
console.log(firstRepeatedId2); // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1];
const firstRepeatedId3 = findFirstRepeated(giftIds3);
console.log(firstRepeatedId3); // 5
```

¡Ojo! Los elfos dicen que esto es una prueba técnica de Google.

# Solución

Tenemos que encontrar la primer repetición de un arreglo, para esto podemos usar una estructura auxiliar, en mi caso usare un objeto. La idea principal es que en nuestra estructura auxiliar almacenemos si ese número ya esta "visitado" así luego podemos retornar el primero que ya este "visitado" o de lo contrario `-1`.

Ya que solo debemos encontrar el **primero**, usaré find, ya que este solo se ejecuta hasta encontrar un elemento que cumpla la condición, condición que en nuestro caso es que ya exista un valor en la posición de ese número, es decir que ya este visitado.

```ts
let obj = {};
let res = -1;

gifts.find((g) => {
  if (obj[g]) {
    res = g;
    return true;
  }
  obj[g] = true;
});
```

Hay muchas formas de lograr el -1, pero en mi caso, fue mejor el puntaje realizandolo de esta forma, si nunca encontramos un numero que cumpla la condición, la variable `res` mantiene su valor en -1.