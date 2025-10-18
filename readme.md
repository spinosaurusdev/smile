<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Carrusel de imágenes</title>
  <style>
   
  </style>
</head>
<body>

  <div class="carousel">
    <img src="img/foto1.jpg" class="active">
    <img src="img/foto2.jpg">
    <img src="img/foto3.jpg">
    <div class="controls">
      <button id="prev">⟨</button>
      <button id="next">⟩</button>
    </div>
  </div>

  <script>
    const images = document.querySelectorAll('.carousel img');
    let current = 0;

    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) img.classList.add('active');
      });
    }

    document.getElementById('next').addEventListener('click', () => {
      current = (current + 1) % images.length;
      showImage(current);
    });

    document.getElementById('prev').addEventListener('click', () => {
      current = (current - 1 + images.length) % images.length;
      showImage(current);
    });

    // Cambio automático cada 3 segundos
    setInterval(() => {
      current = (current + 1) % images.length;
      showImage(current);
    }, 3000);
  </script>

</body>
</html>
