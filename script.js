/*  Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
 per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz” al posto del numero.
 Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero. */

 /*
 1. Prendo gli elementi da Index
 2. Mettere un ciclo che faccia scorrere i numeri da 1 a 100
 3. Stampare il risultato differenziando tra i multipli di 3 e quelli di 5 */


//1.
 const targetElement = document.getElementById('target');
 let j;
 let y;
 //2.
 for (let i=1; i<=100; i++){
    j = y = i;
    if (j % 3 === 0){
        console.log('Fizz');
    }else if (y % 5 === 0){
        console.log('Buzz');
    
    }else{
        console.log(i);
    }
 }