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
            nav.style.transform = 'translateX(-100%)';
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
        nav.style.transform = 'translateX(-100%)';
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

        const textArray = ["Web Developer", "UI Designer", "Programmer"];
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

            readMore.addEventListener('click', function (e) {
                moreContent.style.display = 'block';
                lessContent.style.display = 'none';
                
            });

            readLess.addEventListener('click', function (e) {
                moreContent.style.display = 'none';
                lessContent.style.display = 'block';
                
            });
        });


        // Contact Us Form 
        
        
const sendEmail = ()=> {
    let name = document.getElementById("name").value
    let mobile = document.getElementById("mobile").value
    let email = document.getElementById("email").value
    let message = document.getElementById("message").value
    let mainbody = ` The Details of The Sender in Your Portfolio Website Are Given Below: <br/><br/><br/> Name : ${name} <br/> Mobile Number : ${mobile} <br/> Email Address : ${email} <br/> Message : ${message}`
    let Usermainbody = ` Dear ${name}, <br/><br/><br/> Thank you for reaching out to me. I appreciate your interest and the opportunity to assist you. Your query is important to me, and I'm eager to provide you with the information or support you need. Feel free to share any specific questions or requirements you have, and I'll do my best to address them promptly. I will contact you as soon as possible. <br/><br/><br/> Best Regards, <br/> Amit Roy `

    // console.log(mainbody)
    Email.send({
        SecureToken: "00ae0dd5-74c7-4582-9267-a03ae0a9e282",
        To: 'arupjisumita2003@gmail.com',
        From: "amitroy251203@gmail.com",
        Subject: "Response From The Portfolio of Amit Roy",
        Body: mainbody
    }).then(
        message => alert("Your Message Has Been Sent Successfully")
    );

    Email.send({
        SecureToken: "00ae0dd5-74c7-4582-9267-a03ae0a9e282",
        To: email,
        From: "amitroy251203@gmail.com",
        Subject: "Response From Amit Roy",
        Body: Usermainbody
    }).then(
        message => alert("A quick response has been sent to your Mail id. If not found do check the spam section of your Email ")
    );

    

}

AOS.init();






