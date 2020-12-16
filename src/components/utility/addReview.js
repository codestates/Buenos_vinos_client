export default function AddReview(arr, num) {
  let chunkedDatas = [];
  for (let i = 1; i <= arr.length; i++) {
    chunkedDatas.push(arr[i - 1]);
    if (i % num === 0) {
      chunkedDatas = chunkedDatas;
      break;
    }
  }
  return chunkedDatas;
}
