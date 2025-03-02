document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    menuBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent immediate closing
        mobileMenu.classList.toggle("hidden");
        document.body.style.backgroundColor = "#ffffff"; // Change to blue
            document.querySelectorAll(".abc").forEach(element => {
                element.classList.toggle("hidden"); // Hide or show content
            });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!menuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.add("hidden");
        }
    });

    // Prevent menu from closing when clicking inside
    mobileMenu.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});
