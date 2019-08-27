const _cache = [0, 1];

const limit = 1000000;
let maxChain = 0;
let answer;


function Collatz(num, cache = _cache) {
  const subSequences = [];
  let count = 0;
  while(true) {
    if (cache[num]) {
      count += cache[num];
      break;
    } else if (num < limit) {
      subSequences.push({
        num,
        position: count,
      });
    }
    if (num % 2 === 0) {
      num /= 2;
      count += 1;
    } else {
      num = (3 * num + 1) / 2;
      count += 2;
    }
  }
  count += 1;
  for (let entry of subSequences) {
    let {num, position} = entry;
    cache[num] = count - position;
  }
  return count; 
}

for (let i = Math.floor(limit / 2); i < limit; i++) {
  const chain = Collatz(i);
  if (chain > maxChain) {
    maxChain = chain;
    answer = i;
  }
}

console.log(answer);
