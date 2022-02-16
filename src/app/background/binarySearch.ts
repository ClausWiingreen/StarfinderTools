export function binarySearch<Type>(collection: Array<Type>, key: number, extractKey: (t: Type) => number): Type {
  let left = 0;
  let right = collection.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let k = extractKey(collection[mid]);
    if (k < key) {
      left = mid + 1;
    } else if (k > key) {
      right = mid - 1;
    } else {
      return collection[mid];
    }
  }
  return collection[right];
}
