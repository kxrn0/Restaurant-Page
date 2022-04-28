const burger = document.querySelector(".burger input[type='checkbox']");
const links = document.querySelector(".links");

burger.addEventListener("click", () => {
    if (burger.checked)
        links.style.transform = "translateY(0)";
    else    
        links.style.transform = "translateY(-100%)";
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
        links.style.setProperty("transform", "translateY(0)");
        burger.checked = true;
    }
});