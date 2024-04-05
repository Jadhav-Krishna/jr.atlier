function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    multiplier: 0.7,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
locomotive();

function background() {
  let bg = document.querySelector("#bg");
  let backg = document.querySelector("#backg");
  document.querySelector("#head1").addEventListener("mouseenter", () => {
    backg.setAttribute("src", "./circle.png");
  });
  document.querySelector("#head2").addEventListener("mouseenter", () => {
    backg.setAttribute("src", "./pink.png");
  });
  document.querySelector("#head3").addEventListener("mouseenter", () => {
    backg.setAttribute("src", "./orange.png");
    backg.style.transition = "all ease 1s";
  });
}
background();

function anime() {
  gsap.from("#page1 h1", {
    y: -250,
    duration: 1,
    delay: 1,
    stagger: 0.1,
  });

  gsap.to("#page5 #pinpage1", {
    y: "-95vh",
    scale: 0.85,
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
    //   markers: true,
      pin: true,
      start: "top -25%",
      scrub: true,
    },
  });
  gsap.to("#page5 #pinpage2", {
    y: "-95vh",
    scale: 0.85,
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
    //   markers: true,
      pin: true,
      start: "top -25.5%",
      scrub: true,
    },
  });
  gsap.to("#page5 #pinpage3", {
    y: "-95vh",
    scale: 0.85,
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
    //   markers: true,
      pin: true,
      start: "top -25.6%",
      scrub: true,
    },
  });
  gsap.to("#page5 #pinpage4", {
    y: "-95vh",
    scale: 0.85,
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
    //   markers: true,
      pin: true,
      start: "top -25.7%",
      scrub: true,
    },
  });
}
anime();
