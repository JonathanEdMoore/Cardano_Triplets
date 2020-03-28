function processData(input) {
  //Enter your code here
  let q = parseInt(input.split('\n')[0]);
  let t = 1;
  let i = 1;
  let resultArr = [];
  while (t <= q) {
    let n = 0;
    let k = 0;
    let a = 2 + 3 * k;
    let b = 1;
    let c = 1;
    while (a <= parseInt(input.split('\n')[i]) - b - c) {
      while (b <= parseInt(input.split('\n')[i]) - a - c) {
        while (c <= parseInt(input.split('\n')[i]) - a - b) {
          if ((Math.pow(k+1,2))*((8*k)+5) === (Math.pow(b,2))*c) {
            n++;
            c = parseInt(input.split('\n')[i]);
          }
          else if (Number.isInteger(((Math.pow(k+1,2))*((8*k)+5))/(Math.pow(b,2)))){
            c = ((Math.pow(k+1,2))*((8*k)+5))/(Math.pow(b,2));
          }
          else{
            c = parseInt(input.split('\n')[i])
          }        
        }
        b++;
        c = 1;
      }
      k++;
      a = 2 + 3 * k;
      b = 1;
      c = 1;
    }
    resultArr.push(n);
    t++;
    i++;
  }
  for (let i = 0; i < resultArr.length; i++) {
    console.log(resultArr[i]);
  }
}

processData("2\n8\n1000");