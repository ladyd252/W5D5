var readline = require('readline');
var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function addNumbers(sum, numsLeft, completionCallback){
  if(numsLeft>0){
    reader.question("Enter a number:", function(numString){
      var num = parseInt(numString);
      sum += num;
      console.log(sum);
      numsLeft--;
      addNumbers(sum, numsLeft, completionCallback);
    })
  }
  else{
    completionCallback(sum);
    reader.close();
  }
};

addNumbers(0, 10, function(sum){
  console.log("All done. Sum is: " + sum)
})
