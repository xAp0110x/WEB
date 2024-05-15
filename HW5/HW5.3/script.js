const blocks = document.querySelectorAll('.block');

blocks.forEach(block => {
    block.addEventListener('mouseover', () => {
        const prevSibling = block.previousElementSibling;
        const nextSibling = block.nextElementSibling;
        
        prevSibling.style.marginRight = '0px';
        nextSibling.style.marginLeft = '0px';
        
    });

    block.addEventListener('mouseout', () => {
        const prevSibling = block.previousElementSibling;
        const nextSibling = block.nextElementSibling;
        
        prevSibling.style.marginRight = '10px';
        nextSibling.style.marginLeft = '10px';
    });
});
