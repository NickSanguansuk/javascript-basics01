{
    const header = document.getElementById('header-title');
    console.log(header);
    console.log(header.innerHTML);
    console.log(header.innerText);
}
console.log('----------');
{
    const items = document.getElementsByName('list-group-item');
    console.log(items.length);
    for (let i in items) {
        console.log(items[i]);
        console.log(items[i].innerHTML);
    }
}
console.log('----------');
{
    const li = document.getElementsByTagName('li');
    console.log(li.length);
    for (let i in li) {
        console.log(li[i]);
    }
}
console.log('----------');
{
    const li = document.getElementsByTagName('li');
    //let myArr = li.slice(1, 3);
    //console.log(myArr);
    let myArr = Array.prototype.slice.call(li, 1, 3);
    console.log(myArr);
    for (let i in myArr) {
        console.log(myArr[i]);
    }
}
console.log('----------');
{
    const items = document.getElementsByClassName('even list-group-item');
    console.log(items);
    for (let i in items) {
        console.log(items[i]);
    }
}
console.log('----------');
{
    let selectorID = document.querySelector('#selectorID');
    console.log(selectorID);
    let selectorClass = document.querySelector('.selectorClass');
    console.log(selectorClass);
    let selectorTag = document.querySelector('u');
    console.log(selectorTag);
    console.log(document.querySelector("p.example"));

}
console.log('----------');
{
    let q1 = document.querySelector('font[color="blue"]');
    console.log(q1);
    let q2 = document.querySelector('li>font>b');
    console.log(q2);
    let q3 = document.querySelector('li>font[color="blue"]>u');
    console.log(q3);
    let q4 = document.querySelector('#LastLi, .green');
    console.log(q4);

}
console.log('----------');
{
    const q1 = document.querySelectorAll('font>b>u');
    for (let i in q1) {
        console.log(q1[i]);
    }
}
console.log('----------');
{
    console.log(document);
    console.log(document.documentElement);
    console.log(document.head);
    console.log(document.body);
}
console.log('----------');
{
    console.log(document.querySelector('ul').parentNode);
    console.log(document.querySelector('li').parentNode);
}
console.log('----------');
{
    console.log(document.querySelector('ul').firstElementChild);
    console.log(document.querySelector('ul').lastElementChild);
    console.log(document.querySelector('ul').childNodes);
}
console.log('----------');
{
    let ul = document.querySelector('ul');
    console.log(ul);
    console.log(ul.previousElementSibling);
    console.log(ul.nextElementSibling);

}
console.log('----------');
{
    function showCommentForm() {
        let data = 'Your location is USA';
        document.getElementById('myLocation').innerHTML = data;
    }

}
console.log('----------');
{
    let newElement = document.createElement('p');
    newElement.textContent = "We've created a new p element on the document by using the createElement() method. In order to add text to the element, we can use the textContent property";
    console.log(newElement);
    newElement.innerHTML = "The innerHTML property allows you to add <strong>HTML</strong> as well as text to an element"
    console.log(newElement);
    let newTextNode = document.createTextNode("It is also possible to create a text node with the createTextNode() method");
    console.log(newTextNode);
}
console.log('----------');
{
    //let ul = document.querySelector('ul');
    //let ul = document.getElementById('ul01');
    let ul = document.querySelector('#ul01');
    console.log(ul);
    let newElement = document.createElement('li');
    newElement.textContent = "node.appendChild(): Add a node as the last child of a parent element";
    ul.appendChild(newElement);
    let anotherElement = document.createElement('li');
    anotherElement.textContent = "node.insertBefore(): Insert a node into the parent element before a specified sibling node";
    ul.insertBefore(anotherElement, newElement);
    let uselessElement = document.querySelector('#useless');
    let aDifferentElement = document.createElement('li');
    aDifferentElement.textContent = "node.replaceChild(): Replace an existing node with a new node";
    ul.replaceChild(aDifferentElement, uselessElement);
}
console.log('----------');
{

}
console.log('----------');
{

}
console.log('----------');
{

}
console.log('----------');
{

}
console.log('----------');
{

}
console.log('----------');












