// Click / Location
// We want to redirect the user to https://getbootstrap.com when they clicks on this button.

const redirectBtn = document.getElementById('redirect');
console.log(redirectBtn);
redirectBtn.addEventListener('click', () => {
  // location.href will keep the current page in history when redirected
  // to the new one
  window.location.href = 'https://getbootstrap.com';

  // location.replace() will redirect to the new page but will not keep
  // the current one in history
  // window.location.replace('https://getbootstrap.com')
});
