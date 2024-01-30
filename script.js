//Toggle Menu Navbar di mode Mobile
const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#list');
const navbar = document.querySelector('#navbar header')

hamburger.addEventListener('click', function(){
    nav.classList.toggle('translate-x-full');
    nav.classList.toggle('bg-white');
    navbar.classList.toggle('bg-white');
});

document.addEventListener('click', function(e){
    if(hamburger.checked == true){
        if(!nav.contains(e.target) && !navbar.contains(e.target)){
        nav.classList.add('translate-x-full');
        nav.classList.remove('bg-white');
        navbar.classList.remove('bg-white');
        hamburger.checked = false;
    };
    }
    
});


//Alert untuk fitur yang belum ada
const message = document.querySelector('#navbarMessage');
const merchantButton = document.querySelector('#merchantButton');

message.addEventListener('click', function(){
    alert("Fitur yang anda pilih belum tersedia :)");
});
merchantButton.addEventListener('click', function(){
    alert('Fitur yang anda pilih belum tersedia :)');
});



