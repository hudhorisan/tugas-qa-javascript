const prompt = require('prompt-sync')({sigint: true});

const inputNumber = prompt('masukan angka:')

if(Number(inputNumber) < 0 ){
    console.log("Tidak bisa input bilangan negatif")
} else if(Number(inputNumber)%2 === 1) {
    console.log( "Tidak bisa input bilangan ganjil")
} else {
    console.log('Hasil dari akar pangkat 2 dari: ', inputNumber, ' adalah ', Math.sqrt(Number(inputNumber)))
}