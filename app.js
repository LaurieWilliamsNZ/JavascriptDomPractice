//changer header
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const Header = document.getElementsByTagName('h1')[0];
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const myParagraph = document.querySelector('p.description');
const input = document.querySelector('input');

myButton.addEventListener('click', () => {
  Header.style.color = myTextInput.value;
  Header.style.fontSize = '50px';
  myTextInput.style.width = '200px';
});

toggleList.addEventListener('click', () => {
  if (listDiv.style.display === 'none') {
    toggleList.textContent = 'Hide List';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show List';
    listDiv.style.display = 'none';
  }
});

//change list

const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i += 1) {
  myList[i].style.color = 'purple';
}

const notPurple = document.querySelectorAll('.notPurple');

for (let i = 0; i < notPurple.length; i += 1) {
  notPurple[i].style.color = 'red';
}

const evens = document.querySelectorAll('li:nth-child(even)');

for (let i = 0; i < evens.length; i += 1) {
  evens[i].style.backgroundColor = 'lightgrey';
}


