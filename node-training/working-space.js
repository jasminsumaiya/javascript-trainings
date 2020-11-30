



let transObject = {
  "one": "1",
  "two": "2",
  "three": "3"
};

function myTranceFunction(trsObj){
  let solnObj = {};
  for(var key in trsObj){
    let value = trsObj[key];
    console.log(value);
    solnObj[value] = key;
  }
  
  return solnObj;
}

let result = myTranceFunction(transObject);
console.log(result);