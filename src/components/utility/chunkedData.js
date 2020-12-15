export default function chunkedData(arr, num) {
  let chunckedData = [];
  let temp = [];
  for (let i = 1; i <= arr.length; i++) {
    temp.push(arr[i - 1]);
    if (i % num === 0) {
      chunckedData = temp;
      break;
    }
  }
  return chunckedData;
}
