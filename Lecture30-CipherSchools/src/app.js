const addNumber=(...args)=>{
  let sum=0;
  args.forEach((val)=>{
    sum+=val;
  })
  return sum;
}

const ans=addNumber(10,20,0,30,40);
console.log(ans)