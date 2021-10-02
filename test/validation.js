console.log('----------');
{
    let nameValue;
    let emailValue;
    let zipValue;
    let countryValue;
    let passwordValue;

    function validate() {
        // Validate name
        if (document.myForm.name.value === "") {
            alert("Please provide your name!");
            document.myForm.name.focus();
            return false;
        } else {
            nameValue = document.getElementById("nameId").value;
        }

        // Validate email
        if (document.myForm.email.value === "") {
            alert("Please provide your Email!");
            document.myForm.email.focus();
            return false;
        }
        if (document.myForm.email.value !== "") {
            if (validateEmail()) {
                emailValue = document.getElementById("emailId").value;
            }
        }

        // Validate zip
        if (document.myForm.zip.value === "" || isNaN(document.myForm.zip.value) || document.myForm.zip.value.length !== 5) {
            alert("Please provide Zip Code in the format #####.");
            document.myForm.zip.focus();
            return false;
        } else {
            zipValue = document.getElementById("zipId").value;
        }

        // Validate country
        if (document.myForm.country.value === "") {
            alert("Please provide your country!");
            return false;
        } else {
            countryValue = document.getElementById("countryId").value;
        }

        // Validate password
        if (document.myForm.password.value === "") {
            alert("Please provide your password");
            document.myForm.password.focus();
            return false;
        } else {
            passwordValue = document.getElementById("passwordId").value;
            alert("Name: " + nameValue + ", Password: " + passwordValue + ", Email: " + emailValue + " ,Country: " + countryValue + " ,Zip Code: " + zipValue);
            return true;
        }
    }

    function validateEmail() {
        let email = document.myForm.email.value;
        let atPos = email.indexOf("@");
        //alert(atPos)
        let dotPos = email.lastIndexOf(".");
        if (atPos < 1 || (dotPos - atPos < 2)) {
            alert("Please enter correct email ID")
            document.myForm.email.focus();
            return false;
        } else {
            return true;
        }
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
{

}
console.log('----------');










