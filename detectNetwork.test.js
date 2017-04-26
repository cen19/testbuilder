/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should;

describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num % 2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
    if ('38345678901234'.length !== 14) {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901239') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
    if ('39345678901239'.length !== 14) {
      throw new Error('Test failed');
    }
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
    assert('343456789012345'.length === 15);
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
    assert('373456789012345'.length === 15);
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  it('has a prefix of 4 and a length of 13', function() {
    assert.equal(detectNetwork('4123456789012'), 'Visa');
    assert.lengthOf('4123456789012', 13);
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert.equal(detectNetwork('4123456789012345'), 'Visa');
    assert.lengthOf('4123456789012345', 16);
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678'), 'Visa');
    assert.lengthOf('4123456789012345678', 19)
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  // var expect = chai.expect();

  it('has a prefix of 51 and has length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
    expect('5112345678901234').to.have.lengthOf(16);
  });

  it('has a prefix of 52 and has length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
    expect('5212345678901234').to.have.lengthOf(16);
  });

  it('has a prefix of 53 and has length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
    expect('5312345678901234').to.have.lengthOf(16);
  });
  it('has a prefix of 54 and has length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
    expect('5412345678901234').to.have.lengthOf(16);
  });
  it('has a prefix of 55 and has length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
    expect('5512345678901234').to.have.lengthOf(16);
  });


  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.
  // var should = chai.should();

  // it('has a prefix of 54 and a length of 16', function() {
  //   detectNetwork('5412345678901234').should.equal('MasterCard');
  //   '5412345678901234'.should.have.lengthOf(16);
  // });

  // it('has a prefix of 55 and a length of 16', function() {
  //   detectNetwork('5512345678901234').should.equal('MasterCard');
  //   '5512345678901234'.should.have.lengthOf(16);
  // })

});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var should = chai.should();

  it('has a prefix of 6011 and a length of 16', function () {
    detectNetwork('6011123451234567').should.equal('Discover');
    '6011123451234567'.should.have.lengthOf(16);
  });
  it('has a prefix of 6011 and a length of 19', function () {
    detectNetwork('6011123451234567890').should.equal('Discover');
    '6011123451234567890'.should.have.lengthOf(19);
  });
  it('has a prefix of 65 and length of 16', function () {
    detectNetwork('6512345678901234').should.equal('Discover');
    '6512345678901234'.should.have.lengthOf(16);
  });
  it('has a prefix of 65 and a length of 19', function () {
    detectNetwork('6565123456789012341').should.equal('Discover');
    '6565123456789012341'.should.have.lengthOf(19);
  });
  for (var prefix = 644; prefix <= 649; prefix++) {
  (function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 16', function () {
      detectNetwork(prefix.toString() + '1234567890123').should.equal('Discover');
    });
    it('has a prefix of ' + prefix + ' and a length of 19', function () {
      detectNetwork(prefix.toString() + '1234567890123456').should.equal('Discover');
    });
    })(prefix)
  }
  // it('has a prefix of 644 and a length of 16', function () {
  //   detectNetwork('6445123456789012').should.equal('Discover');
  //   '6445123456789012'.should.have.lengthOf(16);
  // });
  // it('has a prefix of 644 and a length of 19', function () {
  //   detectNetwork('6445123456789012123').should.equal('Discover');
  //   '6445123456789012123'.should.have.lengthOf(19);
  // });
  // it('has a prefix of 645 and a length of 16', function () {
  //   detectNetwork('6455123456789012').should.equal('Discover');
  //   '6455123456789012'.should.have.lengthOf(16);
  // });
  // it('has a prefix of 645 and a length of 19', function () {
  //   detectNetwork('6455123456789012123').should.equal('Discover');
  //   '6455123456789012123'.should.have.lengthOf(19);
  // });
  // it('has a prefix of 646 and a length of 16', function () {
  //   detectNetwork('6465123456789012').should.equal('Discover');
  //   '6465123456789012'.should.have.lengthOf(16);
  // });
  // it('has a prefix of 646 and a length of 19', function () {
  //   detectNetwork('6465123456789012123').should.equal('Discover');
  //   '6465123456789012123'.should.have.lengthOf(19);
  // });
  // it('has a prefix of 647 and a length of 16', function () {
  //   detectNetwork('6475123456789012').should.equal('Discover');
  //   '6475123456789012'.should.have.lengthOf(16);
  // });
  // it('has a prefix of 647 and a length of 19', function () {
  //   detectNetwork('6475123456789012123').should.equal('Discover');
  //   '6475123456789012123'.should.have.lengthOf(19);
  // });
  // it('has a prefix of 648 and a length of 16', function () {
  //   detectNetwork('6485123456789012').should.equal('Discover');
  //   '6485123456789012'.should.have.lengthOf(16);
  // });
  // it('has a prefix of 648 and a length of 19', function () {
  //   detectNetwork('6485123456789012999').should.equal('Discover');
  //   '6485123456789012999'.should.have.lengthOf(19);
  // });
  // it('has a prefix of 649 and a length of 16', function () {
  //   detectNetwork('6495123456789012').should.equal('Discover');
  //   '6495123456789012'.should.have.lengthOf(16);
  // });
  // it('has a prefix of 649 and a length of 19', function () {
  //   detectNetwork('6495123456789012999').should.equal('Discover');
  //   '6495123456789012999'.should.have.lengthOf(19);
  // });
});

describe('Maestro', function() {
  var expect = chai.expect;

  for (var length = 12; length <= 19; length++) {
  (function(length) {
    it('has a prefix of 5038 and a length of ' + length.toString(), function () {
      expect(detectNetwork('503812345678')).to.equal('Maestro');
    });
    it('has a prefix of 5018 and a length of ' + length.toString(), function () {
      expect(detectNetwork('501812345678')).to.equal('Maestro');
    });
    it('has a prefix of 5020 and a length of ' + length.toString(), function () {
      expect(detectNetwork('502012345678')).to.equal('Maestro');
    });
    it('has a prefix of 6034 and a length of ' + length.toString(), function () {
      expect(detectNetwork('630412345678')).to.equal('Maestro');
    });
    })(length)
  }
});

describe('should support China UnionPay')
describe('should support Switch')


// var detectNetwork = function (creditCardNumbers) {
//   // input is a string of numbers
//   var dinersLengthCheck = creditCardNumbers.length === 14;
//   var dinersPrefixCheck = creditCardNumbers.slice(0, 2) === '38' || creditCardNumbers.slice(0, 2) === '39';
//   if (dinersLengthCheck && dinersPrefixCheck) {
//     return 'Diner\'s Club';
//   }

//   let amExLengthCheck = creditCardNumbers.length  === 15;
//   let amExPrefixCheck = creditCardNumbers.slice(0, 2) === '34' || creditCardNumbers.slice(0, 2) === '37';
//   if (amExPrefixCheck && amExLengthCheck) {
//     return 'American Express';
//   }

//   let visaLengthCheck = creditCardNumbers.length === 13 || creditCardNumbers.length === 16 || creditCardNumbers.length === 19;
//   let visaPrefixCheck = creditCardNumbers[0] === '4';
//   if (visaPrefixCheck && visaPrefixCheck) {
//     return 'Visa';
//   }

//   let mastercardLengthCheck = creditCardNumbers.length === 16;
//   let mastercardPrefixCheck = creditCardNumbers.slice(0, 2) >= '51' && creditCardNumbers.slice(0, 2) <= '55'
//   if (mastercardPrefixCheck && mastercardLengthCheck) {
//     return 'MasterCard';
//   }

//   let maestroLengthCheck = creditCardNumbers.length <= 19 && creditCardNumbers.length >= 12;
//   let maestroPrefixCheck = creditCardNumbers.slice(0, 4) === '5018' || creditCardNumbers.slice(0, 4) === '5020' || creditCardNumbers.slice(0, 4) === '5038' || creditCardNumbers.slice(0, 4) === '6304';
//   if (maestroLengthCheck && maestroPrefixCheck) {
//     return 'Maestro';
//   }

//   let discoverPrefixCheck =  creditCardNumbers.slice(0, 4) === '6011' || (creditCardNumbers.slice(0, 3) <= '649' && creditCardNumbers.slice(0, 3) >= '644') || creditCardNumbers.slice(0, 2) === '65';
//   let discoverLengthCheck = creditCardNumbers.length === 16 || creditCardNumbers.length === 19;
//   if (discoverPrefixCheck && discoverLengthCheck) {
//     return 'Discover';
//   }

// }
