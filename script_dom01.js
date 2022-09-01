var flagCurso=true;
$( document ).ready(function() {
divGeneral();
pintaElemento('titulo', 'Calculadora', 'html');
temaCurso();
// Un arreglo o array es una lista de elementos.
// sintaxis: los elementos van dentro de corchetes cuadrados, separados por comas
var arrayNum=[1,2,3,4,5,6,7,8, 9,0]
// lenght es la cantidad de elementos que tiene un arreglo
// for solo recorre la cantidad de elementos que tiene el arreglo
// el for se basa en posicion de elementos
// y por lopo regular comienza en posición 0
// i es tu posición
for (let i = 0; i < arrayNum.length; i++) {
pintaElemento('bloqueCalculadora', '<div id="id_'+arrayNum[i]+' ">'+arrayNum[i]+'</div>','append');
}
});
// Hacer una función que imprima los signos de operación con su valor, y con su valor formar el id del elemnto
