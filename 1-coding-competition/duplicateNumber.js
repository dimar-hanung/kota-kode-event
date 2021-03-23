/**
 * ⭐: Sangat Tidak Rekomendasi
 * ⭐⭐ : Disarankan Tidak
 * ⭐⭐⭐ : Masih pertimbangan
 * ⭐⭐⭐⭐ : Rekomendasi
 * ⭐⭐⭐⭐⭐ : Production :D
 */

function hilangkanDuplikat(inputList) {
  //kode kamu di sini
  const output = inputList;
  inputList.reduce((a, b, i) => {
    a === b ? (output[i] = 0) : output[i];
    return b;
  });
  return output;
}

const caseA = hilangkanDuplikat([1, 1, 2, 2, 3, 4, 5]); // [ 1, 0, 2, 0, 3, 4, 5 ]
const caseB = hilangkanDuplikat([1, 1, 1, 1, 1, 1, 1]); // [ 1, 0, 0, 0, 0, 0, 0 ]
const caseC = hilangkanDuplikat([1, 2, 3, 4, 5, 6, 7]); // [ 1, 2, 3, 4, 5, 6, 7 ]

console.log({ caseA, caseB, caseC });

// function hilangkanDuplikat2(inputList) {
//   //kode kamu di sini
//   const output = inputList;
//   const a = inputList.reduce((a, b, i) => {
//     console.log(a == b, i);
//     a === b ? (output[i] = 0) : output[i];
//     return b;
//   });
//   console.log(output);

//   return true;
// }

// hilangkanDuplikat2([1, 1, 2, 2, 3, 4, 5]);
