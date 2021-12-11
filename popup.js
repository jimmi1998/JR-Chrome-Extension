var theme = document.getElementById("theme");

theme.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        theme.src = "images/sun.png"
    } else {
        theme.src = "images/moon.png";
    }
}