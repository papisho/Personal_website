
function initProjectsCarousel() {
    const carousel = document.querySelector('.projects-grid');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const projects = document.querySelectorAll('.project-card');
    const totalProjects = projects.length;
    let currentIndex = 0;
    let projectsPerView = 3; // Default for desktop
    
    function updateProjectsPerView() {
        if (window.innerWidth < 768) {
            projectsPerView = 1;
        } else if (window.innerWidth < 1024) {
            projectsPerView = 2;
        } else {
            projectsPerView = 3;
        }
    }
    
    function updateCarousel() {
        updateProjectsPerView();
        
        // Calculate transform value
        const cardWidth = projects[0].offsetWidth + 30; // Include gap
        const transformValue = -currentIndex * cardWidth;
        carousel.style.transform = `translateX(${transformValue}px)`;
        
        // Update button visibility
        prevBtn.classList.toggle('hidden', currentIndex === 0);
        nextBtn.classList.toggle('hidden', currentIndex >= totalProjects - projectsPerView);
    }
    
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalProjects - projectsPerView) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', updateCarousel);
    
    // Initialize
    updateCarousel();
}

document.addEventListener('DOMContentLoaded', initProjectsCarousel);