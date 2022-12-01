document.onreadystatechange = function() {
    let select = document.querySelector("#country");

    countries.forEach(country => {
        let option = document.createElement("option");
        option.text = country.name;
        option.value = country.code;
        select.add(option);
    });

    document.querySelector("#submit").disabled = true;
}

function checkForm() {
    if(document.forms[0].username.value!=="" && document.forms[0].password.value.length>=12 && document.forms[0].password.value===document.forms[0].password2.value && document.forms[0].terms.checked) {
        document.querySelector("#submit").disabled = false;
    } else {
        document.querySelector("#submit").disabled = true;
    }
}

document.querySelector("#submit").addEventListener('click', (e) => {
    e.preventDefault();
    
    document.querySelector("#greetings").textContent = `Welcome ${document.forms[0].username.value}! The country code you selected is ${document.forms[0].country.value}`;
})

document.forms[0].addEventListener('keyup', (ev) => {
    checkForm();
})

document.forms[0].terms.addEventListener('change', (e) => {
    checkForm();
})
