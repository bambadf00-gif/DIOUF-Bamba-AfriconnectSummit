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


    //====================================================================================
    // ==================================section fondut===================================
    // ===================================================================================

    const sectionFondu = document.querySelectorAll("section");

    if (sectionFondu) {
        const observateurSection = new IntersectionObserver((courSection) => {
            for (let sec of courSection) {
                if (sec.isIntersecting) {
                    sec.target.classList.add("visbleSection");
                    observateurSection.unobserve(sec.target);
                } else {
                    sec.target.classList.remove("visbleSection");
                }
            }
        });

        for (let sectionVue of sectionFondu) {
            observateurSection.observe(sectionVue);
        }
    };
    /*=====================================================
    ============filtrage dynamique des Intervennant========
    ===================================================== */
    const filtre = document.querySelectorAll(".btnFiltre");
    const articles = document.querySelectorAll(".sceIntervenantAnime");

    if (filtre.length > 0) {

        for (let art of articles) {
            art.classList.add("visi");
        }

        for (let btn of filtre) {
            btn.addEventListener("click", () => {
                for (let art of articles) {
                    if (btn.dataset.category === "tous") {
                        art.classList.add("visi");
                    } else if (btn.dataset.category === art.dataset.category) {
                        art.classList.add("visi");
                    } else {
                        art.classList.remove("visi");
                    }
                }
            })
        }
    }

    /*=====================================================
    ============filtrage dynamique Proogramme========
    ===================================================== */

    const btnProgramme = document.querySelectorAll(".btnProgramme")
    const pros = document.querySelectorAll(".pro")

    pros[0].classList.add("vi");

    if (btnProgramme) {
        for (let btn of btnProgramme) {
            btn.addEventListener("click", () => {
                for (let p of pros) {
                    if (btn.dataset.pro === p.dataset.pro) {
                        p.classList.add("vi")
                    } else {
                        p.classList.remove("vi")
                    }
                }
            })
        }
    }
})