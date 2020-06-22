// Exercise 2-7
// ------------

// Step 1
// - The function input is an array.
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array.
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f(["foo", 3]) // "foofoofoo"
// f(["fo", 3]) // "fofofo"
// f(["foo", -1]) // ""

function repeat(arr) {
  if (typeof arr[0] !== "string") return undefined;
  if (typeof arr[1] !== "number") return undefined;
  if (arr[1] <= 0) return "";

  let words = arr[0];
  let count = arr[1];

  let newWord = "";
  for (i = 1; i <= count; i++) {
    newWord = newWord + words;
  }

  console.log(newWord);
  return newWord;
}

// We need 7 test cases.
// Don't forget to test all of the question parameters
expect(repeat(["daje", 2]), "dajedaje");
expect(repeat(["forza", 3]), "forzaforzaforza");
expect(repeat(["go", 2]), "gogo");
expect(repeat(["daje", -9999]), "");
expect(repeat([44444, 2]), undefined);
expect(repeat(["daje", "roma"]), undefined);
expect(repeat(["plop", 2]), "plopplop");

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log("✅ Test succeeded");
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
