// Get the hour and minute hands
var hourHand = document.querySelector('.hour-hand');
var minuteHand = document.querySelector('.minute-hand');

// Calculate the angle between the hour and minute hand
function calculateAngle() {
  // Get the current time
  var date = new Date();
  var hour = date.getHours() % 12;
  var minute = date.getMinutes();

  // Calculate the angle between the hour and minute hand
  var hourAngle = (hour * 30) + (minute / 2);
  var minuteAngle = minute * 6;
  var angle = Math.abs(hourAngle - minuteAngle);

  // Set the angle text
  var angleText = document.getElementById('angle');
  angleText.innerHTML = angle.toFixed(2);
  
  // Rotate the hands
  hourHand.style.transform = 'rotate(' + hourAngle + 'deg)';
  minuteHand.style.transform = 'rotate(' + minuteAngle + 'deg)';
}

// Update the angle every second
setInterval(calculateAngle, 1000);
