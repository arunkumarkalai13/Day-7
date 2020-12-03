let sampleinput = [
    {  name:"John",  age:26
    },
    {  name:"siva", age:27}
   ];
    let beaddobject = (c) => {
       let keydata = Object.keys(c);
    for (let i=0;i<sampleinput.length;i++){
        sampleinput[i][keydata]= c.Country;
      }
     return sampleinput;
 }
console.log(beaddobject({Country:"india"}));
