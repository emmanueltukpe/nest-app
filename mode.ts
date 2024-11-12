import { log } from 'console';

function findMode(array: Array<number>): Array<number> {
  let target = 1;
  const object = {};
  const mode = new Array<number>();
  for (let i = 0; i < array.length; i++) {
    if (object[array[i]]) {
      object[array[i]]++;
      if (object[array[i]] > target) {
        target = object[array[i]];
      }
    } else {
      object[array[i]] = 1;
    }
    console.log(object);
  }
  for (const key in object) {
    if (object[key] === target) {
      mode.push(parseInt(key));
    }
  }
  return mode;
}

console.log(findMode([1, 2, 3, 4, 5]));
