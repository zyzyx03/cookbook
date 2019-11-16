/////////////////////////////////////
/* Examining the Document Object  */

// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script) {
//   console.log(script.getAttribute('src'));
// });

// console.log(val);



////////////////////////
/*Traversing The DOM */
// let val;

// const list = document.querySelector("ul.collection");
// const listItem = document.querySelector("li.collection-item:first-child");

// val = listItem;
// val = list;

// //Get Child Nodes
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[0].nodeType;

// // 1 - Element
// // 2 - Attribute (deprecated)
// // 3 - Text node
// // 8 - Comment
// // 9 - Document itself
// // 10 - Doctype

// // Get Children element nodes
// val = list.children;
// val = list.children[1];
// list.children[1].textContent = 'Hello';

// // Children of children
// list.children[3].children[0].id = "test-link";
// val = list.children[3].children;

// // First Child
// val = list.firstChild;
// val = list.firstElementChild;

// // Last child
// val = list.lastChild;
// val = list.lastElementChild;

// // Count child elements
// val = list.childElementCount;

// // Get parent node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// // Get next siblings
// val = listItem.nextSibling;
// val = listItem.nextElementSibling.nextElementSibling;

// // Get previous siblings
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;


// console.log(val);



///////////////////////
/* Creating Element */

// const li = document.createElement('li');

// // Add class
// li.className = 'collection-item';

// // Add id
// li.id = 'new-item';

// // add attribute 
// li.setAttribute('title', 'New item');

// // Create text node and append
// li.appendChild(document.createTextNode('Hello World!'));

// // Create new link element
// const link = document.createElement('a');

// // Add classes
// link.className = 'delete-item secondary-content';

// // Add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';

// // Append link into li
// li.appendChild(link);

// // Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);



///////////////////////////////////
/* Removing & Replacing Element */

// // Create Element
// const newHeading = document.createElement('h2');

// // Add id
// newHeading.id = 'task-title';

// // New text node
// newHeading.appendChild(document.createTextNode('Task List'));

// // Get old Heading 
// const oldHeading = document.getElementById('task-title');

// // Parent 
// const cardAction = document.querySelector('.card-action');

// // Replace
// cardAction.replaceChild(newHeading, oldHeading);

// // Remove Element
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// // Remove list item
// lis[0].remove();

// // Remove child element
// list.removeChild(lis[3]);

// // Classes and Attribute 
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// // Classes
// let val;

// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;

// // Attributes
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');
// link.setAttribute('title', 'Google')
// val = link.hasAttribute('title');
// link.removeAttribute('title');

// console.log(val);


//////////////////////////////////
/*Event listener & event object */

// // document.querySelector('.clear-tasks').addEventListener('click',
// // function(e){
// //   console.log('Hello World!');
// //   e.preventDefault();
// // });

// document.querySelector('.clear-tasks').addEventListener('click',onclick);

// function onclick(e){
//   // console.log('Clicked');
//   let val;
//   val = e;


//   // event target element 
//   val = e.target;
//   val = e.target.id;
//   val = e.target.className;
//   val = e.target.classList;


//   // e.target.innerText = 'Hello';

//   // Event type
//   val = e.type;

//   //Timestamp
//   val = e.timeStamp;

//   //Coordinate event relative to the window
//   val = e.clientY;
//   val = e.clientX;

//   val = e.offsetY;
//   val = e.offsetX;

//   console.log(val);
//   e.preventDefault();

// }



/////////////////
/*Mouse Event */

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// // Click
// // clearBtn.addEventListener('click', runEvent);

// // Doubleclick
// // clearBtn.addEventListener('dblclick', runEvent);

// // Mousedown
// // clearBtn.addEventListener('mousedown', runEvent);

// // Mouseup
// // clearBtn.addEventListener('mouseup', runEvent);

// // Mouseenter
// // card.addEventListener('mouseenter', runEvent);

// // Mouseleave
// // clearBtn.addEventListener('mouseleave', runEvent);

// // Mouseover
// // clearBtn.addEventListener('mouseover', runEvent);

// // Mouseout
// // clearBtn.addEventListener('mouseout', runEvent);

// // Mousemove
// card.addEventListener('mousemove', runEvent);

// // Event Handler
// function runEvent(e){
//   console.log(`EVENT TYPE: ${e.type}`)
//   e.preventDefault();

//   heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
//   document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }



/////////////////////////////
/* Keyboard & input event */
// const form = document.querySelector('form');
// const taskInput = document.getElementById('task')
// const heading = document.querySelector('h5');

// // Clear Input
// taskInput.value = '';

// // form.addEventListener('submit', runEvent);

// // Keydown
// // taskInput.addEventListener('keydown', runEvent);

// // Keyup
// // taskInput.addEventListener('keyup', runEvent);

// // Keypress
// // taskInput.addEventListener('focus', runEvent);

// // Blur
// // taskInput.addEventListener('blur', runEvent);

// // Cut
// // taskInput.addEventListener('cut', runEvent);

// // Paste
// // taskInput.addEventListener('paste', runEvent);

// // Input
// taskInput.addEventListener('input', runEvent);

// // Change
// // We don't have it here

// function runEvent(e){
//   console.log(`EVENT TYPE: ${e.type}`);

//   console.log(e.target.value);

//   // heading.innerText = e.target.value;

//   // Get Input value
//   // console.group(taskInput.value);

//   // e.preventDefault();
// }



/////////////////////////////////
/*Event Bubbling & Delegation */

// document.querySelector('.card-title').addEventListener('click',
// function(){
//   console.log('card-title');
// });

// document.querySelector('.card-content').addEventListener('click',
// function(){
//   console.log('card-content');
// }
// )

// document.querySelector('.card').addEventListener('click', 
// function(){
//   console.log('.card');
// })

// document.querySelector('.col').addEventListener('click', 
// function(){
//   console.log('.col');
// })

// Event Delegation

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

// document.body.addEventListener('click', deleteItem);

// function deleteItem(e){
//   // if(e.target.parentElement.className === 'delete-item secondary-content'){
//   //   console.log('delete item')
//   // }

//   if(e.target.parentElement.classList.contains('delete-item')){
//     console.log('delete item');
//     e.target.parentElement.parentElement.remove();
//   }
// }



//////////////////////////////
/* Local & Session Storage */

// Set local storage Item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// // Set session storage Item
// sessionStorage.setItem('name', "Beth");

// // Remove from local storage
// localStorage.removeItem('name');

// // Remove from session storage
// sessionStorage.removeItem('name');

// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // Clear local storage
// localStorage.clear();
// console.log(name, age);

document.querySelector('form').addEventListener('submit', 
function(e){
  const task = document.getElementById('task').value;

  let tasks;

  if(localStorage.getItem('tasks') === null ){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved');

  e.preventDefault();
});

// Lopping into the array/

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task, index){
  console.log(`${index} ${task}`);
})



