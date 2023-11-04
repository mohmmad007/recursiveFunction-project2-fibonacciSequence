function sum(a) {
  } if (a < 2) {
    return a;
  } else {
    return (a = sum(a - 1) + sum(a - 2));
  }
}
console.log(sum(7));
