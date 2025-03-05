// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');
const navbox = document.querySelectorAll('.nav-box');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.textContent = navLinks.classList.contains('active') ? '×' : '☰';
});

navbox.forEach(nav=>{
    nav.addEventListener('click',()=>{
        navLinks.classList.remove('active');
        hamburger.textContent = '☰';
    })
})
links.forEach(link=>{
    link.addEventListener('click',()=>{
        navLinks.classList.remove('active');
        hamburger.textContent = '☰';
    })
})
document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
        navLinks.classList.remove('active');
        hamburger.textContent = '☰';
    }
});
document.querySelectorAll('.nav-box').forEach(item => {
    item.addEventListener('click', () => {
        const link = item.querySelector('a');
        if (link) {
            window.location.href = link.getAttribute('href');
        }
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Animation on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when the timeline item enters the viewport
                entry.target.classList.add('animate'); // Add the animate class
            } else {
                // Optionally remove the animation class when the item is out of view
                entry.target.classList.remove('animate');
            }
        });
    }, {
        threshold: 0.2 // Trigger when 10% of the element is visible
    });

    // Start observing each timeline item
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item); // Observe the visibility of each timeline item
    });
});



document.addEventListener("DOMContentLoaded", function () {
    // Animation on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when the timeline item enters the viewport
                entry.target.classList.add('anima'); // Add the animate class
            } else {
                // Optionally remove the animation class when the item is out of view
                entry.target.classList.remove('anima');
            }
        });
    }, {
        threshold: 0.2 // Trigger when 10% of the element is visible
    });

    // Start observing each timeline item
    document.querySelectorAll('.animate-text').forEach(item => {
        observer.observe(item); // Observe the visibility of each timeline item
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Animation on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                // Add animation class when the card enters the viewport
                entry.target.classList.add('animate-card');
            } else {
                // Optionally remove the animation class when the card is out of view

                entry.target.classList.remove('animate-card');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Start observing each project card
    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card); // Observe the visibility of each card
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Animation on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("remove");
                // Add animation class when the card enters the viewport
                entry.target.classList.add('animate-card');
            } else {
                // Optionally remove the animation class when the card is out of view
                console.log("Hello World");
                entry.target.classList.remove('animate-card');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Start observing each project card
    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card); // Observe the visibility of each card
    });
});

// Header appear animation on page load
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.add('appear');
});
    document.getElementById("iconlink").addEventListener("click", function(e) {
        // Show a confirmation dialog before navigating away
        var userConfirmed = confirm("Are you sure you want to leave this site?");
        
        // If the user clicks "Cancel", prevent the navigation
        if (!userConfirmed) {
            e.preventDefault(); // Prevent the default link behavior
        }
    });
    document.getElementById("iconlink1").addEventListener("click", function(e) {
        // Show a confirmation dialog before navigating away
        var userConfirmed = confirm("Are you sure you want to leave this site?");
        
        // If the user clicks "Cancel", prevent the navigation
        if (!userConfirmed) {
            e.preventDefault(); // Prevent the default link behavior
        }
    });
    document.getElementById("iconlink2").addEventListener("click", function(e) {
        // Show a confirmation dialog before navigating away
        var userConfirmed = confirm("Are you sure you want to leave this site?");
        
        // If the user clicks "Cancel", prevent the navigation
        if (!userConfirmed) {
            e.preventDefault(); // Prevent the default link behavior
        }
    });
    document.getElementById("iconlink3").addEventListener("click", function(e) {
        // Show a confirmation dialog before navigating away
        var userConfirmed = confirm("Are you sure you want to leave this site?");
        
        // If the user clicks "Cancel", prevent the navigation
        if (!userConfirmed) {
            e.preventDefault(); // Prevent the default link behavior
        }
    });
    document.addEventListener("DOMContentLoaded", function () {
        // Animation on scroll for cards
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add animation class when the card enters the viewport
                    entry.target.classList.add('anima');
                    
                    // If the element is #number3, start the counter animation
                    if (entry.target.id === "number3") {
                        startCounter(entry.target);
                    }
                } else {
                    // Optionally remove the animation class when the card is out of view
                    entry.target.classList.remove('anima');
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });
    
        // Start observing each project card
        document.querySelectorAll('.number').forEach(card => {
            observer.observe(card); // Observe the visibility of each card
        });
    
        // Start observing the number elements
        const numberElement = document.getElementById('number3');
        if (numberElement) {
            observer.observe(numberElement);  // Observe the visibility of the number
        }
    
        // Function to start the counter animation
        function startCounter(numberElement) {
            
            let number = document.getElementById("number");
            let counter = 0;
            setInterval(() =>{
                if(counter == 80){
                    clearInterval();
                }else{
                    counter += 1;
                    number.innerHTML = counter + "%";
                }
            }, 12);
            let number1 = document.getElementById("number1");
            let counter1 = 0;
            setInterval(() =>{
                if(counter1 == 80){
                    clearInterval();
                }else{
                    counter1 += 1;
                    number1.innerHTML = counter1 + "%";
                }
            }, 12);

            let number2 = document.getElementById("number2");
            let counter2 = 0;
            setInterval(() =>{
                if(counter2 == 65){
                clearInterval();
            }else{
                counter2 += 1;
                number2.innerHTML = counter2 + "%";
            }
        }, 15);

            let counter3 = 0;
            let interval = setInterval(() => {
                if (counter3 === 50) {
                    clearInterval(interval); // Stop when the counter reaches 65
                } else {
                    counter3 += 1;
                    numberElement.innerHTML = counter3 + "%";
                }
            }, 15);
        }
    });


    document.addEventListener("DOMContentLoaded", function () {
        // Create the IntersectionObserver
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Check if the circle element is in the viewport
                if (entry.isIntersecting) {
                    // Add a class to start the animation when the element enters the viewport
                    entry.target.classList.add('animate-circle');
                } else {
                    // Optionally remove the class when the element is out of view (if needed)
                    entry.target.classList.remove('animate-circle');
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });
    
        // Start observing each circle element
        document.querySelectorAll('.circle, .circle1, .circle2, .circle3').forEach(circle => {
            observer.observe(circle); // Observe each circle
        });
    });
    var projectLinks = document.querySelectorAll(".project-link");
    projectLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        // Show a confirmation dialog before navigating away
        var userConfirmed = confirm("Are you sure you want to leave this site?");
        
        // If the user clicks "Cancel", prevent the navigation
        if (!userConfirmed) {
            e.preventDefault(); // Prevent the default link behavior
        }
    });
    });