// १. Dark Mode Toggle
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    // बटनको टेक्स्ट बदल्ने
    if (body.classList.contains('dark-theme')) {
        toggleBtn.innerText = "Light Mode";
    } else {
        toggleBtn.innerText = "Dark Mode";
    }
});

// २. Scroll Animation (स्क्रोल गर्दा बिस्तारै देखा पर्ने)
window.addEventListener('scroll', revealSections);

function revealSections() {
    const reveals = document.querySelectorAll('.reveal');
    
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
}

// सुरुआतमै एकपटक चेक गर्ने
revealSections();
