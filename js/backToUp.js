const backToTopButton = document.getElementById("backToTop");


// 1. Mostrar/Esconder o botão dependendo do scroll
window.addEventListener("scroll", () => {
    // Se a rolagem passar de 300px da altura da tela, mostra o botão
    if (window.scrollY > 10) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

// 2. Evento de clique para rolar até o topo de forma suave
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Garante a rolagem fluida e elegante
    });
});