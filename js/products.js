// script.js
document.querySelectorAll('.filter_products button').forEach(button => {
    button.addEventListener('click', function() {
        // Get the target div selector from the data attribute
        const target = this.getAttribute('data-target');
        
        // Hide all product divs
        document.querySelectorAll('.product-class').forEach(div => {
            div.style.display = 'none';  // Hide all divs
        });

        // Show only the selected product div
        const selectedDiv = document.querySelector(target);
        if (selectedDiv) {
            selectedDiv.style.display = 'block';  // Show the target div
        }
    });
});
