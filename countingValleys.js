function countingValleys(steps, path) {
  let level = 0;
  let valleys = 0;
  let pathArr = path.split("");
  for (let i = 0; i < pathArr.length; i++) {
    if (pathArr[i] === "U") {
      level++;
      if (level == 0) {
        valleys++;
      }
    } else {
      level--;
    }
  }
  return valleys;
}

console.log(countingValleys(8, "UDDDUDUU"));
