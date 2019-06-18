function addThem(x){
    let a = x.split('').map(Number)
  
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(a)
    console.log(a.reduce(reducer))
  }
  