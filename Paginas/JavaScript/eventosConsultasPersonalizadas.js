//Consultas por periodo
var consulPorPeriodo = document.getElementById("consulPorPeriodo");
var periodoDesde = document.getElementById("periodoDesde");
var periodoHasta = document.getElementById("periodoHasta");

//Consultas por tienda
var consulPorTienda = document.getElementById("consulPorTienda");
var cualTienda = document.getElementById("cualTienda");
//Consultar por municipio o alcadia
var consulPorMun = document.getElementById("consulPorMunAlcadia");
var cualMun = document.getElementById("cualMunicipioAlca");
//Consultar por entidad
var consulPorEnti = document.getElementById("consulPorEntidad");
var cualEntidad = document.getElementById("cualEntidad");

//Consultar por periodo de tiempo
var consulPorProducto = document.getElementById("consulPorProducto");
var cualProducto = document.getElementById("cualProducto");
//Consultar por tipo de producto
var consulPorTipoProd = document.getElementById("consulPorTipoProducto");
var cualTipoProducto = document.getElementById("cualTipoProd");
//Consultar por producto mas vendido
var consulPorProdMasVend = document.getElementById("consulPorPruductoMasVendido");
//Consultar por producto menos vandido
var consulPorPordMenosVend = document.getElementById("consulPorPruductoMenosVendido"); 

var btnConsultar = document.getElementById("hacerConsulta");
var btnCancelar = document.getElementById("cancelarConsulta")

//Desactivamos los siguientes elemento
//Desactivasmos los elementos del periodo
periodoDesde.disabled = true;
periodoHasta.disabled = true;
//Desactivamos loes elemntos de la tienda
cualTienda.disabled = true;
consulPorMun.disabled = true;
cualMun.disabled = true;
consulPorEnti.disabled = true;
cualEntidad.disabled = true;
//Desactivasmos los elementos del prodcuto
cualProducto.disabled = true;
consulPorTipoProd.disabled = true;
cualTipoProducto.disabled = true;
consulPorProdMasVend.disabled = true;
consulPorPordMenosVend.disabled = true;
//Desactivamos los botones
btnCancelar.disabled = true;
btnConsultar.disabled = true;

/*Funcion para activar los botones*/
function activarBotnes(){

}

consulPorPeriodo.onchange = function(){

};