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
