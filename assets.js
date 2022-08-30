function impre(elemento){
console.log(elemento);
}

function pintaElemento(div, texto, tipo){
    impre('Id00 Pinta elemento');
    if(tipo="append"){
        $('#'+div).append(texto);
    }
    if(tipo="html"){
        impre('id01 esto es htnml');
        $('#titulo').html('Calculadora');
        $('#'+div).html(texto);
    }
}

function divGeneral(){
    $('#bloqueGeneral').html('<div id="titulo" class="bloqueContenido"></div>');
}

function temaCurso(){
    if(flagCurso==true){
        $('#bloqueGeneral').addClass('bloqueGeneral');            
    }
}




