class Hotel {
    hotelName='';
    address= '';
    image = '';

    constructor(hotelName, address, image){
        this.hotelName = hotelName;
        this.numbersOfNights = Math.round((Math.random(1,11))*10);
        this.address = address;
        this.image = image;
    }

    showAvailability(){
        var userNightsRequested = Number(document.getElementById('numberNights').value);
        console.log(userNightsRequested);
        if (this.numbersOfNights>= userNightsRequested){
            var button = document.createElement('button');
            button.setAttribute('type', 'button');
            button.setAttribute('id', 'button1');
            button.setAttribute('label', "I'll reserve");
            button.innerHTML = "I'll reserve";
            document.getElementById('container').appendChild(button);
        }else {
            alert(`Sorry, no available nights for ${this.hotelName}`)
        }
    }

}
var hotelDropdown = document.getElementById('hotels');

var hotelOptions = {};
var hotelDetails = [
    ['Sainte Valerie', 'Rue de l\'Oratoire, 06160 Juan-les-Pins, Antibes Frankreich', './media/sainteValerie.jpeg'],
    ['Hotel Sacher', 'Philharmoniker Str. 4, 1010 Wien', './media/sacher.jpeg'],
    ['Hotel Imperial', 'Kärntner Ring 16, 1015 Wien', './media/imperial.jpeg'],

];

hotelDetails.forEach(function (hotelDetail) {
    var name = hotelDetail[0];
    var addr = hotelDetail[1];
    var img = hotelDetail[2];

    hotelOptions[name] =  new Hotel(
        name, addr, img
    );

    var option = document.createElement("option");
    option.text = name;
    option.value = name;
    hotelDropdown.add(option);
});


function checkHotelAvailability() {
    var selectedHotelName = hotelDropdown.options[hotelDropdown.selectedIndex].value;
    console.log(selectedHotelName);
    var selectedHotel = hotelOptions[selectedHotelName];
    console.log(selectedHotel);
    selectedHotel.showAvailability()
}

var submit = document.getElementById('submit');
submit.addEventListener('click', checkHotelAvailability);


