# Modulo de Lógica de Programación con Makaia

La **lógica de programación** es fundamental en el desarrollo web Frontend. Se refiere a la habilidad de organizar ideas e instrucciones de manera coherente para resolver problemas. Si esto lo pasamos a la web:

1. **Resolución de Problemas**: La lógica descompone problemas complejos en pasos más simples. Al diseñar interfaces, pensamos lógicamente para crear flujos de navegación y validaciones.

2. **Optimización del Código**: Una lógica bien estructurada conduce a un código limpio y eficiente. En React, planificamos componentes y estados aplicando lógica.

3. **Interactividad**: La lógica permite crear interacciones dinámicas. Usamos condiciones (como `if`, `else`) para mostrar u ocultar elementos según el estado de la aplicación.

La programación no se puede ejecutar sin los **algoritmos**, y aunque suene a un concepto muy técnico, un **algoritmo** es un conjunto de instrucciones, esta siempre tienen un orden, son finitas y delimitadas a resuelver un problema específico. En el contexto de la programación, los algoritmos son esenciales para diseñar soluciones eficientes. 

Aquí pondré un ejemplo sencillo:

```markdown
## Ejemplo: Suma de Dos Números Enteros

1. **Comienzo**
2. Declare las variables `num1`, `num2` y `sum`.
3. Lea los valores de `num1` y `num2`.
4. Calcule la suma: `sum = num1 + num2`.
5. Muestre el resultado de la suma.
6. **Detener**
```
Este algoritmo toma dos números ingresados por el usuario, los suma y muestra el resultado. La lógica detrás de este proceso es fundamental para la programación, ya que se aplica en tareas más complejas.

## Estructuras de control

Ahora teniendo en cuenta este concepto, vamos a lo que son las estructuras que suelen tener estos algoritmos, o llamado comunmente como Las **estructuras de control**, estas son herramientas  que permiten controlar el flujo de ejecución de un programa. Estas estructuras determinan el orden en que se ejecutan las instrucciones y cómo se toman decisiones en base a condiciones específicas. Existen tres tipos principales de estructuras de control:

1. **Secuenciales**:
   -  Esta estructura asegura que las instrucciones se ejecuten en orden secuencial, una tras otra. Es la base de la programación estructurada y garantiza la coherencia en la ejecución.
   - **Ejemplo en Desarrollo Web Frontend**:
     ```javascript
     // Ejemplo de secuencia: cargar una página web
     cargarHTML();
     cargarCSS();
     cargarJS();
     ```

2. **Selectivas o Condicionales**:
   - Evalúan condiciones y ejecutan instrucciones según el resultado (verdadero o falso) de la evaluación. Permite tomar decisiones dinámicas en función de variables o eventos.
   - **Ejemplo en Desarrollo Web Frontend**:
     ```javascript
     // Mostrar un mensaje según la hora del día
     if (horaActual < 12) {
       mostrarSaludo("¡Buenos días!");
     } else {
       mostrarSaludo("¡Buenas tardes!");
     }
     ```

3. **Iterativas o de Bucle**:
   - : Repiten un conjunto de instrucciones mientras se cumpla una condición. Facilita la automatización y procesamiento de datos repetitivos.
   - **Ejemplo en Desarrollo Web Frontend**:
     ```javascript
     // Iterar sobre elementos de una lista y mostrarlos en una tabla
     for (let i = 0; i < listaElementos.length; i++) {
       mostrarEnTabla(listaElementos[i]);
     }
     ```

## JavaScript ES6
En el desarrollo web Frontend, cuando hablamos del lenguaje de programación javaScript, su lenguaje y su estructura se contruyen con ECMAScript (ES), este es una especificación estándar para un lenguaje de programación de alto nivel, y saber las versiones que ha tenido cada uno es importante para saber todas las ventajas que aprovechamos ahora.

Antes de la introducción de **ECMAScript 6 (ES6)**, la declaración de variables y constantes en **JavaScript** se realizaba principalmente mediante las palabras clave `var` y `const`:

1. **`var`**:
   - Se utilizaba para declarar variables globales o locales.
   - **Problemas**:
     - **Ámbito global**: Las variables declaradas con `var` tenían un ámbito global o de función, lo que a menudo causaba problemas de colisión de nombres y dificultaba el mantenimiento del código.
     - **Hoisting**: Las declaraciones de `var` se movían al principio de su ámbito, lo que podía generar comportamientos inesperados.
     - **Falta de bloque scope**: No existía el alcance de bloque (block scope), lo que dificultaba la gestión de variables dentro de bloques de código.
   - **Ejemplo**:
     ```javascript
     var nombre = "Juan";
     ```

2. **`const`**:
   - Se usaba para declarar constantes cuyos valores no cambiarían.
   - **Problemas**:
     - **Falta de soporte**: `const` no era ampliamente compatible en navegadores antiguos.
     - **Inmutabilidad parcial**: Aunque el identificador no podía ser reasignado, si se trataba de un objeto, sus propiedades podían modificarse.
   - **Ejemplo**:
     ```javascript
     const PI = 3.14;
     ```

**ECMAScript 6 (ES6)** introdujo mejoras significativas en la declaración de variables y constantes:

- **`let`**:
  - **Ámbito de bloque**: `let` permite declarar variables con alcance de bloque, lo que evita colisiones de nombres y mejora la legibilidad.
  - **Hoisting controlado**: El hoisting de `let` es más predecible y controlado.
  - **Ejemplo**:
    ```javascript
    let edad = 25;
    ```

- **`const`** (mejorado):
  - **Ámbito de bloque**: `const` también tiene alcance de bloque.
  - **Inmutabilidad mejorada**: Aunque el identificador no puede ser reasignado, si se trata de un objeto, sus propiedades también son inmutables.
  - **Ejemplo**:
    ```javascript
    const URL_API = "https://api.example.com";
    ```

Estas mejoras en ES6 resuelven problemas de colisión de nombres, facilitan el mantenimiento del código y promueven buenas prácticas de programación. Además, el uso adecuado de `const` y `let` ayuda a evitar errores y crea un código más robusto.

## Funciones en JavaScript
Hablando un poco de JavaScript, aquí podré  las diferentes formas de declarar funciones y sus diferencias:

1. **Declaración de Función**:
   - **Sintaxis**:
     ```javascript
     function saludar(nombre) {
       return "¡Hola, " + nombre + "!";
     }
     ```
   - : Las declaraciones de función se definen con la palabra clave `function`. Pueden ser llamadas antes de su definición (hoisting) y tienen su propio contexto de `this`.
   - **Ejemplo**:
     ```javascript
     saludar("Ana"); // Devuelve "¡Hola, Ana!"
     ```

2. **Expresión de Función**:
   - **Sintaxis**:
     ```javascript
     const sumar = function(a, b) {
       return a + b;
     };
     ```
   - : Las expresiones de función se asignan a una variable. No se pueden llamar antes de su definición y también tienen su propio contexto de `this`.
   - **Ejemplo**:
     ```javascript
     const resultado = sumar(5, 3); // Devuelve 8
     ```

3. **Función de Flecha (Arrow Function)**:
   - **Sintaxis**:
     ```javascript
     const multiplicar = (a, b) => a * b;
     ```
   - : Las funciones de flecha son una forma más concisa de escribir funciones. No tienen su propio `this` y son ideales para acciones simples.
   - **Ejemplo**:
     ```javascript
     const producto = multiplicar(4, 6); // Devuelve 24
     ```

El uso de funciones en el **desarrollo web Frontend** es fundamental por varias razones:

1. **Reutilización de Código**:
   - Las funciones permiten encapsular bloques de código y reutilizarlos en diferentes partes del sitio web.
   - **Ejemplo**: Imagina una función que valida formularios en varias páginas. Puedes usarla en todas las secciones donde se requiera validación.

2. **Mantenibilidad y Escalabilidad**:
   - Las funciones facilitan la organización del código. Si necesitas hacer cambios, solo modificas la función en un lugar.
   - **Ejemplo**: Una función que maneja la lógica de navegación entre páginas. Si se agrega una nueva página, solo debes actualizar la función.

3. **Abstracción de Tareas Complejas**:
   - : Las funciones simplifican tareas complejas al dividirlas en pasos más pequeños y manejables.
   - **Ejemplo**: Una función que carga datos de una API y los muestra en una tabla. La abstracción permite concentrarse en la lógica específica.

**Ventaja de las Funciones Flecha**:
- **Concisión**: Las funciones flecha (`=>`) son más breves y legibles.
- **Contexto de `this`**: No tienen su propio `this`, lo que evita errores en el contexto de funciones anidadas.

## Parámetro vs Argumento
Cuando hablamos de funciones se habla tanto de parámetros como de argumentos, aquí la diferencia entre **parámetro** y **argumento**:

1. **Parámetro**:
   - Un parámetro es un valor o variable que se declara en la definición de una función. Representa un espacio reservado para recibir un valor cuando se llama a la función.
   - **Ejemplo**:
     ```javascript
     function saludar(nombre) {
       console.log("¡Hola, " + nombre + "!");
     }
     ```
     En este caso, `nombre` es el parámetro de la función `saludar`.

2. **Argumento**:
   - Un argumento es el valor real que se pasa a una función cuando se la invoca. Es el dato concreto que se asigna al parámetro.
   - **Ejemplo**:
     ```javascript
     saludar("Ana");
     ```
     Aquí, `"Ana"` es el argumento que se pasa al parámetro `nombre`.

**Hoisting** en **JavaScript** se refiere al comportamiento por el cual las declaraciones de variables y funciones se "elevan" o mueven al principio del ámbito en el que se encuentran antes de que se ejecute el código. Esto puede afectar cómo se accede y se utiliza tanto a las variables como a las funciones.

## Hoisting de Variables
El hoisting puede afectar la forma en que accedemos a variables y funciones, por lo que es importante comprender cómo funciona para evitar errores sutiles en nuestro código

1. **Variables declaradas con `var`**:
   - Cuando se hace hoisting, las variables declaradas con `var` se inicializan con el valor `undefined`.
   - Ejemplo:
     ```javascript
     console.log(num); // undefined
     var num = 10;
     console.log(num); // 10
     ```

2. **Variables declaradas con `let` y `const`**:
   - Aunque también se someten a hoisting, no se inicializan con `undefined`. En cambio, permanecen sin valor hasta que se les asigna uno.
   - Ejemplo:
     ```javascript
     console.log(name); // Error: Cannot access 'name' before initialization
     let name = "Alice";
     ```

### Hoisting de Funciones

1. **Declaraciones de Funciones**:
   - Las funciones declaradas también se someten a hoisting y pueden ser llamadas antes de su definición.
   - Ejemplo:
     ```javascript
     sayHello(); // "Hello!"
     function sayHello() {
       console.log("Hello!");
     }
     ```

2. **Expresiones de Funciones**:
   - Las expresiones de funciones (asignadas a variables) no se elevan completamente. Solo la variable se eleva, no la función en sí.
   - Ejemplo:
     ```javascript
     sayGoodbye(); // Error: sayGoodbye is not a function
     const sayGoodbye = function() {
       console.log("Goodbye!");
     };
     ```
## Objetos en JavaScript
En **JavaScript**, un **objeto** es una estructura de datos que se divide entre un nombre (clave) y un valor. Los objetos se utilizan para representar entidades del mundo real o conceptos abstractos. Estos pueden contener cualquier tipo de dato: números, cadenas, arreglos, funciones, etc.

**Declaración de objetos**:
- Hay varias formas de declarar objetos en JavaScript:
  - **Objetos Literales**:
     ```javascript
     const persona = {
       nombre: "Ana",
       edad: 30,
       saludar: function() {
         console.log("¡Hola!");
       },
     };
     ```
  - **Constructor de Objetos**:
     ```javascript
     function Mascota(nombre, tipo) {
       this.nombre = nombre;
       this.tipo = tipo;
     }
     const miMascota = new Mascota("Max", "Perro");
     ```
## Propiedades vs Objetos
Como se hablo anteriormente, las propiedades son los atributos de los objetos, estos se diferencian de los métodos ya que:

1. **Propiedad**:
   - Representa un valor asociado a una clave en el objeto, Se accede directamente utilizando la notación de punto (`objeto.propiedad`) o la notación de corchetes (`objeto['propiedad']`).
   - Ejemplo:
     ```javascript
     const persona = {
       nombre: "Ana",
       edad: 30,
     };
     console.log(persona.nombre); // "Ana"
     ```

2. **Método**:
   - Es una función asociada al objeto, esta se invoca de forma parecida a la propiedad, solo que tiene parentesis (`objeto.metodo()`). Puede realizar acciones o cálculos específicos relacionados con el objeto.
   - Ejemplo:
     ```javascript
     const coche = {
       marca: "Toyota",
       arrancar: function() {
         console.log("El coche está arrancando...");
       },
     };
     coche.arrancar(); // "El coche está arrancando..."
     ```
### Y... ¿Cómo se accede a una propiedad?
Existen dos formas de acceder a las propiedades de un objeto en **JavaScript**:

1. **Notación de Punto (`objeto.propiedad`)**:
   - **Sintaxis**: Como se mencionó anteriormente, esta forma se utiliza el nombre del objeto seguido de un punto y el nombre de la propiedad.
   - **Ejemplo**:
     ```javascript
     const persona = {
       nombre: "Ana",
       edad: 30,
     };
     console.log(persona.nombre); // "Ana"
     ```
   - **Conveniencia**:
     - Es más legible y se recomienda cuando se conoce el nombre exacto de la propiedad.

2. **Notación de Corchetes (`objeto['propiedad']`)**:
   - **Sintaxis**: Se utiliza el nombre del objeto seguido de corchetes y el nombre de la propiedad como una cadena.
   - **Ejemplo**:
     ```javascript
     const propiedadDeseada = "edad";
     console.log(persona[propiedadDeseada]); // 30
     ```
   - **Conveniencia**:
     - Útil cuando el nombre de la propiedad se almacena en una variable o cuando contiene caracteres especiales (como espacios o guiones bajos).
     - Permite acceder a propiedades dinámicamente.

Para guiarse de mejor forma:
- Se usa la **notación de punto** cuando conozcas el nombre exacto de la propiedad.
- Se usa la **notación de corchetes** cuando necesites acceder a propiedades de manera dinámica o cuando el nombre de la propiedad no sea válido como identificador directo.

## Recorrer un objeto de  JavaScript
Bueno, antes en los conceptos básicos de programación web habíamos hablado de lo que es un bucle, esta sería una forma sencilla de recorrer el objeto, sin embargo existen muchos métodos para poder recorrerlos, aquí algunos:

1. **Bucle `for...in`**:
   - Itera sobre todas las propiedades enumerables de un objeto y sus prototipos.
   - Ejemplo:
     ```javascript
     const persona = {
       nombre: "Ana",
       edad: 30,
     };
     for (let propiedad in persona) {
       console.log(persona[propiedad]);
     }
     // Resultado: "Ana" y 30
     ```

2. **Método `Object.keys()`**:
   - Devuelve un arreglo con todas las claves (nombres de propiedades) del objeto. Útil cuando solo necesitas las claves.
   - Ejemplo:
     ```javascript
     const claves = Object.keys(persona);
     console.log(claves); // ["nombre", "edad"]
     ```

3. **Método `Object.values()`**:
   - Devuelve un arreglo con todos los valores de las propiedades del objeto. Útil cuando solo necesitas los valores.
   - Ejemplo:
     ```javascript
     const valores = Object.values(persona);
     console.log(valores); // ["Ana", 30]
     ```

4. **Método `Object.entries()`**:
   - Devuelve un arreglo de arreglos, donde cada subarreglo contiene una clave y su valor correspondiente. Útil cuando necesitas tanto las claves como los valores.
   - Ejemplo:
     ```javascript
     const entradas = Object.entries(persona);
     console.log(entradas); // [["nombre", "Ana"], ["edad", 30]]
     ```
¡Claro! Vamos a explorar los conceptos relacionados con **arrays** en **JavaScript**:

### ¿Qué es un array en JavaScript y por qué son esenciales?
Un **array** en JavaScript es una **colección o agrupación de elementos** en una misma variable. Cada elemento se ubica en una posición específica dentro del array. Tanto la longitud como el tipo de los elementos en un array son variables. Los arrays son esenciales porque nos permiten **almacenar y manipular conjuntos de datos** de manera organizada. Son ampliamente utilizados para representar listas, colecciones de objetos, datos tabulares y más.

### ¿Cómo acceder a un elemento dentro de un array? 
Para acceder a un elemento específico dentro de un array en JavaScript, utilizamos **índices**. Los índices comienzan desde **cero** (para el primer elemento) y se incrementan en uno para cada posición adicional. Aquí tienes un ejemplo:

```javascript
const frutas = ["Manzana", "Banana", "Naranja"];
const primeraFruta = frutas[0]; // Accede a la primera fruta (Manzana)
const ultimaFruta = frutas[frutas.length - 1]; // Accede a la última fruta (Naranja)
console.log(primeraFruta); // "Manzana"
console.log(ultimaFruta); // "Naranja"
```

### Funciones de arrays y su utilidad en la programación web:
1. **`map()`**: Permite recorrer el array y modificar los elementos, retornando un nuevo array con la misma longitud que el original.
2. **`filter()`**: Recorre el array y retorna un nuevo array con aquellos elementos que cumplen una condición específica.
3. **`forEach()`**: Itera sobre los elementos del array y ejecuta una función para cada uno.


### Ejemplo de array
Supongamos que tenemos un array de números y queremos obtener un nuevo array con los números mayores o iguales a 5, multiplicados por 2:

```javascript
const numeros = [1, 3, 5, 7, 9];

// Filtrar los números mayores o iguales a 5
const mayoresOIgualesA5 = numeros.filter((numero) => numero >= 5);

// Transformar los números filtrados multiplicándolos por 2
const resultado = mayoresOIgualesA5.map((numero) => numero * 2);

console.log(resultado); // [10, 14, 18]
```

En este ejemplo:
- `filter()` filtra los números mayores o iguales a 5.
- `map()` multiplica cada número filtrado por 2.

