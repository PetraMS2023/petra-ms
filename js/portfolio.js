let pop4 = document.getElementById("pop4");
let closeBtn = document.querySelectorAll(".close");
let projects = document.querySelectorAll(".p div");
let popupImg = document.getElementById('img');
let visitLink = document.getElementById('visit-link');

function showItems(element) {
    let img = element.querySelector('img');
    popupImg.src = img.src;
    visitLink.href = img.getAttribute('data-url');
    pop4.style.display = "flex";
}

projects.forEach((e) => {
  e.addEventListener("click", () => {
    showItems(e);
  });
});

closeBtn.forEach((e) => {
  e.addEventListener("click", () => {
    pop4.style.display = "none";
  });
});
