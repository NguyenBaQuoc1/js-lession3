var hotel = {
    name : 'park',
    rooms : 120,
    booker : 77 ,
};

hotel.gym = true ;
hotel.pool = false ;
delete hotel.booked;

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name ;

var elPool = document.getElementById('pool');
elPool.textContent = hotel.rooms ;

var elGym = document.getElementById('gym');
elGym.textContent = hotel.gym;