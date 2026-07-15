// ====== EJERCICIO 1

function Ejercicio1(){
    let n1 = Math.floor(Math.random()*10)+1;
    console.log(n1);

    let n2 = Math.floor(Math.random()*10)+1;
    console.log(n2);

    if(n1 == n2){
        console.log(n1 + " y " + n2 + " son iguales");
    }else{
        if(n1 > n2){
            console.log(n1 + " es mayor que " + n2);
        }else{
            console.log(n2 + " es mayor que " + n1);
        }
    }
}


function Ejercicio2(){
    var n;

    function aleatorio(max, min){
       n = Math.floor(Math.random() * (max - min + 1)) + min;
       return n;
    }

    do{
       console.log(aleatorio(5,0));
    }while(n != 0)
} 

function Ejercicio3(){
    var n;

    n = Math.floor(Math.random() * (10 - 2 + 1) + 2);

    console.log("Numero: " + n);

    for(let i = 0; i <= 10; i++){
        console.log(n + " x " + i + " = " + n*i);
    }
}

function Ejercicio4() {
    let n;
    var par = 0, impar = 0;

    for (let i = 0; i <= 10; i++){
        do {
            n = parseInt(prompt("Intento: "+ i + "Ingresa un numero del 1 al 100"));
        } while (n <= 0 || n > 100);

        if (n % 2 == 0) {
            par++;
        } else {
            impar++;
        }
    }

    console.log("Numeros pares ingresados: " + par);
    console.log("Numeros impares ingresados: " + impar);
}

function Ejercicio5(){
    let cantidad, comision;

    do {
        cantidad = parseInt(prompt("Ingresa las ventas: "));

        if (cantidad < 5000 || cantidad > 30000) {
            console.log("Cantidad Invalida");
        } else {
            if (cantidad < 10000) {
                comision = cantidad * 10 / 100;
            } else if (cantidad >= 10000) {
                comision = cantidad * 15 / 100;
            }
        }
    } while (cantidad < 5000 || cantidad > 30000);

    console.log("Comision para el empleado: " + comision);

}

Ejercicio1();
Ejercicio2();
Ejercicio3();
Ejercicio4();
Ejercicio5();