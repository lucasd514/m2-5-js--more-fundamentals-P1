// Exercise 2-4
// ------------

// Write a function that returns the letter at the specified position in the
// string. If no such letter exists, it should return undefined.
//
// For example:
// getLetterAtIndex("hello", 1); // e
// getLetterAtIndex("", 4);      // undefined
// getLetterAtIndex("abc", 0);   // a

function getLetterAtIndex(str, index) {
  let phrase = str;
  let position = str.charAt(index);
  if (str.charAt(index) === "") return undefined;
  else console.log(position);
  return position;
}

// Add 6 more test cases
expect(getLetterAtIndex("hello", 4), "o");
expect(getLetterAtIndex("goodbye", 0), "g");
expect(getLetterAtIndex("Ciao", 0), "C");
expect(getLetterAtIndex("bello", 0), "b");
expect(getLetterAtIndex("tutt", 3), "t");
expect(getLetterAtIndex("appost", 0), "a");
expect(getLetterAtIndex("sisisisisis", 76), undefined);
expect(getLetterAtIndex("123456789", 8), "9");

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
