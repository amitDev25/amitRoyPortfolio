// Navbar
let menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.overlay-menu');
let phNav = document.querySelectorAll('.phNav');

let toggleIcon = document.querySelector('.menuIcon');

phNav.forEach(element => {
    element.addEventListener('click', () => {

    
        if (nav.style.transform != 'translateX(0%)') {
            nav.style.transform = 'translateX(0%)';
            nav.style.transition = 'transform 0.2s ease-out';
        } else {
            nav.style.transform = 'translateX(100%)';
            nav.style.transition = 'transform 0.2s ease-out';
        }
    
    });

    element.addEventListener('click', () => {
     
        if (toggleIcon.className != 'menuIcon toggle') {
            toggleIcon.className += ' toggle';
        } else {
            toggleIcon.className = 'menuIcon';
        }
    }); 
    
});

menuIcon.addEventListener('click', () => {

    
    if (nav.style.transform != 'translateX(0%)') {
        nav.style.transform = 'translateX(0%)';
        nav.style.transition = 'transform 0.2s ease-out';
    } else {
        nav.style.transform = 'translateX(100%)';
        nav.style.transition = 'transform 0.2s ease-out';
    }

});


// Toggle Menu Icon ========================================

toggleIcon.addEventListener('click', () => {
     
    if (toggleIcon.className != 'menuIcon toggle') {
        toggleIcon.className += ' toggle';
    } else {
        toggleIcon.className = 'menuIcon';
    }
});






const typedTextSpan = document.querySelector(".typed-text");
        const cursorSpan = document.querySelector(".cursor");

        const textArray = ["Software Development Engineer", "Full Stack Developer", "Backend Engineer", "Problem Solver"];
        const typingDelay = 50;
        const erasingDelay = 50;
        const newTextDelay = 1000; // Delay between current and next text
        let textArrayIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            }
            else {
                cursorSpan.classList.remove("typing");
                setTimeout(erase, newTextDelay);
            }
        }

        function erase() {
            if (charIndex > 0) {
                if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, erasingDelay);
            }
            else {
                cursorSpan.classList.remove("typing");
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                setTimeout(type, typingDelay + 1100);
            }
        }

        document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
            if (textArray.length) setTimeout(type, newTextDelay + 250);
        });





        // For Project Section 
        let allProjects = document.querySelectorAll('.textWrap');

        allProjects.forEach(card => {
            let readMore = card.querySelector('.read-more');
            let readLess = card.querySelector('.read-less');
            let moreContent = card.querySelector('.more-content');
            let lessContent = card.querySelector('.less-content');
            
            // Add smooth transition to the wrapper
            card.style.transition = 'height 0.4s ease';
            card.style.overflow = 'hidden';

            readMore.addEventListener('click', function (e) {
                // Get starting height
                let startHeight = card.offsetHeight;
                
                // Measure ending height
                lessContent.style.display = 'none';
                moreContent.style.display = 'block';
                let endHeight = card.scrollHeight;
                
                // Revert to start state
                lessContent.style.display = 'block';
                moreContent.style.display = 'none';
                
                // Set explicit height
                card.style.height = startHeight + 'px';
                
                // Trigger reflow
                void card.offsetWidth;
                
                // Swap content and set new height to trigger animation
                lessContent.style.display = 'none';
                moreContent.style.display = 'block';
                card.style.height = endHeight + 'px';
                
                // Fade in effect
                moreContent.style.opacity = '0';
                moreContent.style.transition = 'opacity 0.4s ease';
                setTimeout(() => moreContent.style.opacity = '1', 10);
                
                // Cleanup after animation
                setTimeout(() => {
                    card.style.height = 'auto';
                }, 400);
            });

            readLess.addEventListener('click', function (e) {
                // Get starting height
                let startHeight = card.offsetHeight;
                
                // Measure ending height
                moreContent.style.display = 'none';
                lessContent.style.display = 'block';
                let endHeight = card.scrollHeight;
                
                // Revert to start state
                moreContent.style.display = 'block';
                lessContent.style.display = 'none';
                
                // Set explicit height
                card.style.height = startHeight + 'px';
                
                // Trigger reflow
                void card.offsetWidth;
                
                // Swap content and set new height to trigger animation
                moreContent.style.display = 'none';
                lessContent.style.display = 'block';
                card.style.height = endHeight + 'px';
                
                // Fade in effect
                lessContent.style.opacity = '0';
                lessContent.style.transition = 'opacity 0.4s ease';
                setTimeout(() => lessContent.style.opacity = '1', 10);
                
                // Cleanup after animation
                setTimeout(() => {
                    card.style.height = 'auto';
                }, 400);
            });
        });


        // Contact Us Form (Web3Forms)
const form = document.getElementById('contactForm');
const result = document.getElementById('resultMessage');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        
        result.innerHTML = "Sending message...";
        result.style.display = "block";

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Your Message Has Been Sent Successfully!";
                form.reset(); // Clear the input fields immediately on success
            } else {
                console.log(response);
                result.innerHTML = "Error: " + json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong! Please try again later.";
        })
        .finally(function() {
            setTimeout(() => {
                result.style.display = "none";
                result.innerHTML = "";
            }, 5000);
        });
    });
}

AOS.init();

// Media Viewer Functions
function openViewer(url, type) {
    const modal = document.getElementById('mediaViewerModal');
    const pdfViewer = document.getElementById('pdfViewer');
    const imageViewer = document.getElementById('imageViewer');

    if (type === 'pdf') {
        pdfViewer.data = url;
        document.getElementById('pdfFallback').href = url;
        pdfViewer.style.display = 'block';
        imageViewer.style.display = 'none';
    } else if (type === 'image') {
        imageViewer.src = url;
        imageViewer.style.display = 'block';
        pdfViewer.style.display = 'none';
    }

    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    document.body.style.overflow = 'hidden';
}

function closeViewer() {
    const modal = document.getElementById('mediaViewerModal');
    const pdfViewer = document.getElementById('pdfViewer');
    const imageViewer = document.getElementById('imageViewer');

    modal.classList.remove('show');
    
    setTimeout(() => {
        pdfViewer.data = '';
        imageViewer.src = '';
        pdfViewer.style.display = 'none';
        imageViewer.style.display = 'none';
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

window.addEventListener('click', function(event) {
    const modal = document.getElementById('mediaViewerModal');
    if (event.target === modal) {
        closeViewer();
    }
});






