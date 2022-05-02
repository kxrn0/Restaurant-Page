import { is_substring, intersect } from "./utilities";

export const menuObj = (
    () => {
        const sections = [
            {
                name: "Night",
                items: [
                    {
                        name: "1 2 3",
                        src: "./background.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$24.32",
                        filters: [
                            "1",
                            "2",
                            "3",
                        ]
                    },
                    {
                        name: "2 4 6 8 10",
                        src: "./background.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$24.32",
                        filters: [
                            "2",
                            "4",
                            "6",
                            "8",
                            "10",
                        ]
                    },
                    {
                        name: "3 6 9 12 15 18",
                        src: "./background.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$24.32",
                        filters: [
                            "3",
                            "6",
                            "9",
                            "12",
                            "15",
                            "18"
                        ]
                    },
                ]
            },
            {
                name: "Blue Sky",
                items: [
                    {
                        name: "8 12 3 7 18 0",
                        src: "./background.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$24.32",
                        filters: [
                            "8",
                            "12",
                            "3",
                            "7",
                            "18",
                            "0"
                        ]
                    },
                    {
                        name: "1 9 0 5",
                        src: "./background.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$24.32",
                        filters: [
                            "1",
                            "9",
                            "0",
                            "5",
                        ]
                    },
                    {
                        name: "3 5 8 10 13 17",
                        src: "./background.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$24.32",
                        filters: [
                            "3",
                            "5",
                            "8",
                            "10",
                            "13",
                            "17"
                        ]
                    },
                    {
                        name: "0 5 16 19",
                        src: "./background.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$24.32",
                        filters: [
                            "0",
                            "5",
                            "16",
                            "19",
                        ]
                    },
                    {
                        name: "1 2 3 4 5 6",
                        src: "./background.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$24.32",
                        filters: [
                            "1",
                            "2",
                            "3",
                            "4",
                            "5",
                            "6"
                        ]
                    },
                ]
            },
            {
                name: "Cityscape",
                items: [
                    {
                        name: "7 8 9 10 11 12",
                        src: "./background.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$24.32",
                        filters: [
                            "7",
                            "8",
                            "9",
                            "10",
                            "11",
                            "12"
                        ]
                    },
                    {
                        name: "13 14 15 16 17 18",
                        src: "./background.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$24.32",
                        filters: [
                            "13",
                            "14",
                            "15",
                            "16",
                            "17",
                            "18"
                        ]
                    },
                    {
                        name: "8 10 11 13",
                        src: "./background.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$24.32",
                        filters: [
                            "8",
                            "10",
                            "11",
                            "13",
                        ]
                    },
                ]
            }
        ];
        const filterData = [
            { name: 0, tag: 0 },
            { name: 1, tag: 1 },
            { name: 2, tag: 2 },
            { name: 3, tag: 3 },
            { name: 4, tag: 4 },
            { name: 5, tag: 5 },
            { name: 6, tag: 6 },
            { name: 7, tag: 7 },
            { name: 8, tag: 8 },
            { name: 9, tag: 9 },
            { name: 10, tag: 10 },
            { name: 11, tag: 11 },
            { name: 12, tag: 12 },
            { name: 13, tag: 13 },
            { name: 14, tag: 14 },
            { name: 15, tag: 15 },
            { name: 16, tag: 16 },
            { name: 17, tag: 17 },
            { name: 18, tag: 18 },
            { name: 19, tag: 19 },

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