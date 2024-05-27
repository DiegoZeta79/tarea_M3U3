
const num1 = parseInt(prompt('Ingrese primer número:', ''));
const num2 = parseInt(prompt('Ingrese segundo número:', ''));
const num3 = parseInt(prompt('Ingrese tercer número:', ''));
const num4 = parseInt(prompt('Ingrese cuarto número:', ''));
const num5 = parseInt(prompt('Ingrese quinto número:', ''));

let números = [num1, num2, num3, num4, num5]

let mayor = 0;

for (let i = 0; i < números.length; i++) {

    if (números[i] > mayor) {
        mayor = números[i]
    }

}

document.write(`El número mayor ingresado es el: ${mayor}`);

console.log(`El número mayor ingresado es el: ${mayor}`);
