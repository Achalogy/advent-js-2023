# Reto 3

En el taller de Santa, **un elfo travieso** ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.

Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.

Tu tarea es **escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación**. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

```js
const original = "abcd";
const modified = "abcde";
findNaughtyStep(original, modified); // 'e'

const original = "stepfor";
const modified = "stepor";
findNaughtyStep(original, modified); // 'f'

const original = "abcde";
const modified = "abcde";
findNaughtyStep(original, modified); // ''
```

A tener en cuenta:

- Siempre habrá un paso de diferencia o ninguno.
- La modificación puede ocurrir en cualquier lugar de la cadena.
- La secuencia original puede estar vacía

# Solución

Debemos revisar la `cadena más larga`, posición por posición, hasta encontrar la posición que no sea igual en la `cadena más corta`. Se hace esto porque la cadena más larga siempre será la que tiene el paso extra o el paso faltante.

Hay muchas formas de hacerlo, una de estas es:

```js
const [lessWords, mostWords] = [original, modified].sort(
  (a, b) => a.length - b.length
);
```

Y ahora solo tendremos que encontrar el que no se repita en la `cadena más corta`:

```js
return [...mostWords].find((x, i) => lessWords[i] != x) ?? "";
```

Hay que tener en cuenta que al ser `strings` debemos usar el spread operator para poder usar los métodos de un array, como `.find()`.