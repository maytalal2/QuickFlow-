/**
 * Write a function `commonCharacters(str1, str2)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `str1`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

//Works for any number of input strings:
function commonCharacters(str1: string, str2: string): string {
  const arr2 = str2.split("");
  let result = "";

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i]!;
    if (char !== " " && arr2.includes(char) //O(N)
      && !result.includes(char)) {
      result += char;
    }
  }

  return result;
}


console.log(commonCharacters("acexivou", "aegihobu")); // "aeiou"
//For more than two strings 
function commonCharacters2(...strings: string[]): string {
  if (strings.length === 0) return "";

  const arr1 = strings[0]!.split("");
  let result = "";

  for (let i = 0; i < arr1.length; i++) {
    const char = arr1[i]!;

    if (
      char !== " " &&
      !result.includes(char) &&
      strings.slice(1).every(str => str.includes(char))
    ) {
      result += char;
    }
  }

  return result;
}


console.log(commonCharacters2("acexivou", "aegihobu", "aeio")); // "aeio"
//Using set we can make it faster
function commonCharacter3(str1: string, str2: string): string {
  const set2 = new Set(str2); // uniqe elements       
  const seen = new Set<string>();  
  let result = "";

  for (const char of str1) {
    if (char !== " " && set2.has(char) //O(1) Best way
      && !seen.has(char)) {
      seen.add(char);
      result += char;
    }
  }

  return result;
}
console.log(commonCharacter3("acexivou", "aegihobu")); // "aeiou"
