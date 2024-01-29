function checkScreenWidth() {
    var screenWidth = window.innerWidth ;
    //|| document.documentElement.clientWidth || document.body.clientWidth;

    
    if (screenWidth <= 1024) {
        const hamburger = document.querySelector('#hamburger');
        const nav = document.querySelector('#list');
        const navbar = document.querySelector('#navbar header')

        hamburger.addEventListener('click', function(){
            nav.classList.toggle('translate-x-full');
            navbar.classList.toggle('backdrop-blur-xl');
            navbar.classList.toggle('bg-white');
        });

        document.addEventListener('click', function(){
            if(hamburger.checked == true){
                if(!nav.contains(event.target) && !navbar.contains(event.target)){
                nav.classList.toggle('translate-x-full');
                navbar.classList.toggle('backdrop-blur-xl');
                navbar.classList.toggle('bg-white');
                hamburger.checked = false;
            };
            }
            
        });
    }
}

// Panggil fungsi saat halaman dimuat dan saat ukuran layar berubah
window.onload = checkScreenWidth;
window.onresize = checkScreenWidth;

//Feather icon
feather.replace();

//Alert untuk fitur yang belum ada
const message = document.querySelector('#navbarMessage');
const merchantButton = document.querySelector('#merchantButton');

message.addEventListener('click', function(){
    alert("Fitur yang anda pilih belum tersedia :)");
});
merchantButton.addEventListener('click', function(){
    alert('Fitur yang anda pilih belum tersedia :)');
})