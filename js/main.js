document.addEventListener("DOMContentLoaded", () => {

    // ===========================================
    // ===============dark mode===================
    // ===========================================
    const btnToggel = document.querySelector(".brnDark");
    const body = document.querySelector("body");

    console.log(btnToggel);

    if (btnToggel) {
        if (localStorage.getItem("theme") === "dark") {
            body.classList.add("dark");
        }

        btnToggel.addEventListener("click", () => {
            body.classList.toggle("dark");

            if (body.classList.contains("dark")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        })
    };

    // ===========================================
    // =============menu burger===================
    // ===========================================
    
    const menuMobile = document.querySelector("#menuMobile");
    const burger = document.querySelector(".burger")

    if (menuMobile) {
        burger.addEventListener("click", () => {
            menuMobile.classList.toggle("menuMobileActive");
        })
    }

    // ===========================================
    // ================Btn remonte================
    // ===========================================
    const btnRemonte = document.querySelector(".btnremonte");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            btnRemonte.classList.add("btnRmtAfficher");
        } else {
            btnRemonte.classList.remove("btnRmtAfficher");
        }

    })
    btnRemonte.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
})