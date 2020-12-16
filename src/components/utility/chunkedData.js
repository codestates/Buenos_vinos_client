export default function chunkedDatas(wines, num) {
  const chunkedWines = [];
  let tempWines = [];
  for (let i = 1; i < wines.length + 1; i++) {
    tempWines.push(wines[i - 1]);
    if (i % num === 0) {
      chunkedWines.push(tempWines);
      tempWines = [];
    }
  }
  if (tempWines.length !== 0) {
    chunkedWines.push(tempWines);
  }
  return chunkedWines;
}
