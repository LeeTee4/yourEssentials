const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const targetDiv = document.querySelector(button.dataset.target);
        document.querySelectorAll('div').forEach((div) => {
            div.classList.add('product-class');
        });
        targetDiv.classList.remove('product-class');
    })
});