// ------------
// Eye tracking
// ------------



const eyeRightPupil = document.querySelector('.yuyu-eyeone-pupil');
const eyeLeftPupil = document.querySelector('.yuyu-eyeone-pupil');
const eyeLeftInner = document.querySelector('.yuyu-eyeone-white');
const innerEyeWidth = eyeLeftInner.getBoundingClientRect().width;
const innerEyeHeight = eyeLeftInner.getBoundingClientRect().height;
const pupilWidth = eyeLeftPupil.getBoundingClientRect().width;
const pupilHeight = eyeLeftPupil.getBoundingClientRect().height;
const xMovement = (innerEyeWidth - pupilWidth)/10;
const yMovement = (innerEyeHeight - pupilHeight)/10;

window.addEventListener('mousemove', updateEyePosition);

function updateEyePosition(event) {
  const posX = ((event.clientX / document.body.clientWidth) * 2 - 1) * xMovement;
  const posY = ((event.clientY / document.body.clientHeight) * 2 - 1) * yMovement;
  
  eyeLeftPupil.style.transform = `translate(${posX}px, ${posY}px)`;
  eyeRightPupil.style.transform = `translate(${posX}px, ${posY}px)`;
}





