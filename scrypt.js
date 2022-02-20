// --------------1
document.querySelector(".flex_2_hover1").onmouseenter = function () {
    document.querySelector(".flex_2_img_before1").style.width = "24%"
}
document.querySelector(".flex_2_hover1").onmouseleave = function () {
    document.querySelector(".flex_2_img_before1").style.width = "0%"
}
// --------------2
document.querySelector(".flex_2_hover2").onmouseenter = function () {
    document.querySelector(".flex_2_img_before2").style.width = "24%"
}
document.querySelector(".flex_2_hover2").onmouseleave = function () {
    document.querySelector(".flex_2_img_before2").style.width = "0%"
}
// --------------3
document.querySelector(".flex_2_hover3").onmouseenter = function () {
    document.querySelector(".flex_2_img_before3").style.width = "24%"
}
document.querySelector(".flex_2_hover3").onmouseleave = function () {
    document.querySelector(".flex_2_img_before3").style.width = "0%"
}
// --------------4
document.querySelector(".flex_2_hover4").onmouseenter = function () {
    document.querySelector(".flex_2_img_before4").style.width = "24%"
}
document.querySelector(".flex_2_hover4").onmouseleave = function () {
    document.querySelector(".flex_2_img_before4").style.width = "0%"
}

//---------------mobile panel open & close---------------
let mobile_panel = document.querySelector(".mobile_panel");
document.querySelector(".btn_open_top").onclick = () => {
    if (mobile_panel.style.marginTop != "490px") {
        mobile_panel.style.marginTop = "490px"
        mobile_panel.style.opacity = "1";
        document.querySelector(".header_div").style.opacity = "1";
        
    } else {
        mobile_panel.style.marginTop = "0"
        mobile_panel.style.opacity = "0"
    }
    document.querySelector("main").onclick = () => {
        mobile_panel.style.marginTop = "0"
        mobile_panel.style.opacity = "0"
    }
    window.addEventListener("scroll", () => {
        if (scrollY < 50 || scrollY > 50) {
            mobile_panel.style.marginTop = "0"
            mobile_panel.style.opacity = "0"
        }
    })
}
//---------------popap_for_contact open & close---------------
document.querySelector(".close").onclick = () => {
    document.querySelector(".bg_fon_for_patvirel").style.display = "none";
    document.querySelector("body").style.overflow = "auto"
}
let open = document.querySelectorAll(".open_popap")
for (let i = 0; i < open.length; i++) {
    open[i].onclick = () => {
        document.querySelector(".bg_fon_for_patvirel").style.display = "block";
        document.querySelector("body").style.overflow = "hidden"
    }
}
// -----anim logo------
let anim_logo_1 = document.querySelectorAll('.logo>img');
for (let i = 0; i < anim_logo_1.length; i++) {
    setInterval(() => {
        anim_logo_1[i].classList.add('anim_logo');
        setTimeout(() => {
            anim_logo_1[i].classList.remove('anim_logo');
        }, 2000)
    }, 4000)
}
let anim_logo_2_3 = document.querySelectorAll('.anim_logo_2_3');
for (let i = 0; i < anim_logo_2_3.length; i++) {
    setInterval(() => {
        anim_logo_2_3[i].classList.add('anim_logo_2_3_reverse');

        setTimeout(() => {
            anim_logo_2_3[i].classList.remove('anim_logo_2_3_reverse');
        }, 2000)
    }, 4000)
}
// --------text anim logo icons---------
let x = document.querySelectorAll(".logo_top>div>span");
for (let i = 0; i < x.length; i++) {
    setTimeout(() => {
        x[0].style.top = "0";
        x[0].style.textShadow = "0px 40px 3px gold"
        setTimeout(() => {
            x[0].style.textShadow = "0px 0px 5px gold"
        }, 300);
    }, 4300);
    setTimeout(() => {
        x[1].style.top = "0";
        x[1].style.textShadow = "0px 40px 3px gold"
        setTimeout(() => {
            x[1].style.textShadow = "0px 0px 5px gold"
        }, 300);
    }, 4600);
    setTimeout(() => {
        x[2].style.top = "0";
        x[2].style.textShadow = "0px 40px 3px gold"
        setTimeout(() => {
            x[2].style.textShadow = "0px 0px 5px gold"
        }, 300);
    }, 4800);
    setTimeout(() => {
        x[3].style.top = "0";
        x[3].style.textShadow = "0px 40px 3px gold"
        setTimeout(() => {
            x[3].style.textShadow = "0px 0px 5px gold"
        }, 300);
    }, 5200);
    setTimeout(() => {
        x[4].style.top = "0";
        x[4].style.textShadow = "0px 40px 3px gold"
        setTimeout(() => {
            x[4].style.textShadow = "0px 0px 5px gold"
        }, 300);
    }, 5500);
}
let z = document.querySelectorAll(".head_div_3>a");
let v = document.querySelectorAll(".head_div_3>a>img");
for (let i = 0; i < v.length; i++) {
    for (let i = 0; i < v.length; i++) {
        setTimeout(() => {
            z[0].style.top = "0";
            setTimeout(() => {
                v[0].style.boxShadow = "0 0 0 0 black"
            }, 300);
        }, 4500);
        setTimeout(() => {
            z[1].style.top = "0";
            setTimeout(() => {
                v[1].style.boxShadow = "0 0 0 0 black"
            }, 300);
        }, 4900);
        setTimeout(() => {
            z[2].style.top = "0";
            setTimeout(() => {
                v[2].style.boxShadow = "0 0 0 0 black"
            }, 300);
        }, 5200);
    }
}

//--------------------slider top------------------
const next = document.getElementById("btn-next"),
    prev = document.getElementById("btn-perv"),
    slides = document.querySelectorAll(".slider"),
    dots = document.querySelectorAll(".dot");
let timerId;
let index = 0;
const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove("active");
    }
    slides[n].classList.add("active");
}
const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove("active_dots");
    }
    dots[n].classList.add("active_dots");
}
const nextSlide = () => {
    clearTimeout(timerId);
    if (index == slides.length - 1) {
        index = 0;
        prepore_all(index);
    } else {
        index++;
        prepore_all(index);
    }
    add_1()
    for (let i = 0; i < title.length; i++) {
        title[i].classList.remove("title");
        title[i].style.width = "345px"
        if (window.innerWidth <= 900) {
            title[i].style.width = "240px"
        }
    }
}
const prevSlide = () => {
    clearTimeout(timerId);
    if (index == 0) {
        index = slides.length - 1;
        prepore_all(index);
    } else {
        index--;
        prepore_all(index);
    }
    add_1()
    for (let i = 0; i < title.length; i++) {
        title[i].classList.remove("title");
        title[i].style.width = "345px";
        if (window.innerWidth <= 900) {
            title[i].style.width = "245px"
        }
    }
}
const prepore_all = ind => {
    activeSlide(ind);
    activeDot(ind);
}
dots.forEach((item, indexDot) => {
    item.addEventListener("click", () => {
        index = indexDot;
        prepore_all(index);
        for (let i = 0; i < title.length; i++) {
            title[i].style.width = "345px";
            if (window.innerWidth <= 900) {
                title[i].style.width = "245px"
            }
        }
    })
})
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
setInterval(() => { nextSlide() }, 8000)
//---------------------------------------------------click anim texts--------------------------------------------------
let title = document.querySelectorAll(".slider>div");
function add_1() {
    let i;
    timerId = setTimeout(() => {
        for (i = 0; i < title.length; i++) {
            title[i].classList.add("title")
        }
    }, 0);
    timerId = setTimeout(() => {
        for (i = 0; i < title.length; i++) {
            if (window.innerWidth <= 900) {
                title[i].style.width = "20px";
            } else {
                title[i].style.width = "29px";
            }
        }
    }, 5000);
}
add_1()
//------------------------------------------window scroll--------------------------------------------
window.addEventListener("scroll", () => {
    if (scrollY > 20) {
        document.querySelector(".header_div").setAttribute("style", "opacity: 0.7;background: black;transition: 800ms; ");
    } else {
        document.querySelector(".header_div").setAttribute("style", "opacity: 1;background: black;transition: 800ms;");
    }
})
// --------loader---------
setTimeout(() => {
    document.querySelector(".parent_loader").setAttribute("style", "opacity:0; transition:1s;")
    setTimeout(() => {
        document.querySelector(".parent_loader").style.display = "none";;
    }, 1000)
}, 1010)