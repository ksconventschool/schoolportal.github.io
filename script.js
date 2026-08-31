/* =========================================================
   PARVATI VIDYA PEETH H.S. SCHOOL
   Website JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ================= HEADER ================= */

    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });


    /* ================= MOBILE MENU ================= */

    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("open");
    });


    const navLinks = navbar.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {
            navbar.classList.remove("open");
        });

    });


    /* ================= SCROLL REVEAL ================= */

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    /* ================= CURRICULUM TABS ================= */

    const curriculumTabs =
        document.querySelectorAll(".curriculum-tab");

    const curriculumPanels =
        document.querySelectorAll(".curriculum-panel");


    curriculumTabs.forEach(tab => {

        tab.addEventListener("click", () => {

            const level = tab.dataset.level;

            curriculumTabs.forEach(item => {
                item.classList.remove("active");
            });

            curriculumPanels.forEach(panel => {
                panel.classList.remove("active");
            });

            tab.classList.add("active");

            const selectedPanel =
                document.getElementById(level);

            if (selectedPanel) {
                selectedPanel.classList.add("active");
            }

        });

    });


    /* ================= COUNTERS ================= */

    const counters =
        document.querySelectorAll(".counter");

    let countersStarted = false;


    function startCounters() {

        if (countersStarted) {
            return;
        }

        countersStarted = true;

        counters.forEach(counter => {

            const target =
                Number(counter.dataset.target);

            let current = 0;

            const duration = 900;

            const startTime = performance.now();


            function updateCounter(currentTime) {

                const progress =
                    Math.min(
                        (currentTime - startTime) / duration,
                        1
                    );

                current =
                    Math.floor(progress * target);

                counter.textContent = current;

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }

            }

            requestAnimationFrame(updateCounter);

        });

    }


    const experienceSection =
        document.querySelector(".experience-section");


    if (experienceSection) {

        const counterObserver =
            new IntersectionObserver(
                entries => {

                    if (entries[0].isIntersecting) {
                        startCounters();
                    }

                },
                {
                    threshold: 0.35
                }
            );

        counterObserver.observe(experienceSection);

    }


    /* ================= BACK TO TOP ================= */

    const backToTop =
        document.getElementById("backToTop");


    window.addEventListener("scroll", () => {

        if (window.scrollY > 600) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }

    });


    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* ================= CURRENT YEAR ================= */

    const yearElement =
        document.getElementById("year");

    if (yearElement) {
        yearElement.textContent =
            new Date().getFullYear();
    }


    /* ================= ACTIVE NAVIGATION ================= */

    const sections =
        document.querySelectorAll("main section[id]");

    const navigationLinks =
        document.querySelectorAll(".navbar a");


    const sectionObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        const id =
                            entry.target.getAttribute("id");

                        navigationLinks.forEach(link => {

                            link.classList.remove("active");

                            if (
                                link.getAttribute("href") ===
                                `#${id}`
                            ) {
                                link.classList.add("active");
                            }

                        });

                    }

                });

            },
            {
                rootMargin: "-35% 0px -55% 0px"
            }
        );


    sections.forEach(section => {
        sectionObserver.observe(section);
    });


    /* ================= KEYBOARD ACCESSIBILITY ================= */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            navbar.classList.remove("open");
        }

    });


    /* ================= LOGO ERROR HANDLING ================= */

    const logos =
        document.querySelectorAll('img[src="logo.png"]');


    logos.forEach(logo => {

        logo.addEventListener("error", () => {

            logo.style.opacity = "0.25";

            console.warn(
                "logo.png was not found. Place logo.png in the same directory as index.html."
            );

        });

    });

});
