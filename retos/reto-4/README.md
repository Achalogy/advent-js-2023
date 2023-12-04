# Reto 4

En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: **las letras dentro de los paréntesis deben ser leídas al revés**.

**Santa necesita que estos mensajes estén correctamente formateados**. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

Eso sí, ten en cuenta que **pueden existir paréntesis anidados**, por lo que debes invertir los caracteres en el orden correcto.

```js
const a = decode("hola (odnum)");
console.log(a); // hola mundo

const b = decode("(olleh) (dlrow)!");
console.log(b); // hello world!

const c = decode("sa(u(cla)atn)s");
console.log(c); // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
```

Notas:

- Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, no necesitas validarlos.
- En el mensaje final no deben quedar paréntesis.
- El nivel máximo de anidamiento es 2.

# Solución

Se usará regex para encontrar primero los paréntesis que, en el caso de ser anidados, sean los que están más en el fondo, esto se logra buscando por cualquier string entre paréntesis que no tenga paréntesis dentro, **o como se entiende en regex, todos los caracteres que no sea paréntesis y estén dentro de otros paréntesis**: `/\(([^()]+)\)/g`

Ahora con el grupo que definimos en el regex:

```js
/\(  (  [^()]+  )  \)/g
     ^          ^
```

Podemos eliminar los paréntesis exteriores y solo conservar el texto, al usar `.replace()` con una expresión regex, el primer argumento es el `match`, pero este incluye los paréntesis, para eso definimos el grupo, ya que el segundo argumento es el primer grupo.

Así que podemos definir una función que reciba dos argumentos y se encargue de reversar el string, hay que tener en cuenta que un string no se puede reversar directamente, así que primero tendremos que convertirlo a un arreglo y luego de reversarlo volver a convertirlo a string:

```js
const replacer = (_, group) => [...group].reverse().join("");
```

El reto no consiste de más de 1 paréntesis anidado, así que simplemente podemos ejecutar dos veces el `.replace()` y enviar la solución:

```js
return message
  .replace(regex, replacer)
  .replace(regex, replacer);
```

Pero si fuese necesario realizar más de dos veces por la cantidad de paréntesis anidados, podemos hacer un ciclo que se repita las veces que existan '(' en el texto original:

```js
let count = message.match(/\(/g).length;

while (count--) {
  // Acá va el código :D
}
```
