///////////////////////////////////////////////////////////
//update to current year in footer
const yearEl = document.querySelector(".year");
console.log(yearEl.textContent);
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//mobile navigation
document
  .querySelector(".btn-mobile-nav")
  .addEventListener("click", function () {
    document.querySelector("header").classList.toggle("nav-open");
  });

const links = document.querySelectorAll("a:link");
const buttons = document.querySelectorAll("button");

links.forEach((el) =>
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const link = e.target.getAttribute("href");

    if (link !== "#" && link.startsWith("#"))
      document.querySelector(link).scrollIntoView({ behavior: "smooth" });

    if (link === "#") window.scrollTo({ top: 0, behavior: "smooth" });

    //hiding the mobile nav
    if (e.target.classList.contains("main-nav-link"))
      document.querySelector("header").classList.toggle("nav-open");
  })
);

//sticky navigation
const hero = document.querySelector(".section-hero");

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting)
    document.querySelector("body").classList.add("sticky");
  else document.querySelector("body").classList.remove("sticky");
};

const featureObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-80px",
});

featureObserver.observe(hero);

//smooth scrolling for only the nav-icons
// document.querySelectorAll(".main-nav-list").forEach((el) =>
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const navLink = e.target.classList.contains("main-nav-link");
//     if (!navLink) return;
//     const section = e.target.getAttribute("href");
//     document.querySelector(section).scrollIntoView({ behavior: "smooth" });
//     // const navLink = e.target.getAttribute("href");
//   })
// );

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
