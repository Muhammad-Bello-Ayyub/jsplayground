/* eslint-disable */

const wes = document.querySelector('.wes');

wes.addEventListener('click', function(event) {
    // console.log('YOU CLICKED IT');
    const shouldChangePage = confirm(
        'This website might be malicious!, do you wish to proceed?'
    );
    if (!shouldChangePage) {
      event.preventDefault();
  }
});

// Selecting using name, and listening to submit
const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(event) {
    // event.preventDefault();
    // console.dir(event);
    // console.log(event.currentTarget.name.value);
    // console.log(event.currentTarget.email.value);
    // console.log(event.currentTarget.agree.checked);
      const name = event.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('Sorry bro');
    event.preventDefault();
  }
});


function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}

// 'keyup'
// 'keydown'
// 'focus'
// 'blur'
signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);

// Accessibility, Enter with keyboard
// avoid using things thats not accesible on the keyboard
const photo = document.querySelector('.photo');

function handlePhotoClick(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    console.log('You clicked the photo');
  }
//   console.log('You clicked the photo');
}

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);