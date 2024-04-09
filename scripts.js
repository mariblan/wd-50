const dropdown = document.getElementById('dropdown');
const dropdownContainer = document.getElementById('dropdown-container');

const showDropdown = (e) => {
  e.stopPropagation();
  dropdownContainer.classList.remove('hidden');
};
const hideDropdown = (e) => {
  e.stopPropagation();
  dropdownContainer.classList.add('hidden');
};
dropdown.addEventListener('mouseover', showDropdown);
dropdownContainer.addEventListener('mouseleave', hideDropdown);
