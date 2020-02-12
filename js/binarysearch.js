// let num = [8, 9, 34, 12, 44, 1, 20, 65, 87, 11];

let alp = ["uvw", "xyz", "ghi", "jkl", "opq", "mno", "rst", "abc", "def"];

let binsrch = function(unsortedarr, val) {
  let spoint = 0,
      epoint = unsortedarr.length - 1;
  let arr = unsortedarr.sort();

  let mpoint = function(start, end) {
    return Math.floor((start + end) / 2);
  }
  
  var mid = mpoint(spoint, epoint);
  
  while (spoint <= epoint) {
    console.log(arr[mid] + "<===>" + val);
    if (arr[mid] === val) {
      return "Value:" + arr[mid] + " --> found in array index:" + arr.indexOf(val);
    }
    if (arr[mid] > val) {
      epoint = mid - 1;
      mid = mpoint(spoint, epoint);
      console.log("less=>" + epoint +"<===>"+ mid +"<===>"+ arr[mid]);
    }
    if (arr[mid] < val) {
      spoint = mid + 1;
      mid = mpoint(spoint, epoint);
      console.log("more=>" + spoint +"<===>"+ mid +"<===>"+ arr[mid]);
    }
  }
  return "Not found in array";
}

let srch = binsrch(alp, "xyz");
console.log(srch);
