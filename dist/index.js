const projects = document.querySelector("#projects");
const technologiesSection = document.querySelector("#technologies");

const works = [
  {
    name: "Calculator",
    img: "./imgs/Calculator.jpeg",
    description: 'A simple calculator app with basic functions'
},
{
    name: "To-Do",
    img: "./imgs/To-do.jpeg",
    description: 'A productivity app to manage your tasks'
},
{
    name: "note-app",
    img: "./imgs/Notes.jpeg",
    description: 'A simple app to track and store notes'
},
{
    name: "MERN-auth",
    img: "./imgs/Auth.jpeg",
    description: 'A simple authentication app'
  },
];

const technologies = [
  {
    name: "HTML",
    img: "./imgs/html.png",
  },
  {
    name: "CSS",
    img: "./imgs/css.png",
  },
  {
    name: "JS",
    img: "./imgs/js.jpeg",
  },
  {
    name: "React",
    img: "./imgs/react.png",
  },
  {
    name: "Tailwind",
    img: "./imgs/tailwind.png",
  },
  {
    name: "Node",
    img: "./imgs/node.png",
  },
];

works.forEach((work) => {
  const template = document.createElement("div");
//   stopped here
  template.className = "w-full lg:w-[45vw] flex flex-col mb-3";

  template.innerHTML = `
    <div class="relative w-full h-[18vh] lg:h-[23vh] rounded-md overflow-hidden">
      <img src="${work.img}" alt="${work.name}" class="absolute top-0 left-0 h-full w-full object-cover rounded-md" />
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
      <a href="#" class="absolute top-2 right-2 text-white hover:text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-black bg-[rgba(0,0,0,0.2)] p-1 rounded-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M13 7h4a2 2 0 012 2v8a2 2 0 01-2 2h-8a2 2 0 01-2-2v-4M7 7h.01M7 7l10 10" />
        </svg>
      </a>
    </div>

    <div class=" z-10 mt-2 text-white">
      <p class="font-bold lg:mt-0 lg:ml-0 ml-3 mt-[-4vh]">${work.name}</p>
      <p class="hidden lg:block text-sm text-gray-300">${work.description}</p>
    </div>
  `;

  projects.appendChild(template);
});

technologies.forEach((technology) => {
  const template = document.createElement("div");

  template.className = "flex items-center space-x-2";

  template.innerHTML = `
    <img src="${technology.img}" alt="${technology.name}" class="w-5 h-5" />
    <p class="text-sm font-semibold">${technology.name}</p>`;

  technologiesSection.appendChild(template);
});
