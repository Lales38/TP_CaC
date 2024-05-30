const header =document.querySelector("header");
const nav =document.querySelector("nav");
const footer =document.querySelector("footer");

header.innerHTML = `
<img class="logo" src="../img/zapalogo.png" alt="Logo" />
<a href="#"><h1>Team 9</h1></a>

<div class="header">
<ul class="">
  <li><a href="#" id="openModal">Registro</a></li>
  <li><a href="#" id="openLoginModal">Login</a></li>
</ul>
</div>
`
nav.innerHTML = `
<div class="navbar">
    <a href="../html/comollegar.html">Como llegar</a>
    <a href="#">Categorias</a>
    <a href="#">Favoritos</a>
    <a href="#">Buscador</a>
  </div>
`
footer.innerHTML = `
<p>Derechos reservados by Team9</p>

<div class="redes">
  <a href=""><em class="fab fa-twitter fa-2x"></em></a>
  <a href=""><em class="fab fa-instagram fa-2x"></em></a>
  <a href=""><em class="fab fa-facebook fa-2x"></em></a>
  <a href=""><em class="fab fa-whatsapp fa-2x"></em></a>
  <a href=""><em class="fab fa-tiktok fa-2x"></em></a>
  <a href=""><em class="fab fa-github fa-2x"></em></a>
</div>
`

