const { LinkedList, Node } = require("../estructuras");
const { parse, stringify } = require("flatted/cjs");
// LinkedList es como las mamushkas de la lista
// agregar el metodo size al prototipo de LinkedList.
// Este metodo deberia retornar la cantidad de elementos de la lista
LinkedList.prototype.size = function () {
  // Tu código acá
  return this.len

};

// Agregar el método orderList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
// Ejemplo:
//     Suponiendo que la lista actual es: Head --> [4] --> [5] --> [3]
//     lista.orderList();
//     Ahora la lista quedaría: Head --> [5] --> [4] --> [1]
// ACLARACIÓN: Se debe ordenar la lista original y no una nueva.
LinkedList.prototype.orderList = function () {
  // Tu código aca:
  let array = [] ; 
  let current = this.head ;
  while (current) { array.push(current.value) ;
  current = current.next }
  array.sort (function(a,b){ return a-b })
  this.head = null ; 
  while (array.length > 0 ) {
    this.add (array.pop()) ; 
    this.length-- }
  }



// agregar el metodo insert al prototipo de LinkedList.
// Este metodo deberia recibir una posicion y un valor
// agregar el valor en la posicion indicada
// tomar el head como posicion 1

LinkedList.prototype.insert = function (data, pos) {
  if (this.len < pos && pos - this.len === 1) return this.add(data);
  let newNodo = new Node(data);
  let current = this.head;
  console.log("1111111", current);
  if (pos === 1) {
    newNodo.next = current;
    console.log("22222222", newNodo);
    this.head = newNodo;
  }
  while (pos - 1 > 1) {
    pos--;
    current = current.next;
  }
  newNodo.next = current.next; // acá pos es 2
  current.next = newNodo;
  this.len++;
};

const miListitaEnlazada = new LinkedList();
miListitaEnlazada.add(33);
miListitaEnlazada.add(44);
miListitaEnlazada.add(22);
miListitaEnlazada.add(66);
console.log(miListitaEnlazada);
console.log(JSON.stringify(miListitaEnlazada));
miListitaEnlazada.insert(777, 1);
console.log(miListitaEnlazada);
console.log(stringify(miListitaEnlazada));

// EXTRAS ---------------------------------------------------------------------------------------------------------------------
// En los ejercicios extras no contamos con los tests, por lo que no podemos comprobar que funcione correctamente
// a no ser que lo hagamos manualmente con el correcto uso de la consola.
//////////////////////////// RECURSIVIDAD //////////////////////////////////////////////////////////////////////////////

// Vemos lo ya implementado en el archivo estructuras.js
// function LinkedList() {
//   this.head = null
// }

// function Node(value){
// this.value = value;
// this.next = null
// }

/* ////////////////////////----- ----- --------/////////////////// */

// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no sean numeros por 'NotNumber' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Hola']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['NotNumber'] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function () {
  // Tu código aca:
  
};



module.exports = {
  LinkedList,
};
