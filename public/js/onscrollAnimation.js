function fromScale() {

     gsap.from(".fromlabel1", {
          x: -90,
          duration: 1.7,
          ease: "expo.out",
          opacity: 0,
          scrollTrigger: {
               trigger: ".fromlabel1",
               markers: false
          }
     });

     gsap.from(".fromlabel2", {
          x: -90,
          duration: 1.2,
          ease: "expo.out",
          opacity: 0,
          scrollTrigger: {
               trigger: ".fromlabel2",
               markers: false
          }
     });

     gsap.from(".fromlabel3", {
          x: -90,
          duration: 1.2,
          ease: "expo.out",
          opacity: 0,
          scrollTrigger: {
               trigger: ".fromlabel3",
               markers: false
          }
     });

     //no need for timeline for simple animations
     gsap.from(".fromScaleWork1", {
          y: 90,
          duration: 1.5,
          ease: "expo.out",
          opacity: 0,
          scrollTrigger: {
               trigger: ".fromScaleWork1",
               markers: false
          }
     });

     gsap.from(".fromScaleWork2", {
          y: 90,
          duration: 1.5,
          delay:0.1,
          ease: "expo.out",
          opacity: 0,
          scrollTrigger: {
               trigger: ".fromScaleWork2",
               markers: false
          }
     });

     gsap.from(".fromScaleWork3", {
          y: 90,
          duration: 1.5,
          ease: "expo.out",
          opacity: 0,
          scrollTrigger: {
               trigger: ".fromScaleWork3",
               markers: false
          }
     });

     gsap.from(".fromScaleWork4", {
          y: 90,
          duration: 1.5,
          ease: "expo.out",
          opacity: 0,
          scrollTrigger: {
               trigger: ".fromScaleWork4",
               markers: false
          }
     });

     gsap.from(".fromScaleWork5", {
          y: 90,
          duration: 1.5,
          ease: "expo.out",
          opacity: 0,
          scrollTrigger: {
               trigger: ".fromScaleWork5",
               markers: false
          }
     });

     gsap.from(".fromScaleWork6", {
          y: 90,
          duration: 1.5,
          ease: "expo.out",
          opacity: 0,
          scrollTrigger: {
               trigger: ".fromScaleWork6",
               markers: false
          }
     });

     gsap.from(".fromScaleWork7", {
          y: 90,
          duration: 1.5,
          ease: "expo.out",
          opacity: 0,
          scrollTrigger: {
               trigger: ".fromScaleWork7",
               markers: false
          }
     });

     gsap.from(".fromScaleWork8", {
          y: 90,
          duration: 1.5,
          ease: "expo.out",
          opacity: 0,
          scrollTrigger: {
               trigger: ".fromScaleWork8",
               markers: false
          }
     });
} // .function

document.addEventListener("DOMContentLoaded", function (e) {
     fromScale();
});