const esPalindromo = (texto) => {
    texto = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
    return texto === texto.split('').reverse().join('');
}

console.log(esPalindromo("Anita lava la tina") ? "Es un palíndromo" : "No es un palíndromo");
