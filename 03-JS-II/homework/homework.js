// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if (x !== y) {
    return x > y ? x : y;
  } else {
    return x;
  }
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  var resultado = "Not allowed";
  if (edad >= 18) {
    resultado = "Allowed";
  }
  return resultado;
}

function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico.
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  switch (status) {
    case 1:
      return "Online";
    case 2:
      return "Away";
    default:
      return "Offline";
  }
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  switch (idioma) {
    case "aleman":
      return "Guten Tag!";
    case "mandarin":
      return "Ni Hao!";
    case "ingles":
      return "Hello!";
    default:
      return "Hola!";
  }
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch (color) {
    case "blue":
      return "This is blue";
    case "red":
      return "This is red";
    case "green":
      return "This is green";
    case "orange":
      return "This is orange";
    default:
      return "Color not found";
  }
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  var resultado = false;
  if (numero === 10 || numero === 5) {
    resultado = true;
  }
  return resultado;
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  return numero < 50 && numero > 20 ? true : false;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  return Math.floor(numero) === numero;
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  var resultado = numero;
  const esDivEntre3 = (x) => (x % 3 === 0 ? true : false);
  const esDivEntre5 = (x) => (x % 5 === 0 ? true : false);
  const esDivEntreAmbos = (x) => esDivEntre3(x) && esDivEntre5(x);
  if (esDivEntreAmbos(numero)) {
    resultado = "fizzbuzz";
  } else if (esDivEntre3(numero)) {
    resultado = "fizz";
  } else if (esDivEntre5(numero)) {
    resultado = "buzz";
  }
  return resultado;
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos.
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.
  if (num1 === 0 || num2 === 0 || num3 === 0) {
    return "Error";
  }
  if (num1 < 0 || num2 < 0 || num3 < 0) {
    return "Hay negativos";
  }
  if (num1 > num2 && num1 > num3) {
    return "Número 1 es mayor y positivo";
  }
  if (num3 > num1 && num3 > num2) {
    return num3 + 1;
  }
  return false;
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  // 6/1 = 6    6/2=3   6/3= 2   6/4=0.1    6/5= 0.22   6/6= 1
  // 5/1 = 5    5/2 = 2.5   5/3 = 1.5   5/4 = 0.1    5/5 = 1
  // si en alguno el modulo es cero == NO ES PRIMO
  // QUITANDO EL MISMO NRO Y QUITANDO EL 1
  var resultado = true;
  if (numero !== 0 && numero !== 1) {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        resultado = false;
      }
    }
  } else {
    resultado = false;
  }
  return resultado;
}

function esVerdadero(valor) {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero”
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  return valor === true ? "Soy verdadero" : "Soy falso";
}

function tablaDelSeis() {
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí
  var lista = [];
  const TOPE = 60;
  var i = 0;
  var multiplo = 0;
  while (multiplo < TOPE) {
    multiplo = 6 * i;
    lista.push(multiplo);
    i++;
  }
  return lista;
}

function tieneTresDigitos(numero) {
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  return numero.toString().length === 3 ? true : false;
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var veces = 0
  var lista = []
  var variable = numero
  do {
    variable = variable + 5 
    lista.push(variable)
    veces++
  } while (veces < 8);
  return lista[lista.length-1]
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile,
};
