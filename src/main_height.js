
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

window.addEventListener("resize", resize_main);

function resize_main() {
    const headStyle = window.getComputedStyle(header).getPropertyValue("height");
    const footerStyle = window.getComputedStyle(footer).getPropertyValue("height");
    main.style.setProperty("min-height", `calc(${window.innerHeight}px - ${headStyle} - ${footerStyle})`);
}

resize_main();