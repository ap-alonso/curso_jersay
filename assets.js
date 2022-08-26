function impre(elemento){
console.log(elemento);
}

function pintaElemento(div, texto, tipo){
    if(tipo="append"){
        $('#'+div).append(texto);
    }
    if(tipo="html"){
        $('#'+div).html(texto);
    }
}