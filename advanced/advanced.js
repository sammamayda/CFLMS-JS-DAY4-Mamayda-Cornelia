var circle = document.getElementById('circle');
var container = document.getElementById('circleContainer');
var resultBox = document.getElementById('textBox');

function hoverMessage(){
    resultBox.innerHTML='You are in the circle';
    circle.style.backgroundColor = '#ffa20d';
}

function leaveMessage(){
    resultBox.innerHTML='You are outside of the circle';
    circle.style.backgroundColor = '#b3e83f';
}

function clickMessage(){
    container.style.backgroundColor = '#c2baac';
}

function dblclickMessage(){
    container.style.backgroundColor = '#71b0aa';
}
circle.addEventListener('mouseover', hoverMessage);
circle.addEventListener('mouseout', leaveMessage);
circle.addEventListener('click', clickMessage);
circle.addEventListener('dblclick', dblclickMessage);