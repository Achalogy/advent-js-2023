# Reto 10

¡Vaya idea ha tenido Sam Elfman! Quiere ofrecer un servicio que te crea un **árbol de Navidad 🎄 personalizado** en cuestión de segundos.

Para crearlo nos pasan una **cadena de caracteres para formar el árbol** y un **número que indica la altura del mismo**.

Cada carácter de la cadena representa un adorno del árbol, y vamos utilizándolos **de forma cíclica** hasta llegar a la altura indicada. Como **mínimo siempre nos pasarán uno**.

Debemos devolver un **string** multilínea con el árbol de Navidad formado con los adornos, la altura indicada **más una última línea con el tronco formado por el carácter |** en el centro y, finalmente, un salto de línea \n.

Por ejemplo si recibimos la cadena "123" y el número 4 como altura, tendríamos que construir este árbol:

```
   1
  2 3
 1 2 3
1 2 3 1
   |
```

Si recibimos la cadena \*@o y el número 3, el árbol que debemos devolver es:

```
  *
 @ o
* @ o
  |
```

Nota:

- El árbol siempre debe estar centrado, para ello añade espacios en blanco a la izquierda de cada línea.
- Crea espacios sólo a la izquierda de cada línea del árbol. No dejes espacios en blanco a la derecha.
- Los adornos tienen un espacio en blanco entre ellos de separación.

# Solución

Mi solución se basa en ir cortando por partes un arreglo donde se repiten muchas veces la decoración.

Definiremos el ancho del árbol como `(height * 2) - 1`, ya que si nos fijamos en el siguiente ejemplo, el árbol tiene un tamaño de $4$ y su ancho es igual a $4$ más los espacios que deja entre cada número, que en este caso serán $4-1$:

```js
   1
  2 3
 1 2 3
1 2 3 1
   |
```

Ahora repetiremos muchas veces las decoraciones, en mi caso el problema funciona repitiéndolo `60` veces, ya que usaremos algunos métodos exclusivos de array, lo mejor es convertirlo de una vez

```js
ornaments = [...ornaments.repeat(60)];
```

Ahora iteraremos desde `i=0` mientras `i < height`, así tendremos todos los números desde `0` hasta `height-1`, uno en cada iteración. Con esto podremos saber cuantos ornamentos deben ir en cada nivel del árbol, ya que siempre será `i+1`. Además, el tamaño de esa capa con los espacios que deben ir entre cada decoración, que nuevamente es `(i * 2) - 1`.

```js
for (let i = 0; i < height; i++) {
  const layerWidth = i * 2 + 1;
}
```

Así que la cantidad de espacios que debemos poner es la diferencia entre el ancho total del árbol y el ancho de la capa actual, pero el reto solo nos pide poner los espacios de la izquierda, así que serán la mitad.

```js
const spaceCount = (width - layerWidth) / 2;

response += " ".repeat((width - layerWidth) / 2);
```

Ahora cortaremos (literalmente) la capa de nuestro arreglo de decoración, el método `.splice()` funciona similar a un `.slice()`, el primer parámetro será el lugar donde iniciaremos a cortar y el segundo es la cantidad de elementos a cortar, además tiene la particularidad de que al cortar, también reemplaza el arreglo con uno nuevo ya cortado, es decir:

```js
console.log(ornaments); // ["@", "$", "%", "#", "@", "*"]

ornaments.splice(0, 2);

console.log(ornaments); // ["%", "#", "@", "*"]
```

Así que cortaremos `h+1` (cantidad de decoraciones en la capa) elementos del arreglo y los uniremos con un espacio intermedio, luego de esto solo queda agregar el salto de línea.

```js
response +=
  " ".repeat((width - layerWidth) / 2) + // Espacios
  ornaments.splice(0, h + 1).join(" ") + // Decoración
  "\n"; // Salto de línea
```

Y solo nos queda agregar el tronco del árbol, que tendrá que ir a la mitad del árbol, así que la cantidad de espacios es `width/2`

```js
response += " ".repeat(width / 2) + "|" + "\n";
```
