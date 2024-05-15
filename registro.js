document.addEventListener("DOMContentLoaded", function() {
    var openModalBtn = document.getElementById('openModal');
    var openLoginModalBtn = document.getElementById('openLoginModal');
    var modal = document.getElementById('modal');
    var loginModal = document.getElementById('modal-login');
    var closeModalBtn = document.querySelectorAll('.close');

    openModalBtn.onclick = function() {
        modal.style.display = "block";
    }

    openLoginModalBtn.onclick = function(event) {
       event.stopPropagation(); // Detener la propagación del evento click para evitar que cierre el modal
        loginModal.style.display = "block";
    }

    // Agregar controlador de eventos para cada botón de cierre
    closeModalBtn.forEach(function(btn) {
        btn.onclick = function() {
            modal.style.display = "none";
            loginModal.style.display = "none"; // Cerrar también el modal de inicio de sesión
        }
    });

    window.onclick = function(event) {
        if (event.target == modal || event.target == loginModal) {
            modal.style.display = "none";
            loginModal.style.display = "none";
        }
    } 

    var registrationForm = document.getElementById('registrationForm');
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario de registro
        alert('¡Formulario de registro enviado!');
        // Luego puedes cerrar el modal si es necesario
        modal.style.display = "none";
    });

    var loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario de inicio de sesión
        /* console.log('Formulario de inicio de sesión enviado'); */
        // Luego puedes cerrar el modal si es necesario
        loginModal.style.display = "none";
    });

    // Detener la propagación del evento click dentro del modal de inicio de sesión
    /* loginModal.addEventListener('click', function(event) {
        event.stopPropagation();
    }); */
});


  