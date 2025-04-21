particlesJS("particles-js", {
    particles: {
      number: {
        value: 60,
        density: { enable: true, value_area: 800 }
      },
      shape: {
        type: "circle",
        polygon: { nb_sides: 1 } // ¡Hexágonos!
      },
      color: { value: "#314752" },
      size: {
        value: 9,
        random: true
      },
      move: {
        enable: true,
        speed: 4,
        direction: "none",
        out_mode: "out"
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#49788E",
        opacity: 0.9,
        width: 1
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        repulse: { distance: 100 },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });