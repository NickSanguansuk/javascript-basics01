let element = document.getElementById('form');
let ele = document.getElementById('feedback');

if (element.addEventListener) {
    // Modern browsers
    element.addEventListener('submit', main_validator, true);
} else if (ele.attachEvent) {
    // Old IE
    element.attachEvent('onsubmit', main_validator);
}

function main_validator(e) {
    console.log(e);
    e.preventDefault();
    ele.innerHTML = '';
    if (check_username(e.target[0].value) && check_dob(e.target[1].value)) {
        element.submit();
    }
}

function check_username(username) {
    let re = new RegExp(/^[a-zA-Z0-9_.-]*$[a-zA-Z_.-]*$/g);
    let message = '';
    let someWrong = false;
    console.log('----------');
    console.log(re.test(username));
    console.log(!(re.test(username)));
    console.log(!true);
    if (!(re.test(username))) {
        message += 'Username can only be [a-z], [A-Z], or (_.-)';
        someWrong = true;
    }
    if (username.length > 20) {
        message += '\nUsername must be less than 20 characters';
        someWrong = true;
    }
    if (someWrong) {
        // Create a <p> element
        let para = document.createElement('p');
        para.classList.add('danger');
        // Create a text node
        let t = document.createTextNode(message);
        para.appendChild(t);
        ele.appendChild(para);
        return false;
    }
    return true;
}

function check_dob(dob) {
    // This is one line
    let re = new RegExp(/(\d+)(-|\/)(\d+)(?:-|\/)(?:(\d+)\s+(\d+):(\d+)(?::(\d+))?(?:\.(\d+))?)?/);
    let message = '';
    let someWrong = false;
    console.log('----------');
    console.log(re.test(dob));
    console.log(!(re.test(dob)));
    console.log(!true);
    if (!re.test(dob)) {
        message += 'Your date of birth is not in the right format';
        someWrong = true;
    }
    if (someWrong) {
        // Create a <p> element
        let para = document.createElement('p');
        para.classList.add('danger');
        // Create a text node
        let t = document.createTextNode(message);
        para.appendChild(t);
        ele.appendChild(para);
        return false;
    }
    return true;
}












