// ------------
// Charity Eye tracking
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
const yuyuxMovement = (yuyuinnerEyeWidth - yuyupupilWidth)/12;
const yuyuyMovement = (yuyuinnerEyeHeight - yuyupupilHeight)/12;


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

const kaieyeOnePupil = document.querySelector('.kai-eyeone-pupil');
const kaieyeTwoPupil = document.querySelector('.kai-eyetwo-pupil');
const kaieyeTwoInner = document.querySelector('.kai-eyeone-white');
const kaiinnerEyeWidth = kaieyeTwoInner.getBoundingClientRect().width;
const kaiinnerEyeHeight = kaieyeTwoInner.getBoundingClientRect().height;
const kaipupilWidth = kaieyeTwoPupil.getBoundingClientRect().width;
const kaipupilHeight = kaieyeTwoPupil.getBoundingClientRect().height;
const kaixMovement = (kaiinnerEyeWidth - kaipupilWidth)/22;
const kaiyMovement = (kaiinnerEyeHeight - kaipupilHeight)/22;





// ------------
// Burke Eye tracking
// ------------

const basileyeOnePupil = document.querySelector('.basil-eyeone-pupil');
const basileyeTwoPupil = document.querySelector('.basil-eyetwo-pupil');
const basileyeTwoInner = document.querySelector('.basil-eyetwo-white');
const basilinnerEyeWidth = basileyeTwoInner.getBoundingClientRect().width;
const basilinnerEyeHeight = basileyeTwoInner.getBoundingClientRect().height;
const basilpupilWidth = basileyeTwoPupil.getBoundingClientRect().width;
const basilpupilHeight = basileyeTwoPupil.getBoundingClientRect().height;
const basilxMovement = (basilinnerEyeWidth - basilpupilWidth)/20;
const basilyMovement = (basilinnerEyeHeight - basilpupilHeight)/20;

const nachoeyeOnePupil = document.querySelector('.nacho-eyeone-pupil');
const nachoeyeTwoPupil = document.querySelector('.nacho-eyetwo-pupil');
const nachoeyeTwoInner = document.querySelector('.nacho-eyetwo-white');
const nachoinnerEyeWidth = nachoeyeTwoInner.getBoundingClientRect().width;
const nachoinnerEyeHeight = nachoeyeTwoInner.getBoundingClientRect().height;
const nachopupilWidth = nachoeyeTwoPupil.getBoundingClientRect().width;
const nachopupilHeight = nachoeyeTwoPupil.getBoundingClientRect().height;
const nachoxMovement = (nachoinnerEyeWidth - nachopupilWidth)/10;
const nachoyMovement = (nachoinnerEyeHeight - nachopupilHeight)/10;

const ronaldeyeOnePupil = document.querySelector('.ronald-eyeone-pupil');
const ronaldeyeTwoPupil = document.querySelector('.ronald-eyetwo-pupil');
const ronaldeyeTwoInner = document.querySelector('.ronald-eyetwo-white');
const ronaldinnerEyeWidth = ronaldeyeTwoInner.getBoundingClientRect().width;
const ronaldinnerEyeHeight = ronaldeyeTwoInner.getBoundingClientRect().height;
const ronaldpupilWidth = ronaldeyeTwoPupil.getBoundingClientRect().width;
const ronaldpupilHeight = ronaldeyeTwoPupil.getBoundingClientRect().height;
const ronaldxMovement = (ronaldinnerEyeWidth - ronaldpupilWidth)/20;
const ronaldyMovement = (ronaldinnerEyeHeight - ronaldpupilHeight)/20;

const squirteyeOnePupil = document.querySelector('.squirt-eyeone-pupil');
const squirteyeTwoPupil = document.querySelector('.squirt-eyetwo-pupil');
const squirteyeTwoInner = document.querySelector('.squirt-eyetwo-white');
const squirtinnerEyeWidth = squirteyeTwoInner.getBoundingClientRect().width;
const squirtinnerEyeHeight = squirteyeTwoInner.getBoundingClientRect().height;
const squirtpupilWidth = squirteyeTwoPupil.getBoundingClientRect().width;
const squirtpupilHeight = squirteyeTwoPupil.getBoundingClientRect().height;
const squirtxMovement = (squirtinnerEyeWidth - squirtpupilWidth)/20;
const squirtyMovement = (squirtinnerEyeHeight - squirtpupilHeight)/20;






window.addEventListener('mousemove', updateEyePosition);

function updateEyePosition(event) {
  const yuyuposX = ((event.clientX / document.body.clientWidth) * 2 - 1) * yuyuxMovement;
  const yuyuposY = ((event.clientY / document.body.clientHeight) * 2 - 1) * yuyuyMovement;

  const yuyuFourposX = ((event.clientX / document.body.clientWidth) * 2 - 1) * yuyuFourxMovement;
  const yuyuFourposY = ((event.clientY / document.body.clientHeight) * 2 - 1) * yuyuFouryMovement;

  
  yuyueyeOnePupil.style.transform = `translate(${yuyuposX}px, ${yuyuposY}px)`;
  yuyueyeTwoPupil.style.transform = `translate(${yuyuFourposX}px, ${yuyuFourposY}px)`;
  yuyueyeThreePupil.style.transform = `translate(${yuyuFourposX}px, ${yuyuFourposY}px)`;
  yuyueyeFourPupil.style.transform = `translate(${yuyuFourposX}px, ${yuyuFourposY}px)`;
  yuyueyeFivePupil.style.transform = `translate(${yuyuFourposX}px, ${yuyuFourposY}px)`;



  const bubsposX = ((event.clientX / document.body.clientWidth) * 2 - 1) * bubsxMovement;
  const bubsposY = ((event.clientY / document.body.clientHeight) * 2 - 1) * bubsyMovement;

  
  bubseyeOnePupil.style.transform = `translate(${bubsposX}px, ${bubsposY}px)`;
  bubseyeTwoPupil.style.transform = `translate(${bubsposX}px, ${bubsposY}px)`;

  const kaiposX = ((event.clientX / document.body.clientWidth) * 2 - 1) * kaixMovement;
  const kaiposY = ((event.clientY / document.body.clientHeight) * 1.5 - 1) * kaiyMovement;

  
  kaieyeOnePupil.style.transform = `translate(${kaiposX}px, ${kaiposY}px)`;
  kaieyeTwoPupil.style.transform = `translate(${kaiposX}px, ${kaiposY}px)`;






// ------------
// Burke Eye tracking
// ------------

  const basilposX = ((event.clientX / document.body.clientWidth) * 2 - 1) * basilxMovement;
  const basilposY = ((event.clientY / document.body.clientHeight) * 2 - 1) * basilyMovement;


  basileyeTwoPupil.style.transform = `translate(${basilposX}px, ${basilposY}px)`;
  basileyeOnePupil.style.transform = `translate(${basilposX}px, ${basilposY}px)`;


  const nachoposX = ((event.clientX / document.body.clientWidth) * 2 - 1) * nachoxMovement;
  const nachoposY = ((event.clientY / document.body.clientHeight) * 2 - 1) * nachoyMovement;


  nachoeyeTwoPupil.style.transform = `translate(${nachoposX}px, ${nachoposY}px)`;
  nachoeyeOnePupil.style.transform = `translate(${nachoposX}px, ${nachoposY}px)`;


  const ronaldposX = ((event.clientX / document.body.clientWidth) * 2 - 1) * ronaldxMovement;
  const ronaldposY = ((event.clientY / document.body.clientHeight) * 2 - 1) * ronaldyMovement;


  ronaldeyeTwoPupil.style.transform = `translate(${ronaldposX}px, ${ronaldposY}px)`;
  ronaldeyeOnePupil.style.transform = `translate(${ronaldposX}px, ${ronaldposY}px)`;


  const squirtposX = ((event.clientX / document.body.clientWidth) * 2 - 1) * squirtxMovement;
  const squirtposY = ((event.clientY / document.body.clientHeight) * 2 - 1) * squirtyMovement;


  squirteyeTwoPupil.style.transform = `translate(${squirtposY}px, ${squirtposX}px)`;
  squirteyeOnePupil.style.transform = `translate(${squirtposY}px, ${squirtposX}px)`;

}



