var pesol = 92
var midel = 1.95
var pesom = 78
var midem = 1.69
var imcl;
var imcm;

imcl = (pesol/Math.pow(midel,2));
imcl = (pesol/(midel**2)) 
console.log('Muestra 1: ');
console.log('Luigi: ');
console.log("Peso: "+pesol+'kg Estatura: '+midel+'m IMC: '+imcl);

imcm = (pesom/Math.pow(midem,2));
console.log('Mario: ');
console.log("Peso: "+pesom+'kg Estatura: '+midem+'m IMC: '+imcm);

console.log(imcm>imcl?'MarioMayorIMC':'MarioMenorIMC');

console.log('');



console.log('Muestra 2: ');

pesol = 85;
midel = 1.76;
pesom = 95;
midem = 1.88;

imcl = (pesol/Math.pow(midel,2));
console.log('Luigi: ');
console.log("Peso: "+pesol+'kg Estatura: '+midel+'m IMC: '+imcl);

imcm = (pesom/Math.pow(midem,2));
console.log('Mario: ');
console.log("Peso: "+pesom+'kg Estatura: '+midem+'m IMC: '+imcm);

console.log(imcm>imcl?'MarioMayorIMC':'MarioMenorIMC');



