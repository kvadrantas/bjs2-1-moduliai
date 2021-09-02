console.log('-------------- FUNKCIJA.JS PRADZIA -------------- ');

function suma(a, b) {
    return a + b;
};

function skirtumas(a, b) {
    return a - b;
};

const skaicius = 90;

// console.log(module);

console.log('-------------- FUNKCIJA.JS PABAIGA -------------- ');

module.exports.suma = suma;
module.exports.skirtumas = skirtumas;
module.exports.skaicius = skaicius;

console.log(module);