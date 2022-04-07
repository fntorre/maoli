document.getElementById("darkMode").onclick = function() {
    document.body.classList.add("dark");
    document.getElementById("darkMode").classList.add("hide");
    document.getElementById("dayMode").classList.add("show");
};

document.getElementById("dayMode").onclick = function() {
    document.body.classList.remove("dark");
    document.getElementById("darkMode").classList.remove("hide");
    document.getElementById("dayMode").classList.remove("show");
};
