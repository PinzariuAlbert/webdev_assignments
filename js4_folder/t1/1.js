let list = document.getElementById("target");
let li1 = document.createElement("li")
li1.innerText="First item"
list.appendChild(li1)
let li2 = document.createElement("li")
li2.innerText="Second item"
list.appendChild(li2)
let li3 = document.createElement("li")
li3.innerText="Third item"
list.appendChild(li3)

list.classList.add("my-list");