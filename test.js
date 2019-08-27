const limit = 1000000;
let maxChain = 0;
let answer;

function Collatz(num) {
  let count = 0;
  while(num != 1) {
    if (num % 2 === 0) {
      num /= 2;
      count += 1;
    } else {
      num = 3 * num + 1;
      count += 1;
    }
  }
  count += 1;
  return count; 
}

for (let i = 1; i < limit; i++) {
  const chain = Collatz(i);
  if (chain > maxChain) {
    maxChain = chain;
    answer = i;
  }
}

console.log(answer);
