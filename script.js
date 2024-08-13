
var modal = document.getElementById("alertModal");


var span = document.getElementsByClassName("close")[0];

window.onload = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




const menuIcon = document.querySelector('#menu-icon');
const navbar = document.getElementById('navbar');

let isNavbarVisible = true;

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active'); 

    if (isNavbarVisible) {
        console.log('LOG');
        navbar.style.display = 'none';
        isNavbarVisible = false;
    } else {
        console.log('LOG 2');
        navbar.style.display = 'block';
        isNavbarVisible = true;
    }
};

























































document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 3000); // Adjust the timeout duration as needed
});



















document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.getElementById('nav-list');

    menuIcon.addEventListener('click', function() {
        navList.classList.toggle('show');
    });
});





































document.addEventListener('DOMContentLoaded', function() {
    const gotItButton = document.querySelector('.alert .got-it');

    gotItButton.addEventListener('click', function() {
        const alertBox = document.querySelector('.alert');
        alertBox.style.display = 'none';
    });
});






















document.addEventListener('DOMContentLoaded', function() {
    const alertBox = document.querySelector('.alert');
    const gotItButton = document.querySelector('.alert .got-it');

    // Show the alert box after 3 seconds
    setTimeout(function() {
        alertBox.classList.add('show');
    }, 3000);

    // Hide the alert box when the "Got It" button is clicked
    gotItButton.addEventListener('click', function() {
        alertBox.style.display = 'none';
    });
});
