var a = document.querySelector(".hamburger");
var b = document.querySelector(".header-left-part2");
var c = document.querySelector(".header");
var d = document.querySelector(".main_slider");
let i = 0;
a.addEventListener("click", function(){
    if( i % 2 == 0){
        console.log("ad");
        b.style.display = "flex";
        c.style.height = "900px";
        d.style.marginTop = "430px";

    }
    else {
        b.style.display = "none";
        d.style.marginTop = "0px";
    }
    i++;
    
    // b.style. flexDirection  = "column";
}
)