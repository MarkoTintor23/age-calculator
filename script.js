let brojevi = [16, 45, 12, 1, 2, 66];

// //poslednja cifra broja =====================================

// function pom(broj) {
//   return Math.abs(broj % 10);
// }

// function sumaPoslednjihCifara(niz) {
//   let suma = 0;
//   for (let i = 0; i < niz.length; i++) {
//     suma += pom(niz[i]);
//   }
//   return suma;
// }

// console.log(sumaPoslednjihCifara(brojevi));

// //predzadnji broj ============================================

// function test(num) {
//   if (num > 0 && num < 10) {
//     return 0;
//   } else {
//     let floor = Math.floor(num / 10);
//     let digit = floor % 10;
//     return digit;
//   }
// }

// function glavna(niz) {
//   let sum = 0;
//   for (let i = 0; i < niz.length; i++) {
//     sum += test(niz[i]);
//   }
//   return sum;
// }

// console.log(glavna(brojevi));

// // prva cifra broja =================================================

// function prva(broj) {
//   let abstraktni = Math.abs(broj);
//   if (abstraktni < 10) {
//     return abstraktni;
//   }
//   while (abstraktni >= 10) {
//     abstraktni = Math.floor(abstraktni / 10);
//   }
//   return abstraktni;
// }
// console.log(prva(443));

// function glavnaFunkcija2(niz) {
//   let sum = 0;

//   for (let i = 0; i < niz.length; i++) {
//     sum += prva(niz[i]);
//   }
//   return sum;
// }

// console.log(glavnaFunkcija2(brojevi));

//parni brojevi ====================================================================

// function test2(broj) {
//   let sumParni = 0;
//   let broj1 = Math.abs(broj);

//   while (broj1 > 0) {
//     let poslednjaCifra = broj1 % 10;
//     if (poslednjaCifra % 2 === 0) {
//       sumParni += poslednjaCifra;
//     }
//     broj1 = Math.floor(broj1 / 10);
//   }
//   return sumParni;
// }

// function glavna2funkcija(niz) {
//   let sum = 0;
//   for (let i = 0; i < niz.length; i++) {
//     sum += test2(niz[i]);
//   }
//   return sum;
// }

// console.log(glavna2funkcija(brojevi));

// //===================================================================================================================

function pom(broj) {
  return broj % 10;
}

function glavna(niz) {
  let sum = 0;
  for (let i = 0; i < niz.length; i++) {
    sum += pom(niz[i]);
  }
  return sum;
}
console.log(glavna(brojevi));
//=====================================================
function stringovi(str) {
  let noviStr = [];
  for (let i = 0; i < str.length; i += 2) {
    if (i + 1 < str.length) {
      noviStr += str[i + 1] + str[i];
    } else {
      noviStr += str[i];
    }
  }
  return noviStr;
}
let zadatak = "abcd13493kfdk";
console.log(stringovi(zadatak));

//........................................................

function test(broj) {
  if (broj > 0 && broj < 10) {
    return 0;
  } else {
    let floor = Math.floor(broj / 10);
    let digit = floor % 10;
    return digit;
  }
}
function glavni2(niz) {
  let sum = 0;
  for (let i = 0; i < niz.length; i++) {
    sum += test(niz[i]);
  }
  return sum;
}
console.log(glavni2(brojevi));
//.........................................................

function stringovi2(str) {
  let noviStr = [];

  for (let i = 0; i < str.length; i++) {
    noviStr += str[i] + str[i];
  }
  return noviStr;
}

console.log(stringovi2(zadatak));

//./////////////////////////////////////////////////////////

function pom2(broj) {
  if (broj < 10) {
    return broj;
  }
  while (broj >= 10) {
    broj = Math.floor(broj / 10);
  }
  return broj;
}
function glavna3(niz) {
  let sum = 0;

  for (let i = 0; i < niz.length; i++) {
    sum += pom2(niz[i]);
  }
  return sum;
}

console.log(glavna3(brojevi));

//.............................................................

function test2(broj) {
  let sum = 0;

  while (broj > 0) {
    let poslednjiBroj = broj % 10;
    if (poslednjiBroj % 2 === 0) {
      sum += poslednjiBroj;
    }
    broj = Math.floor(broj / 10);
  }
  return sum;
}

function glavna4(niz) {
  let sum = 0;

  for (let i = 0; i < niz.length; i++) {
    sum += test2(niz[i]);
  }
  return sum;
}

console.log(glavna4(brojevi));

//.......................................................
function stringovi3(str) {
  let noviStr = [];
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      noviStr += str[i];
    }
  }
  return noviStr;
}

console.log(stringovi3(zadatak), zadatak);
