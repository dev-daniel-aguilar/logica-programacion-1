
let num1 = Number(prompt("Ingresa el primer número:"));
let num2 = Number(prompt("Ingresa el segundo número:"));
let num3 = Number(prompt("Ingresa el tercer número:"));
let mayor, centro, menor;

if (num1 === num2 && num2 === num3) {
    console.log("Los números son iguales: " + num1 + ", " + num2 + ", " + num3);
} else {
    
    

    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
        if (num2 >= num3) {
            centro = num2;
            menor = num3;
        } else {
            centro = num3;
            menor = num2;
        }
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
        if(num1 >= num3){
            centro = num1;
            menor = num3
        }else{
            centro = num3;
            menor = num1
        }
       
    } else if (num3 >= num2 && num3 >= num1){
            mayor = num3;
            if(num2 >= num1){
                centro = num2;
                menor = num1
            }else{
                centro = num1;
                menor =num2
            }
        }
        
    }

   
    console.log("Mayor a menor:", mayor, centro, menor);
    console.log("Menor a mayor:", menor, centro, mayor);
