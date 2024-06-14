
//* 1. Contraseña válida
//? Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string 
//? es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.

const PASSWORD_1 = "2Fj(jjbFsuj"
const PASSWORD_2 = "eoZiugBf&g9"
const VALID_PASSWORD = [PASSWORD_1, PASSWORD_2]

let password
let is_valid_password

password = "2Fj(jjbFsuj"

// Form 1
if (password === PASSWORD_1 || password === PASSWORD_2) {
    is_valid_password = true
} else {
    is_valid_password = false
}
console.log(is_valid_password)
// Form 2
if (VALID_PASSWORD.includes(password)) is_valid_password = true
else is_valid_password = false
console.log(is_valid_password)

// Form ChatGTP:
is_valid_password = VALID_PASSWORD.includes(password);
console.log(is_valid_password)



//* 2. Calcular impuestos
//? Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e 
//? ingresos. Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe 
//? retornar ingresos * 40%. De lo contrario retornar 0.

let age = 19
let salary = 1000
let taxes = 0

// Form 1
if (age >= 18 && salary >= 1000) {
    taxes = salary * .40
}
console.log(taxes)
// Form 2
taxes = 0
let pay_taxes = age >= 18 && salary >= 1000
if (pay_taxes) taxes = salary * .40
console.log(taxes)
// Form ChatGPT

taxes = (age >= 18 && salary >= 1000) ? salary * 0.40 : 0;
console.log(taxes);


//* 3. IMC (ïndice de masa corporal)
//? El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la 
//? cantidad de grasa de una persona.

//? El BMI se calcula con la siguiente formula: peso / altura^2

//? Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string 
//? con las siguientes posibilidades:
//?     -Bajo de peso" si el BMI < 18.5
//?     -"Normal" si está entre 18.5 y 24.9
//?     -"Sobrepeso" si está entre 25 y 29.9
//?     -"Obeso" si es igual o mayor a 30

let weight = 146
let height = 1.83

let bmi = (weight / height) ** 2

// Form 1
if (bmi < 18.5){
    message = "Bajo de peso"
} else if (bmi >= 18.5 && bmi < 25){
    message = "Normal"
} else if (bmi >= 25 && bmi > 30){
    message = "Sobrepeso"
} else {
    message = "Obeso"
}

console.log(bmi)
console.log(message)
console.log(`BMI: ${bmi}, Estado: ${message}`);
// Form 2
if (bmi < 18.5) message = "Bajo de peso"
else if (bmi >= 18.5 && bmi < 25) message = "Normal"
else if (bmi >= 25 && bmi > 30) message = "Sobrepeso"
else message = "Obeso"

console.log(bmi)
console.log(message)
console.log(`BMI: ${bmi}, Estado: ${message}`);

// Form ChatGPT
message = 
    bmi < 18.5 ? "Bajo de peso" :
    bmi < 25 ? "Normal" :
    bmi < 30 ? "Sobrepeso" :
    "Obeso";

console.log(`BMI: ${bmi.toFixed(2)}, Estado: ${message}`);