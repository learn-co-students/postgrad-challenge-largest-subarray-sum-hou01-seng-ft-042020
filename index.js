const largestSubarraySum = (array) => {
  let max = array[0],
    currentMax = array[0];
  for (let i = 1; i < array.length; i++) {
    if (max < 0 && array[i] < 0) {
      max = 0;
    } else {
      currentMax = Math.max(currentMax + array[i], array[i]);
      max = Math.max(currentMax, max);
    }
  }
  return max;
};
