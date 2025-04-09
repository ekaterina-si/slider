const projects = [
  {
    tab: "Rostov-on-Don, Admiral",
    city: "Rostov-on-Don LCD admiral",
    area: "81 m2",
    time: "3.5 months",
    cost: "Upon request",
    image: "slide1.jpg"
  },
  {
    tab: "Sochi Thieves",
    city: "Sochi Thieves",
    area: "105 m2",
    time: "4 months",
    cost: "Upon request",
    image: "slide2.jpg"
  },
  {
    tab: "Rostov-on-Don Patriotic",
    city: "Rostov-on-Don Patriotic",
    area: "93 m2",
    time: "3 months",
    cost: "Upon request",
    image: "slide3.jpg"
  }
];

const imageEl = document.getElementById("project-image");
const infoEl = document.getElementById("project-info");
const dots = document.getElementById("dots");
const tabs = document.getElementById("tabs");

let currentIndex = 1;

const createNav = (wrapper, className, content = false) => {
  projects.forEach((elem, idx) => {
    const span = document.createElement('span');
    span.className = className;
    span.dataset.index = idx;
    span.innerText = content ? elem.tab : '';
    wrapper.appendChild(span);
  })
}

createNav(dots, 'slider__dot')
createNav(tabs, 'slider__tab', true)


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

  Array.from(dots.children).forEach(dot => dot.classList.remove("slider__dot_active"));
  Array.from(dots.children)[index].classList.add("slider__dot_active");

  Array.from(tabs.children).forEach(tab => tab.classList.remove("slider__tab_active"));
  Array.from(tabs.children)[index].classList.add("slider__tab_active");

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

Array.from(dots.children).forEach(dot => {
  dot.addEventListener("click", () => {
    const index = parseInt(dot.dataset.index);
    updateSlider(index);
  });
});

Array.from(tabs.children).forEach(tab => {
  tab.addEventListener("click", () => {
    const index = parseInt(tab.dataset.index);
    updateSlider(index);
  });
});

updateSlider(currentIndex);