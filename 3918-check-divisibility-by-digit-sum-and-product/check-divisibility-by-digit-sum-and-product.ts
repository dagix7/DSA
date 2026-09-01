function checkDivisibility(n: number): boolean {

    const ss=  n.toString() 

    let digits : number []=[];
    for(let s of ss){

        digits.push(+s);
    }; 
    
    var digitsSum=0;
    
    digits.forEach((digit)=>{digitsSum+=digit;});
    
    var digitsProduct=1;
    
    digits.forEach((digit)=>{digitsProduct*=digit;});
 
 

   const sum=digitsSum + digitsProduct;

    return n%sum===0;

};