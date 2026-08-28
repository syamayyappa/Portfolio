/* =========================================================
   PORTFOLIO JAVASCRIPT
   Ponnada Syam Ayyappa
   ========================================================= */


/* =========================================================
   1. MOBILE NAVIGATION MENU
   ========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        // Change hamburger icon to close icon
        const icon = menuBtn.querySelector("i");

        if (icon) {
            if (navLinks.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        }

    });


    // Close mobile menu after clicking a navigation link
    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });

    });

}






/* =========================================================
   2. REPEATING ROLE ANIMATION (Full Stack Developer)
   ========================================================= */

const typingElement = document.getElementById("typing");
const roleText = "Full Stack Developer";

let charIndex = 0;
let isDeleting = false;

function typeRoleEffect() {
    if (!typingElement) return;

    if (!isDeleting) {
        typingElement.textContent = roleText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === roleText.length) {
            isDeleting = true;
            setTimeout(typeRoleEffect, 2800);
            return;
        }
    } else {
        typingElement.textContent = roleText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            setTimeout(typeRoleEffect, 600);
            return;
        }
    }

    const speed = isDeleting ? 45 : 90;
    setTimeout(typeRoleEffect, speed);
}

// Start repeating animation
typeRoleEffect();


/* =========================================================
   3. SCROLL REVEAL ANIMATION
   ========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    /*
                       Stop observing after the animation
                       has already happened.
                    */

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



/* =========================================================
   4. BACK TO TOP BUTTON
   ========================================================= */

const topBtn =
    document.getElementById("topBtn");


if (topBtn) {

    window.addEventListener("scroll", () => {

        /*
           Show button after scrolling 500px
        */

        if (window.scrollY > 500) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    });


    /*
       Smooth scroll to top
    */

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}



/* =========================================================
   5. ACTIVE NAVIGATION LINK
   ========================================================= */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");


function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        /*
           Check whether the user is currently
           inside this section.
        */

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    /*
       Update navigation colors
    */

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/*
   Run once when page loads
*/

updateActiveNavigation();



/* =========================================================
   6. CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
   ========================================================= */

document.addEventListener("click", (event) => {

    if (!menuBtn || !navLinks) {
        return;
    }

    const clickedInsideMenu =
        navLinks.contains(event.target);

    const clickedMenuButton =
        menuBtn.contains(event.target);


    if (
        navLinks.classList.contains("active") &&
        !clickedInsideMenu &&
        !clickedMenuButton
    ) {

        navLinks.classList.remove("active");

        const icon =
            menuBtn.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    }

});



/* =========================================================
   7. KEYBOARD ACCESSIBILITY
   ========================================================= */

document.addEventListener("keydown", (event) => {

    /*
       Press Escape to close mobile navigation
    */

    if (event.key === "Escape") {

        if (
            navLinks &&
            navLinks.classList.contains("active")
        ) {

            navLinks.classList.remove("active");

            const icon =
                menuBtn?.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }

    }

});



/* =========================================================
   8. PREVENT BROKEN "#" LINKS (EXCEPT MODAL TRIGGERS)
   ========================================================= */

document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener("click", (event) => {
        if (!link.hasAttribute("data-open-cert") && !link.hasAttribute("data-open-resume")) {
            event.preventDefault();
        }
    });
});


/* =========================================================
   9. INTERACTIVE CURSOR GLOW & TRAIL
   ========================================================= */

const cursorGlow = document.createElement("div");
cursorGlow.className = "cursor-glow";
document.body.appendChild(cursorGlow);

const cursorDot = document.createElement("div");
cursorDot.className = "cursor-dot";
document.body.appendChild(cursorDot);

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let glowX = mouseX;
let glowY = mouseY;

window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
});

function animateCursor() {
    glowX += (mouseX - glowX) * 0.12;
    glowY += (mouseY - glowY) * 0.12;
    
    cursorGlow.style.left = `${glowX}px`;
    cursorGlow.style.top = `${glowY}px`;
    
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor hover expanding effect
const hoverableElements = document.querySelectorAll(
    "a, button, .card, .btn, .skill-tag, .info-item, .cgpa-badge, .timeline-item"
);

hoverableElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
        cursorDot.classList.add("hovered");
        cursorGlow.style.width = "480px";
        cursorGlow.style.height = "480px";
    });
    
    el.addEventListener("mouseleave", () => {
        cursorDot.classList.remove("hovered");
        cursorGlow.style.width = "420px";
        cursorGlow.style.height = "420px";
    });
});


/* =========================================================
   10. TAP / CLICK RIPPLE ANIMATION
   ========================================================= */

function createRipple(event) {
    const target = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(target.clientWidth, target.clientHeight);
    const radius = diameter / 2;
    const rect = target.getBoundingClientRect();

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add("ripple");

    const existingRipple = target.querySelector(".ripple");
    if (existingRipple) {
        existingRipple.remove();
    }

    target.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
}

document.querySelectorAll(".btn, .social-links a, .card, .menu-btn, .top-btn").forEach((el) => {
    el.addEventListener("click", createRipple);
});


/* =========================================================
   11. CERTIFICATES DATA & LIGHTBOX MODAL
   ========================================================= */

const certificateData = {
    aws: {
        title: "AWS Academy Graduate - Cloud Foundations",
        org: "AWS Academy",
        date: "April 27, 2026",
        badge: "Training Badge (20 Course Hours)",
        verifyUrl: "https://www.credly.com/go/Kqy90cVl",
        verifyText: "Verify on Credly",
        image: "images/cert_aws_original.png",
        desc: "Certified foundational knowledge in AWS cloud computing architecture, security, core services, pricing models, and cloud operational infrastructure."
    },
    nit: {
        title: "Cloud Computing & DevOps Summer Internship Certificate",
        org: "National Institute of Technology (NIT) Tiruchirappalli",
        date: "May 18 to July 18, 2026",
        badge: "Guided by Dr. Vinay Raj, Assistant Professor",
        verifyUrl: "",
        verifyText: "",
        image: "images/cert_nit_original.png",
        desc: "Successfully completed intensive summer internship in Cloud Computing & DevOps, architecting Docker containerized microservices and automated CI/CD deployment pipelines."
    },
    sypro: {
        title: "Full Stack Development Using Python (Lyric Search)",
        org: "Sypro Security Solutions Pvt. Ltd., Vijayawada",
        date: "15/05/2025 – 30/06/2025",
        badge: "Certificate ID: SSSFS0450 • Reg No: 23K61A12A2",
        verifyUrl: "http://www.spyprosecuritysolutions.com",
        verifyText: "Company Website",
        image: "images/cert_sypro_original.jpg",
        desc: "Awarded for full-stack engineering with Python, Flask, and Django, developing high-performance RESTful APIs with indexed query optimization and client debouncing."
    },
    simplilearn: {
        title: "Python for Beginners",
        org: "Simplilearn SkillUp",
        date: "22nd March 2025",
        badge: "Certificate Code: 8077202",
        verifyUrl: "",
        verifyText: "",
        image: "images/cert_simplilearn_original.png",
        desc: "Mastered core Python language fundamentals, data structures, algorithm problem-solving, and object-oriented programming methodologies."
    },
    cisco: {
        title: "Operating Systems Basics",
        org: "Cisco Networking Academy",
        date: "28 Jan 2025",
        badge: "Authorized by Laura Quintana (VP & GM, Cisco)",
        verifyUrl: "",
        verifyText: "",
        image: "images/cert_cisco_original.png",
        desc: "Completed Cisco Networking Academy curriculum covering core operating system principles, process scheduling, memory virtualization, and system security."
    },
    purplelane: {
        title: "UI/UX Design Workshop Certificate",
        org: "PurpleLane & SASI Institute of Technology & Engineering (Autonomous)",
        date: "20-08-2025",
        badge: "Signed by Bhavani Prasad Karrotu (Design Head | Founder - PurpleLane) • ISO 9001:2015",
        verifyUrl: "",
        verifyText: "",
        image: "images/cert_purplelane_original.jpg",
        desc: "Successfully completed intensive 2-week hands-on workshop on UI/UX Design with PurpleLane, mastering wireframing, high-fidelity Figma prototyping, and user-centric design principles."
    }
};

const certModalBackdrop = document.getElementById("certModal");
const certModalTitle = document.getElementById("certModalTitle");
const certModalImg = document.getElementById("certModalImg");
const certModalOrg = document.getElementById("certModalOrg");
const certModalDate = document.getElementById("certModalDate");
const certModalBadge = document.getElementById("certModalBadge");
const certModalDesc = document.getElementById("certModalDesc");
const certModalVerifyBtn = document.getElementById("certModalVerifyBtn");
const certModalOpenImgBtn = document.getElementById("certModalOpenImgBtn");
const certModalClose = document.getElementById("certModalClose");

function openCertModal(key) {
    const cert = certificateData[key];
    if (!cert || !certModalBackdrop) return;

    certModalTitle.innerHTML = `<i class="fa-solid fa-certificate"></i> ${cert.title}`;
    certModalImg.src = cert.image;
    certModalImg.alt = cert.title;
    certModalOrg.textContent = cert.org;
    certModalDate.textContent = cert.date;
    certModalBadge.textContent = cert.badge;
    certModalDesc.textContent = cert.desc;

    if (cert.verifyUrl) {
        certModalVerifyBtn.href = cert.verifyUrl;
        certModalVerifyBtn.style.display = "inline-flex";
        certModalVerifyBtn.innerHTML = `<i class="fa-solid fa-arrow-up-right-from-square"></i> ${cert.verifyText || "Verify Credential"}`;
    } else {
        certModalVerifyBtn.style.display = "none";
    }

    if (certModalOpenImgBtn) {
        certModalOpenImgBtn.href = cert.image;
    }

    certModalBackdrop.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeCertModal() {
    if (!certModalBackdrop) return;
    certModalBackdrop.classList.remove("active");
    document.body.style.overflow = "auto";
}

if (certModalClose) {
    certModalClose.addEventListener("click", closeCertModal);
}

if (certModalBackdrop) {
    certModalBackdrop.addEventListener("click", (e) => {
        if (e.target === certModalBackdrop) {
            closeCertModal();
        }
    });
}

document.querySelectorAll("[data-open-cert]").forEach((el) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        const certKey = el.getAttribute("data-open-cert");
        openCertModal(certKey);
    });
});


/* =========================================================
   12. RESUME VIEWER MODAL
   ========================================================= */

const resumeModal = document.getElementById("resumeModal");
const resumeModalClose = document.getElementById("resumeModalClose");

function openResumeModal() {
    if (!resumeModal) return;
    resumeModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeResumeModal() {
    if (!resumeModal) return;
    resumeModal.classList.remove("active");
    document.body.style.overflow = "auto";
}

if (resumeModalClose) {
    resumeModalClose.addEventListener("click", closeResumeModal);
}

if (resumeModal) {
    resumeModal.addEventListener("click", (e) => {
        if (e.target === resumeModal) {
            closeResumeModal();
        }
    });
}

document.querySelectorAll("[data-open-resume]").forEach((el) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        openResumeModal();
    });
});

// Close all modals on Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeCertModal();
        closeResumeModal();
    }
});


/* =========================================================
   13. CARD 3D TILT EFFECT
   ========================================================= */

const tiltCards = document.querySelectorAll(".card, .project-card, .cert-card-interactive");

tiltCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });
});


/* =========================================================
   14. PAGE LOAD EFFECT & CONSOLE MESSAGE
   ========================================================= */

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

console.log("Portfolio loaded with interactive animations — Ponnada Syam Ayyappa");