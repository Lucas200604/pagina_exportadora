const visualHeader = document.getElementById('sticky-header-visual');
    const scrollPoint = 50; 

    function checkScrollVisual() {
        if (window.scrollY > scrollPoint) {
            // Fondo sólido y sombra al hacer scroll
            visualHeader.classList.add('bg-lime-950', 'opacity-98', 'shadow-lg');
            visualHeader.classList.remove('bg-transparent');
        } else {
            // Fondo transparente en la parte superior
            visualHeader.classList.remove('bg-lime-950', 'opacity-90', 'shadow-lg');
            // Nota: Aquí se asume que al inicio no tiene clases de fondo, o podrías usar:
            // visualHeader.classList.add('bg-transparent'); 
        }
    }

    window.addEventListener('scroll', checkScrollVisual);
    checkScrollVisual();