document.addEventListener("DOMContentLoaded", function () {
    function animarSeccion(id) {
        let elementos = document.querySelectorAll(`#${id} .text-section h1, 
                                                #${id} .text-section h2, 
                                                #${id} .text-section h3, 
                                                #${id} .text-section p, 
                                                #${id} .ev, 
                                                #${id} .learn-more,
                                                #${id} .jaime2,  
                                                #${id} .b2,
                                                #${id} .p2,
                                                #${id} .p,
                                                #${id} .a3,
                                                #${id} .jaime3,
                                                #${id} .a2,
                                                #${id} .w1,
                                                #${id} .w2,
                                                #${id} .w3,
                                                #${id} .w4,
                                                #${id} .linea, 
                                                #${id} .Sp,
                                                #${id} .spx,
                                                #${id} .img4,
                                                #${id} .img1,
                                                #${id} .Cph,
                                                #${id} .Cph2,
                                                #${id} .img3,
                                                #${id} .Cph3,
                                                #${id} .Cph4,
                                                #${id} .img2,
                                                #${id} .Tu,
                                                #${id} .Cp,
                                                #${id} .velocity-range,
                                                #${id} .img23,
                                                #${id} .velocity-range2,
                                                #${id} .velocity-range3,
                                                #${id} .velocity-range4,
                                                #${id} .img5,
                                                #${id} .img3,
                                                #${id} .videoFondo,
                                                #${id} .videoFondo1,
                                                #${id} .videoFondo13,
                                                #${id} .videoFondo14,
                                                #${id} .xxx,
                                                #${id} .jaime24,
                                                #${id} .x,
                                                #${id} .xx,
                                                #${id} .xxxx,
                                                #${id} .jaime34,
                                                #${id} .footer,
                                                #${id} .icons,
                                                #${id} .Cp15,
                                                #${id} .o1,
                                                #${id} .uno1,
                                                #${id} .dos1,
                                                #${id} .tres1,
                                                #${id} .clase1,
                                                #${id} .dos12,
                                                #${id} .tres12,
                                                #${id} .dos13,
                                                #${id} .tres13,
                                                #${id} .clase13,
                                                #${id} .dos14,
                                                #${id} .tres14,
                                                #${id} .clase14,
                                                #${id} .dos15,
                                                #${id} .tres15,
                                                #${id} .clase15,
                                                #${id} .Tu15,
                                                #${id} .o2,
                                                #${id} .uno,
                                                #${id} .dos,
                                                #${id} .tres,
                                                #${id} .dos2,
                                                #${id} .tres2,
                                                #${id} .dos3,
                                                #${id} .tres3,
                                                #${id} .clase3,
                                                #${id} .dos4,
                                                #${id} .tres4,
                                                #${id} .clase4,
                                                #${id} .dos5,
                                                #${id} .tres5,
                                                #${id} .clase5,
                                                #${id} .clase,
                                                #${id} .flechas,
                                                #${id} .ft,
                                                #${id} .image-section img`);

        if (elementos.length === 0) {
            return;
        }
                                                            
        elementos.forEach((el, index) => {
            el.style.opacity = "0";
            el.style.animation = "none"; 
            void el.offsetWidth; 
            
            let animacion = "fadeInMove";
            
            if (el.matches("h1")) animacion = "slideInFromLeft";
            else if (el.matches("h2,.x,.xxx,.jaime24,.Tu15,.o2,.uno,.dos,.dos2,.tres2,.tres,.clase,.dos4, .tres4, .clase4, .dos5, .tres5, .clase5,.dos3,.tres3,.clase3")) animacion = "slideInFromRight";
            else if (el.matches("h3,.flechas")) animacion = "slideInFromBottom";
            else if (el.matches("p")) animacion = "fadeIn";
            else if (el.matches(".ev, .learn-more")) animacion = "bounceIn";
            else if (el.matches(".image-section img")) animacion = "slideInFromRight";
            else if (el.matches(".jaime2,.Cp15,.o1,.uno1,.dos1,.tres12,.dos12,.tres1,.clase1, .dos14, .tres14, .clase14, .dos15, .tres15, .clase15,.dos13,.tres13,.clase13")) animacion = "slideInFromLeft";
            else if (el.matches(".jaime3,.xx,.xxxx,.jaime34,.footer")) animacion = "slideInFromLeft";
            else if (el.matches(".b2")) animacion = "slideInFromRight";
            else if (el.matches(".p")) animacion = "FadeIn";
            else if (el.matches(".a2, .img4, .img1, .Cph, .Cph2 , .img13, .Cph3, .Cph4 ")) animacion = "slideInFromLeft";
            else if (el.matches(".w1,.icons")) animacion = "slideInFromBottom";
            else if (el.matches(".w2")) animacion = "slideInFromBottom";
            else if (el.matches(".w3")) animacion = "slideInFromBottom";
            else if (el.matches(".w4,.ft")) animacion = "slideInFromBottom";
            else if (el.matches(".linea")) animacion = "slideInFromRightLinea";
            else if (el.matches(".Sp, .img2, .Tu, .Cp, .velocity-range, .img23, .velocity-range2, .velocity-range3, .velocity-range4")) animacion = "slideInFromRight";
            else if (el.matches(".spx, .img5, .img3, .videoFondo, .videoFondo1, .videoFondo13, .videoFondo14")) animacion = "slideInFromBottom";
            
            el.style.animation = `${animacion} 1s ease-out forwards`;
            el.style.animationDelay = `${0.1 * index}s`;
        });
    }

    function reiniciarAnimacionCarga() {
        let elementos = document.querySelectorAll(".color1, .color3, .color5, .color7, .porcent1, .porcent2, .porcent3");

        elementos.forEach(el => {
            let nuevoElemento = el.cloneNode(true); 
            el.parentNode.replaceChild(nuevoElemento, el); 
        });
    }

    function detectarCambioDePagina() {
        let hash = window.location.hash.substring(1);
        if (hash) {
            animarSeccion(hash);
            setTimeout(reiniciarAnimacionCarga, 300);
        }
    }

    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (e) {
            let targetId = this.getAttribute("href").substring(1);
            setTimeout(() => {
                detectarCambioDePagina();
            }, 300);
        });
    });

    window.addEventListener("hashchange", detectarCambioDePagina);

    detectarCambioDePagina();

    const links = document.querySelectorAll(".rockets a, .flechas a");
    const sections = document.querySelectorAll(".rocket-section, .flecha-section");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("data-target");

            sections.forEach(section => section.classList.remove("active"));

            document.getElementById(targetId).classList.add("active");

            animarSeccion(targetId);
        });
    });

    const primeraSeccion = document.querySelector(".rocket-section, .flecha-section");
    if (primeraSeccion) {
        primeraSeccion.classList.add("active");
        animarSeccion(primeraSeccion.id);
    }

    let secciones = document.querySelectorAll(".flecha-section");
    let totalSecciones = secciones.length;
    let indiceActual = 0;
    
    function mostrarSeccion(index) {
        secciones.forEach((seccion, i) => {
            seccion.classList.toggle("active", i === index);
        });
    }
    
    document.getElementById("flecha-prev").addEventListener("click", function (e) {
        e.preventDefault();
        indiceActual = (indiceActual - 1 + totalSecciones) % totalSecciones;
        mostrarSeccion(indiceActual);
    });
    
    document.getElementById("flecha-next").addEventListener("click", function (e) {
        e.preventDefault();
        indiceActual = (indiceActual + 1) % totalSecciones;
        mostrarSeccion(indiceActual);
    });
    
    mostrarSeccion(indiceActual);
    
    let angle = 0; 
    const gif = document.querySelector(".gif1");
    const flechaPrev = document.getElementById("flecha-prev");
    const flechaNext = document.getElementById("flecha-next");

    function rotarImagen() {
        angle += 90; 
        gif.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
    }

    flechaPrev.addEventListener("click", rotarImagen);
    flechaNext.addEventListener("click", rotarImagen);

    document.querySelectorAll(".menu-link").forEach(link => {
        link.addEventListener("click", () => {
            document.getElementById("menuHambur").checked = false;
        });
    });

});
