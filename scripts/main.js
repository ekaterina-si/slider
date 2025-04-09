const projects = [
  {
    city: "Rostov-on-Don LCD admiral",
    area: "81 m2",
    time: "3.5 months",
    cost: "Upon request",
    image: "slide1.jpg"
  },
  {
    city: "Sochi Thieves",
    area: "105 m2",
    time: "4 months",
    cost: "Upon request",
    image: "slide2.jpg"
  },
  {
    city: "Rostov-on-Don Patriotic",
    area: "93 m2",
    time: "3 months",
    cost: "Upon request",
    image: "slide3.jpg"
  }
];

const imageEl = document.getElementById("project-image");
const infoEl = document.getElementById("project-info");
const dots = document.querySelectorAll(".slider__dot");
const tabs = document.querySelectorAll(".slider__tab");

let currentIndex = 1;

function updateSlider(index) {
  const project = projects[index];
  imageEl.style.opacity = 0;

  setTimeout(() => {
    imageEl.src = `images/${project.image}`;
    imageEl.style.opacity = 1;
  }, 200);

  infoEl.innerHTML = `
    <div class="slider__info-item">
      <h3>CITY:</h3>
      <p>${project.city}</p>
    </div>
    <div class="slider__info-item">
      <h3>APARTMENT AREA:</h3>
      <p>${project.area}</p>
    </div>
    <div class="slider__info-item">
      <h3>REPAIR TIME:</h3>
      <p>${project.time}</p>
    </div>
    <div class="slider__info-item">
      <h3>REPAIR COST:</h3>
      <p>${project.cost}</p>
    </div>
  `;

  dots.forEach(dot => dot.classList.remove("slider__dot_active"));
  dots[index].classList.add("slider__dot_active");

  tabs.forEach(tab => tab.classList.remove("slider__tab_active"));
  tabs[index].classList.add("slider__tab_active");

  currentIndex = index;
}

document.getElementById("prevBtn").addEventListener("click", () => {
  const newIndex = (currentIndex - 1 + projects.length) % projects.length;
  updateSlider(newIndex);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  const newIndex = (currentIndex + 1) % projects.length;
  updateSlider(newIndex);
});

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    const index = parseInt(dot.dataset.index);
    updateSlider(index);
  });
});

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const index = parseInt(tab.dataset.index);
    updateSlider(index);
  });
});

updateSlider(currentIndex);