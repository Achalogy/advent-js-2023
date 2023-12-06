# Reto 6

Los elfos están catalogando los renos de Santa 🦌 según la distancia que pueden recorrer.

Para ello tienen una cadena de texto movements donde cada caracter representa la dirección del movimiento del reno:

- \> = Avanza a la derecha
- \< = Avanza a la izquierda
- \* = Puede avanzar o retroceder

Por ejemplo, si el movimiento es >>\*<, va hacia la derecha dos veces, luego puede ir a derecha o izquierda (lo que maximice la distancia recorrida final) y luego ir a la izquierda.

Los elfos quieren saber cuál es la máxima distancia que recorre el reno al **finalizar todos los movimientos**.

**En el ejemplo anterior, la máxima distancia que recorre el reno es 2**. Va a la derecha dos veces +2, luego con el \* puede ir a la derecha otra vez para maximizar la distancia +1 y luego va a la izquierda -1.

Crea una función maxDistance que reciba la cadena de texto movements y devuelva **la máxima distancia** que puede recorrer el reno en **cualquier dirección**:

```js
const movements = ">>*<";
const result = maxDistance(movements);
console.log(result); // -> 2

const movements2 = "<<<>";
const result2 = maxDistance(movements2);
console.log(result2); // -> 2

const movements3 = ">***>";
const result3 = maxDistance(movements3);
console.log(result3); // -> 5
```

Ten en cuenta que no importa si es a la izquierda o la derecha, la distancia es **el valor absoluto de la distancia recorrida máxima al finalizar los movimientos**.

# Solución

Lo primero que debemos hacer es encontrar la cantidad de movimientos a cada dirección, `>` para derecha y `<` para izquierda, la distancia que en realidad se alejo desde donde inicio, es la resta entre derecha e izquierda, el problema que surge es cuando se movio más veces a la izquierda, ya que nos dará un número negativo, ya que de todas formas el número esta bien, solo debemos quitar el negativo, esto se conoce como _valor absoluto_ y lo logramos con `Math.abs()`

```js
Math.abs(-5); // 5
```

Encontrar la cantidad de movimientos a cada dirección se puede lograr de muchas formas, una de ellas usando regex para contar la cantidad de `<` `>`:

```js
let distance = 0;

let right = movements.match(/>/g)?.length ?? 0;
let left = movements.match(/</g)?.length ?? 0;

distance += right;
distance -= left;
```

Ahora solo quedan la cantidad de movimientos extra que deben maximizar el resultado, ya que nuestra distancia ya esta en numeros positivos, es como si en los casos en los que recorre más distancia a la izquierda, se hubiese invertido y hubiese recorrido más a la derecha. Es decir, que da igual el caso, siempre debemos sumar la cantidad de `*`.

Se puede realizar otro regex para encontrar la cantidad de `*`, pero esto no es óptimo, ya que en realidad tenemos ese numero, solo debemos restar de la cantidad total de movimientos los movimientos de izquierda y derecha, ya que si sacamos estos, solo queda la cantidad de movimientos extra:

```js
let extra = movements.length - (right + left);
```

Ahora si debemos usar `Math.abs()` y a este valor absoluto sumarle los movimiento extra:

```js
return Math.abs(distance) + extra;
```
