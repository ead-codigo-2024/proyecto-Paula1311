document.querySelectorAll('.read-more').forEach((button, index) => {
    const sections = ['#fashion', '#beauty', '#culture', '#celebs'];
    button.addEventListener('click', () => {
        document.querySelector(sections[index]).scrollIntoView({ behavior: 'smooth' });
    });
});
