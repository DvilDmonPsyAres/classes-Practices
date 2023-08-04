// DOM MANIPULATION

// //changing the styles of a property
// const title = document.querySelector('#main-heading');
// console.log(title)

//  title.style.color = "red"

//  const listItems = document.querySelectorAll(".list-items")

//  for(i = 0; i < listItems.length; i++) {
//     listItems[i].style.fontSize = "15px";
//  }

// // CREATING ELEMENTS

// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// //Adding elements
// ul.append(li);

// //Modify the Text
// li.innerText = "Whats up Bro"

// const firstListItem = document.querySelector('.list-items');
// firstListItem.innerHTML = "Alanbrwon de Pu@s";

// //Modifyng Attributes and Classes
// //adding id="main-heading"
// firstListItem.setAttribute('id', 'main-heading')
// //removing class="list-items"
// li.classList.remove("list-items")

// console.log(li.classList.contains('list-items'))

// //Remove Elements
// li.remove()



//NAVIGATE THE DOM

//Traverse the DOM

// Parent Node Traversal

// let ul = document.querySelector('ul');
// console.log(ul)
// console.log(ul.parentNode)
// console.log(ul.parentNode.parentNode)
// console.log(ul.parentElement)
// console.log(ul.parentElement.parentElement)

// const html = document.documentElement;
// console.log(html)
// console.log(html.parentNode)
// console.log(html.parentElement)

//Child Node Traversal
// let ul = document.querySelector('ul');
// console.log(ul.childNodes)
// console.log(ul.firstChild)
// console.log(ul.lastChild)
// ul.childNodes[3].style.fontSize = '40px'
// console.log(ul.children)
// ul.children[3].style.fontSize = '40px'
// console.log(ul.firstElementChild)
// console.log(ul.lastElementChild)


//Sibling Node Traversal
let ul = document.querySelector('ul');
const div = document.querySelector('div')
console.log(div.childNodes)
console.log(ul.previousSibling)
console.log(ul.nextSibling)
console.log(ul.previousElementSibling)
console.log(ul.nextElementSibling)








// getElementById()
// // const title = document.getElementById('main-heading')
// // const li4 = document.getElementById('li4')

// // console.log("getElementById",li4)

// getElementByClassName()
// // const listItems = document.getElementsByClassName("list-items")
// // console.log("get elements by className()", listItems)

// getElementsByTagName()

// // const li = document.getElementsByTagName("h1")
// // console.log("getElementsByTagName()", li)

// querySelector()
// //match the first element with the argument class, id, tagname

// // const container2 = document.querySelector('.container2')
// // console.log("query selector", container2)
// // const title = document.querySelector('#main-heading')
// // console.log("query selector", title)
// // const div = document.querySelector('div')
// // console.log("query selector", div)

// querySelectorAll()
// // //select all elements with that name, tag, class
// // const container = document.querySelectorAll('div')
// // console.log("query selectorALL", container)
// // const container3 = document.querySelectorAll('.container2')
// // console.log("query selectorALL", container3)
// // const title2 = document.querySelector('#main-heading')
// // console.log("query selectorALL", title2)
