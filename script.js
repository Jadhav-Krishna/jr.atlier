let tl = gsap.timeline();
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

function loader(){
  tl.to("#loader",{
    y:"-100vh",
    delay:3.5,
    duration:1
  })
  let lbg = document.querySelector("#lbg");
  setTimeout(function(){
    lbg.setAttribute("src","./pink.png")
  },1000);
  setTimeout(function(){
    lbg.setAttribute("src","./orange.png")
  },2000);
}
// loader();

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
  // let loader = document.querySelector("#loader");
  
  tl.from("#page1 h1", {
    y: -250,
    duration: 1,
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

function page10(){
  gsap.from("#circle1 img",{
    scale:0,
    duration:1,
  })
  let icircle = document.querySelector("#icircle");
  let name = document.querySelector("#name");
  let profile = document.querySelector("#profile");
  let job = document.querySelector("#job");
  let para = document.querySelector("para");
  document.querySelector("#circlee1").addEventListener("click", function() {
    icircle.setAttribute("src","./p1.webp");
    name.textContent="LEOPOLD DURAND";
    profile.textContent="TALENTED CARPENTER AND CRAFTSMAN";
    job.textContent="FD FRAMEWORK & MODULEO";
    para.textContent= "« I am delighted with the collaboration started with Julie for several years already. Very competent, at’ constantly listens to our needs and wishes. By its role of...";
  })
  
  document.querySelector("#circlee2").addEventListener("click", function() {
    icircle.setAttribute("src","./p2.webp");
    name.textContent="LIDDARY KHAM'S";
    profile.textContent="MARKETING COMMUNICATION MANAGER";
    job.textContent="OFFICE CONCEPT & ARTECK";
    para.textContent= "« With the accompaniment of Julie, our brand image finally reflects our adn and highlights our competitive advantages. New visual identity, new communication media...";
  })

  document.querySelector("#circlee3").addEventListener("click", function() {
    icircle.setAttribute("src","./p3.webp");
    name.textContent="JOS DE KONING'S";
    profile.textContent="FOUNDER & DIRECTOR";
    job.textContent="FRUITS AT HOME";
    para.textContent= "« The meeting with Julie, started in 2017, around my need to renew the’ identity of our brand « Fruits at Home » and the packaging for the range of products Citron Caviar. La...";
  })

  document.querySelector("#circlee4").addEventListener("click", function() {
    icircle.setAttribute("src","./p44.webp");
    name.textContent="JESSICA ROLLAND";
    profile.textContent="FOUNDER OF 1000 IDEAS PER MINUTE";
    job.textContent="AGENCY SOMEDAY";
    para.textContent= "« Julie accompanied us in the development of our visual identity and guided us to proposals both creative and completely adapted to our universe. Beyond...";
  })

  document.querySelector("#circlee5").addEventListener("click", function() {
    icircle.setAttribute("src","./p55.webp");
    name.textContent="ETIENNE ROZAND";
    profile.textContent="CHAIR";
    job.textContent="MIAM FAMILY'S";
    para.textContent= "<< Excellent experience on our collaboration with Julie. Very happy for our brand Lipopette rendering around our visual identity and that of our sauces, it stuck...";
  })

  document.querySelector("#circlee6").addEventListener("click", function() {
    icircle.setAttribute("src","./p6.webp");
    name.textContent="BRICE ETIENNE";
    profile.textContent="FOUNDER & DIRECTOR";
    job.textContent="VINYL BAR AND KEY ARTISTS";
    para.textContent= "“Julie Rignanese accompanied us in the creation and definition of the’ visual identity of our new concept of Vinyl Bar. She knew how to define our expectations, refocus our...";
  })

  document.querySelector("#circlee7").addEventListener("click", function() {
    icircle.setAttribute("src","./p7.webp");
    name.textContent="LAURENCE CORTINOVIS";
    profile.textContent="DIRECTOR, HRD TIME-SHARE EXPERT";
    job.textContent="COREAS";
    para.textContent= "« Following my move to Lyon, I’ asked Julie to me’aider to rethink my entire communication strategy. She was great and went much further than...";
  })

  document.querySelector("#circlee8").addEventListener("click", function() {
    icircle.setAttribute("src","./p8.webp");
    name.textContent="OLIVIER HERLENT";
    profile.textContent="PASSIONATE DIRECTOR AND ENTREPRENEUR";
    job.textContent="BEST-ARTISAN.COM";
    para.textContent= "« We entrusted Julie with the complete redesign of our graphic identity and its declination on our website.Beautiful remote collaboration : Julie is very pro, always good...";
  })
}
page10();