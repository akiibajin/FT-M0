// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  matriz=[];
  var j=0;
  this.objeto=objeto;
    for(var key in objeto){
      matriz[j]=new Array(1);
      matriz[j].unshift(objeto[key]);
      matriz[j].unshift(key);
      matriz[j].pop();
      j++;
    }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
    this.string=string;
  var cont={a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0,ñ:0,o:0,p:0,q:0,r:0,s:0,t:0,u:0,v:0,w:0,x:0,y:0,z:0,}
  for(Is=0;Is<string.length;Is++){
    if(string.charAt(Is)==="a"){
      cont.a+=1; 
    }else if(string.charAt(Is)==="b"){
      cont.b+=1;
    }else if(string.charAt(Is)==="c"){
      cont.c+=1;
    }else if(string.charAt(Is)==="d"){
      cont.d+=1;
    }else if(string.charAt(Is)==="e"){
      cont.e+=1;
    }else if(string.charAt(Is)==="f"){
      cont.f+=1;
    }else if(string.charAt(Is)==="g"){
      cont.g+=1;
    }else if(string.charAt(Is)==="h"){
      cont.h+=1;
    }else if(string.charAt(Is)==="i"){
      cont.i+=1;
    }else if(string.charAt(Is)==="j"){
      cont.j+=1;
    }else if(string.charAt(Is)==="k"){
      cont.k+=1;
    }else if(string.charAt(Is)==="l"){
      cont.l+=1;
    }else if(string.charAt(Is)==="m"){
      cont.m+=1;
    }else if(string.charAt(Is)==="n"){
      cont.n+=1;
    }else if(string.charAt(Is)==="ñ"){
      cont.ñ+=1;
    }else if(string.charAt(Is)==="o"){
      cont.o+=1;
    }else if(string.charAt(Is)==="p"){
      cont.p+=1;
    }else if(string.charAt(Is)==="q"){
      cont.q+=1;
    }else if(string.charAt(Is)==="r"){
      cont.r+=1;
    }else if(string.charAt(Is)==="s"){
      cont.s+=1;
    }else if(string.charAt(Is)==="t"){
      cont.t+=1;
    }else if(string.charAt(Is)==="u"){
      cont.u+=1;
    }else if(string.charAt(Is)==="v"){
      cont.v+=1;
    }else if(string.charAt(Is)==="w"){
      cont.w+=1;
    }else if(string.charAt(Is)==="x"){
      cont.x+=1;
    }else if(string.charAt(Is)==="y"){
      cont.y+=1;
    }else if(string.charAt(Is)==="z"){
      cont.z+=1;
    }
  }
  var rec="";
for(var key in cont){
    if(cont[key]===0){
        delete cont[key];
    }
  }
  return cont; 
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  this.s=s;
  var resul="";
  var resul2="";
  for(i=0;i<s.length;i++){
    if(s.charAt(i)===s.charAt(i).toUpperCase()){
      resul=resul+s.charAt(i);    
    }
    else{
    resul2=resul2+s.charAt(i);
    }
  }
  return resul+resul2;
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var s2="";
  function invertir(str){
  this.str=str;
  s2=str.split("").reverse().join("");
  }
  invertir(str);
  return s2.split(" ").reverse().join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  this.numero=numero;
  numero2=String(numero);
  comp="";  
  for(i=numero2.length-1;i>=0;i--){
    comp=comp+numero2.charAt(i);
    }
    if(comp===numero2){
      return "Es capicua";
    }else
    return "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  this.cadena=cadena;
  var cadena2="";
  for(i=0;i<cadena.length;i++){
    if(cadena.charAt(i)==="a"||cadena.charAt(i)==="b"||cadena.charAt(i)==="c"){
      continue;
    }
  cadena2=cadena2+cadena.charAt(i);
  }
  return cadena2;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort(function(A,B){
    return A.length-B.length;
  })
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var array=[];
  for (var i = 0;i<arreglo1.length;i++) {
    for (var j = 0;j<arreglo2.length;j++) {
      if (arreglo1[i]===arreglo2[j]) {
        array.push(arreglo1[i]);
      }
    }
  }
  return array;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

