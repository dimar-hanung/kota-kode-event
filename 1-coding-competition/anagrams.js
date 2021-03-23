/**
 * ⭐: Sangat Tidak Rekomendasi
 * ⭐⭐ : Disarankan Tidak
 * ⭐⭐⭐ : Masih pertimbangan
 * ⭐⭐⭐⭐ : Rekomendasi
 * ⭐⭐⭐⭐⭐ : Production :D
 */

/**
 * Rekomendasi : ⭐⭐⭐
 * @param {String} str1 - Text pertama
 * @param {String} str2 - Text kedua
 */
function membuatAnagram(str1, str2) {
  //kode kamu di sini

  /**
   * Mendapatkan list huruf yang sama terlebih dahulu.
   *
   */
  const duplicateChar = str1.split("").filter(data => str2.includes(data));
  const output = (str1 + str2)
    .split("")
    .filter(data => !duplicateChar.includes(data)).length;

  return output;
}

console.log(membuatAnagram("adkrn", "r"));
