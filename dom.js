const h1 = document.getElementsByTagName("H1")[0];
const p = document.getElementsByTagName("p")[0];
const ul = document.getElementsByTagName("ul")[0];
const html = document.documentElement


console.log(p.parentNode.parentNode);
console.log(p.parentNode.parentNode.parentNode.parentNode);
console.log(html.parentNode);
console.log(ul.childNodes);

// to change the first li

ul.firstElementChild.style.background = "yellow";

for(let element of ul.children){
    element.style.background = "gold"
}

document.body.children[3].lastElementChild.style.background = "fuchsia"

const tiger = ul.children[1];
tiger.nextElementSibling.style.background = "coral"

tiger.previousElementSibling.style.background = "aquamarine"


//first shark
const mainShark_0 = document.querySelector("ul")
const newShark_0 = document.createElement("li")
newShark_0.textContent = "Goblin shark"
mainShark_0.appendChild(newShark_0)


//second shark
const mainShark_1 = document.querySelector("ul")
const newShark_1 = document.createElement("li")
newShark_1.textContent = "While shark"
mainShark_1.appendChild(newShark_1)


//third shark
const mainShark_2 = document.querySelector("ul")
const newShark_2 = document.createElement("li")
newShark_2.textContent = "Basking shark"
mainShark_2.appendChild(newShark_12)


//fouth shark
const mainShark_3 = document.querySelector("ul")
const newShark_3 = document.createElement("li")
newShark_3.textContent = "Mako shark"
mainShark_3.appendChild(newShark_3)


//fifth shark
const mainShark_4 = document.querySelector("ul")
const newShark_4 = document.createElement("li")
newShark_4.textContent = "Thresher shark"
mainShark_4.appendChild(newShark_4)