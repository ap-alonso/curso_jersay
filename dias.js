let total = 0,
  meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  meses02 = [],
  total02 = [];

function dias02(numeroDeDia) {
    for (let i = 0; i < meses.length; i++) {
     total += meses[i];
     if(numeroDeDia<=total){
    meses02.push(i);
      }else{
         total02.push(total);
      }
    }
    diaResultado =  numeroDeDia-total02[total02.length - 1];
    mesResultado = meses02[0]+1;
    impre( diaResultado +'-'+mesResultado+'-2022');
}


dias02(365);

function impre(elemento) {
  console.log(elemento);
}
