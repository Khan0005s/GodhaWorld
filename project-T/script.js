function toggleProducts() {
  const grid = document.getElementById("trendingGrid");
  const btn = document.querySelector(".view-more-btn");

  if (grid.classList.contains("limited")) {
    grid.classList.remove("limited");
    btn.innerText = "View Less";
  } else {
    grid.classList.add("limited");
    btn.innerText = "View More";
    grid.scrollIntoView({ behavior: "smooth" });
  }
}

function toggleProductsSection(gridId, btn) {
  const grid = document.getElementById(gridId);

  if (grid.classList.contains("limited")) {
    grid.classList.remove("limited");
    btn.innerText = "View Less";
  } else {
    grid.classList.add("limited");
    btn.innerText = "View More";
    grid.scrollIntoView({ behavior: "smooth" });
  }
}


document.querySelectorAll(".accordion-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    const open = content.style.display === "block";

    document.querySelectorAll(".accordion-content").forEach(c => {
      c.style.display = "none";
    });

    content.style.display = open ? "none" : "block";
  });
});

const hamburger = document.getElementById("hamburgerBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("menuOverlay");

hamburger.addEventListener("click", () => {
  sideMenu.classList.add("active");
  overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
});