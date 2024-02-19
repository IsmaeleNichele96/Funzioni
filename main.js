

// Esercizio n 1 //   Scrivi una FUNZIONE che converta un voto numerico (v) in un giudizio seguendo questi parametri:
//     v < 18: insufficiente
//     18 <= v < 21: sufficiente
//     21 <= v < 24: buono
//     24 <= v < 27: distinto
//     27 <= v <= 29: ottimo
//     v = 30: eccellente
//   Esempio: if
//     Input: v = 29
//     Output: Ottimo




// function voto(numero){


//     if(numero < 18 && numero > 0){

//         return "Insufficiente";

//     }else if(numero > 18 && numero <= 21){

//         return "Sufficiente";

//     }else if(numero > 21 && numero <= 24){

//         return "Buono";

//     }else if(numero > 24 && numero <=27){

//         return "Distinto";

//     }else if(numero > 27 && numero <=29){

//         return "Ottimo";

//     }else{

//         return "Eccellente";

//     }

// }

// console.log(voto(14));





// Esercizio n 2 Scrivi una funzione  che stampi i numeri da 1 a 100 andando a capo ogni 10.
//    Esempio:
//      Output: 
//  1 2 3 4 5 6 7 8 9 10
//              11 12 13 14 15 16 17 18 19 20
//              21 22 23 24 25 26 27 28 29 30
//              31 32 33 34 35 36 37 38 39 40
//             41 42 43 44 45 46 47 48 49 50
//             51 52 53 54 55 56 57 58 59 60
//             61 62 63 64 65 66 67 68 69 70
//             71 72 73 74 75 76 77 78 79 80
//              81 82 83 84 85 86 87 88 89 90
//              91 92 93 94 95 96 97 98 99 100

//   Per andare a capo usa ‘\n'




// function numero( number ){

//     let aCapo = "" ;

//     for(let i = 1; i <= number ; i++){

//         aCapo = aCapo + i + " "


//     if (i % 10 == 0) {

//         aCapo = aCapo + "\n"

//     }

//     }

//     return aCapo

// }


// numero( 100 )

// console.log(numero(100));



// Esercizio n 3 -   Scrivi due funzioni una che prenda in input un array di numeri e restituisca il maggiore,
//   l'altra che restituisca il minore.
//   Esempio:
//   Input: a = 1, b = -10, c = 4
//   Output: minore = -10, maggiore = 4


// let arr1 = [20, 1, 95, -54, 67];

// function maggiore(numerimax) {

//         console.log(Math.max(...numerimax))
    
    
// }

// maggiore(arr1)

// function minore(numerimin){

//     console.log(Math.min(...numerimin))
// }

// minore(arr1)






