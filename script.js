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
 const containerElement = document.createElement('div');
 //2.

 let items = '';
 for (let i=1; i<=100; i++){
    if (i % 15 === 0 ){
        items += `<li>FizzBuzz<li>`;
    }else if (i % 5 === 0){
        items += `<li>Buzz<li>`;
    }else if (i % 3 === 0){
        items += `<li>Fizz<li>`;
    }else{
        items += `<li>${i}<li>`;   
    }
 }
 targetElement.innerHTML = items;

