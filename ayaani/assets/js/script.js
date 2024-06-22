// sidebar-carousel
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-nxt",
    prevEl: ".swiper-button-prv",
    
  },
  loop: true,
});

// home page video play/pause img
// const video = document.getElementById('myVideo');
// const playPauseBtn = document.getElementById('playPauseBtn');


// playPauseBtn.addEventListener('click', () => {
//   if (video.paused) {
//     video.play();
//     playPauseBtn.innerHTML = '<img src="assets/img/pause.svg" alt="pause">'; // Replace play with pause image
//   } else {
//     video.pause();
//     playPauseBtn.innerHTML = '<img src="assets/img/play.svg" alt="play">'; // Replace pause with play image
//   }
// });