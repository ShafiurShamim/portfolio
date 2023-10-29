function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("pg-item");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}

function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
window.addEventListener("DOMContentLoaded", () => {
    var btnContainer = document.getElementById("portfolioBtnContainer");
    var btns = btnContainer.getElementsByTagName("button");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = btnContainer.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
            filterSelection(this.getAttribute('data-id'))
        });
    }
    filterSelection("all");
});


// Theme Switcher Start
const themeSwitch = document.querySelector("input[name='switch']");

themeSwitch.addEventListener("click", function () {
    let theme = getCurrentTheme();
    if (theme === "light") {
        theme = "dark";
    } else {
        theme = "light";
    }
    loadTheme(theme);
    localStorage.setItem("my.theme", theme);
});

function getCurrentTheme() {
    let theme =
        document.querySelector(":root").getAttribute("data-theme") === "dark"
            ? "dark"
            : "light";
    localStorage.getItem("my.theme")
        ? (theme = localStorage.getItem("my.theme"))
        : null;
    return theme;
}

function loadTheme(theme) {
    if (theme == "dark") {
        themeSwitch.setAttribute("checked", true);
    }
    document.querySelector(":root").setAttribute("data-theme", theme);
}

window.addEventListener("DOMContentLoaded", () => {
    loadTheme(getCurrentTheme());
});
// Theme Switcher End

// Nav Highlighter Start
// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");
// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
    // Get current scroll position
    let scrollY = window.scrollY;
    // Now we loop through sections to get height, top and ID values for each
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");
        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            document
                .querySelector(
                    ".navigation a[href*=" + sectionId + "]"
                )
                .classList.add("active");
        } else {
            document
                .querySelector(
                    ".navigation a[href*=" + sectionId + "]"
                )
                .classList.remove("active");
        }
    });
}
// Nav Highlighter End