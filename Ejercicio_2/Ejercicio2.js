function convertirTemperatura() {
    let celsius;
    let entrada;

    while (true) {
        entrada = prompt("Ingresa la temperatura en grados Celsius:");
        if (entrada === null || entrada.trim() === "" || isNaN(entrada)) {
            alert("Error: Por favor, ingresa un número válido.");
        } else {
            celsius = Number(entrada);
            break; 
        }
    }

    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin = celsius + 273.15;

         document.getElementById("temp-f").innerText = 
        `Grados Fahrenheit: ${fahrenheit.toFixed(2)} °F`;

        document.getElementById("temp-k").innerText = 
        `Grados Kelvin: ${kelvin.toFixed(2)} K`;

    console.log("Celsius:", celsius);
    console.log("Fahrenheit:", fahrenheit);
    console.log("Kelvin:", kelvin);
}