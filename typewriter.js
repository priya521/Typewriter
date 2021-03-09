const sentence =" hello there form lighthouse labs";
let delay =0;
for(const char of sentence){
  //console.log(char);
 // process.stdout.write(char);
setTimeout(() =>{

  process.stdout.write(char);

},delay)

delay += 50;
}

setTimeout(() => {
  process.stdout.write('\n'); 
}, sentence.length * 50);