/**
 *
 * @param {Array} arr1 -
 * @description
 */

function kasihPerangko(arr1) {
  //kode kamu di sini

  // kita butuh value array original sebagai pembanding
  if (arr1 instanceof Array) {
    const arr1Ori = arr1.slice();
    arr1.forEach((item, i) => {
      if (item > arr1Ori[i - 1]) {
        arr1[i] = arr1[i - 1] + 1;
      } else if (item > arr1Ori[i + 1]) {
        arr1[i] = 2;
      } else {
        arr1[i] = 1;
      }
    });
    console.log(arr1);
    return arr1.reduce((a, b) => a + b);
  } else {
    return { error: true, message: "Tipe data harus Array" };
  }
}
const kasusA = kasihPerangko([4, 6, 4, 5, 6, 2]);
const kasusB = kasihPerangko([2, 4, 2, 6, 3, 7, 8, 9, 2, 1]);
const kasusC = kasihPerangko([2, 4, 3, 5, 2, 6, 4, 5]);

console.log({ kasusA, kasusB, kasusC });
