function timeChecker(string){
    let splitString = string.split(':')
    let hours = splitString[0]
    let minutes = splitString[1]
  
    if (hours>12){
      console.log(false) 
    }
    else if (minutes>60){
      console.log(false)  
    }else{
      console.log(true) 
    }
  }
  
  let time1 = '12:90'
  
  let time2 = '25:50'
  
  let time3 = '10:40'
  
  let time4 = '01:03'
  
  
  timeChecker(time1)
  timeChecker(time2)
  timeChecker(time3)
  timeChecker(time4)