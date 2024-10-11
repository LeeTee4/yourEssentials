document.querySelectorAll('.filter_products button').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.filter_products button').forEach(btn => btn.classList.remove('active-button'));

        // Hide all product sections
        document.querySelectorAll('.product-class').forEach(section => section.style.display = 'none');

        // Show the corresponding product section
        const target = this.getAttribute('data-target');
        document.querySelector(target).style.display = 'block';

        // Add active class to the clicked button
        this.classList.add('active-button');
    });
});

// Set default: Show first section and make first button active
document.querySelector('.filter_products button').click();

function addToCart() {
    alert('Item added to cart');
}