
function forLoop(arr){
  for(let i=0; i<26; i++){
    if (i === 1){
      arr[i] = "I am 1 strange loop.";
    }
    else{
      arr[i] = `I am ${i} strange loops.`;
    }
  }
  return arr;
}
