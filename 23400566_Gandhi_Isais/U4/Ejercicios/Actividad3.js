function Ejercicio1() {
    var res = 1;
    var base, exp;

    base = parseInt(prompt("Introduce la base: "));
    exp = parseInt(prompt("Introduce el exponente: "))

    potencia(base, exp);

    function potencia(base, exp) {
        for (let i = 0; i <= exp - 1; i++){
            res *= base;
        }
        console.log(base + " elevado a " + exp + " es " + res)
    }
}

function Ejercicio2() {
    var saldoAct = 5000;
    var op;
    var retiro = 0;

    do {
        op = parseInt(prompt("1. Consultar saldo \n" + "2. Depositar\n" + "3. Retirar\n" + "4. Salir\n" + "Selecciona una opcion: "));

        switch (op) {
            case 1:
                console.log("Tu saldo actual es: " + saldoAct);
                break;
            case 2:
                let deposito = parseInt(prompt("¿Cuanto dinero desea depositar?"));
                saldoAct += deposito;
                break;
            case 3:
                do {
                    retiro = parseInt(prompt("¿Cuanto dinero deseas retirar?"));

                    if (retiro > saldoAct) {
                        console.log("No cuentas con esa cantidad de dinero");
                    } else {
                        saldoAct -= retiro;
                        break;
                    }
                } while (retiro > saldoAct);
            default:
                break;
        }
    } while (op != 4);
}

function Ejercicio3() {
    var dado1;
    var dado2;

    var lanzamientos = 0;

    do {
        dado1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1
        dado2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1
        console.log(dado1 + " - " + dado2);
        lanzamientos++;
    } while (dado1 != dado2)

    console.log("Se necesitaron " + lanzamientos + " lanzamientos");
}

function Ejercicio4() {
    var num;
    var userNum;

    num = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    console.log("Se ha generado un numero aleatorio entre el 1 y el 100. (¡Tienes 7 intentos para adivinarlo!)");
    for (let i = 0; i <= 6; i++){
        userNum = parseInt(prompt("Intento: " + i + "| Introduce un numero: "));
        if (userNum > num) {
            console.log("El numero es menor");
        } else if (userNum < num) {
            console.log("El numero es mayor");
        } else {
            console.log("Acertaste el numero. (Numero generado: " + num + ", Tu numero: " + userNum + ")");
            break;
        }
    }

    if (num != userNum) {
        console.log("Perdiste");
    }
}






function Ejercicio5() {
    var ventas = [];

    var cantVentas = parseInt(prompt("Introduce la cantidad de ventas realizadas: "));

    for (let i = 0; i < cantVentas; i++){
        console.log("Venta " + (i + 1));
        var nomVendedor = prompt("Nombre del vendedor: ");
        var nomProducto = prompt("Nombre del producto: ");
        var cantVendida = parseInt(prompt("Cantidad vendida: "));
        var precioUnit = parseFloat(prompt("Precio unitario: "));

        var venta = {
            vendedor: nomVendedor,
            producto: nomProducto,
            cantidad: cantVendida,
            precio: precioUnit
        };

        ventas.push(venta);
    }

    const totIngresos = ventas.reduce((suma, ventas) => {
        return suma + (ventas.cantidad * ventas.precio);
    }, 0);

    let productos = {};

    ventas.forEach(venta => {
        if (productos[venta.producto]) {
            productos[venta.producto] += venta.cantidad;
        } else {
            productos[venta.producto] = venta.cantidad;
        }
    });

    let vendedores = {};

    ventas.forEach(venta => {
        let monto = venta.cantidad * venta.precio;

        if (vendedores[venta.vendedor]) {
            vendedores[venta.vendedor] += monto;
        } else {
            vendedores[venta.vendedor] = monto;
        }
    });

    let mejorVendedor = "";
    let mayorMonto = 0;

    for (let vendedor in vendedores) {
        if (vendedores[vendedor] > mayorMonto) {
            mayorMonto = vendedores[vendedor];
            mejorVendedor = vendedor;
        }
    }

    console.log("Total de ventas realizadas:", cantVentas);
    console.log("Total de ingresos: $" + totIngresos);

    console.log("Unidades vendidas por producto:");
    for (let producto in productos) {
        console.log("producto:" + productos[producto] +  "unidades");
    }

    console.log("Vendedor con más ventas:" + mejorVendedor + ". Monto vendido: " + mayorMonto); 
}

Ejercicio1();
Ejercicio2();
Ejercicio3();
Ejercicio4();
Ejercicio5();