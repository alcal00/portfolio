export function Technologies() {
    return (
        <div className="mb-14 md:mt-0 mt-44 flex flex-col items-center" id="tech">
            <h1 className="md:mt-44 text-center text-3xl font-bold">
                Compétences
            </h1>
            <div className="mt-12 flex lg:flex-row flex-col gap-8">
                <div className="md:w-96 md:h-72 w-80 h-66 max-[320px]:w-5/6 mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow scale-100 hover:md:scale-105 md:ease-in duration-300">
                    <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900">Développement Front End</h5>
                    <div className="mt-6 flex flex-wrap">
                        <ul className="w-1/2 flex flex-col">
                            <li className="flex items-center"> <img className="rounded-full w-6 h-6 mr-2" src="images/html.webp" alt=""></img> HTML</li>
                            <li className="my-8 flex items-center"><img className="rounded-full w-6 h-6 mr-2" src="images/js.png" alt=""></img> JavaScript </li>
                            <li className="flex items-center"><img className="rounded-full w-6 h-6 mr-2" src="images/React.png" alt=""></img> React</li>
                        </ul>
                        <ul className="w-1/2 flex flex-col">
                            <li className="flex items-center"><img className="rounded-full w-6 h-6 mr-2" src="images/css.png" alt=""></img> CSS</li>
                            <li className="my-8 flex items-center"><img className="rounded-full w-6 h-6 mr-2" src="images/ts.png" alt=""></img> TypeScript</li>
                            <li className="flex items-center"><img className="rounded-full w-6 h-6 mr-2" src="images/tailwind.png" alt=""></img> Tailwind</li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-96 md:h-72 w-80 h-66 max-[320px]:w-5/6 mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow scale-100 hover:md:scale-105 md:ease-in duration-300">
                    <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900">Développement Back End</h5>
                    <div className="mt-6 flex flex-wrap">
                        <ul className="w-1/2 flex flex-col">
                            <li className="flex items-center"><img className="rounded-full w-6 h-6 mr-2" src="images/php.png" alt=""></img> PHP</li>
                            <li className="my-8 flex items-center"><img className="rounded-full w-6 h-6 mr-2" src="images/laravel.png" alt=""></img> Laravel</li>
                            <li className="flex items-center"><img className="rounded-full w-6 h-6 mr-2" src="images/git.jpg" alt=""></img> Git</li>
                        </ul>
                        <ul className="w-1/2 flex flex-col">
                            <li className="flex items-center"><img className="rounded-full w-6 h-6 mr-2" src="images/symfony.png" alt=""></img> Symfony</li>
                            <li className="my-8 flex items-center"><img className="rounded-full w-6 h-6 mr-2" src="images/nodejs.png" alt=""></img> NodeJS</li>
                        </ul>
                    </div>
                </div>
            </div>
            <a href="#projects">
                <img
                    src="images/icons8-double-down-50.png"
                    alt=""
                    className="h-6 mt-6 animate-bounce"
                />
            </a>
        </div>

    )

}