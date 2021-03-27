//github.com/dimar-hanung/kota-kode-event/tree/master/1-coding-competition
/**
 * ⭐: Sangat Tidak Rekomendasi
 * ⭐⭐ : Disarankan Tidak
 * ⭐⭐⭐ : Masih pertimbangan
 * ⭐⭐⭐⭐ : Rekomendasi
 * ⭐⭐⭐⭐⭐ : Production :D
 */

/**
 * TIP - `includes` Method :
 *  - Spesifikasi : ECMAScript 2015 (es6)
 *  - `includes` polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes#polyfill
 */

/*
======================================================================================================
=============================================== Code 1 ===============================================
=====================================================================================================
*/
/**
 * Rekomendasi : ⭐⭐⭐⭐
 * @param {String} str1 - Text pertama
 * @param {String} str2 - Text kedua
 * @description
 * - Minimal : ECMAScript 2015 (es6) / Gunakan Polyfill
 * - Menghitung jumlah huruf yang perlu
 * dihapus supaya 2 buah string bisa menjadi sebuah anagram.
 */
function membuatAnagram(str1, str2) {
  // kode kamu di sini

  /**
   * - str1 difilter dengan kondisi benar jika str2 mengandung salah satu huruf di str1
   * - dengan algoritma ini akan didapatkan list huruf yang terduplikat
   */
  const charDuplikat = str1.split("").filter(char => str2.includes(char));

  /**
   * Setelah itu gabung `str1` dan `str2`, dan filter kembali,
   * karena yang dicari adalah anagram,
   * maka yang harus difilter adalah jumlah huruf yang tidak terduplikasi
   */
  const output = (str1 + str2)
    .split("")
    .filter(char => !charDuplikat.includes(char)).length;

  return output;
}

const kasusA = membuatAnagram("dce", "efc"); // 2
const kasusB = membuatAnagram("cdfea", "afbbk"); // 6
const kasusC = membuatAnagram("adkrn", "r"); // 4
console.log({ kasusA, kasusB, kasusC });
