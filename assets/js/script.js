// 'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarbtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
let arrow = document.getElementById('arrow');
flag=0;

sidebarbtn.addEventListener("click", function() { elementToggleFunc(sidebar)
    flag==0?(arrow.innerHTML='<ion-icon name="arrow-up-outline"></ion-icon>',flag=1):(arrow.innerHTML='<ion-icon name="arrow-down-outline"></ion-icon>',flag=0);
})