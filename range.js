function range(start, end, step) {
  var newArray = []

  if (step <= 0) {
    return newArray;
  } else {
    for (var i = start; i <= end; i = i + step) {
      newArray.push(i);
    }
    return newArray;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
