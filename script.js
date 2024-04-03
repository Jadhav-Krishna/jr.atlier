function background(){
    let bg = document.querySelector("#bg");
    let backg = document.querySelector("#backg")
    document.querySelector("#head1").addEventListener("mouseenter",() => {
        backg.setAttribute("src", "./circle.png");  
    })
    document.querySelector("#head2").addEventListener("mouseenter",() => {
        backg.setAttribute("src", "./pink.png");  
    })
    document.querySelector("#head3").addEventListener("mouseenter",() => {
        backg.setAttribute("src", "./orange.png");  
        backg.style.transition = "all ease 1s";
    })
}
background();