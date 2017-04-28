// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// var detectNetwork = function(cardNumber) {
//   // Note: `cardNumber` will always be a string
//   // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
//   // The American Express network always starts with a 34 or 37 and is 15 digits long

//   // Once you've read this, go ahead and try to implement this function, then return to the console.
// };

var detectNetwork = function (creditCardNumbers) {
  // input is a string of numbers
  var dinersLengthCheck = creditCardNumbers.length === 14;
  var dinersPrefixCheck = creditCardNumbers.slice(0, 2) === '38' || creditCardNumbers.slice(0, 2) === '39';
  if (dinersLengthCheck && dinersPrefixCheck) {
    return 'Diner\'s Club';
  }

  let amExLengthCheck = creditCardNumbers.length  === 15;
  let amExPrefixCheck = creditCardNumbers.slice(0, 2) === '34' || creditCardNumbers.slice(0, 2) === '37';
  if (amExPrefixCheck && amExLengthCheck) {
    return 'American Express';
  }

  let visaLengthCheck = creditCardNumbers.length === 13 || creditCardNumbers.length === 16 || creditCardNumbers.length === 19;
  let visaPrefixCheck = creditCardNumbers.slice(0, 1) === '4';
  let switchPrefixExtendedCheck = creditCardNumbers.slice(0, 4) === '4903' || creditCardNumbers.slice(0, 4) === '4905' || creditCardNumbers.slice(0, 4) === '4911' || creditCardNumbers.slice(0, 4) === '4936';

  let switchLengthCheck = creditCardNumbers.length === 16 || creditCardNumbers.length === 18 || creditCardNumbers.length === 19;
  let switchPrefixCheck = creditCardNumbers.slice(0, 6) === '564182' || creditCardNumbers.slice(0, 6) === '633110' || creditCardNumbers.slice(0, 4) === '6333' || creditCardNumbers.slice(0, 4) === '6759';
  if (switchPrefixCheck && switchLengthCheck) {
    return 'Switch';
  }
  if (switchPrefixExtendedCheck && (creditCardNumbers.length === 16 || creditCardNumbers.length === 19)) {
    return 'Switch';
  } else if (visaLengthCheck && visaPrefixCheck) {
    return 'Visa'
  } else if (switchPrefixExtendedCheck && creditCardNumbers.length === 18) {
    return 'Switch';
  }

  let mastercardLengthCheck = creditCardNumbers.length === 16;
  let mastercardPrefixCheck = creditCardNumbers.slice(0, 2) >= '51' && creditCardNumbers.slice(0, 2) <= '55'
  if (mastercardPrefixCheck && mastercardLengthCheck) {
    return 'MasterCard';
  }

  let maestroLengthCheck = creditCardNumbers.length <= 19 && creditCardNumbers.length >= 12;
  let maestroPrefixCheck = creditCardNumbers.slice(0, 4) === '5018' || creditCardNumbers.slice(0, 4) === '5020' || creditCardNumbers.slice(0, 4) === '5038' || creditCardNumbers.slice(0, 4) === '6304';
  if (maestroLengthCheck && maestroPrefixCheck) {
    return 'Maestro';
  }

  let discoverPrefixCheck =  creditCardNumbers.slice(0, 4) === '6011' || (creditCardNumbers.slice(0, 3) <= '649' && creditCardNumbers.slice(0, 3) >= '644') || creditCardNumbers.slice(0, 2) === '65';
  let discoverLengthCheck = creditCardNumbers.length === 16 || creditCardNumbers.length === 19;
  if (discoverPrefixCheck && discoverLengthCheck) {
    return 'Discover';
  }

  let chinaUnionPayPrefixCheck = (creditCardNumbers.slice(0, 6) >= '622126' && creditCardNumbers.slice(0, 6) <= '622925') || (creditCardNumbers.slice(0, 3) >= '624' && creditCardNumbers.slice(0, 3) <= '626') || (creditCardNumbers.slice(0, 4) >= '6282' && creditCardNumbers.slice(0, 4) <= '6288');
  let chinaUnionPayLengthCheck = creditCardNumbers.length >= 16 && creditCardNumbers.length <= 19;
  if (chinaUnionPayLengthCheck && chinaUnionPayPrefixCheck) {
    return 'China UnionPay';
  }
}
 console.log(detectNetwork('4903' + Math.pow(10, 13).toString()));


