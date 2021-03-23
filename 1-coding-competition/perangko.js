/**
 * ⭐: Sangat Tidak Rekomendasi
 * ⭐⭐ : Disarankan Tidak
 * ⭐⭐⭐ : Masih pertimbangan
 * ⭐⭐⭐⭐ : Rekomendasi
 * ⭐⭐⭐⭐⭐ : Production :D
 */

function kasihPerangko(arr1) {
  //kode kamu di sini
  const arr1Const = arr1.slice();
  arr1.forEach((item, i) => {
    if (item > arr1Const[i - 1]) {
      arr1[i] = arr1[i - 1] + 1;
    } else if (item > arr1Const[i + 1]) {
      //   arr1[i + 1] = arr1[i] - 1;
      arr1[i] = 2;

      console.log(item, arr1[i + 1]);
    } else {
      arr1[i] = 1;
    }
  });
  console.log(arr1);
  return arr1.reduce((a, b) => a + b);
}
const caseA = kasihPerangko([4, 6, 4, 5, 6, 2]);
const caseB = kasihPerangko([2, 4, 2, 6, 3, 7, 8, 9, 2, 1]);
const caseC = kasihPerangko([2, 4, 3, 5, 2, 6, 4, 5]);

console.log({ caseA, caseB, caseC });
