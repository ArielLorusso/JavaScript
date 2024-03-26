window.addEventListener('mousemove', function (e) {
    document.getElementById('x-value').textContent = e.x;
    document.getElementById('y-value').textContent = e.y;
});

// Add a class to the body to hide the cursor
let element = document.body;
element.style.cursor = "none"

// Prevent the default context menu behavior  CHAT GPT
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});