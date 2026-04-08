const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

let pictures = ['https://images.adsttc.com/media/images/5f5f/c524/63c0/178c/4900/09a8/large_jpg/The_Lake_Cabin_High_Res_(59).jpg?1600111853', 'https://www.mosquitomagnet.com/media/Articles/Mosquito-Magnet/Dont-Fear-the-Fire.jpg', 'https://www.travelwisconsin.com/uploads/blog/1b/1bef918e-c7a9-4d28-be4f-dd5fb6cbabbe-023-couple-fishes-on-a-pier-at-treeland-resort-in-hayward.jpg'];

img.src = pictures[0];

let position = 0;

const moveRight = () => {
  if (position >= pictures.length - 1 ) {
    position = 0
    img.src = pictures[position];
    return;
  }
  img.src = pictures[position + 1];
  position++;
}

const moveLeft = () => {
  if (position < 1) {
    position = pictures.length - 1;
    img.src = pictures[position];
    return;
  }
  img.src = pictures[position - 1];
  position--;
}

rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeft);