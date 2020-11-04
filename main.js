// gets the current date from the computer
const today = new Date();



function checkForFriday(day) {
  if(day.getDay() === 3){
    document.querySelecotor('#answer').innerHTML = 'YES!';

  }else{
    document.querySelector('#answer').innerHTML = 'No :(';
  }
}

checkForFriday(today);
