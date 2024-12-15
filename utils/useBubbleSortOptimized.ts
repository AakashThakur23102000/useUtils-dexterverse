export const useBubbleSortOptimized = (arr: (string | number)[]): (string | number)[] => {

  for (var i = 0; i < arr.length - 1; i++) {
    var noSwap = true;
    for (var j = 0; j < arr.length - (1 + i); j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }
    if (noSwap === true) {
      break;
    }
  }

  return arr;
}
