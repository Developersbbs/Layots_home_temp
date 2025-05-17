document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.accordion-btn');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const content = document.getElementById(targetId);
            const icon = button.querySelector('svg');
            
            // Close all other accordions
            document.querySelectorAll('.accordion-content').forEach(item => {
                if (item.id !== targetId) {
                    item.classList.add('hidden');
                    const otherIcon = item.previousElementSibling.querySelector('svg');
                    otherIcon.style.transform = 'rotate(0deg)';
                }
            });
            
            // Toggle current accordion
            content.classList.toggle('hidden');
            icon.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
        });
    });
});
