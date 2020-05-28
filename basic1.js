function getValues(evt) {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var age = Number(document.getElementById('age').value);

    console.log(firstname);
    var result = document.getElementById('result');
    result.innerHTML = firstname+ lastname+age;
    if (firstname.length > 5){
        result.setAttribute('id', 'green')

    }else{
        result.setAttribute('id', 'red')
    }

    //evt.preventDefault();


}

document.getElementById('submit').addEventListener('click', getValues);

