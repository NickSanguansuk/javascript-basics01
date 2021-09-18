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
    let selectorID= document.querySelector('#selectorID');
    console.log(selectorID);
    let selectorClass= document.querySelector('.selectorClass');
    console.log(selectorClass);
    let selectorTag= document.querySelector('u');
    console.log(selectorTag);
    console.log(document.querySelector("p.example"));

}
console.log('----------');
{

}
console.log('----------');
{

}
console.log('----------');






















