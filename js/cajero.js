
//FUNCIONES

function versaldo(x) {

    let fondos

    for (const persona of usuarios) {

        if (x == persona.nombre) {

            fondos = persona.saldo

            return fondos
        }
    }

}

function validarUsuario(x, y) {

    let iterador = true

    let usuarioValidado = false

    while (iterador = true) {

        for (const persona of usuarios) {

            if (x == persona.nombre && y == persona.password) {

                usuarioValidado = true

                console.log("SI ES ESE NOMBRE")

                alert("Bienvenido " + persona.nombre);

                return usuarioValidado

            } else if (x != persona.nombre && y == persona.password) {

                alert("EL NOMBRE INGRESADO ES INCORRECTO (atentos con las mayusculas) ////// intentelo de nuevo")

                return usuarioValidado

            } else if (x == persona.nombre && y != persona.password) {

                alert("LA CONTRASEÑA INGRESADA ES INCORRECTA ////// intentelo de nuevo")

                return usuarioValidado

            }

        }

        alert("LOS DATOS INGRESADOS NO SE ENCUENTRA EN NUESTRA BASE DE DATOS  -------   revise los datos y intentelo de nuevo")

        return usuarioValidado

    }

}


function suma(x, y) {

    let suma = x + y

    return suma

}

function resta(x, y) {

    let resta = x - y

    return resta

}

//FIN FUNCIONES

//VARIABLES - ARRAY

let operacion = 0

let i = 1

let resultado = 0

const usuarios = [

    {
        nombre: "Leandro",
        password: "12345",
        saldo: 0,
    },

    {
        nombre: "Messi",
        password: "mesirve",
        saldo: 1000000000000,
    },

    {
        nombre: "Toreto",
        password: "lafamilia",
        saldo: 7000000,
    },

]

//FIN :  VARIABLES - ARRAY

alert("Bienvenido a su Cajero personal")

alert("Porfavor Ingrese su Usuario y Contraseña")

let usuarioPrompt = prompt("Usuario")
let contraseñaPrompt = prompt("Contraseña")

let usuario = validarUsuario(usuarioPrompt, contraseñaPrompt)

console.log(usuarios.fondos)

if (usuario == true) {

    let cajero = versaldo(usuarioPrompt)

    while (i == 1) {

        operacion = parseInt(prompt("Escriba el numero de la operacion que desea Realizar/// 1 == Consultar Saldo /// 2 == Ingresar Dinero /// 3 == Retirar Dinero"))

        if (operacion == 1) {

            alert("Su saldo es de = " + cajero)

        } else if (operacion == 2) {

            let montoIngresado = parseFloat(prompt("Ingrese el monto a Ingresar"))

            resultado = suma(cajero, montoIngresado)

            cajero = resultado

            alert("Se ingreso = " + montoIngresado + " al cajero, ahora su monto es de = " + cajero)

        } else if (operacion == 3) {

            let montoExtraccion = parseFloat(prompt("Ingrese el monto a Extraer"))

            cajero = resta(cajero, montoExtraccion)

            alert("Se Extrajo = " + montoExtraccion + "al cajero, ahora su monto es de = " + cajero)

        }

        let cierre = parseInt(prompt("Si desea intentarlo de nuevo ingrese el numero 1 ////// De lo contrario ingrese cualquier numero"))

        i = cierre

    }

} else {

    alert("No ingreso un usuario identificado")

}

alert("Gracias vuelva pronto")
