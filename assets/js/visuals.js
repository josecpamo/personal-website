{ //Dark mode function
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

{ //Up arrow on scroll show up animation 
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

{ //Up arrow scroll function
    const upArrow = document.querySelector(".up-arrow");

    upArrow.addEventListener("click", () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });
}






