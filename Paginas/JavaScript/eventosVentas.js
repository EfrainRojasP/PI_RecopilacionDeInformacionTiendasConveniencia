var checkGenerarGrafico = document.getElementById("generarGrafico");
var tipoGrafica = document.getElementById("tipoGrafica");
var infoGrafica = document.getElementById("tipoGraficaInfo");
var btnGenerarGrafica = document.getElementById("btnGenerarGrafica");

//Se disabilitan los siguientes elemento
tipoGrafica.disabled = true;
infoGrafica.disabled = true;
btnGenerarGrafica.disabled = true;

//Funcion para activar o desactivar varios elementos
checkGenerarGrafico.onclick = function(){
    if(checkGenerarGrafico.checked === true){
        tipoGrafica.disabled = false;
        infoGrafica.disabled = false;
        btnGenerarGrafica.disabled = false;
    } else {
        tipoGrafica.disabled = true;
        infoGrafica.disabled = true;
        btnGenerarGrafica.disabled = true;
    }
};