function showSidebar() {
    document.body.classList.add('sidebar-open');
}

// Hide the sidebar when clicking the close button
document.getElementById("close-btn").onclick = function () {
    document.body.classList.remove('sidebar-open');
};

// Optional: Close the sidebar when clicking outside of it
window.onclick = function (event) {
    if (event.target !== document.getElementById("sidebar") && !document.getElementById("sidebar").contains(event.target) && event.target !== document.getElementById("menu-btn")) {
        document.body.classList.remove('sidebar-open');
    }
}