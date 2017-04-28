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

// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail.
//   // To read more about mocha, visit mochajs.org

//   it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num/2 === 0;
//     }
//     return even(10) === true;
//   });

//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num % 2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38346789012324') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
    if ('38345678012234'.length !== 14) {
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
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  // var should = chai.should();
  var expect = chai.expect;

  it('has a prefix of 6011 and a length of 16', function () {
    expect(detectNetwork('6011123451234567')).to.equal('Discover');
    expect('6011123451234567').to.have.lengthOf(16);
  });
  it('has a prefix of 6011 and a length of 19', function () {
    expect(detectNetwork('6011123451234567890')).to.equal('Discover');
    expect('6011123451234567890').to.have.lengthOf(19);
  });
  it('has a prefix of 65 and length of 16', function () {
    expect(detectNetwork('6512345678901234')).to.equal('Discover');
    expect('6512345678901234').to.have.lengthOf(16);
  });
  it('has a prefix of 65 and a length of 19', function () {
    expect(detectNetwork('6565123456782012341')).to.equal('Discover');
    expect('6565123456789012341').to.have.lengthOf(19);
  });
  for (var prefix = 644; prefix <= 649; prefix++) {
  (function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 16', function () {
      expect(detectNetwork(prefix.toString() + '1234567890123')).to.equal('Discover');
      expect((prefix.toString() + '1234567890123')).to.have.lengthOf(16);

    });
    it('has a prefix of ' + prefix + ' and a length of 19', function () {
      expect(detectNetwork(prefix.toString() + '1234567890123456')).to.equal('Discover');
      expect((prefix.toString() + '1234567890123456')).to.have.lengthOf(19);

    });
    })(prefix)
  }
});

describe('Maestro', function() {
  var expect = chai.expect;

  for (var length = 12; length <= 19; length++) {
  (function(length) {
    it('has a prefix of 5038 and a length of ' + length.toString(), function () {
      expect(detectNetwork('5038' + Math.pow(10, (length - 5)).toString())).to.equal('Maestro');
    });
    it('has a prefix of 5018 and a length of ' + length.toString(), function () {
      expect(detectNetwork('5018' + Math.pow(10, (length - 5)).toString())).to.equal('Maestro');
    });
    it('has a prefix of 5020 and a length of ' + length.toString(), function () {
      expect(detectNetwork('5020' + Math.pow(10, (length - 5)).toString())).to.equal('Maestro');
    });
    it('has a prefix of 6034 and a length of ' + length.toString(), function () {
      expect(detectNetwork('6304' + Math.pow(10, (length - 5)).toString())).to.equal('Maestro');
    });
    })(length)
  }
});

describe('should support China UnionPay', function () {
  var expect = chai.expect;

  for (var prefix = 624; prefix <= 626; prefix++) {
    for (var length = 16; length <= 19; length++) {
      (function(prefix, length) {
        it('has a prefix of ' + prefix + ' and a length of ' + length, function () {
        expect(detectNetwork(prefix.toString() + Math.pow(10, length - 4).toString())).to.equal('China UnionPay');
        expect((prefix.toString() + Math.pow(10, length - 4))).to.have.lengthOf(length);

      });
      })(prefix, length)
    }
  }

  for (var prefix1 = 6282; prefix1 <= 6288; prefix1++) {
    for (var length1 = 16; length1 <= 19; length1++) {
      (function(prefix1, length1) {
        it('has a prefix of ' + prefix1 + ' and a length of ' + length1, function () {
          expect(detectNetwork(prefix1.toString() + Math.pow(10, length1 - 5).toString())).to.equal('China UnionPay');
          expect((prefix1.toString() + Math.pow(10, length1 - 5))).to.have.lengthOf(length1);
        });
      })(prefix1, length1)
    }
  }

  for (var prefix2 = 622126; prefix2 <= 622925; prefix2++) {
    for (var length2 = 16; length2 <= 19; length2++) {
      (function(prefix2, length2) {
        it('has a prefix of ' + prefix2 + ' and a length of ' + length2, function () {
          expect(detectNetwork(prefix2.toString() + Math.pow(10, length2 - 7).toString())).to.equal('China UnionPay');
          expect((prefix2.toString() + Math.pow(10, length2 - 7))).to.have.lengthOf(length2);
        });
      })(prefix2, length2)
    }
  }

});

describe('should support Switch', function () {
  var expect = chai.expect;
  var switchPrefix4 = ['4903', '4905', '4911', '4936', '6333', '6759'];
  var switchPrefix6 = ['564182', '633110'];

  for (var i = 0; i < switchPrefix4.length; i++) {
    var prefix1 = switchPrefix4[i];
    (function(prefix1) {
      it('has a prefix of ' + prefix1 + ' and a length of 16', function () {
        expect(detectNetwork((prefix1) + Math.pow(10, 11).toString())).to.equal('Switch');
        expect((prefix1 + Math.pow(10, 11).toString()).length).to.equal(16);
      });
      it('has a prefix of ' + prefix1+ ' and a length of 18', function () {
        expect(detectNetwork(prefix1 + Math.pow(10, 13).toString())).to.equal('Switch');
        expect((prefix1+ Math.pow(10, 13).toString()).length).to.equal(18);
      });
      it('has a prefix of ' + prefix1 + ' and a length of 19', function () {
        expect(detectNetwork(prefix1 + Math.pow(10, 14).toString())).to.equal('Switch');
        expect((prefix1 + Math.pow(10, 14).toString()).length).to.equal(19);
      });
    })(prefix1)
  }

  for (var j = 0; j < switchPrefix6.length; j++) {
    var prefix2 = switchPrefix6[j];
    (function(prefix2) {
      it('has a prefix of ' + prefix2 + ' and a length of 16', function () {
        expect(detectNetwork(prefix2 + Math.pow(10, 9).toString())).to.equal('Switch');
        expect((prefix2 + Math.pow(10, 9).toString()).length).to.equal(16);
      });
      it('has a prefix of ' + prefix2 + ' and a length of 18', function () {
        expect(detectNetwork(prefix2 + Math.pow(10, 11).toString())).to.equal('Switch');
        expect((prefix2 + Math.pow(10, 11).toString()).length).to.equal(18);
      });
      it('has a prefix of ' + prefix2 + ' and a length of 19', function () {
        expect(detectNetwork(prefix2 + Math.pow(10, 12).toString())).to.equal('Switch');
        expect((prefix2 + Math.pow(10, 12).toString()).length).to.equal(19);
      });
    })(prefix2)
  }
});


