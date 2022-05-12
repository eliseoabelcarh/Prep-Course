// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  return Object.entries(objeto);
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí//2
  var obj = {};
  for (const char of string) {
    obj[char] = 0;
  }
  for (const char of string) {
    var cont = obj[char];
    obj[char] = cont + 1;
  }
  return obj;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Ejemplo: HOlakHENc -> HOHENakc
  //Escribe tu código aquí//3
  var arrayMay = [];
  var arrayMin = [];
  for (const charReal of s) {
    var charMayus = charReal.toUpperCase();
    charReal === charMayus ? arrayMay.push(charReal) : arrayMin.push(charReal);
  }
  return arrayMay.concat(arrayMin).join("");
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí//4
  var map = str.split(" ");
  var finalArray = [];
  for (const word of map) {
    finalArray.push(word.split("").reverse().join(""));
  }
  return finalArray.join(" ");
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí//5
  var array = numero.toString().split("");
  var arrayReverse = [...array].reverse();
  var esCapicua = true;
  var i = 0;
  while (i < array.length && esCapicua) {
    if (array[i] !== arrayReverse[i]) {
      esCapicua = false;
    }
    i++;
  }
  return esCapicua ? "Es capicua" : "No es capicua";
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí//6
  /*expect(deleteAbc("abcefgh")).toEqual("efgh");
  expect(deleteAbc("abc")).toEqual("");
  expect(deleteAbc("plural")).toEqual("plurl");
  expect(deleteAbc("limon")).toEqual("limon"); */
  var final = "";
  var buscados = ["a", "b", "c"];
  for (let i = 0; i < cadena.length; i++) {
    const char = cadena.charAt(i).toLowerCase();
    if (!buscados.includes(char)) {
      final = final.concat(char);
    }
  }
  return final;
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí//7
  return arr.sort((a, b) => a.length - b.length);
}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  //8
  var final = [];
  for (const numero of arreglo1) {
    if (arreglo2.includes(numero)) {
      final.push(numero);
    }
  }
  return final;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
