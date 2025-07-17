const projects = document.querySelector("#projects");
const textarea = document.querySelector('#info')
const body = document.querySelector('body')

const placeholderText = "Enter Information about your project here"

const originalBody = body.innerHTML;

function showDeviceWarning() {
  const template = `
    <div class='h-[100dvh] p-6 w-full flex justify-center items-center gap-6 flex-col'>
      <img src='./imgs/not ready.png' alt='image not ready' class='size-40' />
      <p class='text-white text-lg text-center'>We're sorry but this site is not optimized for your device,<br /> We are currently working on it</p>
    </div>
  `;
  body.innerHTML = template;
}

function restoreBody() {
  body.innerHTML = originalBody;
}

function renderWorks() {
  const projects = document.querySelector("#projects");
  if (!projects) return; // Don't render if projects element doesn't exist

  works.forEach((work) => {
    const template = document.createElement("div");
    template.className = "w-full lg:w-[49vw]";
    template.innerHTML = `
      <div class="p-3 h-[60vh] bg-zinc-800 w-[73vw] lg:w-[25vw] lg:h-[55vh]">
        <div class="h-[27vh] rounded-md w-full overflow-hidden">
          <img src=${work.img} alt=${work.name} class="object-cover " />
        </div>
        <div class="mt-8">
          <h1 class="font-bold mb-2">${work.name}</h1>
          <p class="text-[#777] mb-2 font-semibold">${work.description}</p>
          <div class="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-2">
            ${work.languages.map(language => `<p class="font-semibold text-purple-400">${language}</p>`).join("")}
          </div>
          <button class="px-3 py-2 rounded-md cursor-pointer bg-[#A3324E] font-bold w-full">
            <i class="fa-solid fa-paperclip mr-2"></i>
            View Page
          </button>
        </div>
      </div>
    `;
    projects.appendChild(template);
  });
}

function checkWidthAndUpdate() {
  const width = window.innerWidth;
  if (width > 475 && width < 1024) {
    showDeviceWarning();
  } else {
    restoreBody();
    renderWorks();
  }
}

window.addEventListener('resize', checkWidthAndUpdate);
document.addEventListener('DOMContentLoaded', checkWidthAndUpdate);


textarea.addEventListener('blur', () => {
  if (textarea.value === '') {
    textarea.value = placeholderText;
    textarea.classList.remove('text-white');
    textarea.classList.add('text-[#777]');
  }
});

textarea.addEventListener('focus', () => {
  if (textarea.value === placeholderText) {
    textarea.value = '';
    textarea.classList.remove('text-[#777]');
    textarea.classList.add('text-white');
  }
});
const works = [
  {
    name: "Calculator",
    img: "./imgs/Calculator.jpeg",
    description: "A simple calculator app with basic functions",
    languages: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "To-Do",
    img: "./imgs/To-do.jpeg",
    description: "A productivity app to manage your tasks",
    languages: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "note-app",
    img: "./imgs/Notes.jpeg",
    description: "A simple app to track and store notes",
    languages: ["React", "Express", "MongoDB", "Node"],
  },
  {
    name: "MERN-auth",
    img: "./imgs/Auth.jpeg",
    description:
      "A simple authentication app built with the technologies of MERN",
    languages: ["React", "Express", "Mongo DB", "Node"],
  },
];
