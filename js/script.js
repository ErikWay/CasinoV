document.getElementById('showModalBtn').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'block';
});

document.getElementById('closeModalBtn').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'none';
});


const carousel = new bootstrap.Carousel('#myCarousel')
