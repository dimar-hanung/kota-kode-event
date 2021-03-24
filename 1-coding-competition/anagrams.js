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

/**
 * Rekomendasi : ⭐⭐⭐
 * @param {String} str1 - Text pertama
 * @param {String} str2 - Text kedua
 */
function membuatAnagram(str1, str2) {
  // kode kamu di sini

  /**
   * Mendapatkan list huruf yang duplikat terlebih dahulu.
   */
  const charDuplikat = str1.split("").filter(char => str2.includes(char));

  /**
   * Setelah itu gabung `str1` dan `str2`, dan filter kembali,
   * karena yang dicari adalah anagram
   * maka yang harus difilter adalah jumlah huruf yang tidak terduplikasi
   */
  const output = (str1 + str2)
    .split("")
    .filter(char => !charDuplikat.includes(char)).length;

  return output;
}

const kasusA = membuatAnagram("adkrn", "r");
const kasusB = membuatAnagram("adkrn", "r");
const kasusC = membuatAnagram("adkrn", "r");

console.log({ kasusA, kasusB, kasusC });
