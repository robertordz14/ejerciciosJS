const arr = [-6,7,0,-5];
var pruebas = Math.sqrt(arr.length); 
var diagonal2=0;
var diagonal1=0;
console.log('El numero notal de elementos del array son: '+arr.length)
console.log('El resultado de la raiz es: '+pruebas);
var pruebass = Number.isInteger(pruebas)
if(Number.isInteger(pruebas)){
    console.log('El resultado es un numero entero');
    var division = pruebas;
	matriz = []; // Aquí almacenamos los nuevos arreglos
    for (let i = 0; i < arr.length; i += division) {
        let partes = arr.slice(i, i + division);
        matriz.push(partes);
    }
    console.log("Matriz: ", matriz);

    for(let i = 0; i < matriz.length; i++){
        text="";

    for(let j = 0; j < matriz[i].length; j++){
        text+=matriz[i][j]+'\t'

    }
    console.log(text);

}

    for( let i=0; i<division; i++ ){
         for( let j=0; j<division; j++ ){
            if( i==j )
            diagonal1 += matriz[i][j];
        }
    }
    console.log("Diagonal 1: "+diagonal1)

    for( let i=0; i<division; i++ ){
        for( let j=0; j<division; j++ ){
           if( i+j == division-1)
           diagonal2 += matriz[i][j];
       }
   }
   console.log("Diagonal 2: "+diagonal2)
   
   var resta=diagonal1-diagonal2;
   if(resta<0){
    resta= Math.abs(resta)
    console.log('El resultado de la resta entre '+diagonal1+' - '+diagonal2+' es: '+resta)
}else{
    console.log('El resultado de la resta entre '+diagonal1+' - '+diagonal2+' es: '+resta)
} 

}else{
    console.log('El resultado es un numero decimal');
}
