// include.js
function includeHTML() {
    const elements = document.querySelectorAll("[data-include]");
    elements.forEach(function (el) {
        const file = el.getAttribute("data-include");
        if (file) {
            fetch(file)
                .then(response => {
                    if (response.ok) return response.text();
                    throw new Error('Could not load file: ' + file);
                })
                .then(data => {
                    el.innerHTML = data;
                })
                .catch(error => {
                    console.error('Error loading file:', error);
                });
        }
    });
}

// Call the function on page load
document.addEventListener("DOMContentLoaded", function() {
    includeHTML();
});
