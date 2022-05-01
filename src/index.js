import "./imports.js";
import "./main_height.js"

import { homeObj } from "./home.js";
import { menuObj } from "./menu.js";

const links = document.querySelectorAll(".links a");
const main = document.querySelector("main");
// const homeObj = (
//     () => {
//         const text = document.createElement("div");
//         const info = document.createElement("div");
//         const img = document.createElement("img");
//         const h2 = document.createElement("h2");
//         const p = document.createElement("p");
//         const hours = document.createElement("div");
//         const clockImg = document.createElement("img");
//         const intraweek = document.createElement("p");
//         const intraSpan1 = document.createElement("span")
//         const intraSpan2 = document.createElement("span");
//         const weekendSpan1 = document.createElement("span")
//         const weekendSpan2 = document.createElement("span")
//         const weekend = document.createElement("p");
//         const location = document.createElement("div")
//         const locationImg = document.createElement("img");
//         const locationP = document.createElement("p");

//         text.append(h2);
//         text.append(p)
//         info.append(hours);
//         info.append(location);
//         hours.append(clockImg);
//         hours.append(intraweek);
//         hours.append(weekend);
//         location.append(locationImg);
//         location.append(locationP);
//         intraweek.append(intraSpan1);
//         intraweek.append(intraSpan2);
//         weekend.append(weekendSpan1);
//         weekend.append(weekendSpan2);

//         h2.innerText = "Lorem ipsum dolor sit amet.";
//         p.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus consequatur ipsam est? Distinctio impedit vel voluptas aperiam animi corrupti facere veritatis suscipit assumenda dolores voluptate eos praesentium, velit enim officiis error illum! Aliquid similique, quaerat tempore fugiat omnis maiores amet. Recusandae culpa nisi amet suscipit adipisci voluptates eligendi nostrum. Q Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, hic! uasi quas molestias aspernatur laudantium excepturi! Incidunt!";
//         clockImg.src = "./clock.svg";
//         intraSpan1.innerText = "Mon - Thu :";
//         intraSpan2.innerText = "07:00 - 20:00";
//         weekendSpan1.innerText = "Fri - Sun :";
//         weekendSpan2.innerText = "07:00 - 13:00";
//         locationImg.src = "./location.svg";
//         locationP.innerText = "4235 Brakel Lake Ave Sneedville, CA 23642";
//         img.src = "./gnu.svg";

//         text.classList.add("text");
//         info.classList.add("info");
//         img.classList.add("company-logo");
//         hours.classList.add("hours");
//         intraweek.classList.add("intraweek");
//         weekend.classList.add("weekend");
//         location.classList.add("location");

//         function switch_to_home(main) {
//             main.innerHTML = '';
//             main.append(text);
//             main.append(info);
//             main.append(img)
//         }
//         return { switch_to_home }
//     }
// )();

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
        console.log("about us");
    else if (link.classList.contains("contact"))
        console.log("contact");
}));

menuObj.switch_to_home(main);