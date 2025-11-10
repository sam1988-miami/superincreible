let NumApren = Number(prompt("Digite la cantidad de aprendices"));

function promedio_aprendices(NumApren){
    let i=0;
    let sumaAprendices = 0;
    let promedio;
    let mayorEdad;
    while(i<NumApren){
        let Edad = Number(prompt("Digite la edad del aprendiz numero" + i));
        sumaAprendices += Edad;
        if(Edad>=18){
            mayorEdad += 1;
        }
    }
    promedio = sumaAprendices/NumApren;
    return "Promedio aprendices: " + promedio;
}