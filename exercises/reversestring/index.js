// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// This one below works... but isn't as clean
// function reverse(str) {
//   var letters = str.split('');
//   var reversed = letters.reverse();
//   var joinArray = reversed.join('');
//   return joinArray
// }

function reverse(str) {
  return str.split('').reverse().join('')
}

// now with recrusion...

function reverse(str) {
  if (str === "")
    return "";
  else
    return reverse(str.substr(1)) + str.charAt(0); 
}

module.exports = reverse;

// These all work.... ideally the recursion would be good... but better really know it