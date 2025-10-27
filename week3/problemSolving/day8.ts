/**
 * Given a single input string, write a function that outputs an array of strings with every possible
 * combination of letters.
 *
 * At first, don't worry about repeated (duplicate) strings.
 *
 * What time complexity is your solution?
 *
 * Extra credit: De-duplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
*/

function allAnagrams(str: string): string[] {
  const chars = str.split(""); 
  const results: string[] = [];

  function track(start: number) {
    if (start === chars.length - 1) {
      results.push(chars.join(""));
      return;
    }

    for (let i = start; i < chars.length; i++) {
     
      [chars[start]!, chars[i]!] = [chars[i]!, chars[start]!];

      track(start + 1);

      [chars[start]!, chars[i]!] = [chars[i]!, chars[start]!];
    }
  }

  track(0);
  return results;
}

console.log(allAnagrams("abc"));
