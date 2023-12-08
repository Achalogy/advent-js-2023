# Reto 7

Santa está experimentando con nuevos diseños de regalos y **necesita tu ayuda para visualizarlos en 3D**.

Tu tarea es escribir una función que, dado un tamaño n (entero), **genere un dibujo de un regalo en 3D** utilizando caracteres ASCII.

Las líneas de los regalos se dibujan con `#` y las caras con el símbolo que nos pasan como parámetro:

```js
drawGift(4, "+");

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

drawGift(5, "*");
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

drawGift(1, "^");
/*
#
*/
```

Importante: Nos han dicho que **siempre hay que dejar un salto de línea al final del dibujo**.

**Nota**: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter ".

# Solución

Primero debemos definir los números que vamos a usar, es decir, qué tamaño tendrá el regalo y que tamaño tendrá el fondo o la cara de cada regalo, por ejemplo, en un regalo de tamaño 4, el fondo (`+`) es de tamaño 2 y los bordes son del mismo tamaño que el regalo:

```
   #### // Tamaño 4 = Tamaño del regalo
  #++##
 #++#+#
####++#
#++#+#
#++##
####    // Tamaño 4 = Tamaño del regalo
```

Debemos tener cuidado con los negativos, ya que si tenemos un cuadrado de tamaño 1, el tamaño del fondo será de -1, para esto podemos usar un condicional cuando lo necesitemos, pero una versión que no aumente la complejidad es agregarle el símbolo contrario de `bgSize + 1`, ya que:

```js
size = 3;
bgSize = size - 2; // 1

bgSize += +!(bgSize + 1);
// +!(2)
// +false
// 0
```

```js
size = 2;
bgSize = size - 2; // 0

bgSize += +!(bgSize + 1);
// +!(1)
// +false
// 0
```

```js
size = 1;
bgSize = size - 2; // -1

bgSize += +!(bgSize + 1);
// +!(0)
// +true
// 1
```

Esta solución tiene en cuenta que nunca se pedirá un regalo de tamaño 0.

Ya con estos valores podemos crear la parte de arriba, la parte de abajo y el centro.

```js
const top = " ".repeat(size - 1) + "#".repeat(size) + "\n";
const center = "#".repeat(size) + symbol.repeat(bgSize) + "#" + "\n";
const bottom = "#".repeat(size) + "\n";
```

Ahora solo debemos calcular lo que va entre estas 3 lineas:

```
--------- TOP
  #++##
 #++#+#
--------- CENTER
#++#+#
#++##
--------- BOTTOM
```

Si nos fijamos, podemos ver que ambas partes son iguales, solo que están del revés y una no tiene espacios al inicio, así que primero calcularemos la parte de abajo, con un ciclo que vaya desde `0` hasta `bgSize-1` la definiremos como:

```js
const c = "#" + symbol.repeat(bgSize) + "#" + symbol.repeat(a) + "#";
```

Que nos dará algo como esto, que deberemos reversar para la parte centro-abajo:

```
IT1 - #++##
IT2 - #++#+#
```

La siguiente linea reversa y guarda el centro-abajo en una variable:

```js
bottomCenter = c + "\n" + bottomCenter;
```

Y para la parte de arriba, calcularemos los espacios que van antes con:

```js
topCenter += " ".repeat(bgSize - a) + c + "\n";
```

Ya con esto, podemos definir nuestra respuesta como la suma de cada una de las partes, menos en el caso en que `size = 1`, acá es cuando tendremos que validar si `size > 0`.

## Optimización

Si revisaste mi solución, verás algunas cosas raras, estas son importantes para lograr el puntaje más alto, ya que se encargan de reducir la complejidad.

### Ciclo con Complejidad 0

Al parecer, hacer uso de `for .. of` no aumenta la complejidad, este itera un arreglo, así que primero tendremos que hacer un arreglo lleno con los números desde `0` hasta `bgSize-1`, la forma de hacerlo sin aumentar la complejidad es: 

```js
[...Array.from({ length: bgSize }).keys()]
```

### Usar `.repeat()` para evitar el último condicional

Podemos usar repeat con el valor numerico del signo de `size-1`, ya que el caso en el que necesitamos que no se agreguen todas las partes a la respuesta es cuando `size = 1`, así que si repetimos `+!!(size -1)` veces el texto, en el caso de `size = 1` se repetirá 0 veces.

```js
const size = 3
// +!!(size - 1)
// +!!(2)
// +true
// 1
```

```js
const size = 2
// +!!(size - 1)
// +!!(1)
// +true
// 1
```

```js
const size = 1
// +!!(size - 1)
// +!!(0)
// +false
// 0
```