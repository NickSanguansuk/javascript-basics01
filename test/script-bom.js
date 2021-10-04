{
    console.log('Getting Information about the Window');

    document.getElementById('ow01').innerHTML = window.outerWidth;
    document.getElementById('oh01').innerHTML = window.outerHeight;
    document.getElementById('iw01').innerHTML = window.innerWidth;
    document.getElementById('ih01').innerHTML = window.innerHeight;
    document.getElementById('xOffset01').innerHTML = window.pageXOffset;
    document.getElementById('yOffset01').innerHTML = window.pageYOffset;
    document.getElementById('screenX01').innerHTML = window.screenX;
    document.getElementById('screenY01').innerHTML = window.screenY;
}
console.log('----------');
{
    console.log('Opening and closing windows');

    let myWindow;

    function newWindow() {
        myWindow = window.open('https://perscholas.org/', 'perscholas', 'width=400, height=200, resizable=yes, scrollbars=yes, location=yes');
        myWindow.focus();
    }

    function closeWindow() {
        myWindow.close();
    }
}
console.log('----------');
{
    console.log('Interaction with the window');

    for (let i = 0; i < 20; i++) {
        let p = document.createElement('p');
        p.textContent = i;
        document.body.appendChild(p);
    }
    //let buttons = document.getElementsByTagName('button');
    let buttons = document.getElementsByClassName('button03');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = handleButtonPress03;
    }

    function handleButtonPress03(e) {
        if (e.target.id === 'print03') {
            window.print();
        } else if (e.target.id === 'scroll03') {
            window.scrollTo(0, 300);
            //window.scrollTo(0, 1000);
        }
    }

    //window.stop();
}
console.log('----------');
{
    console.log('Screen Object');

    document.getElementById("aw04").innerHTML = window.screen.availWidth;
    document.getElementById("ah04").innerHTML = window.screen.availHeight;
    document.getElementById("sw04").innerHTML = window.screen.width;
    document.getElementById("sh04").innerHTML = window.screen.height;
    document.getElementById("cd04").innerHTML = window.screen.colorDepth;
}
console.log('----------');
{
    console.log('Location Object');

    document.getElementById("a04").innerHTML = window.location.href;
    document.getElementById("b04").innerHTML = window.location.protocol;
    document.getElementById("c04").innerHTML = window.location.host;
    document.getElementById("d04").innerHTML = window.location.hostname;
    document.getElementById("e04").innerHTML = window.location.port;
    document.getElementById("f04").innerHTML = window.location.pathname;
    document.getElementById("g04").innerHTML = window.location.search;
}
console.log('----------');
{
    console.log('History Object');

    function goBack() {
        window.history.back();

        //window.history.go(-2);      // two steps back
        //window.history.go(3);       //  three steps forward
        //window.history.back();      // one step back
        //window.history.forward();   // one step forward
    }

    //let buttons = document.getElementsByTagName("button");
    let buttons = document.getElementsByClassName('button05');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = handleButtonPress05;
    }

    function handleButtonPress05(e) {
        if (e.target.id === "back05") {
            window.history.back();
        } else if (e.target.id === "forward05") {
            window.history.forward();
        } else if (e.target.id === "go05") {
            window.history.go(-1);
        }
    }
}
console.log('----------');
{
    console.log('Navigator Object');

    function whichBrowser() {
        if (navigator.userAgent.indexOf("MSIE") !== -1) {
            alert("You are running Microsoft Internet Explorer.");
        } else if (navigator.userAgent.indexOf("Firefox") !== -1) {
            alert("You are running FireFox.");
        } else if (navigator.userAgent.indexOf("Navigator") !== -1) {
            alert("You are running Netscape.");
        } else if (navigator.userAgent.indexOf("Opera") !== -1) {
            alert("You are running Opera.");
        } else if (navigator.userAgent.indexOf("Chrome") !== -1) {
            alert("You are running Chrome.");
        } else {
            alert("You are running some odd-ball browser.");
        }
    }

    let p = document.getElementById("p06");

    function whichPlatform() {
        let OS = navigator.platform.toLowerCase();
        if (OS.indexOf("win") !== -1) {
            p.textContent = "You are running Windows OS.";
        } else if (OS.indexOf("mac") !== -1) {
            p.textContent = "You are running Mac OS";
        } else if (OS.indexOf("unix") !== -1) {
            p.textContent = "You are running Unix OS";
        } else if (OS.indexOf("linux") !== -1) {
            p.textContent = "You are running Linux OS";
        } else {
            p.textContent = "Please buy a computer";
        }
    }

    function init06() {
        let btnBrowser = document.getElementById("btnBrowser06");
        btnBrowser.onclick = whichBrowser;
        let btnPlatform = document.getElementById("btnPlatform06");
        btnPlatform.onclick = whichPlatform;
    }

    window.onload = init06;

    let plugins_no = navigator.plugins.length;

    for (let i = 0; i < plugins_no; i++) {
        let myL = document.getElementById("ol06");
        let li = document.createElement("li");

        li.innerHTML = "<b>" + navigator.plugins[i].name + "</b>" + ": [filename: " + navigator.plugins[i].filename + "]";

        myL.appendChild(li);
    }

    document.getElementById("a06").innerHTML = window.navigator.appName;
    document.getElementById("b06").innerHTML = window.navigator.userAgent;
    document.getElementById("c06").innerHTML = window.navigator.appCodeName;
    document.getElementById("d06").innerHTML = window.navigator.appVersion;
    document.getElementById("e06").innerHTML = window.navigator.mimeTypes;
    document.getElementById("f06").innerHTML = window.navigator.platform;
    document.getElementById("g06").innerHTML = window.navigator.plugins;
}
console.log('----------');
{
    console.log('Navigator Object 2');

    function showInfo() {
        let appCodeName = window.navigator.appCodeName;
        let appName = window.navigator.appName;
        let appVersion = window.navigator.appVersion;
        let cookieEnabled = window.navigator.cookieEnabled;
        let language = window.navigator.language;
        let userAgent = window.navigator.userAgent;
        let platform = window.navigator.platform;
        let onLine = window.navigator.onLine;
        let data = "<br/>navigator.appCodeName:" + appCodeName +
            "<br/>navigator.appName: " + appName +
            "<br/>navigator.appVersion: " + appVersion +
            "<br/>navigator.cookieEnabled: " + cookieEnabled +
            "<br/>navigator.language: " + language +
            "<br/>navigator.userAgent: " + userAgent +
            "<br/>navigator.platform: " + platform +
            "<br/>navigator.onLine: " + onLine;
        document.getElementById("information07").innerHTML = data;
    }
}
console.log('----------');