const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const listUl = listDiv.querySelector('ul');
const list = listUl.children;
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;
const Header = document.getElementsByTagName('h1')[0];
const HeadingTextInput = document.getElementById('headingTextInput');
const HeadingTextBtn = document.getElementById('headingTextBtn');
const colorBtn = document.getElementById('colorBtn');
const myParagraph = document.querySelector('p.description');
const colorInput = document.querySelector('#colorInput');
const addItemInput = document.querySelector('#addItemInput');
const addItemBtn = document.querySelector('#addItemBtn');

myParagraph.title = 'A list description';

// create buttons, classes and text for all list items
function attachListItemBtns (li) {
  let up = document.createElement('button');
  let down = document.createElement('button');
  let remove = document.createElement('button');
  // props for up btn
  up.textContent = 'Move Item Up';
  up.className = 'up';
  li.appendChild(up);
  // props for down btn
  down.textContent = 'Move Item Down';
  down.className = 'down';
  li.appendChild(down);
  // props for remove btn
  remove.textContent = 'Remove Item';
  remove.className = 'remove';
  li.appendChild(remove);
}

for (let i = 0; i < list.length; i += 1) {
  attachListItemBtns(list[i]);
}

listUl.addEventListener('click', (event) => {
  // only target events with BUTTON tag.
  if (event.target.tagName === 'BUTTON') {
    if (event.target.className === 'remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      // remove the parent li from the ul.
      ul.removeChild(li);
    }
    if (event.target.className === 'up') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      // move target list item up
      let prevLi = li.previousElementSibling;
      // if the element is already a first child, then the previousElement Sibling will be null.
      // only works if there is a previous sibling.
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }
    if (event.target.className === 'down') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      // move target list item down
      let nextLi = li.nextElementSibling;
      // only move down if not the last child of ul.
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    }
  }
});
// change the heading text color.
colorBtn.addEventListener('click', () => {
  Header.style.color = colorInput.value;
  Header.style.fontSize = '50px';
  colorInput.style.width = '200px';
});
// Change the header text
HeadingTextBtn.addEventListener('click', () => {
  Header.textContent = HeadingTextInput.value;
});

// add an item to the ul and appendChild to the dom.
addItemBtn.addEventListener('click', () => {
  // only one ul in the DOM. Will need to change if there is another ul added later.
  let ul = document.getElementsByTagName('ul')[0];
  // create a new li element
  let li = document.createElement('li');
  // set the text content of the new li to the value from the addItemInput box.
  li.textContent = addItemInput.value;
  // call function attachListItemBtns to append buttons to ul.
  attachListItemBtns(li);
  // append the li to the dom tree to display it in the ul list.
  ul.appendChild(li);
  // clear the text from the addItemInput by setting it to an empty string.
  addItemInput.value = '';
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
