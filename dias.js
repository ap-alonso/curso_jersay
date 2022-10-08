//total es la variable donde guardaremos la suma de los elementos del arreglo meses
let total = 0, 
  // Meses= Número de días por mes
  meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  //meses01=  Meses en los que podria estar el dia ingresado (indice)
  meses01 = [],
  //meses02=  Meses en los que podria estar el dia ingresado (indice+1)
  meses02 = [],
  // total01=  Suma de días
  total01 = [],
  //total02 = Días de los meses en los que no esta nuestro dia seleccionado
  total02 = [];
 

function dias02(numeroDeDia) {
    //inicialisamos el for del arregle meses 
    for (let i = 0; i < meses.length; i++) {
     //en la variable total se van guardando la suma de los elementos del arreglo meses   
     total += meses[i];
     // Para referencia agrego la suma de los dias al arreglo total01
     total01.push(total);
     // 
     if(numeroDeDia<=total){
         meses01.push(i);
         meses02.push(parseInt(i)+1);
        }else{
    // siendo caso contrario se agrega al arreglo total02 la suma de los elementos.
         total02.push(total);
      }
    }
    mesResultado = meses02.slice(0, 1).shift();
    impre('Día Ingresado');
    impre(numeroDeDia);
    impre('meses[]= Número de días por mes');
    impre(meses);
    impre('**************');
    impre('total01[]= Suma de días');
    impre(total01);
    impre('**************');
    impre('meses01[]= Meses en los que podria estar el dia ingresado (indice)');
    impre(meses01);
    impre('**************');
    impre('meses02[]= Meses en los que podria estar el dia ingresado (indice +1)');
    impre(meses02);
    impre('**************');
    impre('Mes resultado');
    impre(mesResultado);
    impre('**************');
    impre('total02[]= Días de los meses en los que no esta nuestro dia seleccionado');
    impre(total02);
    impre('**************');
    impre('Día Resultado'); 
    if (total02=='' ) {
        diaResultado =  numeroDeDia;
        impre('Dia ingresado en parametro: '+ diaResultado);
    }else{
        diaResultado =  numeroDeDia-total02[total02.length - 1];
    impre(numeroDeDia +'-'+total02[total02.length - 1]+'='+diaResultado);
    }
    
    impre('**************');
    impre('Fecha Resultado');
    impre( diaResultado +'-'+mesResultado+'-2022');
}
dias02(342);


function impre(elemento) {
  console.log(elemento);
}











function impre (elemento) {
    console.log(elemento);
}
 