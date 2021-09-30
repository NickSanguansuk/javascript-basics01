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
    console.log('Root Nodes');
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
    console.log('Creating New Nodes');

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
    console.log('Inserting Nodes into the DOM');

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
    console.log('Removing Nodes');

    let ul = document.querySelector('#ul02');
    ul.removeChild(ul.firstElementChild);

    let uselessElement = document.querySelector('#useless02');
    uselessElement.remove();
}
console.log('----------');
{
    console.log('Modifying Styles');

    let div = document.querySelector('#myDiv');
    // Edit the styles is with setAttribute(
    div.setAttribute('style', 'text-align: center');
    // Apply style to div directly.
    div.style.backgroundColor = 'coral';
    div.style.color = 'white';
    div.style.height = '100px';
    div.style.width = '100px';
    div.style.border = '2px solid black';
    // Make div into a circle and vertically center the text
    div.style.borderRadius = '50%';
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';

    // Testing ---> make it center
    //div.style.margin = 'auto';

    //div.style.float ='right';

    //div.parentElement.style.display = 'flex';
    //div.parentElement.style.justifyContent = 'center';
}
console.log('----------');
{
    console.log('1: Inline Event Handler Attributes');

    function changeText() {
        let p = document.querySelector('#p03');
        p.textContent = "I changed because of an inline event handler.";
    }

    //// This need to be in the same file (need to be in the HTML)
    //let changeText = () => {
    //    let p = document.querySelector('#p03');
    //    p.textContent = "I changed because of an inline event handler.";
    //}
}
console.log('----------');
{
    console.log('2: Event Handler Properties');

    let button = document.querySelector('#button04');
    // Function to modify the text content of the paragraph
    let changeText = () => {
        let p = document.querySelector('#p04');
        p.textContent = "I changed because of an event handler property.";
        button.textContent = "I was clicked";
    }
    // Add event handler as a property of the button element
    button.onclick = changeText;
}
console.log('----------');
{
    console.log('3: Event Listeners');

    const button = document.querySelector('#button05');
    // Function to modify the text content of the paragraph
    const changeText = () => {
        const p = document.querySelector('#p05');
        p.textContent = "I changed because of an event listener.";
        button.textContent = "I was clicked";
    }
    // Listen for click event
    button.addEventListener('click', changeText);
}
console.log('----------');
{
    console.log('Example - Mouse Events onclick (Inline Event Handler)');

    function clickEvent() {
        document.write("This is PerScholas");
    }

    console.log('Example - Mouse Events onmouseover (Inline Event Handler)');

    function mouseOverEvent() {
        alert("This is PerScholas and You are learners");
    }
}
console.log('----------');
{
    console.log("Form Events");

    const name = document.getElementById("fName");
    name.addEventListener('focus', changeToCoral);
    name.addEventListener('blur', changeToWhite);
    document.querySelector('#form06').addEventListener("submit", function () {
        alert(name.value)
    });

    function changeToCoral() {
        name.style.backgroundColor = 'coral';
    }

    function changeToWhite() {
        name.style.backgroundColor = 'white';
    }
}
console.log('----------');
{
    console.log("Example - Form Events onfocus (Inline Event Handler)");

    function focusEvent() {
        document.getElementById("input07").style.background = "aqua";
    }

    console.log("Example - Form Events onsubmit (Inline Event Handler)");

    function validate() {
        let inputValue = document.getElementById("name08").value;
        alert(inputValue);
        return true
    }
}
console.log('----------');
{
    console.log("Keyboard Events & Keyboard Events Properties");

    document.addEventListener('keypress', function () {
        console.log("You pressed a key, Thanks!");
    });

    document.addEventListener('keydown', function () {
        console.log('keyCode: ' + event.keyCode); // ASCII
        console.log('key:     ' + event.key);
        console.log('code:    ' + event.code);
    });
}
console.log('----------');
{
    console.log("Keyboard Events & Keyboard Events Properties 2");

    // Pass an event through to a listener
    document.addEventListener('keydown', function () {
        changeToCoral(document.getElementById(event.code));
    });
    document.addEventListener('keyup', function () {
        backToNormal(document.getElementById(event.code));
    });

    function changeToCoral(eventTarget) {
        eventTarget.style.backgroundColor = 'coral';
    }

    function backToNormal(eventTarget) {
        eventTarget.style.backgroundColor = '';
    }
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










