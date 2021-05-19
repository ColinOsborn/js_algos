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

// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// This one is great to know, incase they ask for no reverse method 
// and it also utilizes the new for loop syntax on line 25
// function reverse(str) {
//   let reversed = '';
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

// this is another solution that implements usage of reduce
function reverse(str) {
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '');
}

// This is basically the same function as above, but cleaned up that much more
// function reverse(str) {
//   return str.split('').reduce((rev, char) => 
//     char + rev, '');
// }

// now with recrusion...

// function reverse(str) {
//   if (str === "")
//     return "";
//   else
//     return reverse(str.substr(1)) + str.charAt(0); 
// }

module.exports = reverse;

// These all work.... ideally the recursion would be good... but better really know it