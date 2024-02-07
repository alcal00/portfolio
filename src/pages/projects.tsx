
export function Projects() {
    return (
        <div className="mb-44 md:mt-0 mt-44 flex flex-col items-center" id="projects">
            <h1 className="md:mt-28 text-center text-3xl font-bold">
                Projets
            </h1>
            <div className="mt-12 flex lg:flex-row flex-col gap-6">
                <div className="max-w-sm max-[767px]:w-5/6 mx-auto bg-white border border-gray-200 rounded-lg shadow scale-100 md:hover:scale-105 md:ease-in duration-300">
                    <a href="https://github.com/alcal00/API-Fastify"
                    target="_blank" rel="noopener noreferrer"
                    >
                        <img className="rounded-t-lg" src="images/Api-Todo.png" alt="" />
                    </a>
                    <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Api-Todo</h5>
                        <p className="mb-3 font-normal text-gray-700">J'ai créé une API destinée à la gestion de tâches à faire (todos).</p>
                        <p className="mb-3 font-normal text-gray-700">NodeJS Fastify Prisma</p>
                        <a href="https://github.com/alcal00/API-Fastify" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300">
                            GitHub
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="max-w-sm max-[767px]:w-5/6 mx-auto bg-white border border-gray-200 rounded-lg shadow scale-100 md:hover:scale-105 md:ease-in duration-300">
                    <a href="https://todo-react-beryl-delta.vercel.app"
                    target="_blank" rel="noopener noreferrer"
                    >
                        <img className="rounded-t-lg" src="images/TodoListV1.png" alt="" />
                    </a>
                    <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">To Do List</h5>
                        <p className="mb-3 font-normal text-gray-700">J'ai développé une application de liste de tâches (To-Do List) en utilisant l'API que j'ai créée pour la gestion des tâches à faire (todos)</p>
                        <p className="mb-3 font-normal text-gray-700">React JavaScript</p>
                        <a href="https://github.com/alcal00/TodoReact" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300">
                            GitHub
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="max-w-sm max-[767px]:w-5/6 mx-auto bg-white border border-gray-200 rounded-lg shadow scale-100 md:hover:scale-105 md:ease-in duration-300">
                    <a href="https://todo-ts-self.vercel.app"
                    target="_blank" rel="noopener noreferrer"
                    >
                        <img className="rounded-t-lg" src="images/TodoListV2.png" alt="" />
                    </a>
                    <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">To Do List V2</h5>
                        <p className="mb-3 font-normal text-gray-700">La deuxième version de l'application, cette fois-ci développée en utilisant TypeScript et avec une fonctionnalité d'édition.</p>
                        <p className="mb-3 font-normal text-gray-700">React TypeScript</p>
                        <a href="https://github.com/alcal00/TodoTS" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300">
                            GitHub
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <a href="#contact">
                <img
                    src="images/icons8-double-down-50.png"
                    alt=""
                    className="h-6 mt-6 animate-bounce"
                />
            </a>
        </div>

    )

}