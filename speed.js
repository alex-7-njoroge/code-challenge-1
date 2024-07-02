//speed Detector
//If speed is 70-okay ,if speed exceeds 5km/s=1 demerit point
//speed is in km/s

let demeritPoints = 0
let overtopSpeed = 5
let speedLimit = 70

let speed = 80

function speedCheck() {
  if (speed>speedLimit) {
    demeritPoints = Math.round( (speed-speedLimit) /overtopSpeed)
    console.log('Your demerit points are :'+demeritPoints)
  
     if(demeritPoints>12) console.log('LICENSE SUSPENDED')
  
 
    }else{
      console.log('OK')
    }
}
 speedCheck()



