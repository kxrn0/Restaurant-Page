import { is_substring, intersect } from "./utilities";

export const menuObj = (
    () => {
        const sections = [
            {
                name: "Breakfast",
                items: [
                     /**
 * chinese
 * indian
 * spicy
 * sweet
 * soup
 * libre
 * pythonic
 * interdisciplinary
 * breast milk
 * sinjke
 * japanese
 * sea food
 * procedurally generated
 * fresh
 * sour
 * selective
 * hard salt
 * modular
 * OOP
 * soft
 * alcohol
 */
                    {
                        name: "Cawfee",
                        src: "./walrus.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$17.12",
                        filters: [
                            "japanese",
                            "soft",
                            "breast-milk",
                            "sweet",
                            "oop",
                            "selective",
                            "libre"
                        ]
                    },
                    {
                        name: "Fried Rice",
                        src: "./fried_rice.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$19.99",
                        filters: [
                            "japanese",
                            "selective",
                            "libre",
                            "modular",
                            "hard-salt"
                        ]
                    },
                    {
                        name: "Cats Coming",
                        src: "./cats.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$14.27",
                        filters: [
                            "chinese",
                            "spicy",
                            "soup",
                            "sinjke"
                        ]
                    },
                    {
                        name: "Adoi Wine",
                        src: "./adoi_wine.jpg",
                        description: "Lorem ipsum dolor sitssitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$24.32",
                        filters: [
                            "alcohol",
                            "japanese",
                            "breast-milk",
                            "interdisciplinary",
                            "sour",
                        ]
                    },
                    {
                        name: "Cede Soup",
                        src: "./bread_with_soup.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dsit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$15.23",
                        filters: [
                            "hard-salt",
                            "indian",
                            "sea-food",
                            "breast-milk",
                            "spicy",
                            "libre"
                        ]
                    },
                    {
                        name: "Kotori Shakes",
                        src: "./shake.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dsit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$12.25",
                        filters: [
                            "fresh",
                            "japanese",
                            "breast-milk",
                            "modular",
                            "sweet",
                            "selective"
                        ]
                    },
                ]
            },
            {
                name: "Lunch",
                items: [
                    {
                        name: "Cats Curry",
                        src: "./cats_curry.jpg",
                        description: "Lorem ipsum dolorisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$32.14",
                        filters: [
                            "selective",
                            "fresh",
                            "japanese",
                            "sinjke",
                            "soft",
                            "spicy",
                            "soup"
                        ]
                    },
                    {
                        name: "Soup",
                        src: "./soup.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$32.74",
                        filters: [
                            "indian",
                            "sour",
                            "selective",
                            "procedurally-generated",
                            "breast-milk"
                        ]
                    },
                    {
                        name: "Garlic Shrimp",
                        src: "./garlic_shrimp.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$32.74",
                        filters: [
                            "chinese",
                            "pythonic",
                            "selective",
                            "procedurally-generated",
                            "hard-salt"
                        ]
                    },
                    {
                        name: "Jack's",
                        src: "./daniel.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$20.25",
                        filters: [
                            "libre",
                            "modular",
                            "pythonic",
                            "oop",
                            "alcohol",
                            "pythonic"
                        ]
                    },
                    {
                        name: "Walrus Street",
                        src: "./walrus.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$17.12",
                        filters: [
                            "chinese",
                            "hard-salt",
                            "interdisciplinary",
                            "spicy",
                            "oop"
                        ]
                    },
                    {
                        name: "Fried Ozz",
                        src: "./fried_ozz.jpg",
                        description: "Lorem ipsum dolat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$33.33",
                        filters: [
                            "selective",
                            "indian",
                            "sour",
                            "oop",
                            "sea-food",
                            "soup"
                        ]
                    },
                ]
            },
            {
                name: "Dinner",
                items: [
                    {
                        name: "Kotton Buro",
                        src: "./kotton_buro.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$15.34",
                        filters: [
                            "japanese",
                            "hard-salt",
                            "interdisciplinary",
                            "sea-food",
                            "alcohol"
                        ]
                    },
                    {
                        name: "Sushi",
                        src: "./sushi.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$25.22",
                        filters: [
                            "japanese",
                            "soft",
                            "selective",
                            "procedurally-generated",
                            "pythonic",
                            "sinjke"
                        ]
                    },
                    {
                        name: "Sake",
                        src: "./traditional_japanese_sake.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$33.33",
                        filters: [
                            "selective",
                            "sweet",
                            "japanese",
                            "modular",
                            "libre",
                            "oop",
                            "alcohol"
                        ]
                    },
                    {
                        name: "Fiery Noodles",
                        src: "./fiery_noodles.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$32.27",
                        filters: [
                            "pythonic",
                            "chinese",
                            "sinjke",
                            "hard-salt",
                            "libre"
                        ]
                    },                    
                    {
                        name: "Engin Akyurn",
                        src: "./engin_akyurt.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$30.00",
                        filters: [
                            "pythonic",
                            "chinese",
                            "sinjke",
                            "hard-salt",
                            "libre",
                            "sour",
                            "procedurally-generated"
                        ]
                    },
                     /**
 * chinese
 * indian
 * spicy
 * sweet
 * soup
 * libre
 * pythonic
 * interdisciplinary
 * breast milk
 * sinjke
 * japanese
 * sea food
 * procedurally generated
 * fresh
 * sour
 * selective
 * hard salt
 * modular
 * OOP
 * soft
 * alcohol
 */
                ]
            }
        ];

        const filterData = [
            { name: "Chinese", tag: "chinese" },
            { name: "Indian", tag: "indian" },
            { name: "Spicy", tag: "spicy" },
            { name: "Sweet", tag: "sweet" },
            { name: "Soup", tag: "soup" },
            { name: "Libre", tag: "libre" },
            { name: "Pythonic", tag: "pythonic" },
            { name: "Interdisciplinary", tag: "interdisciplinary" },
            { name: "Breast Milk", tag: "breast-milk" },
            { name: "Sinjke", tag: "sinjke" },
            { name: "Japanese", tag: "japanese" },
            { name: "Sea Food", tag: "sea-food" },
            { name: "Procedurally Generated", tag: "procedurally-generated" },
            { name: "Fresh", tag: "fresh" },
            { name: "Sour", tag: "sour" },
            { name: "Selective", tag: "selective" },
            { name: "Hard Salt", tag: "hard-salt" },
            { name: "Modular", tag: "modular" },
            { name: "OOP", tag: "oop" },
            { name: "Soft", tag: "soft" },
            { name : "Alcoholic", tag : "alcohol" }

        ];
        const menu = create_menu(sections);
        const aside = create_aside(filterData);

        function create_menu(sections) {
            const menu = document.createElement("div");

            for (let secs of sections) {
                const section = document.createElement("div");
                const sectionName = document.createElement("h2");
                const itemsContainer = document.createElement("div");
                const seraph = document.createElement("div");

                for (let it of secs.items) {
                    const item = document.createElement("div");
                    const itemName = document.createElement("h2");
                    const seraphItem = document.createElement("div");
                    const itemInfo = document.createElement("div");
                    const itemImg = document.createElement("img");
                    const itemDescription = document.createElement("div");
                    const description = document.createElement("p");
                    const price = document.createElement("p");

                    item.append(itemName);
                    item.append(seraphItem);
                    item.append(itemInfo);
                    itemInfo.append(itemImg);
                    itemInfo.append(itemDescription);
                    itemDescription.append(description);
                    itemDescription.append(price);

                    item.classList.add("menu-item");
                    seraphItem.classList.add("seraph");
                    itemInfo.classList.add("details");
                    itemDescription.classList.add("item-description");
                    description.classList.add("description");
                    price.classList.add("price");

                    itemName.innerText = it.name;
                    itemImg.src = it.src;
                    description.innerText = it.description;
                    price.innerText = it.price;
                    item.setAttribute("data-filter", it.filters.join(' '));

                    itemsContainer.append(item);
                }

                section.append(sectionName);
                section.append(itemsContainer);
                section.append(seraph);

                section.classList.add("menu-section");
                itemsContainer.classList.add("menu-items");
                seraph.classList.add("seraph");

                sectionName.innerText = secs.name;

                menu.classList.add("menu");
                menu.append(section);
            }
            return menu;
        }

        function create_aside(filterData) {
            const aside = document.createElement("aside");
            const openAside = document.createElement("button");
            const closeAside = document.createElement("button");
            const search = document.createElement("div");
            const searchLabel = document.createElement("label");
            const searchBar = document.createElement("input");
            const currentFilters = document.createElement("div");
            const buttons = document.createElement("div");
            const clearFilters = document.createElement("button");
            const applyFilters = document.createElement("button");
            const seraph = document.createElement("div");
            const unusedFilters = document.createElement("div");
            const nothing = document.createElement("h3");
            let filters;

            aside.append(openAside);
            aside.append(closeAside);
            aside.append(search);
            aside.append(currentFilters);
            aside.append(buttons);
            aside.append(seraph);
            aside.append(unusedFilters);
            aside.append(nothing);
            search.append(searchLabel);
            search.append(searchBar);
            buttons.append(clearFilters);
            buttons.append(applyFilters);

            openAside.classList.add("open-aside");
            closeAside.classList.add("close-aside");
            closeAside.classList.add("close-aside");
            search.classList.add("search");
            currentFilters.classList.add("current-filters");
            buttons.classList.add("buttons");
            clearFilters.classList.add("clear-filters");
            applyFilters.classList.add("apply-filters");
            seraph.classList.add("seraph");
            unusedFilters.classList.add("unused-filters");
            nothing.classList.add("nothing-found");

            openAside.innerText = "Filters";
            clearFilters.innerText = "Clear Filters";
            applyFilters.innerText = "Apply Filters";
            nothing.innerText = "No Filters Found!";
            searchBar.setAttribute("type", "search");
            searchBar.setAttribute("name", "search-item");
            searchLabel.setAttribute("for", "search-bar");

            filters = [];
            for (let filter of filterData) {
                let newFilter;

                newFilter = add_filter(filter.name, filter.tag, currentFilters, unusedFilters);
                unusedFilters.append(newFilter);
                filters.push(newFilter);
            }

            openAside.addEventListener("click", () => {
                aside.style.transform = "translateX(0)";
                openAside.style.opacity = 0;
            });

            closeAside.addEventListener("click", () => {
                aside.style.transform = "translateX(-100%)";
                openAside.style.opacity = 1;
            });

            clearFilters.addEventListener("click", () => {
                let items;

                items = document.querySelectorAll(".menu-item");
                items.forEach(item => item.style.display = "block");
                hide_empty_sections();
                filters.forEach(filter => {
                    let checkbox;

                    checkbox = filter.querySelector("input[type='checkbox']");
                    if (checkbox.checked)
                        checkbox.click();
                });
            });

            applyFilters.addEventListener("click", () => {
                let items, toHide;

                items = document.querySelectorAll(".menu-item");
                toHide = [];
                items.forEach(item => {
                    let currents, itemTags;

                    currents = [...currentFilters.querySelectorAll(".filter")].map(filter => filter.getAttribute("data-filter"));
                    if (!currents.length) {
                        item.style.display = "block";
                        return;
                    }
                    itemTags = item.getAttribute("data-filter").split(' ');

                    if (!intersect(currents, itemTags))
                        toHide.push(item);
                    else
                        item.style.display = "block";
                });
                toHide.forEach(item => item.style.display = "none");
                hide_empty_sections();
            });

            search.addEventListener("input", () => {
                if (!searchBar.value.trim()) {
                    filters.forEach(filter => filter.style.display = "flex");
                    nothing.style.display = "none";
                    return;
                }

                let count;

                count = 0;
                filters.forEach(filter => {
                    if (filter.querySelector("input").checked)
                        return;

                    let name;

                    name = filter.querySelector("p").innerText.toLowerCase();
                    if (is_substring(searchBar.value.toLowerCase(), name)) {
                        filter.style.display = "flex";
                        count++;
                    }
                    else
                        filter.style.display = "none";

                    if (count) {
                        nothing.style.display = "none";
                    }
                    else
                        nothing.style.display = "block";
                });
            });

            function hide_empty_sections() {
                let sections, toHide;

                sections = document.querySelectorAll(".menu-section");
                toHide = [];
                sections.forEach(section => {
                    let items;

                    items = [...section.querySelectorAll(".menu-item")];
                    if (items.every(item => {
                        let style;

                        style = window.getComputedStyle(item);
                        return style.getPropertyValue("display") == "none";
                    }))
                        toHide.push(section);
                    section.style.display = "block";
                });
                toHide.forEach(section => section.style.display = "none");
            }

            function add_filter(name, tag, currentContainer, unusedContainer) {
                const filter = document.createElement("div");
                const check = document.createElement("input");
                const para = document.createElement("p");

                filter.append(check);
                filter.append(para);

                filter.classList.add("filter");

                filter.setAttribute("data-filter", tag);
                check.setAttribute("type", "checkbox");
                para.innerText = name;

                check.addEventListener("click", () => {
                    filter.parentElement.removeChild(filter);
                    if (check.checked)
                        currentContainer.append(filter);
                    else
                        unusedContainer.append(filter);
                });

                return filter;
            }

            return aside;
        }

        function switch_to_menu(main) {
            main.style.display = "block";
            main.innerHTML = '';
            main.append(menu);
            main.append(aside);
        }

        return { switch_to_menu }
    }
)();