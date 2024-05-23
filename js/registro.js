function cargarNombreDelHeader(teamName, headerPath) {
    const headerContainer = document.getElementById('header-container');

    if (headerContainer) {
        fetch(headerPath)
            .then(response => response.text())
            .then(data => {
                // Reemplazar el marcador de posición con el nombre del equipo
                data = data.replace('%TEAM_NAME%', teamName);
                headerContainer.innerHTML = data;

                // Ajustar las rutas de los enlaces según la ubicación actual
                const links = headerContainer.querySelectorAll('a[data-relative="true"]');
                links.forEach(link => {
                    const href = link.getAttribute('href');
                    link.setAttribute('href', getAbsolutePath(headerPath, href));
                });

                // Resto del código para manejar eventos y funcionalidad del header
                var openModalBtn = document.getElementById('openModal');
                var openLoginModalBtn = document.getElementById('openLoginModal');
                var modal = document.getElementById('modal');
                var loginModal = document.getElementById('modal-login');
                var closeModalBtn = document.querySelectorAll('.close');

                openModalBtn.onclick = function() {
                    modal.style.display = "block";
                };

                openLoginModalBtn.onclick = function(event) {
                    event.stopPropagation(); // Detener la propagación del evento click para evitar que cierre el modal
                    loginModal.style.display = "block";
                };

                // Agregar controlador de eventos para cada botón de cierre
                closeModalBtn.forEach(function(btn) {
                    btn.onclick = function() {
                        modal.style.display = "none";
                        loginModal.style.display = "none"; // Cerrar también el modal de inicio de sesión
                    };
                });

                window.onclick = function(event) {
                    if (event.target == modal || event.target == loginModal) {
                        modal.style.display = "none";
                        loginModal.style.display = "none";
                    }
                };

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
                    alert('¡Formulario de inicio de sesión enviado!');
                    // Luego puedes cerrar el modal si es necesario
                    loginModal.style.display = "none";
                });
            })
            .catch(error => console.error('Error al cargar el header:', error));
    } else {
        console.error('No se encontró el contenedor del header');
    }
}

function getAbsolutePath(base, relative) {
    // Crear un objeto URL a partir de la URL base
    const baseURL = new URL(base, window.location.href);

    // Crear un objeto URL a partir de la URL relativa
    const absoluteURL = new URL(relative, baseURL);

    // Devolver la URL absoluta como cadena
    return absoluteURL.href;
}


