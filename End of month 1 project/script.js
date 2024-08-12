// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // Toggle navigation menu for smaller screens
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector("header nav");

    navToggle.addEventListener("click", function() {
        navMenu.classList.toggle("open");
    });

    // Smooth scroll to sections
    const navLinks = document.querySelectorAll("header nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    // Show more posts on the Blog page
    const loadMoreBtn = document.querySelector(".load-more");
    const hiddenPosts = document.querySelectorAll(".blog-posts .hidden");

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", function() {
            hiddenPosts.forEach(post => {
                post.classList.remove("hidden");
            });
            this.style.display = "none"; // Hide the button after posts are shown
        });
    }

    // Toggle project details on the Work Detail page
    const projectHeaders = document.querySelectorAll(".project-detail h2");

    projectHeaders.forEach(header => {
        header.addEventListener("click", function() {
            const nextElement = this.nextElementSibling;
            if (nextElement.style.display === "block") {
                nextElement.style.display = "none";
            } else {
                nextElement.style.display = "block";
            }
        });
    });

    // Download Resume Button Alert
    const downloadBtn = document.querySelector(".btn");

    if (downloadBtn) {
        downloadBtn.addEventListener("click", function(event) {
            alert("Your download will start shortly!");
        });
    }

    // Social Media Links Confirmation
    const socialLinks = document.querySelectorAll(".social-media a");

    socialLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            const confirmNavigation = confirm("You are leaving the site. Continue?");
            if (!confirmNavigation) {
                event.preventDefault();
            }
        });
    });
});
