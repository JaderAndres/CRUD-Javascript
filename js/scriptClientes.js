
// OBJETO CLIENTES
let objClientes = [
    {
        ID: 1,
        NOMBRE: 'Karen',
        APELLIDO: 'Rios',
        DIRECCION: 'Calle 78 #49-22',
        EMAIL: 'karenrios@gmail.com',
        CIUDAD: 'Medellín'
    },
    {
        ID: 2,
        NOMBRE: 'Diego',
        APELLIDO: 'Arias',
        DIRECCION: 'Carrea 98 #56-32',
        EMAIL: 'diegoarias@hotmail.com',
        CIUDAD: 'Bello'
    },
    {
        ID: 3,
        NOMBRE: 'Daniel',
        APELLIDO: 'Gallego',
        DIRECCION: 'Diagonal 76 #12-54',
        EMAIL: 'danielgallego@gmail.com',
        CIUDAD: 'Girardota'
    },
    {
        ID: 4,
        NOMBRE: 'Milena',
        APELLIDO: 'Restrepo',
        DIRECCION: 'Carrera 56 #23-87',
        EMAIL: 'milenarestrepo@hotmail.com',
        CIUDAD: 'Rionegro'
    }
];

//Lista los clientes en la tabla de Bootstrap de clientes.
function tablaClientes() {

    // Ahora dibujamos la tabla
    const $cuerpoTabla = document.querySelector("#cuerpoTabla");

    //Limpia el cuerpo de la tabla para que no se repitan cuando se le da mas de una vez al botón.
    $cuerpoTabla.innerHTML = '';

    // Recorrer todas las ventas
    objClientes.forEach(cliente => {

        // Crear un <tr>
        const $tr = document.createElement("tr");

        // Creamos el <td> de ID y lo adjuntamos a tr
        let $tdID = document.createElement("td");
        $tdID.textContent = cliente.ID; // el textContent del td es el id
        $tr.appendChild($tdID);

        // El td de nombre
        let $tdNombre = document.createElement("td");
        $tdNombre.textContent = cliente.NOMBRE;
        $tr.appendChild($tdNombre);

        // El td del apellido
        let $tdApellido = document.createElement("td");
        $tdApellido.textContent = cliente.APELLIDO;
        $tr.appendChild($tdApellido);

        // El td del valor direccion
        let $tdDir = document.createElement("td");
        $tdDir.textContent = cliente.DIRECCION;
        $tr.appendChild($tdDir);

        let $tdEmail = document.createElement("td");
        $tdEmail.textContent = cliente.EMAIL;
        $tr.appendChild($tdEmail);

        let $tdCiudad = document.createElement("td");
        $tdCiudad.textContent = cliente.CIUDAD;
        $tr.appendChild($tdCiudad);

        // Finalmente agregamos el <tr> al cuerpo de la tabla
        $cuerpoTabla.appendChild($tr);
        // Y el ciclo se repite hasta que se termina de recorrer todo el arreglo
    });
}

//Crea un cliente
function nuevoCliente() 
{    
    if(validar() == true)
    {
        let vId =       document.getElementById('id').value;
        let vNombre =    document.getElementById('nombre').value;
        let vApellido =  document.getElementById('apellido').value;
        let vDireccion = document.getElementById('direccion').value;
        let vEmail = document.getElementById('email').value;
        let vCiudad = document.getElementById('ciudad').value;
        
        //Valida si el elemento ya existe:
        let existe = objClientes.filter(elem => elem.ID == vId)
        // console.log(existe);
        if(existe.length == 0)
        {
            //Adiciona el elemento:
            objClientes.push({ 
                ID: vId, 
                NOMBRE: vNombre, 
                APELLIDO: vApellido, 
                DIRECCION: vDireccion,
                EMAIL: vEmail,
                CIUDAD: vCiudad
            });

            tablaClientes();
            alert('El cliente ha sido registrado con éxito');
        }
        else
        {
            alert("El cliente con ID " + vId.trim() + " ya existe! Ingrese otro ID");
        }   
    }
}

//Busca una cliente
function buscarCliente()
{
    let vId =       document.getElementById('id');
    let vNombre =    document.getElementById('nombre');
    let vApellido =  document.getElementById('apellido');
    let vDireccion = document.getElementById('direccion');
    let vEmail = document.getElementById('email');
    let vCiudad = document.getElementById('ciudad');

    if (vId.value.trim() != "")
    {
        let objDatos = objClientes.filter(x => x.ID == vId.value.trim());
        console.log(objDatos);
        if (objDatos.length != 0)
        {
            vNombre.value = objDatos[0]["NOMBRE"];
            vApellido.value = objDatos[0]["APELLIDO"];
            vDireccion.value = objDatos[0]["DIRECCION"];
            vEmail.value = objDatos[0]["EMAIL"];
            vCiudad.value = objDatos[0]["CIUDAD"];

            tablaClientes();
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
function actualizarCliente()
{
    if(validar() == true)
    {
        let vId =       document.getElementById('id');
        let vNombre =    document.getElementById('nombre');
        let vApellido =  document.getElementById('apellido');
        let vDireccion = document.getElementById('direccion');
        let vEmail = document.getElementById('email');
        let vCiudad = document.getElementById('ciudad');
        
        //Valida que el Id ya exista
        let objDatos = objClientes.filter(x => x.ID == vId.value.trim());
        if(objDatos.length != 0)
        {
            objDatos[0]["NOMBRE"] = vNombre.value, 
            objDatos[0]["APELLIDO"] = vApellido.value, 
            objDatos[0]["DIRECCION"] = vDireccion.value,
            objDatos[0]["EMAIL"] = vEmail.value,
            objDatos[0]["CIUDAD"] = vCiudad.value,

            tablaClientes();
            alert('El cliente ha sido actualizado con éxito')
        }
        else
        {
            alert("El Id " + vId.value.trim() + " no existe! Ingrese un Id existente para actualizarlo");
        }
    }
}

//Elimina un cliente
function eliminarCliente()
{
    let vId = document.getElementById('id');

    //Valida si el Id existe
    let objDatos = objClientes.filter(x => x.ID == vId.value.trim());
    if(objDatos.length != 0)
    {
        let index = objClientes.findIndex(x => x.ID == vId.value.trim());
        objClientes.splice(index,1);
        
        tablaClientes();
        alert("El cliente con " + vId.value.trim() + " ha sido eliminado");
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
    let vNombre =    document.getElementById('nombre');
    let vApellido =  document.getElementById('apellido');
    let vDireccion = document.getElementById('direccion');
    let vEmail = document.getElementById('email');
    let vCiudad = document.getElementById('ciudad');
    
    vId.value = ""; 
    vNombre.value = ""; 
    vApellido.value = ""; 
    vDireccion.value = ""; 
    vEmail.value = ""; 
    vCiudad.value = ""; 
    
    //Limpia los mensajes
    let mensajes = document.querySelectorAll('small[id^="msg"]');
    for (let m of mensajes)
    {
        m.innerHTML = "";
    }

    tablaClientes();
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

    // //Expresiones regulares:
    let rgxNum = /^(?:\+|-)?\d+$/;
    let rgxEMail = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+(?:[a-zA-Z]{2}|aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel)$/; //Cuando hay expresiones regulares se reemplazan las commillas por el /. 
    let rgxTexto = /^[a-zA-Z Á]{2,30}$/;

    //Declaración de controles:
    let vId =       document.getElementById('id');
    let vNombre =    document.getElementById('nombre');
    let vApellido =  document.getElementById('apellido');
    let vDireccion = document.getElementById('direccion');
    let vEmail = document.getElementById('email');
    let vCiudad = document.getElementById('ciudad');
    
    //Declaración de mensajes:
    let msgID = document.getElementById("msgID");
    let msgNombre = document.getElementById("msgNombre");
    let msgApellido = document.getElementById("msgApellido");
    let msgDireccion = document.getElementById("msgDireccion");
    let msgEmail = document.getElementById("msgEmail");
    let msgCiudad = document.getElementById("msgCiudad");
  
    // //Validación ID
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

    //Validación nombre
    if (vNombre.value.trim() == "" || vNombre.value.length == 0)
    {
        msgNombre.innerHTML += "El nombre no puede estar vacio! <br/>";
        validado = false;
    }

    if(!rgxTexto.test(vNombre.value.trim()))
    {
        msgNombre.innerHTML += "El nombre no cumple con el formato! <br/>";
        validado = false;
    }

    //Valida apellido
    if (vApellido.value.trim() == "" || vApellido.value.length == 0)
    {
        msgApellido.innerHTML += "El apellido no puede estar vacio! <br/>";
        validado = false;
    }

    if(!rgxTexto.test(vApellido.value.trim()))
    {
        msgApellido.innerHTML += "El apellido no cumple con el formato! <br/>";
        validado = false;
    }

    //Valida dirección
    if (vDireccion.value.trim() == "" || vDireccion.value.length == 0)
    {
        msgDireccion.innerHTML += "La dirección no puede estar vacia! <br/>";
        validado = false;
    }

    //Valida el email
    if (vEmail.value.trim() == "" || vEmail.value.length == 0)
    {
        msgEmail.innerHTML += "El email no puede estar vacio! <br/>";
        validado = false;
    }

    if(!rgxEMail.test(vEmail.value.trim()))
    {
        msgEmail.innerHTML += "El eMail no cumple con el formato! <br/>";
        validado = false;
    }

    //Validación ciudad
    if (vCiudad.value.trim() == "" || vCiudad.value.length == 0)
    {
        msgCiudad.innerHTML += "La ciudad no puede estar vacia! <br/>";
        validado = false;
    }

    if(!rgxTexto.test(vCiudad.value.trim()))
    {
        msgCiudad.innerHTML += "La ciudad no cumple con el formato! <br/>";
        validado = false;
    }

    return validado;

}

function listadoClientes()
{
    tablaClientes();
}

function imprimirClientes()
{
    window.print();
}