// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:'aabcccdeeef' ->b
// s = "leetcode"
// return 0.
// s = "loveleetcode"
// return 2.

const firstUniqChar = (s) => {
  const hmap = new Map();
  for (let i = 0; i < s.length; i++) {
    let curCh = s.charAt(i);
    if (hmap.has(curCh)) {
      let state = hmap.get(curCh);
      let c = { ...state };
      c.count++;
      hmap.set(curCh, c);
    } else {
      hmap.set(curCh, { count: 1, index: i });
    }
  }

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    if (hmap.get(c).count === 1) return hmap.get(c).index;
  }
  return -1;
};

console.log(firstUniqChar("aabcccdeeef"));
console.log(firstUniqChar(""));
console.log(firstUniqChar("cc"));
console.log(firstUniqChar("z"));
