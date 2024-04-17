function sum(a) {
  if (a == 2) {
    return 1;
  } else if (a <= 1) {
    return 1;
  } else {
    return (sum(a - 1) + sum(a - 2));
  }
}
console.log(sum(7));
