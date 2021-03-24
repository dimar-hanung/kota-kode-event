/**
 * ⭐: Sangat Tidak Rekomendasi
 * ⭐⭐ : Disarankan Tidak
 * ⭐⭐⭐ : Masih pertimbangan
 * ⭐⭐⭐⭐ : Rekomendasi
 * ⭐⭐⭐⭐⭐ : Production :D
 */

/**
 * Rekomendasi : ⭐⭐⭐
 * @param {Array} inputList
 * @returns
 */
function hilangkanDuplikat(inputList) {
  //kode kamu di sini
  let duplikatList = [];
  return inputList.map(angka => {
    const output = duplikatList.includes(angka) ? 0 : angka;
    duplikatList.push(angka);
    return output;
  });
}

const kasusA = hilangkanDuplikat([1, 1, 2, 2, 3, 4, 5]); // [ 1, 0, 2, 0, 3, 4, 5 ]
const kasusB = hilangkanDuplikat([1, 1, 1, 1, 2, 1, 1]); // [ 1, 0, 0, 0, 0, 0, 0 ]
const kasusC = hilangkanDuplikat([1, 2, 3, 4, 5, 6, 7]); // [ 1, 2, 3, 4, 5, 6, 7 ]
const kasusD = hilangkanDuplikat([1, 1, 1, 1, 2, 1, 1]); // [ 1, 0, 0, 0, 2, 0, 0 ]

console.log({ kasusA, kasusB, kasusC, kasusD });

/**
 * Rekomendasi : ⭐
 * @param {Array} inputList
 *
 */
const hilangkanDuplikat2 = inputList =>
  inputList.reduce((a, b, i) => {
    a === b ? (inputList[i] = 0) : inputList[i];
    return b;
  });

const kasusA2 = hilangkanDuplikat2([1, 1, 2, 2, 3, 4, 5]); // [ 1, 0, 2, 0, 3, 4, 5 ]
const kasusB2 = hilangkanDuplikat2([1, 1, 1, 1, 1, 1, 1]); // [ 1, 0, 0, 0, 0, 0, 0 ]
const kasusC2 = hilangkanDuplikat2([1, 2, 3, 4, 5, 6, 7]); // [ 1, 2, 3, 4, 5, 6, 7 ]

console.log({ kasusA2, kasusB2, kasusC2 });
