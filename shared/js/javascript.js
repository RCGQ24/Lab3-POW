document.addEventListener('DOMContentLoaded', function() {
  // CONTACTO
  const formContacto = document.getElementById('form-contacto');
  if (formContacto) {
    formContacto.addEventListener('submit', function(e) {
      e.preventDefault();
      const nombre = document.getElementById('contacto-nombre').value.trim();
      const email = document.getElementById('contacto-email').value.trim();
      const tema = document.getElementById('contacto-tema').value.trim();
      const mensaje = document.getElementById('contacto-mensaje').value.trim();

      if (nombre && email && tema && mensaje) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nombre, email, tema, mensaje })
        })
        .then(response => response.json())
        .then(data => {
          localStorage.setItem('contactoForm', JSON.stringify(data));
          formContacto.reset();
          mostrarToast();
        })
        .catch(() => {
          alert('Ocurrió un error al enviar el formulario.');
        });
      } else {
        alert('Por favor, completa todos los campos.');
      }
    });
  }

  // CONFIGURACION
  const formConfig = document.getElementById('form-config');
  if (formConfig) {
    formConfig.addEventListener('submit', function(e) {
      e.preventDefault();
      const nombre = document.getElementById('config-nombre').value.trim();
      const oldPass = document.getElementById('old').value.trim();
      const newPass = document.getElementById('new').value.trim();
      const fecha = document.getElementById('fecha').value;
      const color = document.getElementById('color').value;

      if (nombre && oldPass && newPass) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nombre, oldPass, newPass, fecha, color })
        })
        .then(response => response.json())
        .then(data => {
          localStorage.setItem('configForm', JSON.stringify(data));
          formConfig.reset();
          mostrarToast();
        })
        .catch(() => {
          alert('Ocurrió un error al enviar el formulario.');
        });
      } else {
        alert('Por favor, completa todos los campos obligatorios.');
      }
    });
  }

  // Función para mostrar el Toast de Bootstrap
  function mostrarToast() {
    const toastEl = document.getElementById('toast-exito');
    if (toastEl) {
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    }
  }

});