const projects = document.querySelector('#projects')

const works = [
    {
        name: 'Calculator',
        img: '../img/umbrella.png'
    },
    {
        name: 'To-Do',
        img: '../img/umbrella.png'
    },
    {
        name: 'note-app',
        img: '../img/umbrella.png'
    },
    {
        name: 'MERN-auth',
        img: '../img/umbrella.png'
    },
]


works.forEach((work) => {
    const template = document.createElement('div')

    template.innerHTML =  `
                <div class="w-full h-[18vh] bg-purple-500 flex items-end rounded-md mb-3 relative">
                    <img src=${work.img} alt="here" class="absolute top-0 left-0 h-full w-full object-cover rounded-md">
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                   <div class="absolute bottom-0 left-0 w-full py-3 px-2 text-white flex justify-between items-center">
                    <p class="font-bold">${work.name}</p>
                    <a href="#" class="text-white hover:text-gray-300">
                        <!-- Example: external link icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 7h4a2 2 0 012 2v8a2 2 0 01-2 2h-8a2 2 0 01-2-2v-4M7 7h.01M7 7l10 10" />
                        </svg>
                    </a>
                    </div>
                </div>
                `

    projects.appendChild(template)
})

// const template =