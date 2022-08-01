
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

var arrElementosTienda = [cualTienda, consulPorMun, consulPorEnti, cualMun, cualEntidad];
var arrElementosProducto = [cualProducto, consulPorTipoProd, consulPorProdMasVend, consulPorPordMenosVend, cualTipoProducto];
var arrCheckboxTienda = [cualTienda, consulPorMun, consulPorEnti];
var arrCheckboxProducto = [cualProducto, consulPorTipoProd, consulPorProdMasVend, consulPorPordMenosVend];
var arrCalendario = [periodoDesde, periodoHasta];
/*
Funcion para activar/desactivar los chexboxes o calendarios
1->Activar
2->Desactivar
*/
function activarDesctivarCheckboxesCalendarios(array, bandera){
    if(bandera == 1){
        //Activar
        array[0].setAttribute("required", "");
        for(var elemnto of array){
            elemnto.disabled = false;
        }
    } else {
        //Desactivar
        for(var elemnto of array){
            elemnto.disabled = true;
        }
    }
}

//Desactivamos los elementos de una consulta
function desactivarElementos(array){
    for(var elemnto of array){
        elemnto.disabled = true;
    }
}

/*
Funcion para desctivar las listas
checkbox -> Indica si hay que activar o desactivar
lista -> Es la lista que activaremos o desactivaremos
*/
function activarDesactivarListas(checkbox, lista){
    if(checkbox.checked === true){
        lista.disabled = false;
        lista.setAttribute("required", "");
    } else {
        lista.disabled = true;
    }
}

//Funcion para activar o desctivar el boton de consultar y cancelar.
//Solo se activan los botones cuando las alguna de las casillas de periodo, tienda o producto son activadas
function activarDesactivarConsulta(){
    var prender;
    if(consulPorPeriodo.checked === false && consulPorTienda.checked === false && consulPorProducto.checked === false){
        btnConsultar.disabled = true;
        btnCancelar.disabled = true;
    } else {
        btnConsultar.disabled = false;
        btnCancelar.disabled = false;
    }
}

//Nos muestra las opciones que el usuario escogio
//retun -> Un arreglo de las opciones seleccionadas
function opcionesSeleccionadas(select){
    var arrOpciones = [];
    for(var option of select.options){
        if(option.selected){
            arrOpciones.push(option.text);
        }
    }
    return arrOpciones;
}

//Evento para el checkbox del periodo
consulPorPeriodo.onchange = function(){
    if(consulPorPeriodo.checked === true){
        //Activamos los calendarios de la seccion del periodo
        activarDesctivarCheckboxesCalendarios(arrCalendario, 1);
        arrCalendario[1].setAttribute("required", "");
        activarDesactivarConsulta();
    } else {
        //Desactivamos los calendarios de la seccion del periodo
        activarDesctivarCheckboxesCalendarios(arrCalendario, 0);
        activarDesactivarConsulta();
    }
};


//Evento para el chexkbox de la tienda
consulPorTienda.onchange = function(){
    if(consulPorTienda.checked === true){
        //Activamos los checkboxes de la seccion de la tienda
        activarDesctivarCheckboxesCalendarios(arrCheckboxTienda, 1);
        activarDesactivarConsulta();
    } else {
        //Desactivamos toda la seccion de la tienda
        desactivarElementos(arrElementosTienda);
        activarDesactivarConsulta();
    }
}

//Evento para el checkbox de la para la consulta por entidad
consulPorEnti.onchange = function(){
    activarDesactivarListas(consulPorEnti, cualEntidad);
}

//Evento para el checkbox de la para la consulta por municipio/alcaldia
consulPorMun.onchange = function(){
    activarDesactivarListas(consulPorMun, cualMun);
}

//Evento para el checkbox del producto
consulPorProducto.onchange = function(){
    if(consulPorProducto.checked === true){
        activarDesctivarCheckboxesCalendarios(arrCheckboxProducto, 1);
        activarDesactivarConsulta();
    } else {
        desactivarElementos(arrElementosProducto);
        activarDesactivarConsulta();
    }
}

//Evento para el checkbox de la consulta por tipo de pruducto
consulPorTipoProd.onchange = function(){
    activarDesactivarListas(consulPorTipoProd, cualTipoProducto);
};

/*Obtenemos los datos del formulario*/
periodoDesde.onchange = function(){
    
}

class ConsultaParametros{
    porPeriodo = [];
    porTienda = [];
    porMunAlca = [];
    porEntidad = [];
    porProducto = [];
    porTipoProd = [];
    porProdMas;
    porPordMenos;
}

var consultar = new ConsultaParametros;

/*
0 -> Elemento calenadario
1 -> Elemento checkbox
*/
function verificarConsulta(elemento, elementoLista, tipoElemento){
    if(tipoElemento == 0){
        if(elemento.value.length == 0){
            alert("Seleccione una fecha");
            return 0;
        }
    } else {
        if(elemento.checked === true){
            if(elementoLista.value.length === 0){
                alert("Seleccione un elemento de la lista");
                return 0;
            }
        }
    }
}




btnConsultar.onclick = function(){
    console.log(opcionesSeleccionadas(cualEntidad));
    if(consulPorPeriodo.checked === true){
        if(verificarConsulta(periodoDesde, 0, 0) == 0 || verificarConsulta(periodoHasta, 0, 0) == 0){
            return 0;
        } else {
            console.log("Entro");
            consultar.porPeriodo.push(periodoDesde.value);
            consultar.porPeriodo.push(periodoHasta.value);
        }
    }
    if(consulPorTienda.checked === true){
        if(verificarConsulta(consulPorTienda, cualTienda, 1) == 0 || verificarConsulta(consulPorMun, cualMun, 1) == 0 || verificarConsulta(consulPorEnti, cualEntidad, 1) == 0){
            return 0;
        } else {
            
        }
    }
    if(consulPorProducto.checked === true){
        if(verificarConsulta(consulPorProducto, cualProducto, 1) == 0 || verificarConsulta(consulPorTipoProd, cualTipoProducto, 1) == 0){ 
            return 0;
        } else {

        }
        
    }
    console.log(consultar);
    alert("Espera");
}

