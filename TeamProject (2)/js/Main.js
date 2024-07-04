const se = document.querySelector(".search");
const si = se.querySelector("input");

se.addEventListener("click", function () {
  si.focus();
});

si.addEventListener("focus", function () {
  se.classList.add("focused");
  si.setAttribute("placeholder", "통합검색");
});

si.addEventListener("blur", function () {
  se.classList.remove("focused");
  si.setAttribute("placeholder", "");
});

const fe = document.querySelectorAll(".visual .fadein");
fe.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1
  });
});
