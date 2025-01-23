function CalcularFrecuencia() {
    var masa = document.getElementById('masa').value;
    var k = document.getElementById('k').value;

    //Verificar que los valores sean válidos
    if(masa === "" || k === "") {
        alert("Por favor ingresa tanto la masas como la constante de rigidez.");
        return;
    }

    masa = parseFloat(masa);
    k = parseFloat(k);

    //Calcular la frecuencia angular (w= sqrt(k/m))
    var omega = Math.sqrt(k / masa);

    //Calcular la frecuencia (f= w / 2pi)
    var frecuencia = omega / (2 * Math.PI);

    //Mostrar el resultado 
    document.getElementById('frecuencia').innerText = frecuencia.toFixed(2);
}

function ReiniciarCalculo() {
        // Limpiar los valores de los campos de entrada
        document.getElementById('masa').value = '';
        document.getElementById('k').value = '';
        
        // Limpiar el resultado mostrado
        document.getElementById('frecuencia').innerText = '';
}
