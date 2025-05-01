document.addEventListener("DOMContentLoaded", () => {

  const menu = document.getElementById("menu");
  const navbar = document.querySelector(".navbar");

  menu.addEventListener("click", () => {
      menu.classList.toggle("fa-times");
      navbar.classList.toggle("nav-toggle");
  });

  document.getElementById("login").addEventListener("click", () => {
      document.querySelector(".login").classList.add("popup");
  });

  document.querySelector(".login form .fa-times").addEventListener("click", () => {
      document.querySelector(".login").classList.remove("popup");
  });

  window.addEventListener("load", removeActiveClasses);
  window.addEventListener("scroll", removeActiveClasses);

  function removeActiveClasses() {
      menu.classList.remove("fa-times");
      navbar.classList.remove("nav-toggle");
      document.querySelector(".login").classList.remove("popup");
  }

  window.addEventListener("scroll", () => {
      document.querySelectorAll("section").forEach(section => {
          const top = window.scrollY;
          const height = section.clientHeight;
          const id = section.id;
          const offset = section.offsetTop - 200;

          if (top > offset && top < offset + height) {
              document.querySelectorAll(".navbar ul li a").forEach(link => link.classList.remove("active"));
              document.querySelector(`.navbar a[href="#${id}"]`)?.classList.add("active");
          }
      });
  });

});
