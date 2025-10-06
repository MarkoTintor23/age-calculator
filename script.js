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

// function pom(broj) {
//   return broj % 10;
// }

// function glavna(niz) {
//   let sum = 0;
//   for (let i = 0; i < niz.length; i++) {
//     sum += pom(niz[i]);
//   }
//   return sum;
// }
// console.log(glavna(brojevi));
// //=====================================================
// function stringovi(str) {
//   let noviStr = [];
//   for (let i = 0; i < str.length; i += 2) {
//     if (i + 1 < str.length) {
//       noviStr += str[i + 1] + str[i];
//     } else {
//       noviStr += str[i];
//     }
//   }
//   return noviStr;
// }
// let zadatak = "abcd13493kfdk";
// console.log(stringovi(zadatak));

// //........................................................

// function test(broj) {
//   if (broj > 0 && broj < 10) {
//     return 0;
//   } else {
//     let floor = Math.floor(broj / 10);
//     let digit = floor % 10;
//     return digit;
//   }
// }
// function glavni2(niz) {
//   let sum = 0;
//   for (let i = 0; i < niz.length; i++) {
//     sum += test(niz[i]);
//   }
//   return sum;
// }
// console.log(glavni2(brojevi));
// //.........................................................

// function stringovi2(str) {
//   let noviStr = [];

//   for (let i = 0; i < str.length; i++) {
//     noviStr += str[i] + str[i];
//   }
//   return noviStr;
// }

// console.log(stringovi2(zadatak));

// //./////////////////////////////////////////////////////////

// function pom2(broj) {
//   if (broj < 10) {
//     return broj;
//   }
//   while (broj >= 10) {
//     broj = Math.floor(broj / 10);
//   }
//   return broj;
// }
// function glavna3(niz) {
//   let sum = 0;

//   for (let i = 0; i < niz.length; i++) {
//     sum += pom2(niz[i]);
//   }
//   return sum;
// }

// console.log(glavna3(brojevi));

// //.............................................................

// function test2(broj) {
//   let sum = 0;

//   while (broj > 0) {
//     let poslednjiBroj = broj % 10;
//     if (poslednjiBroj % 2 === 0) {
//       sum += poslednjiBroj;
//     }
//     broj = Math.floor(broj / 10);
//   }
//   return sum;
// }

// function glavna4(niz) {
//   let sum = 0;

//   for (let i = 0; i < niz.length; i++) {
//     sum += test2(niz[i]);
//   }
//   return sum;
// }

// console.log(glavna4(brojevi));

// //.......................................................
// function stringovi3(str) {
//   let noviStr = [];
//   for (let i = 0; i < str.length; i++) {
//     if (i % 2 === 0) {
//       noviStr += str[i];
//     }
//   }
//   return noviStr;
// }

// console.log(stringovi3(zadatak), zadatak);

// //./..................................................
// let sum = 0;
// let mat = [
//   [2, 5, 7],
//   [1, 3, 9],
// ];
// for (let i = 0; i < mat.length; i++) {
//   for (let j = 0; j < mat[i].length; j++) {
//     console.log(mat[i][j]);
//   }
// }
// for (let i = 0; i < mat.length; i++) {
//   for (let j = 0; j < mat[i].length; j++) {
//     sum += mat[i][j];
//   }
// }
// console.log(sum);

// let mat2 = [];

// for (let i = 0; i < mat.length; i++) {
//   let red = [];
//   for (let j = 0; j < mat[i].length; j++) {
//     red.push(mat[i][j] * 2);
//   }
//   mat2.push(red);
// }
// console.log(mat2);

// function matricaNove(matrica) {
//   let newMat = [];
//   for (let i = 0; i < matrica.length; i++) {
//     let red = [];
//     for (let j = 0; j < matrica[i].length; j++) {
//       if (matrica[i][j] > 5) {
//         red.push(9 - matrica[i][j]);
//       } else {
//         red.push(matrica[i][j]);
//       }
//     }
//     newMat.push(red);
//   }
//   return newMat;
// }

// console.log(matricaNove(mat));

// function matricaDruga(matrica) {
//   return matrica.map((red) => red.map((x) => (x < 5 ? x + 5 : x)));
// }
// console.log(matricaDruga(mat));

// function figura(n) {
//   const ukupanBrRedova = 2 * n;

//   for (let i = 0; i < ukupanBrRedova; i++) {
//     const k = Math.floor(i / 2) + 1;
//     let linija = "";

//     if (i % 2 === 0) {
//       linija += "*".repeat(k);
//       linija += "-".repeat(n - k);
//     } else {
//       linija += "-".repeat(k);
//       linija += "*".repeat(n - k);
//     }

//     console.log(linija);
//   }
// }
// console.log(figura(5));
let brojevi = [16, 45, 12, 1, 2, 66];

let mat = [
  [2, 5, 7, 9],
  [1, 3, 9, 9],
  [2, 5, 7, 9],
  [2, 5, 7, 9],
];

let zadatak = "abcd13493kfdk";

function pom(broj) {
  return Math.abs(broj % 10);
}
function glavna(niz) {
  let sum = 0;
  for (let i = 0; i < niz.length; i++) {
    sum += pom(niz[i]);
  }
  return sum;
}

console.log(glavna(brojevi));

function matrica(mat) {
  return mat.map((red) => red.map((x) => (x > 5 ? 9 - x : x)));
}
console.log(matrica(mat));

function noviStr(str) {
  let stringe = [];

  for (let i = 0; i < str.length; i += 2) {
    if (i + 1 < str.length) {
      stringe += str[i + 1] + str[i];
    } else {
      stringe += str[i];
    }
  }
  return stringe;
}
console.log(noviStr(zadatak), zadatak);

function predzadnja(broj) {
  if (broj > 0 && broj < 10) {
    return 0;
  }
  let floor = Math.floor(broj / 10);
  let digit = floor % 10;
  return digit;
}
function glavna2(niz) {
  let sum = 0;
  for (let i = 0; i < niz.length; i++) {
    sum += predzadnja(niz[i]);
  }
  return sum;
}
console.log(glavna2(brojevi));

function matricaaaa(mat) {
  return mat.map((red) => red.map((x) => (x < 5 ? x + 5 : x)));
}
console.log(matricaaaa(mat));

function stringeri(str) {
  let novi = [];
  for (let i = 0; i < str.length; i++) {
    novi += str[i] + str[i];
  }
  return novi;
}
console.log(stringeri(zadatak), zadatak);

function prvi(broj) {
  while (broj >= 10) {
    broj = Math.floor(broj / 10);
  }
  return broj;
}

function glavna5(niz) {
  let sum = 0;
  for (let i = 0; i < niz.length; i++) {
    sum += prvi(niz[i]);
  }
  return sum;
}

console.log(glavna5(brojevi));

function prviPoslednji(matr) {
  let bezPrvogReda = matr.slice(1, matr.length - 1);
  let delu = bezPrvogReda.map((red) => red.slice(1, matr.length - 1));
  return delu;
}

console.log(prviPoslednji(mat));

function parni(broj) {
  if (broj % 2 === 0) {
  }
}
