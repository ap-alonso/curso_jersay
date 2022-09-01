function impre(elemento){
console.log(elemento);
}

function pintaElemento(div, texto, tipo){
    if(tipo=="append"){
        $('#'+div).append(texto);
    }
    if(tipo=="html"){
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

function pintaSignos(){
    // + , mas,    ejemplo=> if(signo=='mas' ){sumas}
}









