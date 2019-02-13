export function isPrime(n) {
  if (typeof n !== 'number' || !Number.isInteger(n)) {
    return false;
  }

  if (n < 2) {
    return false;
  }

  if (n === 2) {
    return true;
  } else if (n % 2 === 0) {
    return false;
  }

  const squareRoot = Math.sqrt(n);
  for (let i = 3; i < squareRoot; i += 2) {
    if (n / i === 0) {
      return false;
    }
  }
  return true;
}

const C = function cons(argu) {
};
C.prototype.sayHello = function() {
  console.log('hello rock');
};

const c = new C(1);
console.log(c);
