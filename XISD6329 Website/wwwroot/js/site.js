// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".dropdown"); // your "Dropdown for rest" element
    const sideMenu = document.getElementById("sideMenu");

    toggleBtn.addEventListener("click", function () {
        sideMenu.classList.toggle("open");
    });
});
