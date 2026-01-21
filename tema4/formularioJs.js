const form = document.getElementById('registroForm'); // DOM

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe por defecto

  // Validaciones simples
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();

  if(nombre === '' || email === '') {
    alert('Por favor completa todos los campos');
    return;
  }

  // Redirección
  window.location.href = 'cine.html';
});
