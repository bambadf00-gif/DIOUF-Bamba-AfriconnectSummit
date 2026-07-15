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

    if (pros.length > 0) {
        pros[0].classList.add("vi");
    }

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
    };



    const formulaire = document.querySelector(".formulaire");

    if (formulaire) {
        const nomUser = document.querySelector("#nomUser");
        const mailUser = document.querySelector("#mailUser");
        const messageUser = document.querySelector("#message");
        const telUser = document.querySelector("#telUser");

        //Sélection des paragraphes de messages d'erreur CSS
        const erreurNom = document.querySelector(".erreurNom");
        const erreurMail = document.querySelector(".erreurMail");
        const erreurMessage = document.querySelector(".erreurMessage");
        const erreurTel = document.querySelector(".erreurTel");

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const mesVal1 = document.querySelector(".mesVal1");


        formulaire.addEventListener("submit", (e) => {
            e.preventDefault();
            console.log(formulaire);

            if (nomUser.value.trim().length < 2) {
                erreurNom.classList.add("erreurVisible");
            } else {
                erreurNom.classList.remove("erreurVisible");
            }
            if (messageUser.value.trim().length < 20) {
                erreurMessage.classList.add("erreurVisible");
            } else {
                erreurMessage.classList.remove("erreurVisible");
            }
            if (telUser.value.trim().length < 8) {
                erreurTel.classList.add("erreurVisible");
            } else {
                erreurTel.classList.remove("erreurVisible");
            }

            if (regex.test(mailUser.value.trim())) {
                erreurMail.classList.remove("erreurVisible");
            } else {
                erreurMail.classList.add("erreurVisible");
            }

            const mesVal =
                nomUser.value.trim().length >= 2 &&
                telUser.value.trim().length >= 9 &&
                messageUser.value.trim().length >= 20 &&
                regex.test(mailUser.value.trim())

            if (mesVal) {
                mesVal1.classList.add("voixme"); // s'affiche immédiatement
                setTimeout(() => {
                    mesVal1.classList.remove("voixme"); // disparaît après 3s
                }, 3000);
                nomUser.value = "";
                telUser.value = "";
                mailUser.value = "";
                messageUser.value = "";
            }
        })
    };

    const nbrInQ = document.querySelectorAll(".nbrIn");
    // ===============================================
    // ===============================================
    const observateurChifre = new IntersectionObserver((chiffreVerifiez) => {
        for (let chiffre of chiffreVerifiez) {
            if (chiffre.isIntersecting) {

                observateurChifre.unobserve(chiffre.target);

                let cpt = 0;
                let val = Number(chiffre.target.dataset.nbrI)
                let pas = Math.ceil(val / 100);

                const calcul = setInterval(() => {
                    if (cpt < val) {
                        cpt += pas;
                    } else {
                        clearInterval(calcul)
                    }
                    chiffre.target.textContent = cpt;
                }, 20);
            }
        }
    })
    for (let prest of nbrInQ) {
        observateurChifre.observe(prest);
    }

    // ===============================================
    // ===============================================

    const chiffres = document.querySelectorAll(".nbrspan1grid1");
    const dateFinale = new Date("2026-10-15T10:00:00").getTime();

    setInterval(function () {
        const maintenant = new Date().getTime();
        const distance = dateFinale - maintenant;

        const jours = Math.floor(distance / 1000 / 60 / 60 / 24);
        const heures = Math.floor(distance / 1000 / 60 / 60 % 24);
        const minutes = Math.floor(distance / 1000 / 60 % 60);
        const secondes = Math.floor(distance / 1000 % 60);

        chiffres[0].textContent = jours;
        chiffres[1].textContent = heures;
        chiffres[2].textContent = minutes;
        chiffres[3].textContent = secondes;

    }, 1000);

    // ===============================================
    // ===============================================
    document.getElementById("anneeActuelle").textContent = new Date().getFullYear();
});