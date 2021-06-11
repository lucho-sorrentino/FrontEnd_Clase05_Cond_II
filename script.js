let nameUser = "admin";
let passUser = "1234";
let saldo = 10000.62;
let depositar = ("Por favor desposite su dinero");
// let changePass = ();
// let option1 = saldo;
// let option2 = retirar;
// let option3 = depositar;
// let option4 = changePass;


let user = prompt("Ingrese su nombre de usuario:");
if (user === nameUser) {
    let pass = prompt("Ingrese su contraseña:");
    if (passUser === pass) {
        let choice = parseFloat(prompt("Ingrese el número de la operación que desee realizar:" + "\n" +
        "1. Consultar saldo" + "\n" +
        "2. Retirar fondos" + "\n" +
        "3. Realizar un depósito" + "\n" +
        "4. Cambiar su contraseña"));
        switch(choice) {
            case 1:
                alert("Su saldo es de: $" + saldo);
                break;
            case 2:
                let retirar = parseFloat(prompt("Por favor ingrese el monto que desea retirar:"));
                if (retirar<=saldo) {
                    alert("Por favor retire su dinero!" + "\n" + 
                    "Su nuevo saldo es de: $" + (saldo - retirar));
                } else {
                    alert("Su saldo es insuficiente!!")
                }
                break;
            case 3:
                alert(depositar);
                break;
            case 4:
                let newPass= parseInt(prompt("Por favor ingrese su nueva clave:"));
                if (newPass != passUser){
                    alert("Su clave se ha cambiado con éxito!");
                } else {
                    alert("La clave ingresada no es válida!!");
                }
                break;
            default:
                alert("La opción ingresada no es válida!!");
        }
    } else {
        alert("La contraseña ingresada no es correcta!!");
    } 
} else {
    alert("El nombre de usuario ingresado no es correcto!!");
}

 
