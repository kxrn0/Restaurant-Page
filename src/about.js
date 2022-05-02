export const aboutObj = (
    () => {
        const about = document.createElement("div");
        const info = document.createElement("div");
        const title = document.createElement("h2");
        const para = document.createElement("p");
        const cards = document.createElement("div");

        about.append(info);
        info.append(title);
        info.append(para);
        about.append(cards);

        about.classList.add("about");
        info.classList.add("info");
        cards.classList.add("cards");

        title.innerText = "Lorem Ipsum Dolor";
        para.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, cum facilis commodi error fugiat quisoluta nihil quam! Provident, maior Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dolorem eos. Asperiores veritatis, tenetur consectetur incidunt nihil rerum cumque itaque. es!";

        for (let i = 0; i < 6; i++)
            cards.append(create_card("Richard Stallman", 
                                    "Manager",
                                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius blanditiis magni molestia lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim natus tempore repudiandae at tenetur fuga exercitationem beatae laborum, atque porro! s saepe cum suscipit impedit iste omnis ducimus praesentium!",
                                    "./stallman.png", "stallman"));

        function create_card(name, position, description, src, id) {
            const card = document.createElement("div");
            const content = document.createElement("div");
            const frontFace = document.createElement("div");
            const img = document.createElement("img");
            const h2 = document.createElement("h2");
            const para = document.createElement("p");
            const learnMore = document.createElement("button");
            const backFace = document.createElement("div");
            const presc = document.createElement("p");
            const goBack = document.createElement("button");

            card.append(content);
            content.append(frontFace);
            frontFace.append(img);
            frontFace.append(h2)
            frontFace.append(para);
            frontFace.append(learnMore);
            content.append(backFace);
            backFace.append(presc);
            backFace.append(goBack);

            card.classList.add("card");
            content.classList.add("card-content");
            content.classList.add("unflipped");
            frontFace.classList.add("front-face");
            backFace.classList.add("back-face");

            card.id = id;
            h2.innerText = name;
            para.innerText = position;
            img.src = src;
            learnMore.innerText = "Learn More";
            presc.innerText = description;

            learnMore.addEventListener("click", () => {
                content.classList.toggle("unflipped");
                content.classList.toggle("flipped");
            });

            goBack.addEventListener("click", () => {
                content.classList.toggle("flipped");
                content.classList.toggle("unflipped");
            });

            return card;
        }

        function switch_to_about(main) {
            main.innerHTML = '';
            main.append(about);
        }

        return { switch_to_about }
    }
)();