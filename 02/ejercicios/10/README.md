# aprendiendo-js. Sintáxis básica. Ejercicio 10
## Enunciado
Imagina que un cine quiere calcular el precio de una entrada según la edad del cliente y si tiene descuento de estudiante.

1. Declara una constante `precioBase = 10`.
2. Declara dos variables: `edad` y `esEstudiante` (booleano).
3. Si la edad es menor de `12`, el precio es `precioBase - 4`.
4. Si la edad es mayor o igual a `65`, el precio es `precioBase - 3`.
5. Si no cumple lo anterior pero `esEstudiante` es `true`, el precio es `precioBase - 2`.
6. En cualquier otro caso, el precio es `precioBase`.
7. Muestra un mensaje en consola con la edad, si es estudiante, y el precio final.
8. Usa switch para mostrar en consola el grupo al que pertenece la persona:
   - `"Niño"` si edad `< 12`
   - `"Adulto mayor"` si edad `>= 65`
   - `"Estudiante"` si es estudiante
   - `"Adulto"` en cualquier otro caso

## Salida esperada
```shell
Edad: 20
¿Estudiante? true
Precio final: 8
Grupo: Estudiante
```