const nameInput = document.getElementById('name-input');
const changeButton = document.getElementById('name-change-button');
const nameDisplay = document.getElementById('name-display');

// console.log(nameDisplay);
// console.log(nameInput);
// console.log(changeButton);

changeButton.addEventListener('click', () => {
    nameDisplay.textContent = nameInput.value;
    nameInput.value='';
});