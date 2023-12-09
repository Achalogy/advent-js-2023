# Reto 9

Están encendiendo las **luces de Navidad** 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!

Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, **siempre deben estar alternadas**. Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.

Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz, devuelva el **número mínimo** de luces que hay que cambiar para que estén los colores alternos.

```js
adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
// -> 1 (cambias la cuarta luz a 🔴)

adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
// -> 0 (ya están alternadas)

adjustLights(['🔴', '🔴', '🔴'])
// -> 1 (cambias la segunda luz a 🟢)
```

# Solución

Iremos revisando luz por luz y sumaremos `+1` a un contador en el caso de que la luz anterior sea igual, además en el caso de que sea igual, la cambiaremos.

```js
["🔴", "🔴", "🟢", "🟢", "🔴"];
```

Primero revisaremos la primer 🔴, que como es diferente a la anterior (valor por defecto) `""`, así que solo cambiaremos nuestra variable donde guardamos el valor anterior y lo actualizaremos con 🔴.

Luego revisaremos la segunda 🔴, esta si es igual a la anterior, así que sumaremos `+1`a la respuesta y cambiaremos la variable donde guardamos el valor anterior por cualquier cosa diferente a 🔴.

```js
if (l == start) {
  // l siendo cada elemento de lights
  start = "";
  res++;
} else {
  start = l;
}
```

# Optimización

Similar al reto 7 y 8.

## Ignorar Condicionales

Para evitar tener que validar si `l == start`, sumaremos `+(l == start)`, ya que solo será `+1`en el caso de que `l` sea igual a `start`.

Y para la asignación del nuevo valor de `start`, podemos usar nuevamente el `0` y el `1` que nos da `+(l == start)`, esta vez viéndolos como el índice a acceder de un arreglo. En `0` estaría el caso en que es diferente, es decir que se tiene que reemplazar por el actual, y en `1` el caso donde es igual y se tiene que reemplazar por cualquier otro valor.

```js
start = [l, " "][+(l == start)];
```