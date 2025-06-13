/*import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const tl = gsap.timeline({
    defaults: {
        duration: 0.75,
        ease: "power2.inOut",
        scrollTrigger: {
            scrub: 0.75, //vincula la animación al scroll  "center center" inicia al centro de la pantalla
            start: "center center", //en que pixel empieza la animacion                 
        }
    }
})
tl
    .to('#habilidades', {
        y: 100,
        x: 100
    })
    .to('#tiempo', {
        x: 200,
        y: 20
    })
    .to('#pensamiento', {
        x: -100,
        y: -10
    })
    .to('#creatividad', {
        x: -50
    })
    .to('#trabajo', {
        y: -150,
    })
    .to('#sociales', {
        x: 70,
        y: -10
    })
    .to('#detalles', {
        x: -70,
        y: 40
    })
    .to('#solucion', {
        x: -70,
        y: -40
    })
    .to('#resiliencia', {
        y: -170
    }) */

import { gsap } from "gsap";
console.log(gsap.version);