// =========================
// Carrossel
// =========================

const slides = document.querySelectorAll(".carousel img");
let current = 0;

function trocarSlide() {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
}

setInterval(trocarSlide, 3000);

// =========================
// Contador
// =========================

function atualizarContador() {
    let inicio = new Date("2009-02-03 00:00:00");
    let agora = new Date();

    let diff = agora - inicio;

    let anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    let meses = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    let dias = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    let horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML =
        `${anos} anos • ${meses} meses • ${dias} dias<br>${horas}h ${minutos}m ${segundos}s`;
}

setInterval(atualizarContador, 1000);


// =========================
// Música
// =========================

const musica = document.getElementById("musica");
const btnMusica = document.getElementById("btnMusica");

btnMusica.addEventListener("click", () => {
    if (musica.paused) {
        musica.play();
        btnMusica.textContent = "Pausar Música ⏸️";
    } else {
        musica.pause();
        btnMusica.textContent = "Tocar Música 🎵";
    }
});

// =========================
// Corações caindo
// =========================

function criarCoracao() {
    const heart = document.createElement("div");
    heart.classList.add("heart-fall");
    heart.textContent = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.getElementById("hearts-container").appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}

setInterval(criarCoracao, 300);
