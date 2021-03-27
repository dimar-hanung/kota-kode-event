//github.com/dimar-hanung/kota-kode-event/tree/master/1-coding-competition

/**
 * ⭐: Sangat Tidak Rekomendasi
 * ⭐⭐ : Disarankan Tidak
 * ⭐⭐⭐ : Masih pertimbangan
 * ⭐⭐⭐⭐ : Rekomendasi
 * ⭐⭐⭐⭐⭐ : Production :D
 */

/*
======================================================================================================
=============================================== Code 1 ===============================================
=====================================================================================================
*/

/**
 * Rekomendasi : ⭐⭐⭐⭐
 * @param {Array} inputList
 * @description
 * - Minimal : ECMAScript 2015 (es6) / Gunakan Polyfill
 * - Menghitung jumlah huruf yang perlu
 * dihapus supaya 2 buah string bisa menjadi sebuah anagram.
 */
function hilangkanDuplikat(inputList) {
  //kode kamu di sini
  if (inputList instanceof Array) {
    let duplikatList = [];
    return inputList.map(angka => {
      const output = duplikatList.includes(angka) ? 0 : angka;
      duplikatList.push(angka);
      return output;
    });
  } else {
    return { error: true, message: "Tipe data harus Array" };
  }
}

const kasusA = hilangkanDuplikat([1, 1, 2, 2, 3, 4, 5]); // [ 1, 0, 2, 0, 3, 4, 5 ]
const kasusB = hilangkanDuplikat([1, 1, 1, 1, 1, 1, 1]); // [ 1, 0, 0, 0, 0, 0, 0 ]
const kasusC = hilangkanDuplikat([1, 2, 3, 4, 5, 6, 7]); // [ 1, 2, 3, 4, 5, 6, 7 ]
const kasusD = hilangkanDuplikat([1, 1, 1, 1, 2, 1, 1]); // [ 1, 0, 0, 0, 2, 0, 0 ]
const kasusE = hilangkanDuplikat("String");
console.log({ kasusA, kasusB, kasusC, kasusD, kasusE });

/*
======================================================================================================
=============================================== Code 2 ===============================================
=====================================================================================================
*/

/**
 * Rekomendasi : ⭐
 * @param {Array} inputList
 * Kelemahan :
 *  - Walaupun Kasus 1 sampai 3 sesuai
 *  - Namun kasus 4 tidak sesuai dengan harapan
 *    Karena yang di cek adalah i - 1 === i, dan itu merupakan logic yang tidak benar
 *    untuk kasus ini
 */
const hilangkanDuplikat2 = inputList => {
  let output = inputList;
  inputList.reduce((a, b, i) => {
    a === b ? (output[i] = 0) : output[i];
    return b;
  });
  return output;
};

const kasusA2 = hilangkanDuplikat2([1, 1, 2, 2, 3, 4, 5]); // [ 1, 0, 2, 0, 3, 4, 5 ]
const kasusB2 = hilangkanDuplikat2([1, 1, 1, 1, 1, 1, 1]); // [ 1, 0, 0, 0, 0, 0, 0 ]
const kasusC2 = hilangkanDuplikat2([1, 2, 3, 4, 5, 6, 7]); // [ 1, 2, 3, 4, 5, 6, 7 ]
const kasusD2 = hilangkanDuplikat2([1, 1, 1, 1, 2, 1, 1]); // [ 1, 0, 0, 0, 2, 1, 0 ]

console.log({ kasusA2, kasusB2, kasusC2, kasusD2 });
