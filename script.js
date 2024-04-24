// Scroll to top button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Show/hide project descriptions
// Tüm projelerin resimlerini ve açıklamalarını seçin
const projects = document.querySelectorAll('.project');

// Her projenin üzerine tıklandığında çalışacak bir fonksiyon tanımlayın
projects.forEach(project => {
    const image = project.querySelector('img');
    const description = project.querySelector('p');

    // Resme tıklandığında açıklamanın görünürlüğünü değiştirin
    image.addEventListener('click', () => {
        description.classList.toggle('hidden'); // hidden sınıfını ekleyip kaldırarak görünürlüğü değiştirin
    });
});


// Get the mode toggle buttons
document.addEventListener('DOMContentLoaded', function() {
    const lightModeToggle = document.getElementById('lightModeToggle');
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Add event listener to the light mode toggle button
    lightModeToggle.addEventListener('click', () => {
        // Set data-theme attribute to "light"
        document.body.setAttribute('data-theme', 'light');
        // Toggle active class between buttons
        lightModeToggle.classList.add('active-mode');
        darkModeToggle.classList.remove('active-mode');
    });

    // Add event listener to the dark mode toggle button
    darkModeToggle.addEventListener('click', () => {
        // Set data-theme attribute to "dark"
        document.body.setAttribute('data-theme', 'dark');
        // Toggle active class between buttons
        lightModeToggle.classList.remove('active-mode');
        darkModeToggle.classList.add('active-mode');
    });
});
