function getFormValues() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var age = Number(document.getElementById('age').value);
    return [firstname, lastname, age];
}

function displayResult(evt) {

    var values_ = getFormValues();

    firstname = values_[0];
    lastname = values_[1];
    age = values_[2];

    var resultContainer = document.getElementById('result');
    resultContainer.innerHTML = 'Your data: ' +firstname + '<br>' +lastname + '<br>'+ age;


    if (firstname.length > 5){
        resultContainer.setAttribute('id', 'green')

    }else{
        resultContainer.setAttribute('id', 'red')
    }
}

document.getElementById('submit').addEventListener('click', displayResult);

