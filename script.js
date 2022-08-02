/*
 1- Create an event listener in the button (add new item) that allows the user to add new items to the list and highlight each item when clicking on them.
 2- The heading <h2> should change the text accordingly to the highlighted list item. 
 */

// Selectors
const list = document.querySelector('#list');
const btn = document.getElementById('button');
const headline = document.getElementById('headline');
const listItems = document.querySelectorAll('#list');
let newItemCounter = 1;
// Iterate the ul items
for(const item of listItems) {
    item.addEventListener('click', function(event) {
        if(event.target.nodeName == 'LI') {
            headline.innerHTML = event.target.innerHTML
            const list = event.target.parentNode.children
            for(let i=0; i< list.length; i++)
                list[i].classList.remove('bg-warning')
            event.target.classlist.add('bg-warning')
        }
    })
}

btn.addEventListener('click', function(event) {
    list.innerHTML += `<li class="border-bottom m-3">Something New ${newItemCounter}</li>`
    newItemCounter++
})

// Event Listener - Click the item change the heading

// Event Listener - Click the button add a new item


// const inputTarget = document.getElementById('button')
// let buttonVal = document.querySelector('#button')

// function buttonClick() {
//     let ul = document.getElementsByClassName('.border-bottom m-3')
//     let li = document.createElement("li")
//     li.appendChild(document.createTextNode("New Item"));
//     ul.appendChild(li);
// } 
   
// buttonVal.addEventListener('click', buttonClick)