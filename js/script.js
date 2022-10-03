
// OBJETO VENTAS
let objVentas = [
    {
        ID: 1,
        FECHA: '2022-01-20',
        CLIENTE: 'Karen Rios',
        VALORUNITARIO: 400000,
        CANTIDAD: 2,
        SUBTOTAL: 800000,
        NETOIVA: 952000,
        PRODUCTO: 'Buso de mujer rosado',
    },
    {
        ID: 2,
        FECHA: '2022-02-27',
        CLIENTE: 'Pedro Arias',
        VALORUNITARIO: 800000,
        CANTIDAD: 3,
        SUBTOTAL: 1800000,
        NETOIVA: 2142000,
        PRODUCTO: 'Gorra TML'
    },
    {
        ID: 3,
        FECHA: '2022-03-12',
        CLIENTE: 'Daniel Gallego',
        VALORUNITARIO: 500000,
        CANTIDAD: 2,
        SUBTOTAL: 1000000,
        NETOIVA: 1119000,
        PRODUCTO: 'Llavero conmemorativo'
    },
    {
        ID: 4,
        FECHA: '2022-04-08',
        CLIENTE: 'Milena Restrepo',
        VALORUNITARIO: 600000,
        CANTIDAD: 2,
        SUBTOTAL: 1200000,
        NETOIVA: 1428000,
        PRODUCTO: 'Buso hombre'
    }
];

//Lista las ventas en la tabla de Bootstrap de ventas.
function tablaVentas() {

    // Object.keys(objVentas).forEach(key =>
    //     document.write(objVentas[key].ID + ' - ' + objVentas[key].FECHA + ' - ' + objVentas[key].CLIENTE + " - " + objVentas[key].VALORUNITARIO + " - " + objVentas[key].CANTIDAD  + " - " + objVentas[key].SUBTOTAL + " - " + objVentas[key].NETOIVA + " - " + objVentas[key].PRODUCTO +"</br>"));

    // Ahora dibujamos la tabla
    const $cuerpoTabla = document.querySelector("#cuerpoTabla");

    //Limpia el cuerpo de la tabla para que no se repitan cuando se le da mas de una vez al botón.
    $cuerpoTabla.innerHTML = '';

    // Recorrer todas las ventas
    objVentas.forEach(venta => {

        // Crear un <tr>
        const $tr = document.createElement("tr");

        // Creamos el <td> de ID y lo adjuntamos a tr
        let $tdID = document.createElement("td");
        $tdID.textContent = venta.ID; // el textContent del td es el id
        $tr.appendChild($tdID);

        // El td de Fecha
        let $tdFecha = document.createElement("td");
        $tdFecha.textContent = venta.FECHA;
        $tr.appendChild($tdFecha);

        // El td del cliente
        let $tdCliente = document.createElement("td");
        $tdCliente.textContent = venta.CLIENTE;
        $tr.appendChild($tdCliente);

        // El td del valor unitario
        let $tdValUni = document.createElement("td");
        $tdValUni.textContent = "$" + venta.VALORUNITARIO;
        $tr.appendChild($tdValUni);

        let $tdCantidad = document.createElement("td");
        $tdCantidad.textContent = venta.CANTIDAD;
        $tr.appendChild($tdCantidad);

        let $tdSubtotal = document.createElement("td");
        $tdSubtotal.textContent = "$" + venta.SUBTOTAL;
        $tr.appendChild($tdSubtotal);

        let $tdNetoIva = document.createElement("td");
        $tdNetoIva.textContent = "$" + venta.NETOIVA;
        $tr.appendChild($tdNetoIva);

        let $tdProducto = document.createElement("td");
        $tdProducto.textContent = venta.PRODUCTO;
        $tr.appendChild($tdProducto);

        // Finalmente agregamos el <tr> al cuerpo de la tabla
        $cuerpoTabla.appendChild($tr);
        // Y el ciclo se repite hasta que se termina de recorrer todo el arreglo
    });
}

//Crea una venta
function nuevaVenta() 
{    
    if(validar() == true)
    {
        let vId =       document.getElementById('id').value;
        let vFecha =    document.getElementById('fecha').value;
        let vCliente =  document.getElementById('cliente').value;
        let vProducto = document.getElementById('producto').value;
        let vValorunitario = document.getElementById('unitario').value;
        let vCantidad = document.getElementById('cantidad').value;
        let vSubtotal = document.getElementById('subtotal').value;
        let vNetoIVA =  document.getElementById('netoiva').value;

        //Valida si el elemento ya existe:
        let existe = objVentas.filter(elem => elem.ID == vId)
        // console.log(existe);
        if(existe.length == 0)
        {
            //Adiciona el elemento:
            objVentas.push({ 
                ID: vId, 
                FECHA: vFecha, 
                CLIENTE: vCliente, 
                VALORUNITARIO: vValorunitario,
                CANTIDAD: vCantidad,
                SUBTOTAL: vSubtotal,
                NETOIVA: vNetoIVA,
                PRODUCTO: vProducto
            });

            tablaVentas();
            alert('La venta ha sido registrada con éxito');
        }
        else
        {
            alert("La venta con ID " + vId.trim() + " ya existe! Ingrese otro ID");
        }   
    }
}

//Busca una venta
function buscarVenta()
{
    let vId =       document.getElementById('id');
    let vFecha =    document.getElementById('fecha');
    let vCliente =  document.getElementById('cliente');
    let vProducto = document.getElementById('producto');
    let vValorunitario = document.getElementById('unitario');
    let vCantidad = document.getElementById('cantidad');
    let vSubtotal = document.getElementById('subtotal');
    let vNetoIVA =  document.getElementById('netoiva');

    if (vId.value.trim() != "")
    {
        let objDatos = objVentas.filter(x => x.ID == vId.value.trim());
        console.log(objDatos);
        if (objDatos.length != 0)
        {
            vFecha.value = objDatos[0]["FECHA"];
            vCliente.value = objDatos[0]["CLIENTE"];
            vValorunitario.value = objDatos[0]["VALORUNITARIO"];
            vCantidad.value = objDatos[0]["CANTIDAD"];
            vSubtotal.value = objDatos[0]["SUBTOTAL"];
            vNetoIVA.value = objDatos[0]["NETOIVA"];
            vProducto.value = objDatos[0]["PRODUCTO"];

            tablaVentas();
        }
        else
        {
            alert("El Id " + vId.value.trim() + " no está registrado!");
            limpiarDatos();
        }
    }
    else
    {
        alert("Debe ingresar un Id para buscar!");
        limpiarDatos();
    }
}

//Actualizar venta
function actualizarVenta()
{
    if(validar() == true)
    {
        let vId =       document.getElementById('id');
        let vFecha =    document.getElementById('fecha');
        let vCliente =  document.getElementById('cliente');
        let vProducto = document.getElementById('producto');
        let vValorunitario = document.getElementById('unitario');
        let vCantidad = document.getElementById('cantidad');
        let vSubtotal = document.getElementById('subtotal');
        let vNetoIVA =  document.getElementById('netoiva');
        
        //Valida que el Id ya exista
        let objDatos = objVentas.filter(x => x.ID == vId.value.trim());
        if(objDatos.length != 0)
        {
            objDatos[0]["FECHA"] = vFecha.value, 
            objDatos[0]["CLIENTE"] = vCliente.value, 
            objDatos[0]["VALORUNITARIO"] = vValorunitario.value,
            objDatos[0]["CANTIDAD"] = vCantidad.value,
            objDatos[0]["SUBTOTAL"] = vSubtotal.value,
            objDatos[0]["NETOIVA"] = vNetoIVA.value,
            objDatos[0]["PRODUCTO"] = vProducto.value

            tablaVentas();
            alert('La venta ha sido actualizada con éxito')
        }
        else
        {
            alert("El Id " + vId.value.trim() + " no existe! Ingrese un Id existente para actualizarlo");
        }
    }
}

//Elimina una venta
function eliminarVenta()
{
    let vId = document.getElementById('id');

    //Valida si el Id existe
    let objDatos = objVentas.filter(x => x.ID == vId.value.trim());
    if(objDatos.length != 0)
    {
        let index = objVentas.findIndex(x => x.ID == vId.value.trim());
        objVentas.splice(index,1);
        
        tablaVentas();
        alert("La venta con " + vId.value.trim() + " ha sido eliminada");
        limpiarDatos();
    }
    else
    {
        alert("El Id " + vId.value.trim() + " no existe! Ingrese un Id existente para eliminarlo");
    }
    
}

function limpiarDatos()
{
    let vId =       document.getElementById('id');
    let vFecha =    document.getElementById('fecha');
    let vCliente =  document.getElementById('cliente');
    let vProducto = document.getElementById('producto');
    let vValorunitario = document.getElementById('unitario');
    let vCantidad = document.getElementById('cantidad');
    let vSubtotal = document.getElementById('subtotal');
    let vNetoIVA =  document.getElementById('netoiva');
    
    vId.value = ""; 
    vFecha.value = ""; 
    vCliente.value = ""; 
    vProducto.value = ""; 
    vValorunitario.value = ""; 
    vCantidad.value = ""; 
    vSubtotal.value = ""; 
    vNetoIVA.value = ""; 

    //Limpia los mensajes
    let mensajes = document.querySelectorAll('small[id^="msg"]');
    for (let m of mensajes)
    {
        m.innerHTML = "";
    }

    tablaVentas();
}

//Calculos de subtotal y total neto IVA
function calcular()
{
    let vValorunitario = document.getElementById('unitario');
    let vCantidad = document.getElementById('cantidad');
    let vSubtotal = document.getElementById('subtotal');
    let vNetoIVA =  document.getElementById('netoiva');

    let valorUnit = 0;
    let cantidad = 0;
    let calSubtotal = 0;
    let calNetoIva = 0;

    let rgxNum = /^(?:\+|-)?\d+$/;

    //Valida valor unitario y cantidad que no sean letra
    if(rgxNum.test(vValorunitario.value.trim()) == true && rgxNum.test(vCantidad.value.trim()) == true)
    {
        valorUnit = parseInt(vValorunitario.value.trim());
        cantidad = parseInt(vCantidad.value.trim());
        
        calSubtotal = valorUnit * cantidad;
        calNetoIva = calSubtotal + (calSubtotal * 0.19);

        vSubtotal.value = calSubtotal;
        vNetoIVA.value = calNetoIva; 
    }
    else
    {
        vSubtotal.value = 0;
        vNetoIVA.value = 0; 
    }
}

//Validación
function validar()
{
    let validado = true;

    //Limpia los mensajes
    let mensajes = document.querySelectorAll('small[id^="msg"]');
    for (let m of mensajes)
    {
        m.innerHTML = "";
    }

    //Expresiones regulares:
    let rgxNum = /^(?:\+|-)?\d+$/;
    let rgxFecha = /^\d{4}[\-\/\s]?((((0[13578])|(1[02]))[\-\/\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\-\/\s]?(([0-2][0-9])|(30)))|(02[\-\/\s]?[0-2][0-9]))$/;		//Cuando hay expresiones regulares se reemplazan las commillas por el /. 
    

    //Declaración de controles:
    let vId =       document.getElementById('id');
    let vFecha =    document.getElementById('fecha');
    // let vCliente =  document.getElementById('cliente');
    let vCliente = document.querySelector("#cliente"); //El selectedIndex no me funcionó con getElementById.
    // let vProducto = document.getElementById('producto');
    let vProducto = document.querySelector("#producto"); //El selectedIndex no me funcionó con getElementById.
    let vValorunitario = document.getElementById('unitario');
    let vCantidad = document.getElementById('cantidad');
    let vSubtotal = document.getElementById('subtotal');
    let vNetoIVA =  document.getElementById('netoiva');
    
    //Declaración de mensajes:
    let msgID = document.getElementById("msgID");
    let msgFecha = document.getElementById("msgFecha");
    let msgCliente = document.getElementById("msgCliente");
    let msgProducto = document.getElementById("msgProducto");
    let msgUnitario = document.getElementById("msgUnitario");
    let msgCantidad = document.getElementById("msgCantidad");
    let msgSubtotal = document.getElementById("msgSubtotal");
    let msgNetoIVA = document.getElementById("msgNetoIVA");

    //Validación ID
    if (vId.value.trim() == "" || vId.value.length == 0)
    {
        msgID.innerHTML += "El Id no puede estar vacio! <br/>";
        validado = false;
    }

    if(!rgxNum.test(vId.value.trim()))
    {
        msgID.innerHTML += "El Id no cumple con el formato! <br/>";
        validado = false;
    }

    //Validación Fecha
    if (vFecha.value.trim() == "" || vFecha.value.length == 0)
    {
        msgFecha.innerHTML += "La fecha no puede estar vacia! <br/>";
        validado = false;
    }

    if(!rgxFecha.test(vFecha.value.trim()))
    {
        msgFecha.innerHTML += "La fecha no cumple con el formato! <br/>";
        validado = false;
    }

    //Valida combo Cliente
    if(vCliente.selectedIndex == 0)
    {
        msgCliente.innerHTML += "Debe seleccionar un opción válida! <br/>";
        validado = false;
    }

    //Valida producto
    if (vProducto.value.trim() == "" || vProducto.value.length == 0)
    {
        msgProducto.innerHTML += "El producto no puede estar vacio! <br/>";
        validado = false;
    }

    //Valida valor unitario
    if (vValorunitario.value.trim() == "" || vValorunitario.value.length == 0)
    {
        msgUnitario.innerHTML += "El valor unitario no puede estar vacio! <br/>";
        validado = false;
    }

    if(!rgxNum.test(vValorunitario.value.trim()))
    {
        msgUnitario.innerHTML += "El valor unitario no cumple con el formato! <br/>";
        validado = false;
    }
    
    //Valida la cantidad
    if (vCantidad.value.trim() == "" || vCantidad.value.length == 0)
    {
        msgCantidad.innerHTML += "La cantidad no puede estar vacia! <br/>";
        validado = false;
    }

    if(!rgxNum.test(vCantidad.value.trim()))
    {
        msgCantidad.innerHTML += "La cantidad no cumple con el formato! <br/>";
        validado = false;
    }

    //Valida el subtotal
    if (vSubtotal.value.trim() == "" || vSubtotal.value.length == 0) 
    {
        msgSubtotal.innerHTML += "El subtotal no puede estar vacio! <br/>";
        validado = false;
    }

    //Posiblemente den decimales
    // if(!rgxNum.test(vSubtotal.value.trim()))
    // {
    //     msgSubtotal.innerHTML += "El subtotal no cumple con el formato! <br/>";
    //     validado = false;
    // }

    //Valida el neto con iva
    if (vNetoIVA.value.trim() == "" || vNetoIVA.value.length == 0) 
    {
        msgNetoIVA.innerHTML += "El neto con iva no puede estar vacio! <br/>";
        validado = false;
    }

    //Posiblemente den decimales
    // if(!rgxNum.test(vNetoIVA.value.trim()))
    // {
    //     msgNetoIVA.innerHTML += "El neto con iva no cumple con el formato! <br/>";
    //     validado = false;
    // }
   
    return validado;

}

function listadoVentas()
{
    tablaVentas();
}

function imprimirVentas()
{
    window.print();
}