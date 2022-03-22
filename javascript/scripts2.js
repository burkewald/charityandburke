// ------------
// Eye tracking
// ------------



const yuyueyeOnePupil = document.querySelector('.yuyu-eyeone-pupil');
const yuyueyeTwoPupil = document.querySelector('.yuyu-eyetwo-pupil');
const yuyueyeThreePupil = document.querySelector('.yuyu-eyethree-pupil');
const yuyueyeFourPupil = document.querySelector('.yuyu-eyefour-pupil');
const yuyueyeFivePupil = document.querySelector('.yuyu-eyefive-pupil');

const yuyueyeOneInner = document.querySelector('.yuyu-eyeone-white');
const yuyueyeTwoInner = document.querySelector('.yuyu-eyetwo-white');
const yuyueyeThreeInner = document.querySelector('.yuyu-eyethree-white');
const yuyueyeFourInner = document.querySelector('.yuyu-eyefour-white');
const yuyueyeFiveInner = document.querySelector('.yuyu-eyefive-white');

const yuyuinnerEyeWidth = yuyueyeTwoInner.getBoundingClientRect().width;
const yuyuinnerEyeHeight = yuyueyeTwoInner.getBoundingClientRect().height;
const yuyupupilWidth = yuyueyeTwoPupil.getBoundingClientRect().width;
const yuyupupilHeight = yuyueyeTwoPupil.getBoundingClientRect().height;
const yuyuxMovement = (yuyuinnerEyeWidth - yuyupupilWidth)/10;
const yuyuyMovement = (yuyuinnerEyeHeight - yuyupupilHeight)/10;


const yuyuinnerFourEyeWidth = yuyueyeFourInner.getBoundingClientRect().width;
const yuyuinnerFourEyeHeight = yuyueyeFourInner.getBoundingClientRect().height;
const yuyupupilFourWidth = yuyueyeFourPupil.getBoundingClientRect().width;
const yuyupupilFourHeight = yuyueyeFourPupil.getBoundingClientRect().height;
const yuyuFourxMovement = (yuyuinnerFourEyeWidth - yuyupupilFourWidth)/20;
const yuyuFouryMovement = (yuyuinnerFourEyeHeight - yuyupupilFourHeight)/20;




const bubseyeOnePupil = document.querySelector('.bubs-eyeone-pupil');
const bubseyeTwoPupil = document.querySelector('.bubs-eyetwo-pupil');
const bubseyeTwoInner = document.querySelector('.bubs-eyeone-white');
const bubsinnerEyeWidth = bubseyeTwoInner.getBoundingClientRect().width;
const bubsinnerEyeHeight = bubseyeTwoInner.getBoundingClientRect().height;
const bubspupilWidth = bubseyeTwoPupil.getBoundingClientRect().width;
const bubspupilHeight = bubseyeTwoPupil.getBoundingClientRect().height;
const bubsxMovement = (bubsinnerEyeWidth - bubspupilWidth)/20;
const bubsyMovement = (bubsinnerEyeHeight - bubspupilHeight)/20;







window.addEventListener('mousemove', updateEyePosition);

function updateEyePosition(event) {
  const yuyuposX = ((event.clientX / document.body.clientWidth) * 2 - 1) * yuyuxMovement;
  const yuyuposY = ((event.clientY / document.body.clientHeight) * 2 - 1) * yuyuyMovement;

  const yuyuFourposX = ((event.clientX / document.body.clientWidth) * 2 - 1) * yuyuFourxMovement;
  const yuyuFourposY = ((event.clientY / document.body.clientHeight) * 2 - 1) * yuyuFouryMovement;

  
  yuyueyeOnePupil.style.transform = `translate(${yuyuposX}px, ${yuyuposY}px)`;
  yuyueyeTwoPupil.style.transform = `translate(${yuyuposX}px, ${yuyuposY}px)`;
  yuyueyeThreePupil.style.transform = `translate(${yuyuposX}px, ${yuyuposY}px)`;
  yuyueyeFourPupil.style.transform = `translate(${yuyuFourposX}px, ${yuyuFourposY}px)`;
  yuyueyeFivePupil.style.transform = `translate(${yuyuFourposX}px, ${yuyuFourposY}px)`;



  const bubsposX = ((event.clientX / document.body.clientWidth) * 2 - 1) * bubsxMovement;
  const bubsposY = ((event.clientY / document.body.clientHeight) * 2 - 1) * bubsyMovement;

  
  bubseyeOnePupil.style.transform = `translate(${bubsposX}px, ${bubsposY}px)`;
  bubseyeTwoPupil.style.transform = `translate(${bubsposX}px, ${bubsposY}px)`;

}



