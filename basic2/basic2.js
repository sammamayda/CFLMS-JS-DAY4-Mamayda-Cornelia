function getFormValues() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var age = Number(document.getElementById('age').value);
    var profession = document.getElementById('profession').value;
    return [firstname, lastname, age, profession];

}

function displayResult(evt) {

    var values_ = getFormValues();

    firstname = values_[0];
    lastname = values_[1];
    age = values_[2];
    profession = values_[3];

    var resultContainer = document.getElementById('result');
    resultContainer.innerHTML = 'Your data: ' +firstname + ' ' +lastname + ' '+ age + ' '+ profession;


    if (firstname.length > 5){
        resultContainer.setAttribute('id', 'green')

    }else{
        resultContainer.setAttribute('id', 'red')
    }


    if(profession === 'it'){
        resultContainer.style.backgroundColor = '#65a7e0';

    }else if(profession === 'hospitality'){
        resultContainer.style.backgroundColor = '#96e065';
    }else{
        resultContainer.style.backgroundColor = '#dbbe60';
    }

}

document.getElementById('submit').addEventListener('click', displayResult);

