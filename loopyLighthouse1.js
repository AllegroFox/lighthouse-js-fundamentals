var count = 1;

while (count <= 100) {
  if (count % 3 === 0 && count % 4 === 0) {
    console.log("LoopyLighthouse");
    count++;
  } else if (count % 3 === 0){
    console.log("Loopy");
    count++;
  } else if (count % 4 === 0){
    console.log("Lighthouse");
    count++;
  } else {
    console.log(count);
    count++;
  }

}

// Fizzbuzz in Ruby

//if (num % 3 == 0) & (num % 5 == 0)
//    puts "fizzbuzz"
// elsif num % 3 == 0
//   puts "fizz"
//  elsif num % 5 == 0
//    puts "buzz"
//  else
//    puts num