//poslednja cifra broja =====================================

function pom(broj) {
  return Math.abs(broj % 10);
}

function sumaPoslednjihCifara(niz) {
  let suma = 0;
  for (let i = 0; i < niz.length; i++) {
    suma += pom(niz[i]);
  }
  return suma;
}

let brojevi = [16, 45, 12, 1, 2, 66];
console.log(sumaPoslednjihCifara(brojevi));

//predzadnji broj ============================================

function test(num) {
  if (num > 0 && num < 10) {
    return 0;
  } else {
    let floor = Math.floor(num / 10);
    let digit = floor % 10;
    return digit;
  }
}

function glavna(niz) {
  let sum = 0;
  for (let i = 0; i < niz.length; i++) {
    sum += test(niz[i]);
  }
  return sum;
}

console.log(glavna(brojevi));

// prva cifra broja =================================================

function prva(broj) {
  let abstraktni = Math.abs(broj);
  if (abstraktni < 10) {
    return abstraktni;
  }
  while (abstraktni >= 10) {
    abstraktni = Math.floor(abstraktni / 10);
  }
  return abstraktni;
}
console.log(prva(443));

function glavnaFunkcija2(niz) {
  let sum = 0;

  for (let i = 0; i < niz.length; i++) {
    sum += prva(niz[i]);
  }
  return sum;
}

console.log(glavnaFunkcija2(brojevi));

function test2(broj) {
  let sumParni = 0;
  let broj1 = Math.abs(broj);

  while (broj1 > 0) {
    let poslednjaCifra = broj1 % 10;
    if (poslednjaCifra % 2 === 0) {
      sumParni += poslednjaCifra;
    }
    broj1 = Math.floor(broj1 / 10);
  }
  return sumParni;
}

function glavna2funkcija(niz) {
  let sum = 0;
  for (let i = 0; i < niz.length; i++) {
    sum += test2(niz[i]);
  }
  return sum;
}

console.log(glavna2funkcija(brojevi));

//===================================================================================================================
