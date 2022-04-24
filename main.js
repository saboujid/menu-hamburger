let btn = document.querySelector("#btn");
let menu = document.querySelector(".menu");
let menu_list = document.querySelector(".menu-list");

btn.onclick = function() {
    menu.classList.toggle("active");
    menu_list.classList.toggle("active");
}

let shop_button = document.querySelector(".shop-button")
let lb_button = document.querySelector(".lb-button")
let shop_list = document.querySelector(".shop-list")
let lb_list = document.querySelector(".lb-list")
let translate = document.querySelector(".translate")

shop_button.onclick = function() {
    shop_list.classList.toggle("active");
    translate.classList.toggle("active");
    menu_list.classList.toggle("shop");
}

let back = document.querySelector("#back")

back.onclick = function() {
    shop_list.classList.toggle("active");
    translate.classList.toggle("active");
    menu_list.classList.toggle("shop");
}


lb_button.onclick = function() {
    translate.classList.toggle("active");
    menu_list.classList.toggle("lb");
    lb_list.classList.toggle("active");
}

let back2 = document.querySelector("#back2")

back2.onclick = function() {
    lb_list.classList.toggle("active");
    translate.classList.toggle("active");
    menu_list.classList.toggle("lb");
}