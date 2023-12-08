# Reto 8

Los elfos están muy ocupados en el taller de Santa Claus organizando regalos 🎁 para la víspera de Navidad 🎄.

El formato de entrada es especial, ya que indica el número de regalos y el tipo de regalo con letras de la a a la z. Por ejemplo, `'66a11b'` significa 66 regalos a y 11 regalos b.

Los elfos tienen un **sistema especial** para organizar los regalos:

- Cada 10 regalos del mismo tipo se empaquetan en una caja, representada por {x}. Por ejemplo, 20 regalos tipo a se empaquetan en 2 cajas así: {a}{a}.
- Cada 5 cajas se apilan en un palé, representado por [x]. Por ejemplo, 10 cajas de a se apilan en 2 palés de esta manera: [a][a]
- Cualquier regalo adicional se coloca en una bolsa, representada por () y se colocan todas dentro. Por ejemplo 4 regalos de b se colocan en una bolsa así (bbbb)

**Los regalos luego se colocan en el siguiente orden**: palés, cajas y bolsas. Y los regalos aparecen en el mismo orden que la cadena de entrada.

Tu tarea es escribir una función organizeGifts que tome una cadena de regalos como argumento y devuelva una cadena representando el almacén.

```js
const result1 = organizeGifts(`76a11b`);
console.log(result1);
// '[a]{a}{a}(aaaaaa){b}(b)'

/* Explicación:

76a: 76 regalos tipo 'a' se empaquetarían en 7 cajas y sobrarían 6 regalos, resultando en 1 palé [a] (por las primeras 5 cajas), 2 cajas sueltas {a}{a} y una bolsa con 6 regalos (aaaaaa)

11b: 11 regalos tipo 'b' se empaquetarían en 1 caja y sobraría 1 regalo, resultando en 1 caja suelta {b} y una bolsa con 1 regalo (b) */
```

# Solución

Por cada regalo debemos ir agrupandolos en cantidades de 50, luego de 10 y luego los sobrantes, es decir que por cada 50, vamos a tener un `[a]`, luego por cada 10 un `{a}` y luego por cada sobrante, los agregaremos dentro de parentesis, es decir que si nos sobran 4: `(aaaa)`

Para separar cada regalo y cada nombre del regalo podemos usar regex:

```js
const countGifts = gifts.match(/\d+/g);
const nameGifts = gifts.match(/[^0-9]/g);
```

Ya solo quedaria ir iterando uno por uno agregando las cajas necesarias, siendo `c` la cantidad del regalo, `g` el nombre del regalo y `a` un string donde almacenamos las cajas:

```js
c = +c;

a += `[${g}]`.repeat(c / 50);
c %= 50;

a += `{${g}}`.repeat(c / 10);
c %= 10;

a += `(${g.repeat(c)})`.repeat(+!!c);
```

Solo queda unir estos strings y esa sería nuestra respuesta.

## Optimización

Si revisaste mi solución, verás algunas cosas raras, estas son importantes para lograr el puntaje más alto, ya que se encargan de reducir la complejidad.

### Ciclo con Complejidad 0

Al parecer, hacer uso de `for .. of` no aumenta la complejidad, este itera un arreglo, `countGifts`.

### Usar `.repeat()` para evitar el último condicional

Podemos usar repeat con el valor numerico del signo de `c`, ya que el caso en el que necesitamos que no se agreguen los regalos extra a la respuesta es cuando `c  == 0`, así que si repetimos `+!!c` veces el texto, en el caso de `c == 0` se repetirá 0 veces y en cualquier otro caso solo 1.
