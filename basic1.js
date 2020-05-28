
function getValues(){
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var age = Number(document.getElementById('age').value);

     document.write(firstname);
    /*if (length(firstname) > 5){
        secondDiv.setAttribute('id', 'green')

    }else{
        secondDiv.setAttribute('id', 'red')
    }*/



}

document.getElementById('submit').onclick = getValues();
