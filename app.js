const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const Header = document.getElementsByTagName('h1')[0];
const colorBtn = document.getElementById('colorBtn');
const myParagraph = document.querySelector('p.description');
const colorInput = document.querySelector('#colorInput');
const addItemInput = document.querySelector('#addItemInput');
const addItemBtn = document.querySelector('#addItemBtn');
const removeItemBtn = document.querySelector('#removeItemBtn');
const listItems = document.getElementsByTagName('li');

myParagraph.title = 'A list description';
// loop through each item in listItems
for (let i = 0; i < listItems.length; i += 1) {
  // event listens for mouse over and transforms text to capitals
  listItems[i].addEventListener('mouseover', () => {
    listItems[i].textContent = listItems[i].textContent.toUpperCase();
  });

  // event listens for mouse out and transforms text back to lowercase
  listItems[i].addEventListener('mouseout', () => {
    listItems[i].textContent = listItems[i].textContent.toLowerCase();
  });
}

// change the heading text color.
colorBtn.addEventListener('click', () => {
  Header.style.color = colorInput.value;
  Header.style.fontSize = '50px';
  colorInput.style.width = '200px';
});

// add an item to the ul and appendChild to the dom.
addItemBtn.addEventListener('click', () => {
  // only one ul in the DOM. Will need to change if there is another ul added later.
  let ul = document.getElementsByTagName('ul')[0];
  // create a new li element
  let li = document.createElement('li');
  // set the text content of the new li to the value from the addItemInput box.
  li.textContent = addItemInput.value;
  // append the li to the dom tree to display it in the ul list.
  ul.appendChild(li);
  // clear the text from the addItemInput by setting it to an empty string.
  addItemInput.value = '';
});

// remove last item from the list.
removeItemBtn.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  // target the last child element.
  let li = document.querySelector('li:last-child');
  // remove the last child element from the dom.
  ul.removeChild(li);
});

// toggle the list.
toggleList.addEventListener('click', () => {
  if (listDiv.style.display === 'none') {
    toggleList.textContent = 'Hide List';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show List';
    listDiv.style.display = 'none';
  }
});

// set the text color for all list items to purple.
const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i += 1) {
  myList[i].style.color = 'purple';
}

// set the text color for all list items with the class .notPurple to red.
const notPurple = document.querySelectorAll('.notPurple');

for (let i = 0; i < notPurple.length; i += 1) {
  notPurple[i].style.color = 'red';
}

// highlight list items evenly.
const evens = document.querySelectorAll('li:nth-child(even)');

for (let i = 0; i < evens.length; i += 1) {
  evens[i].style.backgroundColor = 'lightgrey';
}
