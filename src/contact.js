export const contactObj = (
    () => {
        const contact = document.createElement("div");
        const h2 = document.createElement("h2");
        const para = document.createElement("p");
        const form = document.createElement("form");
        const ul = document.createElement("ul");
        const nameli = document.createElement("li");
        const nameLabel = document.createElement("label");
        const nameInput = document.createElement("input");
        const switchli = document.createElement("li");
        const switchElem = document.createElement("div");
        const check = document.createElement("input");
        const labels = document.createElement("div");
        const teLabel = document.createElement("label");
        const emaiLabel = document.createElement("label");
        const telInput = document.createElement("input");
        const emaInput = document.createElement("input");
        const subjectli = document.createElement("li");
        const subjectLabel = document.createElement("label");
        const subjectInput = document.createElement("input");
        const messageli = document.createElement("li");
        const messageLabel = document.createElement("label");
        const messageInput = document.createElement("textarea");
        const submitli = document.createElement("li");
        const submitButton = document.createElement("button");

        contact.append(h2);
        contact.append(para);
        contact.append(form);
        form.append(ul);
        ul.append(nameli);
        nameli.append(nameLabel);
        nameli.append(nameInput);
        ul.append(switchli);
        switchli.append(switchElem);
        switchElem.append(check);
        switchElem.append(labels);
        labels.append(teLabel);
        labels.append(emaiLabel);
        switchElem.append(telInput);
        switchElem.append(emaInput);
        ul.append(subjectli);
        subjectli.append(subjectLabel);
        subjectli.append(subjectInput);
        ul.append(messageli);
        messageli.append(messageLabel);
        messageli.append(messageInput);
        ul.append(submitli);
        submitli.append(submitButton);
        
        contact.classList.add("reach-out");
        switchElem.classList.add("switch");
        labels.classList.add("labels");

        h2.innerText = "Contact";
        para.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officiis nesciunt nam molestiae consequatur maiores enim sit amet. Po Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam possimus similique nam consequatur repudiandae dolor? Aut porro placeat harum deleniti! ssimus, maiores.";
        nameLabel.innerText = "Name";
        nameInput.setAttribute("type", "text");
        nameInput.setAttribute("name", "user-name");
        nameInput.required = true;
        check.setAttribute("type", "checkbox");
        teLabel.setAttribute("for", "telephone");
        teLabel.innerText = "Phone";
        emaiLabel.setAttribute("name", "user-email");
        emaiLabel.innerText = "Email";
        telInput.setAttribute("type", "tel");
        telInput.setAttribute("name", "telephone")
        telInput.setAttribute("pattern", "\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}");
        emaInput.setAttribute("type", "email")
        emaInput.setAttribute("name", "user-email");
        emaInput.setAttribute("pattern", "\\w+@\\w+\\.com");
        emaInput.required = true;
        subjectLabel.setAttribute("for", "subject");
        subjectLabel.innerText = "Subject";
        subjectInput.setAttribute("type", "text");
        subjectInput.setAttribute("name", "subject");
        subjectInput.required = true;
        messageLabel.setAttribute("for", "message");
        messageLabel.innerText = "Message";
        messageInput.setAttribute("name", "message");
        messageInput.setAttribute("cols", "30");
        messageInput.setAttribute("rows", "10");
        submitButton.setAttribute("type", "submit");
        submitButton.innerText = "Send";

        check.addEventListener("click", () => {
            if (check.checked) {
                emaInput.required = false;
                telInput.required = true;
            }
            else {
                emaInput.required = true;
                telInput.required = false;
            }
        });
        
        function switch_to_contact(main) {
            main.style.display = "flex";
            main.innerHTML = '';
            main.append(contact);
        }
        return { switch_to_contact }
    }
)();