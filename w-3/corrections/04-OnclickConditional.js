// Click / Location
// We want to redirect the user to <strong>https://getbootstrap.com</strong>,
// only when they clicks on the button with the
// <strong>redirect</strong> class.

const redirectBtn = document.querySelector('.redirect');
const noRedirectBtn = document.querySelector('.not-redirect');

redirectBtn.addEventListener('click', () => {
  // location.href will keep the current page in history when redirected
  // to the new one
  window.location.href = 'https://getbootstrap.com';

  // location.replace() will redirect to the new page but will not keep
  // the current one in history
  // window.location.replace('https://getbootstrap.com')
});

noRedirectBtn.addEventListener('click', () => {
  console.log('No redirect button!');
});
