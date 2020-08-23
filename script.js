
setInterval(changeImage, 60000);
function changeImage(){
  if(i < images.length){
    bgClock.style.backgroundImage = "url('" + images[i] + "')";
    i++;
  }
  if(i==images.length){
    i = 0;
  }
  let audio = new Audio('crash.mp3');
  audio.play();
};


setInterval(runClock, 1000);

const hour_hand = document.getElementById('hour_hand');
const minute_hand = document.getElementById('minute_hand');
const second_hand = document.getElementById('second_hand');

var bgClock = document.getElementById('clock');

let images = new Array(
  'images/image1.jpg',
  'images/image2.jpg',
  'images/image3.jpg',
  'images/image4.jpg',
  'images/image5.jpg'
)

let i = 0;

function runClock() {
  const currentDate = new Date();
  const hourRatio = currentDate.getHours() / 12;
  const minuteRatio = (currentDate.getMinutes() / 60);
  const secondRatio = (currentDate.getSeconds() / 60);

  moveHands(second_hand, secondRatio);
  moveHands(minute_hand, minuteRatio);
  moveHands(hour_hand, hourRatio);

};

function moveHands(element, moveRatio) {
  element.style.setProperty('--rotation', moveRatio * 360);
}

runClock();
