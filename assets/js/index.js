const darkModeFunction = () => { //Dark mode function
    const bulb = document.querySelector(".bulb img");
    const root = document.querySelector(":root");
    let darkMode = localStorage.getItem("darkMode");

    const enableDarkMode = () => {
        root.style.setProperty("--bg-color", "#323536");
        root.style.setProperty("--txt-color", "white");
        root.style.setProperty("--main-color", "cyan");

        bulb.setAttribute("src", "assets/img/bulb-off-svgrepo-com.svg");

        localStorage.setItem("darkMode", "enabled");
    }

    const disableDarkMode = () => {
        root.style.setProperty("--bg-color", "whitesmoke");
        root.style.setProperty("--txt-color", "black");
        root.style.setProperty("--main-color", "darkcyan");

        bulb.setAttribute("src", "assets/img/bulb-on-svgrepo-com.svg");

        localStorage.setItem("darkMode", "disabled");
    }

    (darkMode === "enabled") 
        ? enableDarkMode()
        : disableDarkMode();

    bulb.addEventListener("click", () => {
        darkMode = localStorage.getItem("darkMode");

        (darkMode !== "enabled")
            ? enableDarkMode()
            : disableDarkMode();
    })
}

const upArrowShowUp = () => { //Up arrow on scroll show up animation 
    window.addEventListener("scroll", () => {
        const upArrow = document.querySelector(".up-arrow");
        const scrollPosition = window.scrollY;

        if (scrollPosition > 400) {
            upArrow.classList.remove("hide");
        }
        else {
            upArrow.classList.add("hide");
        }
    })
}

const upArrowOnScroll = () => { //Up arrow scroll function
    const upArrow = document.querySelector(".up-arrow");

    upArrow.addEventListener("click", () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });
}

const panelArrowAnimation = () => { //Panel arrow rotate animation
    const dropdownPanel = document.querySelector(".dropdown-panel");
    const panelCheckbox = document.querySelectorAll(".panel-checkbox");
    const panelArrow = document.querySelectorAll(".panel-arrow");

    document.addEventListener("click", e => {
        if (e.target.matches(".panel-checkbox")) {
            if (!dropdownPanel.classList.contains("opened")) {
                panelArrow[[].indexOf.call(panelCheckbox, e.target)].style.transform = "rotate(90deg)";
                dropdownPanel.classList.add("opened");
            }
            else {
                panelArrow[[].indexOf.call(panelCheckbox, e.target)].style.transform = "rotate(0deg)";
                dropdownPanel.classList.remove("opened");
            }
        }
    })
}

darkModeFunction();
upArrowShowUp();
upArrowOnScroll();
panelArrowAnimation();



