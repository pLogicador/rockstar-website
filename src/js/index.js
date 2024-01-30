/*
 * Copyright (c) 01/2024 Pedro Miranda
 * Este arquivo é parte do rockstar-website.
*/
const btn = document.querySelector(".btn-platforms");
const elementPlatforms = document.querySelector(".btn-platforms .platforms");

btn.addEventListener("click", ()=> {
    elementPlatforms.classList.toggle("active");
});