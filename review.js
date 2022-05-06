const array1 = [2, 4]
const array2 = [16, 32, 96]

function getTotalX(a, b) {
  // Write your code here
  // i %[a[x]] = 0
  // b[y]%/[a[x]] 0
  // list all integer betwen 2 + b[0]
  let allInt = {}
  let passedInt = {}
  for (let i = 2; i <= b[0]; i++) {
      for(let x= 0; x < a.length; x++) {
          if (i % a[x] === 0) {
              allInt[i]? allInt[i]++ : allInt[i] = 1
          }
      }
  }

  let sharedInt = Object.entries(allInt).filter(x => x[1] === a.length).map(x => x[0]).flat()
  for (let i = 0; i < sharedInt.length; i++) {
      for (let x = 0; x < b.length; x++) {
          if(b[x] % sharedInt[i] === 0) {
              passedInt[sharedInt[i]] ? passedInt[sharedInt[i]]++ : passedInt[sharedInt[i]] = 1
          }
      }
  }

  let finalSet = Object.entries(passedInt).filter(x => x[1] === b.length).map(x => x[0]).flat()
  return finalSet.length
  // return [...new Set(passedInt)].length
}

console.log(getTotalX(array1, array2))