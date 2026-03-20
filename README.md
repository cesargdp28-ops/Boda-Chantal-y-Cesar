<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Boda</title>

    <!-- Estilos -->
    <link rel="stylesheet" href="styles.css">

    <!-- Fuentes elegantes -->
    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;600&family=Montserrat:wght@300;400&display=swap" rel="stylesheet">
</head>
<body>

<!-- NAVBAR -->
<header class="navbar">
    <div class="logo">🤍</div>

<nav class="menu">
    <a href="#hero">INICIO</a>
    <a href="#historia">NUESTRA HISTORIA</a>
    <a href="#evento">EL EVENTO</a>
    <a href="#ceremonia">CEREMONIA</a>
    <a href="#vestimenta">VESTIMENTA</a>
    <a href="#regalos">REGALOS</a>
    <a href="#rsvpInvitado">RSVP</a>
</nav>

<a href="#rsvpInvitado" class="btn-nav">CONFIRMAR ASISTENCIA</a>
</header>

<!-- HERO / INICIO -->
<section id="hero" class="hero">

    <div class="overlay"></div>

    <div class="contenido">
        <p class="subtitulo">NOS COMPLACE INVITARLOS A CELEBRAR</p>

        <h1 class="nombres">Chantal & César</h1>

        <p class="fecha">25 de Junio, 2028</p>
        <p class="lugar">Ciudad de México, México</p>

        <p class="frase">
            “El amor no se trata de mirarse el uno al otro, sino de mirar juntos en la misma dirección.”
        </p>

        <!-- CONTADOR -->
<div class="container">

    <header>
        <h1 class="titulo">Nuestra Boda</h1>
        <p class="subtitulo">Cuenta regresiva para el gran día</p>
        <div class="contador">
            <div><span id="dias">0</span> Días</div>
            <div><span id="horas">0</span> Horas</div>
            <div><span id="minutos">0</span> Minutos</div>
            <div><span id="segundos">0</span> Segundos</div>
        </div>
    </header>
		

        <a href="#" class="btn-main">CONFIRMAR ASISTENCIA</a>
    </div>

</section>

<!-- HISTORIA -->
<section id="historia" class="historia">

    <p class="subtitulo-historia">DESDE EL PRIMER DÍA</p>
    <h2 class="titulo-historia">Nuestra Historia</h2>

    <div class="timeline-pro">

        <!-- ITEM 1 -->
        <div class="timeline-item">
            <div class="timeline-content">

                <div class="img-box">
                    <img src="https://images.unsplash.com/photo-1519741497674-611481863552">
                </div>

                <span>MARZO 2019</span>
                <h3>El Primer Encuentro</h3>
                <p>En una tarde sencilla comenzó algo que cambiaría nuestras vidas para siempre.</p>
            </div>
        </div>

        <!-- ITEM 2 -->
        <div class="timeline-item">
            <div class="timeline-content">

                <div class="img-box">
                    <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e">
                </div>

                <span>JUNIO 2020</span>
                <h3>Nuestro Primer Viaje</h3>
                <p>Descubrimos el mundo juntos… y también que queríamos recorrerlo siempre unidos.</p>
            </div>
        </div>

        <!-- ITEM 3 -->
        <div class="timeline-item">
            <div class="timeline-content">

                <div class="img-box">
                    <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486">
                </div>

                <span>2026</span>
                <h3>El Gran Día</h3>
                <p>Hoy celebramos el inicio de una nueva etapa llena de amor, sueños y futuro.</p>
            </div>
        </div>

    </div>

</section>
<!-- Evento -->
<section id="evento" class="evento">

    <p class="subtitulo-evento">GUARDA LA FECHA</p>
    <h2 class="titulo-evento">Detalles del Evento</h2>

    <div class="cards-evento">

        <div class="card-evento reveal">
            <div class="icono-evento">📅</div>
            <p class="label">LA FECHA</p>
            <h3>15 · XII · 2026</h3>
            <span>Martes 15 de Diciembre</span>
        </div>

        <div class="card-evento reveal">
            <div class="icono-evento">⏰</div>
            <p class="label">EL HORARIO</p>
            <h3>5:00 PM</h3>
            <span>Ceremonia · Recepción 8:00 PM</span>
        </div>

        <div class="card-evento reveal">
            <div class="icono-evento">📍</div>
            <p class="label">EL LUGAR</p>
            <h3>Ciudad de México</h3>
            <span>Dirección por confirmar</span>

            <a href="https://maps.google.com/?q=Av. Insurgentes Sur 3000 CDMX" target="_blank" class="btn-maps">
                Ver ubicación
            </a>
        </div>

    </div>

    <!-- MAPA -->
    <div class="mapa reveal">
        <iframe 
            src="https://www.google.com/maps?q=Av.%20Insurgentes%20Sur%203000%20CDMX&output=embed"
            loading="lazy">
        </iframe>
    </div>

</section>


        <!-- CEREMONIA -->
<section id="ceremonia" class="ceremonia">

    <p class="subtitulo-ceremonia">MOMENTO ESPECIAL</p>
    <h2 class="titulo-ceremonia">Ceremonia</h2>

    <div class="contenedor-ceremonia">

        <!-- LUGAR DE LA CEREMONIA -->
        <div class="card-ceremonia">
            <div class="imagen-ceremonia">
                <img src="https://images.unsplash.com/photo-1526378724467-3fce8d5f1b9c" alt="Iglesia">
                <div class="overlay-img"></div>
                <h3>Iglesia Santa María</h3>
            </div>
            <div class="info">
                <div class="detalles">
                    <div class="icono"></div>
                    <p>Hora: 16:00 hrs</p>
                </div>
                <div class="detalles">
                    <div class="icono"></div>
                    <p>Dirección: Av. Central 123, Ciudad</p>
                </div>
                <a href="https://www.google.com/maps?q=Av.+Central+123,+Ciudad" target="_blank" class="btn-mapa">Ver Ubicación</a>
            </div>
        </div>

        <!-- SALÓN DE RECEPCIÓN -->
        <div class="card-ceremonia">
            <div class="imagen-ceremonia">
                <img src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba" alt="Salón">
                <div class="overlay-img"></div>
                <h3>Salón Gran Evento</h3>
            </div>
            <div class="info">
                <div class="detalles">
                    <div class="icono"></div>
                    <p>Hora: 18:00 hrs</p>
                </div>
                <div class="detalles">
                    <div class="icono"></div>
                    <p>Dirección: Blvd. Principal 456, Ciudad</p>
                </div>
                <a href="https://www.google.com/maps?q=Blvd.+Principal+456,+Ciudad" target="_blank" class="btn-mapa">Ver Ubicación</a>
            </div>
        </div>

    </div>
</section>

<!-- VESTIMENTA -->
<section id="vestimenta" class="vestimenta">

    <p class="subtitulo-vestimenta">LUCE ESPLÉNDIDO</p>
    <h2 class="titulo-vestimenta">Código de Vestimenta</h2>

    <div class="tipo-vestimenta">FORMAL / ETIQUETA</div>

    <div class="contenedor-vestimenta">

        <!-- CABALLEROS -->
        <div class="card-vestimenta">
            <h3>Caballeros</h3>

            <ul>
                <li>Traje de etiqueta o smoking</li>
                <li>Corbata o moño</li>
                <li>Camisa en tonos claros</li>
                <li>Zapatos formales</li>
            </ul>

            <div class="mini-colores">
                <span style="background:#bfae98;"></span>
                <span style="background:#7f9276;"></span>
                <span style="background:#c8a97e;"></span>
            </div>
        </div>

        <!-- DAMAS -->
        <div class="card-vestimenta">
            <h3>Damas</h3>

            <ul>
                <li>Vestido largo o cóctel</li>
                <li>Tacones o flats elegantes</li>
                <li>Joyería discreta</li>
            </ul>

            <div class="mini-colores">
                <span style="background:#e8dccb;"></span>
                <span style="background:#d6c3c0;"></span>
                <span style="background:#a8b5a2;"></span>
            </div>
        </div>

    </div>

    <!-- 🔥 PALETA GRANDE Y VISIBLE -->
    <div class="paleta-pro">

        <p>PALETA DE COLORES SUGERIDA</p>

        <div class="colores-pro">

            <div class="color-item">
                <span style="background:#e8dccb;"></span>
                <p>Nude / Crema</p>
            </div>

            <div class="color-item">
                <span style="background:#c8a97e;"></span>
                <p>Dorado suave</p>
            </div>

            <div class="color-item">
                <span style="background:#a8b5a2;"></span>
                <p>Verde salvia</p>
            </div>

            <div class="color-item">
                <span style="background:#d6c3c0;"></span>
                <p>Rosa polvo</p>
            </div>

            <div class="color-item">
                <span style="background:#bfae98;"></span>
                <p>Champagne</p>
            </div>

            <div class="color-item">
                <span style="background:#7f9276;"></span>
                <p>Verde elegante</p>
            </div>

        </div>

    </div>

</section>

<!-- REGALOS -->
<section id="regalos" class="regalos">

    <p class="subtitulo-regalos">CON CARIÑO</p>
    <h2 class="titulo-regalos">Mesa de Regalos</h2>

    <p class="texto-regalos">
        Tu presencia es nuestro mejor regalo, pero si deseas tener un detalle con nosotros,
        puedes elegir alguna de las siguientes opciones.
    </p>

    <div class="opciones-regalo">

        <div class="card-regalo">
            <h3>🎁 Lista de Regalos</h3>
            <p>Muy pronto compartiremos nuestra lista en tienda para que puedas elegir fácilmente.</p>
        </div>

        <div class="card-regalo">
            <h3>💳 Transferencia</h3>
            <p>Si prefieres, puedes apoyarnos con transferencia. Los datos estarán disponibles pronto.</p>
        </div>

    </div>

</section>

<!-- GALERÍA -->
<section id="galeria" class="galeria">

    <p class="subtitulo-galeria">NUESTROS MOMENTOS</p>
    <h2 class="titulo-galeria">Galería</h2>

    <div class="carousel">

        <button class="btn prev">&#10094;</button>

        <div class="carousel-track">
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552">
            <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb">
            <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc">
        </div>

        <button class="btn next">&#10095;</button>

    </div>

</section>

<!-- RSVP -->
<!-- PANEL DE ADMINISTRACIÓN -->
<section id="rsvpAdmin">
  <h2>Agregar Invitado Principal <span class="add-btn" id="btnAgregar">+</span></h2>
  <form id="formAdmin">
    <input type="text" placeholder="Nombre del invitado principal" required>
	<input type="text" id="telefonoInvitado" placeholder="Número WhatsApp (ej: 6566028715)" required>
<button type="submit" id="btnAgregarInvitado">Agregar Invitado</button>
  </form>
</section>

<!-- ESTADÍSTICAS -->
 <section class="stats">
        <div class="card total"><h3>Total</h3><span class="total">0</span></div>
        <div class="card asistira"><h3>Asistirá</h3><span class="asistira-count">0</span></div>
        <div class="card pendiente"><h3>Pendiente</h3><span class="pendiente-count">0</span></div>
        <div class="card noasistira"><h3>No asistirá</h3><span class="noasistira-count">0</span></div>
    </section>

<!-- LISTA DE INVITADOS -->
<section id="invitados" class="invitados">
  <h2>Lista de Invitados</h2>
  <input type="text" id="buscar" placeholder="Buscar invitado...">
  <ul id="listaInvitados"></ul>
  <button id="exportarExcel">Exportar a Excel</button>
</section>

<!-- FORMULARIO INVITADO -->
<section class="formularios">
        <form id="formAdmin">
            <h2>Agregar Invitado (Admin)</h2>
            <input type="text" name="nombre" placeholder="Nombre completo">
            <input type="text" name="telefono" placeholder="WhatsApp">
            <button type="submit">Agregar & Enviar Link</button>
        </form>

        <form id="formRSVP">
            <h2>Confirmar Asistencia</h2>
            <input type="text" name="nombre" placeholder="Nombre completo">
            <input type="number" name="numAcompanantes" placeholder="Número de acompañantes">
            <input type="text" name="nombresAcompanantes" placeholder="Nombres de acompañantes">
            <select name="asistencia">
                <option value="">Selecciona asistencia</option>
                <option value="Asistirá">Asistirá</option>
                <option value="Pendiente">Pendiente</option>
                <option value="No asistirá">No asistirá</option>
            </select>
            <button type="submit">Enviar RSVP</button>
        </form>
    </section>
	
<div class="stats" style="max-width:600px;margin:auto;">
    <span class="total"></span> |
    <span class="asistira-count"></span> |
    <span class="pendiente-count"></span> |
    <span class="noasistira-count"></span>
</div>

<!-- CONTACTO -->
<section id="contacto" class="contacto">
    <p class="subtitulo-contacto">CONTACTO</p>
    <h2 class="titulo-contacto">¿Necesitas Ayuda?</h2>
    <div class="info-contacto">
        <p>Teléfono: <a href="tel:+526566028715">656-602-8715</a></p>
        <p>Email: <a href="mailto:gae7delg6@gamil.com">gae7delg6@gamil.com</a></p>
        <p>WhatsApp: <a href="https://wa.me/526566028715" target="_blank">Enviar mensaje</a></p>
    </div>
</section>

<!-- FOOTER -->
<footer>
    <p>© 2026 Nuestra Boda</p>
</footer>


<script src="script.js"></script>
</body>
</html>

/* ================= RESET ================= */
* { margin: 0; padding: 0; box-sizing: border-box; }

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.6;
    color: #444;
    background: #faf8f6;
}

/* ================= GENERAL ================= */
section {
    scroll-margin-top: 100px;
    padding: 120px 20px;
    text-align: center;

}
/* ================= NAVBAR PREMIUM ================= */

.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 18px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;

    /* EFECTO GLASS */
    background: rgba(20, 20, 20, 0.35);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255,255,255,0.1);

    transition: all 0.3s ease;
}

/* EFECTO AL BAJAR */
.navbar.scrolled {
    background: rgba(20, 20, 20, 0.85);
    padding: 12px 60px;
}

/* LOGO */
.logo {
    font-size: 22px;
    color: #fff;
    letter-spacing: 2px;
}

/* MENU */
.menu {
    display: flex;
    align-items: center;
}

.menu a {
    margin: 0 18px;
    text-decoration: none;
    color: #fff;
    font-size: 12px;
    letter-spacing: 2px;
    position: relative;
    transition: 0.3s;
}

/* EFECTO LINEA PRO */
.menu a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0%;
    height: 1px;
    background: #d4af7f;
    transition: 0.3s;
}

.menu a:hover::after {
    width: 100%;
}

.menu a:hover {
    color: #d4af7f;
}

/* BOTON NAV */
.btn-nav {
    padding: 10px 22px;
    background: linear-gradient(135deg, #d4af7f, #b89660);
    color: white;
    border-radius: 25px;
    font-size: 12px;
    letter-spacing: 1px;
    text-decoration: none;

    box-shadow: 0 8px 20px rgba(212,175,127,0.3);
    transition: all 0.3s ease;
}

.btn-nav:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(212,175,127,0.5);
}

/* ================= HERO PREMIUM ================= */

.hero {
    height: 100vh;
    position: relative;

    background: url('https://images.unsplash.com/photo-1522673607200-164d1b6ce486') center/cover no-repeat;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

/* OVERLAY PRO */
.overlay {
    position: absolute;
    width: 100%;
    height: 100%;

    background: linear-gradient(
        rgba(0,0,0,0.6),
        rgba(0,0,0,0.4)
    );
}

/* CONTENIDO */
.contenido {
    position: relative;
    color: white;
    max-width: 850px;
    padding: 20px;
}

/* SUBTITULO */
.subtitulo {
    letter-spacing: 4px;
    font-size: 12px;
    margin-bottom: 20px;
    opacity: 0.8;
}

/* NOMBRES */
.nombres {
    font-family: 'Great Vibes', cursive;
    font-size: 90px;
    color: #d4af7f;
    margin-bottom: 10px;

    text-shadow: 0 5px 20px rgba(0,0,0,0.5);
}

/* FECHA */
.fecha {
    margin-top: 10px;
    font-size: 20px;
    letter-spacing: 1px;
}

/* LUGAR */
.lugar {
    margin-bottom: 25px;
    opacity: 0.9;
}

/* FRASE */
.frase {
    font-style: italic;
    font-size: 15px;
    margin: 25px 0;
    opacity: 0.8;
}

/* CONTADOR */
.contador {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 35px 0;
}

.box {
    background: rgba(255,255,255,0.08);
    padding: 18px;
    border-radius: 15px;
    width: 85px;

    backdrop-filter: blur(6px);
    border: 1px solid rgba(255,255,255,0.1);
}

.box span {
    font-size: 24px;
    font-weight: 600;
}

.box p {
    font-size: 10px;
    letter-spacing: 2px;
    margin-top: 5px;
}

/* BOTON PRINCIPAL */
.btn-main {
    display: inline-block;
    padding: 15px 35px;
    background: linear-gradient(135deg, #d4af7f, #b89660);
    color: white;
    text-decoration: none;
    border-radius: 30px;
    font-size: 13px;
    letter-spacing: 1px;

    box-shadow: 0 10px 25px rgba(212,175,127,0.3);
    transition: all 0.3s ease;
}

.btn-main:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(212,175,127,0.5);
}

/* ================= RESPONSIVE ================= */

@media (max-width: 768px) {

    .navbar {
        padding: 15px 20px;
    }

    .menu {
        display: none; /* luego si quieres te hago menú hamburguesa */
    }

    .nombres {
        font-size: 55px;
    }

    .contador {
        flex-wrap: wrap;
    }
}
/* ================= CARDS ================= */
.card,
.card-evento,
.card-ceremonia,
.card-vestimenta {
    box-shadow: 0 15px 40px rgba(0,0,0,0.08);
    transition: 0.3s;
}

.card:hover,
.card-evento:hover,
.card-ceremonia:hover,
.card-vestimenta:hover {
    transform: translateY(-6px);
}

/* ================= HISTORIA ULTRA PRO ================= */

.historia {
    background: linear-gradient(#f8f4f0, #f3ebe3);
    padding: 160px 20px;
    text-align: center;
}

/* TITULOS */
.subtitulo-historia {
    letter-spacing: 5px;
    font-size: 11px;
    color: #b89b72;
    margin-bottom: 10px;
}

.titulo-historia {
    font-family: 'Great Vibes', cursive;
    font-size: 70px;
    color: #3e342b;
    margin-bottom: 100px;
}

/* CONTENEDOR */
.timeline-pro {
    position: relative;
    max-width: 1000px;
    margin: auto;
}

/* LINEA CENTRAL PREMIUM */
.timeline-pro::before {
    content: "";
    position: absolute;
    left: 50%;
    width: 2px;
    height: 100%;
    background: linear-gradient(
        to bottom,
        transparent,
        #d4af7f,
        #c19b6b,
        transparent
    );
    transform: translateX(-50%);
}

/* ITEM */
.timeline-item {
    position: relative;
    width: 50%;
    padding: 40px 60px;
}

/* IZQUIERDA */
.timeline-item:nth-child(odd) {
    left: 0;
    text-align: right;
}

/* DERECHA */
.timeline-item:nth-child(even) {
    left: 50%;
    text-align: left;
}

/* PUNTO ELEGANTE */
.timeline-item::before {
    content: "";
    position: absolute;
    top: 40px;
    right: -10px;
    width: 18px;
    height: 18px;
    background: radial-gradient(circle, #d4af7f, #b89660);
    border-radius: 50%;
    box-shadow: 0 0 0 6px rgba(212,175,127,0.15);
}

.timeline-item:nth-child(even)::before {
    left: -10px;
}

/* TARJETA */
.timeline-content {
    background: rgba(255,255,255,0.9);
    padding: 30px;
    border-radius: 20px;

    /* EFECTO GLASS SUAVE */
    backdrop-filter: blur(6px);

    box-shadow: 0 20px 60px rgba(0,0,0,0.06);
    transition: all 0.4s ease;
}

/* HOVER PREMIUM */
.timeline-content:hover {
    transform: translateY(-10px) scale(1.01);
    box-shadow: 0 30px 80px rgba(0,0,0,0.1);
}

/* TEXTO */
.timeline-content span {
    font-size: 11px;
    color: #b89b72;
    letter-spacing: 3px;
}

.timeline-content h3 {
    margin: 12px 0;
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    color: #2f2721;
}

.timeline-content p {
    font-size: 14px;
    color: #555;
    line-height: 1.6;
}
/* IMAGEN EN TIMELINE */
.img-box {
    width: 100%;
    height: 180px;
    border-radius: 15px;
    overflow: hidden;
    margin-bottom: 15px;
}

.img-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.4s ease;
}

/* EFECTO HOVER PRO */
.timeline-content:hover .img-box img {
    transform: scale(1.08);
}

/* SOMBRA MÁS PROFESIONAL */
.timeline-content {
    overflow: hidden;
}

/* OPCIONAL: BORDE SUAVE */
.img-box img {
    border-bottom: 1px solid rgba(0,0,0,0.05);
}
/* ================= RESPONSIVE ================= */

@media (max-width: 768px) {

    .titulo-historia {
        font-size: 50px;
    }

    .timeline-item {
        width: 100%;
        left: 0 !important;
        text-align: left;
        padding: 20px 20px 20px 70px;
    }

    .timeline-pro::before {
        left: 30px;
    }

    .timeline-item::before {
        left: 20px !important;
    }
}


/* ================= EVENTO ================= */
/* ================= EVENTO PREMIUM ================= */

.evento {
    background: linear-gradient(#f8f4f0, #f3ebe3);
    padding: 140px 20px;
    text-align: center;
}

/* TITULOS */
.subtitulo-evento {
    letter-spacing: 5px;
    font-size: 11px;
    color: #b89b72;
}

.titulo-evento {
    font-family: 'Great Vibes', cursive;
    font-size: 65px;
    color: #3e342b;
    margin-bottom: 70px;
}

/* CONTENEDOR */
.cards-evento {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
}

/* CARD PREMIUM */
.card-evento {
    background: rgba(255,255,255,0.85);
    padding: 40px 30px;
    border-radius: 25px;
    width: 280px;

    backdrop-filter: blur(6px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.06);

    transition: all 0.4s ease;
}

/* HOVER */
.card-evento:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 30px 80px rgba(0,0,0,0.1);
}

/* ICONO */
.icono-evento {
    font-size: 28px;
    margin-bottom: 15px;
}

/* TEXTO */
.label {
    font-size: 11px;
    letter-spacing: 3px;
    color: #b89b72;
}

.card-evento h3 {
    margin: 10px 0;
    font-family: 'Playfair Display', serif;
    color: #2f2721;
}

.card-evento span {
    font-size: 13px;
    color: #777;
}

/* MAPA */
.mapa {
    margin-top: 70px;
    display: flex;
    justify-content: center;
}

.mapa iframe {
    width: 90%;
    max-width: 1000px;
    height: 380px;
    border-radius: 20px;
    border: none;

    box-shadow: 0 20px 60px rgba(0,0,0,0.08);
}

/* ================= RESPONSIVE ================= */

@media (max-width: 768px) {

    .titulo-evento {
        font-size: 50px;
    }

    .card-evento {
        width: 90%;
    }
}
/* ================= CEREMONIA NIVEL AGENCIA ================= */

/* ================== CEREMONIA ================== */
.ceremonia {
    background: #fdfaf6;
    padding: 120px 20px;
    text-align: center;
    border-top: 1px solid rgba(0,0,0,0.05);
    margin-bottom: 100px;
}

.subtitulo-ceremonia {
    letter-spacing: 5px;
    font-size: 12px;
    color: #b89b72;
}

.titulo-ceremonia {
    font-family: 'Great Vibes', cursive;
    font-size: 60px;
    color: #3e342b;
    margin-bottom: 60px;
}

.contenedor-ceremonia {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
}

/* CARD */
.card-ceremonia {
    background: #fff;
    border-radius: 20px;
    width: 400px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    transition: 0.4s;
}

.card-ceremonia:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}

/* IMAGEN */
.imagen-ceremonia {
    position: relative;
    height: 250px;
}

.imagen-ceremonia img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.4s;
}

.imagen-ceremonia:hover img {
    transform: scale(1.05);
}

.overlay-img {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
}

.imagen-ceremonia h3 {
    position: absolute;
    bottom: 15px;
    left: 20px;
    color: white;
    font-family: 'Great Vibes', cursive;
    font-size: 28px;
}

/* INFO */
.info {
    padding: 25px;
    text-align: left;
}

.detalles {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0;
    font-size: 14px;
    color: #b89b72;
}

.icono {
    width: 20px;
    height: 20px;
    background: #d4af7f;
    border-radius: 50%;
}

/* BOTÓN UBICACIÓN */
.btn-mapa {
    display: inline-block;
    margin-top: 15px;
    padding: 12px 25px;
    background: linear-gradient(135deg, #d4af7f, #b89660);
    color: white;
    text-decoration: none;
    border-radius: 25px;
    transition: 0.3s;
    text-align: center;
}

.btn-mapa:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(212,175,127,0.5);
}

/* ================= VESTIMENTA NIVEL AGENCIA ================= */

.vestimenta {
    padding: 150px 20px;
    text-align: center;
    background: linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.92)),
                url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9') center/cover no-repeat;
}

/* TITULOS */
.subtitulo-vestimenta {
    letter-spacing: 5px;
    font-size: 11px;
    color: #b89b72;
}

.titulo-vestimenta {
    font-family: 'Great Vibes', cursive;
    font-size: 70px;
    color: #3e342b;
    margin-bottom: 10px;
}

/* ETIQUETA */
.tipo-vestimenta {
    display: inline-block;
    padding: 12px 35px;
    background: linear-gradient(135deg, #d4af7f, #b89660);
    color: white;
    border-radius: 30px;
    margin: 25px 0 70px;
    font-size: 13px;
    letter-spacing: 2px;
    box-shadow: 0 10px 25px rgba(212,175,127,0.3);
}

/* CONTENEDOR */
.contenedor-vestimenta {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
}

/* CARDS */
.card-vestimenta {
    background: white;
    padding: 35px;
    border-radius: 25px;
    width: 340px;
    text-align: left;

    box-shadow: 0 20px 50px rgba(0,0,0,0.08);
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
}

/* LINEA PREMIUM */
.card-vestimenta::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #d4af7f, transparent);
    border-radius: 25px 25px 0 0;
}

/* HOVER */
.card-vestimenta:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 60px rgba(0,0,0,0.12);
}

/* TITULO */
.card-vestimenta h3 {
    font-family: 'Playfair Display', serif;
    margin-bottom: 20px;
    font-size: 24px;
    color: #2f2721;
}

/* LISTA */
.card-vestimenta ul {
    list-style: none;
    padding: 0;
}

.card-vestimenta li {
    margin-bottom: 12px;
    font-size: 14px;
    color: #555;
    position: relative;
    padding-left: 18px;
}

/* ICONO LISTA */
.card-vestimenta li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #d4af7f;
}

/* MINI COLORES */
.mini-colores {
    display: flex;
    gap: 10px;
    margin-top: 20px;
}

.mini-colores span {
    width: 35px;
    height: 35px;
    border-radius: 50%;

    border: 3px solid white;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);

    transition: 0.3s;
}

/* HOVER COLORES */
.mini-colores span:hover {
    transform: scale(1.2);
}

/* PALETA */
.paleta {
    background: white;
    margin-top: 80px;
    padding: 40px;
    border-radius: 25px;
    display: inline-block;

    box-shadow: 0 15px 40px rgba(0,0,0,0.08);
}

.paleta p {
    margin-bottom: 25px;
    color: #b89b72;
    font-size: 12px;
    letter-spacing: 3px;
}

/* COLORES */
.colores {
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
    justify-content: center;
}

.color {
    text-align: center;
}

.color span {
    display: block;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin: auto;

    border: 4px solid white;
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);

    transition: 0.3s;
}

.color span:hover {
    transform: scale(1.15);
}

.color p {
    font-size: 12px;
    margin-top: 10px;
    color: #444;
}

/* RESPONSIVE */
@media (max-width: 768px) {

    .titulo-vestimenta {
        font-size: 50px;
    }

    .card-vestimenta {
        width: 90%;
    }

    .color span {
        width: 55px;
        height: 55px;
    }
}

/* ================= REGALOS NIVEL PREMIUM ================= */

.regalos {
    padding: 180px 20px 200px; /* 🔥 MÁS ESPACIO ARRIBA Y ABAJO */
    text-align: center;

    background: linear-gradient(#f8f4f0, #f3ebe3);

    position: relative;
}

/* SEPARADOR CON GALERIA (detalle PRO) */
.regalos::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    width: 60%;
    height: 1px;
    background: linear-gradient(to right, transparent, #d4af7f, transparent);
}

/* TITULOS */
.subtitulo-regalos {
    letter-spacing: 5px;
    font-size: 11px;
    color: #b89b72;
}

.titulo-regalos {
    font-family: 'Great Vibes', cursive;
    font-size: 75px;
    color: #3e342b;
    margin-bottom: 20px;
}

/* TEXTO */
.texto-regalos {
    max-width: 650px;
    margin: 20px auto 60px;
    color: #666;
    font-size: 15px;
    line-height: 1.7;
}

/* CONTENEDOR */
.opciones-regalo {
    display: flex;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
}

/* CARDS */
.card-regalo {
    background: white;
    padding: 40px;
    border-radius: 30px;
    width: 340px;

    box-shadow: 0 25px 70px rgba(0,0,0,0.08);
    transition: all 0.4s ease;

    position: relative;
    overflow: hidden;
}

/* LINEA SUPERIOR */
.card-regalo::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: linear-gradient(90deg, #d4af7f, transparent);
}

/* HOVER */
.card-regalo:hover {
    transform: translateY(-12px);
    box-shadow: 0 30px 80px rgba(0,0,0,0.12);
}

/* TITULO */
.card-regalo h3 {
    font-family: 'Playfair Display', serif;
    margin-bottom: 15px;
    font-size: 20px;
    color: #2f2721;
}

/* TEXTO */
.card-regalo p {
    font-size: 14px;
    color: #555;
    line-height: 1.6;
}

/* ================= GALERIA NIVEL AGENCIA ================= */

.galeria {
    padding: 180px 20px; /* 🔥 separación real */
    text-align: center;
    background: #fff;
}

/* TITULOS */
.subtitulo-galeria {
    letter-spacing: 5px;
    font-size: 11px;
    color: #b89b72;
}

.titulo-galeria {
    font-family: 'Great Vibes', cursive;
    font-size: 70px;
    color: #3e342b;
    margin-bottom: 60px;
}

/* CARRUSEL */
.carousel {
    position: relative;
    max-width: 900px;
    margin: auto;
    overflow: hidden;
    border-radius: 25px;

    box-shadow: 0 25px 70px rgba(0,0,0,0.1);
}

/* TRACK */
.carousel-track {
    display: flex;
    transition: transform 0.5s ease;
}

/* IMAGENES */
.carousel-track img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    flex-shrink: 0;

    transition: 0.4s;
}

/* HOVER SUAVE */
.carousel-track img:hover {
    transform: scale(1.03);
}

/* BOTONES */
.btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    background: rgba(0,0,0,0.4);
    color: white;
    border: none;

    font-size: 25px;
    padding: 10px 15px;
    cursor: pointer;

    border-radius: 50%;
    transition: 0.3s;
}

.btn:hover {
    background: rgba(0,0,0,0.7);
}

.prev {
    left: 15px;
}

.next {
    right: 15px;
}

/* RESPONSIVE */
@media (max-width: 768px) {

    .titulo-galeria {
        font-size: 50px;
    }

    .carousel-track img {
        height: 300px;
    }
}
.carousel {
    position: relative;
    max-width: 900px;
    margin: auto;
    overflow: hidden;
    border-radius: 20px;
}

/* 🔥 CLAVE */
.carousel-track {
    display: flex;
    width: 100%;
}

.carousel-track img {
    width: 100%;
    height: 500px;
    object-fit: cover;

    flex: 0 0 100%; /* 🔥 ESTO ARREGLA TODO */
}

/* ================= RSVP ================= */
/* ================= RSVP NIVEL PREMIUM ================= */
/* ================== GENERAL ================== */
body {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.6;
    background: #fff;
    color: #333;
}

section {
    padding: 120px 20px;
}

/* ================== RSVP ================== */
.rsvp {
    background: #fdfaf6;
    text-align: center;
    border-top: 1px solid rgba(0,0,0,0.05);
    margin-bottom: 100px;
}

.subtitulo-rsvp {
    letter-spacing: 5px;
    font-size: 11px;
    color: #b89b72;
}

.titulo-rsvp {
    font-family: 'Great Vibes', cursive;
    font-size: 60px;
    color: #3e342b;
    margin-bottom: 15px;
}

.texto-rsvp {
    margin-bottom: 30px;
    color: #666;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

#formRSVP {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 400px;
    margin: auto;
}

#formRSVP input, #formRSVP select {
    padding: 12px 15px;
    border-radius: 10px;
    border: 1px solid #ddd;
    outline: none;
    font-size: 14px;
    transition: 0.3s;
}

#formRSVP input:focus, #formRSVP select:focus {
    border-color: #d4af7f;
    box-shadow: 0 0 10px rgba(212,175,127,0.3);
}

.btn-rsvp {
    background: linear-gradient(135deg, #d4af7f, #b89660);
    color: #fff;
    border: none;
    padding: 14px 25px;
    border-radius: 25px;
    cursor: pointer;
    font-size: 16px;
    transition: 0.3s;
}

.btn-rsvp:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(212,175,127,0.5);
}

/* ================== LISTA DE INVITADOS ================== */
.invitados {
    background: #fff;
    text-align: center;
    border-top: 1px solid rgba(0,0,0,0.05);
    margin-bottom: 100px;
}

.subtitulo-invitados {
    letter-spacing: 5px;
    font-size: 11px;
    color: #b89b72;
}

.titulo-invitados {
    font-family: 'Great Vibes', cursive;
    font-size: 60px;
    color: #3e342b;
    margin-bottom: 15px;
}

.texto-invitados {
    margin-bottom: 30px;
    color: #666;
}

#buscar {
    padding: 14px 20px;
    width: 280px;
    border-radius: 25px;
    border: 1px solid #ddd;
    outline: none;
    margin-bottom: 30px;
    transition: 0.3s;
}

#buscar:focus {
    border-color: #d4af7f;
    box-shadow: 0 0 10px rgba(212,175,127,0.3);
}

#listaInvitados {
    list-style: none;
    max-width: 400px;
    margin: auto;
}

#listaInvitados li {
    padding: 12px;
    margin: 8px 0;
    background: #f9f6f2;
    border-radius: 12px;
    transition: 0.3s;
}

#listaInvitados li:hover {
    background: #efe6de;
    transform: translateY(-2px);
}

.btn-excel {
    margin-top: 40px;
    padding: 14px 25px;
    background: linear-gradient(135deg, #d4af7f, #b89660);
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 10px 25px rgba(212,175,127,0.3);
}

.btn-excel:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(212,175,127,0.5);
}

/* ================== CONTACTO ================== */
.contacto {
    background: #fdfaf6;
    text-align: center;
    border-top: 1px solid rgba(0,0,0,0.05);
    margin-bottom: 100px;
}

.subtitulo-contacto {
    letter-spacing: 5px;
    font-size: 11px;
    color: #b89b72;
}

.titulo-contacto {
    font-family: 'Great Vibes', cursive;
    font-size: 60px;
    color: #3e342b;
    margin-bottom: 15px;
}

.info-contacto p {
    font-size: 16px;
    margin: 8px 0;
}

.info-contacto a {
    color: #d4af7f;
    text-decoration: none;
    transition: 0.3s;
}

.info-contacto a:hover {
    text-decoration: underline;
}

/* ================== FOOTER ================== */
footer {
    background: #3e342b;
    color: #fff;
    text-align: center;
    padding: 40px 20px;
    font-size: 14px;
    letter-spacing: 1px;
}

/* ================= FORMULARIOS ================= */
input,
select,
textarea {
    padding: 12px;
    margin: 8px 0;
    width: 80%;
    max-width: 400px;
    border-radius: 10px;
    border: 1px solid #ccc;
    font-size: 16px;
}

textarea {
    height: 80px;
    resize: none;
}

button {
    padding: 12px 25px;
    background: #d4af7f;
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
}

button:hover {
    background: #b89566;
}

/* ================= LISTA DE INVITADOS ================= */

#listaInvitados li {
    padding: 12px 20px;
    margin: 10px auto;
    max-width: 850px;
    border-radius: 10px;
    font-size: 16px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
}

.asistira {
    background: #d4edda;
    color: #155724;
}

.no-asistira {
    background: #f8d7da;
    color: #721c24;
}

.pendiente {
    background: #fff3cd;
    color: #856404;
}

.qr-container {
    margin-left: 15px;
}

/* ================= ESTADÍSTICAS ================= */
.stats {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: bold;
    flex-wrap: wrap;
}

.stats div {
    padding: 10px 20px;
    border-radius: 10px;
    color: white;
    min-width: 120px;
}

.total {
    background: white;
    color: black;
    border: 2px solid #ccc;
}

.asistira-count {
    background: #28a745;
}

.pendiente-count {
    background: #ffc107;
    color: #333;
}

.noasistira-count {
    background: #dc3545;
}

/* ================= BOTÓN AGREGAR INVITADO ================= */
.add-btn {
    padding: 10px 15px;
    background: #4a3f35;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    font-size: 20px;
    margin-left: 10px;
}

/* ================= QR ================= */
#canvasQR {
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
}

#descargarQR {
    display: block;
    margin-top: 10px;
    padding: 8px 15px;
    background: #4a3f35;
    color: white;
    border-radius: 10px;
    text-decoration: none;
}

/* ================= ANIMACIONES SCROLL ================= */
.card, .invitado-card { transform:translateY(20px); opacity:0; transition:all 0.5s ease; }

/* Colores según asistencia */
.asistira {
    background-color: #d4edda; /* verde claro */
    color: #155724; /* texto verde oscuro */
    padding: 5px 10px;
    border-radius: 5px;
}

.pendiente {
    background-color: #fff3cd; /* amarillo claro */
    color: #856404; /* texto amarillo oscuro */
    padding: 5px 10px;
    border-radius: 5px;
}

.no-asistira {
    background-color: #f8d7da; /* rojo claro */
    color: #721c24; /* texto rojo oscuro */
    padding: 5px 10px;
    border-radius: 5px;
}

// =================== VARIABLES ===================
const listaInvitados = document.getElementById("listaInvitados");
const buscarInput = document.getElementById("buscar");
const exportarExcelBtn = document.getElementById("exportarExcel");

const totalEl = document.querySelector(".total");
const asistiraEl = document.querySelector(".asistira-count");
const pendienteEl = document.querySelector(".pendiente-count");
const noasistiraEl = document.querySelector(".noasistira-count");

// Tu HTML tiene 2 formularios con id="formAdmin", así que los tomamos todos
const formAdminElements = document.querySelectorAll("#formAdmin");
const formRSVP = document.getElementById("formRSVP");

let invitados = JSON.parse(localStorage.getItem("invitados")) || [];

// =================== FUNCIONES ===================
function guardarInvitados() {
    localStorage.setItem("invitados", JSON.stringify(invitados));
}

function limpiarTelefono(numero) {
    let telefono = String(numero || "").replace(/\D/g, "");

    // Si viene con 52 al inicio, lo quitamos para no duplicarlo
    if (telefono.startsWith("52")) {
        telefono = telefono.slice(2);
    }

    return telefono;
}

function enviarWhatsApp(numero, mensaje) {
    const telefonoLimpio = limpiarTelefono(numero);

    if (!telefonoLimpio) {
        alert("Número de WhatsApp inválido.");
        return;
    }

    const url = `https://wa.me/52${telefonoLimpio}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}

function actualizarStats() {
    const total = invitados.length;
    const asistira = invitados.filter(i => i.asistencia === "Asistirá").length;
    const pendiente = invitados.filter(i => i.asistencia === "Pendiente" || !i.asistencia).length;
    const noasistira = invitados.filter(i => i.asistencia === "No asistirá").length;

    if (totalEl) totalEl.textContent = total;
    if (asistiraEl) asistiraEl.textContent = asistira;
    if (pendienteEl) pendienteEl.textContent = pendiente;
    if (noasistiraEl) noasistiraEl.textContent = noasistira;
}

function obtenerClaseAsistencia(asistencia) {
    if (asistencia === "Asistirá") return "asistira";
    if (asistencia === "No asistirá") return "no-asistira";
    return "pendiente";
}

function crearBotonEliminar(inv, li) {
    const btnEliminar = document.createElement("button");
    btnEliminar.className = "btn-eliminar";
    btnEliminar.textContent = "Eliminar";
    btnEliminar.style.marginLeft = "10px";

    btnEliminar.addEventListener("click", () => {
        const confirmado = confirm(`¿Deseas eliminar a ${inv.nombre}?`);
        if (!confirmado) return;

        invitados = invitados.filter(i => i !== inv);
        guardarInvitados();
        li.remove();
        actualizarStats();
    });

    return btnEliminar;
}

function agregarInvitadoALista(inv, linkEnviado = false) {
    if (!listaInvitados) return;

    const li = document.createElement("li");
    const claseAsistencia = obtenerClaseAsistencia(inv.asistencia);

    li.className = claseAsistencia;
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    li.style.gap = "10px";

    const textoBase = `${inv.nombre} - ${inv.asistencia || "Pendiente"}`;
    const acomp = inv.numAcompanantes ? ` - Acompañantes: ${inv.numAcompanantes}` : " - Acompañantes: 0";
    const textoLink = linkEnviado && inv.telefono ? " - Link enviado" : "";

    const span = document.createElement("span");
    span.textContent = `${textoBase}${acomp}${textoLink}`;

    const botones = document.createElement("div");
    botones.style.display = "flex";
    botones.style.alignItems = "center";

    const btnEliminar = crearBotonEliminar(inv, li);

    botones.appendChild(btnEliminar);
    li.appendChild(span);
    li.appendChild(botones);

    listaInvitados.appendChild(li);
    actualizarStats();
}

function renderizarLista() {
    if (!listaInvitados) return;

    listaInvitados.innerHTML = "";
    invitados.forEach(inv => agregarInvitadoALista(inv));
}

// Extrae datos de un form aunque no tenga name en los inputs
function obtenerDatosAdmin(form) {
    const inputs = form.querySelectorAll("input");
    const nombre = (form.querySelector('input[name="nombre"]')?.value || inputs[0]?.value || "").trim();
    const telefono =
        (form.querySelector('input[name="telefono"]')?.value ||
        form.querySelector("#telefonoInvitado")?.value ||
        inputs[1]?.value ||
        "").trim();

    return { nombre, telefono };
}

// =================== CARGAR INVITADOS EXISTENTES ===================
renderizarLista();
actualizarStats();

// =================== FORMULARIO ADMIN 1 Y 2 ===================
formAdminElements.forEach((form) => {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const { nombre, telefono } = obtenerDatosAdmin(this);

        if (!nombre || !telefono) {
            alert("Completa todos los campos");
            return;
        }

        const nuevoInvitado = {
            nombre,
            telefono,
            asistencia: "Pendiente",
            numAcompanantes: 0,
            nombresAcompanantes: ""
        };

        invitados.push(nuevoInvitado);
        guardarInvitados();
        agregarInvitadoALista(nuevoInvitado, true);

        const mensaje = `Hola ${nombre}, te comparto el enlace para confirmar asistencia a mi boda: ${window.location.href}`;
        enviarWhatsApp(telefono, mensaje);

        this.reset();
    });
});

// =================== FORMULARIO RSVP ===================
if (formRSVP) {
    formRSVP.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = (this.querySelector('input[name="nombre"]')?.value || "").trim();
        const asistencia = (this.querySelector('select[name="asistencia"]')?.value || "").trim();
        const numAcompanantes = (this.querySelector('input[name="numAcompanantes"]')?.value || "0").trim();
        const nombresAcompanantes = (this.querySelector('input[name="nombresAcompanantes"]')?.value || "").trim();

        // En tu HTML no existe input de correo, así que lo dejamos opcional
        const correo = (this.querySelector('input[name="correo"]')?.value || "").trim();

        if (!nombre || !asistencia) {
            alert("Completa los campos obligatorios");
            return;
        }

        const invitadoRSVP = {
            nombre,
            asistencia,
            numAcompanantes: Number(numAcompanantes) || 0,
            nombresAcompanantes
        };

        invitados.push(invitadoRSVP);
        guardarInvitados();
        agregarInvitadoALista(invitadoRSVP);

        const numeroOrganizador = "5216566028715";
        let mensaje = `Hola, soy ${nombre}.\nRSVP: ${asistencia}`;

        if (correo) {
            mensaje += `\nEmail: ${correo}`;
        }

        mensaje += `\nNúmero de acompañantes: ${numAcompanantes || 0}`;

        if (nombresAcompanantes) {
            mensaje += `\nNombres de acompañantes: ${nombresAcompanantes}`;
        }

        enviarWhatsApp(numeroOrganizador, mensaje);

        this.reset();
    });
}

// =================== BUSCADOR ===================
if (buscarInput) {
    buscarInput.addEventListener("keyup", () => {
        const texto = buscarInput.value.toLowerCase();
        document.querySelectorAll("#listaInvitados li").forEach(li => {
            li.style.display = li.textContent.toLowerCase().includes(texto) ? "flex" : "none";
        });
    });
}

// =================== EXPORTAR EXCEL ===================
if (exportarExcelBtn) {
    exportarExcelBtn.addEventListener("click", () => {
        if (invitados.length === 0) {
            alert("No hay invitados para exportar");
            return;
        }

        if (typeof XLSX === "undefined") {
            alert("No se encontró la librería XLSX. Agrégala antes de exportar.");
            return;
        }

        const ws_data = [
            ["Nombre", "Asistencia", "Número de acompañantes", "Nombres de acompañantes", "Teléfono"],
            ...invitados.map(i => [
                i.nombre || "",
                i.asistencia || "Pendiente",
                i.numAcompanantes || 0,
                i.nombresAcompanantes || "",
                i.telefono || ""
            ])
        ];

        const ws = XLSX.utils.aoa_to_sheet(ws_data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Invitados");
        XLSX.writeFile(wb, "Lista_Invitados.xlsx");
    });
}

// =================== EFECTO NAVBAR AL HACER SCROLL ===================
const navbar = document.querySelector(".navbar");
if (navbar) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
}

// =================== CONTADOR REGRESIVO ===================
const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");

// Cambia esta fecha a la real de tu boda
const fechaBoda = new Date("June 25, 2028 00:00:00").getTime();

function actualizarContador() {
    const ahora = new Date().getTime();
    const distancia = fechaBoda - ahora;

    if (distancia < 0) {
        if (diasEl) diasEl.textContent = "0";
        if (horasEl) horasEl.textContent = "0";
        if (minutosEl) minutosEl.textContent = "0";
        if (segundosEl) segundosEl.textContent = "0";
        return;
    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    if (diasEl) diasEl.textContent = dias;
    if (horasEl) horasEl.textContent = horas;
    if (minutosEl) minutosEl.textContent = minutos;
    if (segundosEl) segundosEl.textContent = segundos;
}

actualizarContador();
setInterval(actualizarContador, 1000);

// =================== CARRUSEL GALERÍA ===================
const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

if (track && prevBtn && nextBtn) {
    const images = track.querySelectorAll("img");
    let currentIndex = 0;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });
}


