import "./imports.js";
import "./main_height.js"

import { homeObj } from "./home.js";
import { menuObj } from "./menu.js";
import { aboutObj } from "./about.js";
import { contactObj } from "./contact.js";

const links = document.querySelectorAll(".links a");
const main = document.querySelector("main");

links.forEach(link => link.addEventListener("click", event => {
    event.preventDefault();

    if (link.id == "active")
        return;

    links.forEach(myLinks => myLinks.id = '');
    link.id = "active";

    if (link.classList.contains("home"))
        homeObj.switch_to_home(main);
    else if (link.classList.contains("menu"))
        menuObj.switch_to_menu(main);
    else if (link.classList.contains("about"))
        aboutObj.switch_to_about(main);
    else if (link.classList.contains("contact"))
        contactObj.switch_to_contact(main);
}));

//menuObj.switch_to_menu(main);
homeObj.switch_to_home(main);
//aboutObj.switch_to_about(main);