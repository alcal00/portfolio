export function Home() {
    return (
        <div className="md:mt-36 mt-48 flex flex-col items-center">
            <p className="font-semibold text-lg text-center text-gray-600">
                Salut ! Je suis,
            </p>
            <h1 className="text-8xl text-center font-extrabold mb-6 mt-4">
                Développeur Web
            </h1>
            <p className="text-4xl text-center font-bold text-gray-500">
                Alcal DIABY
            </p>
            <div className="mt-6 flex flex-row gap-3">
                <a
                    href="./public/docs/CV-Alcal-DIABY.pdf"
                    download="CV-Alcal-DIABY.pdf"
                    className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full"
                >
                    Download CV
                </a>
                <a
                    href="#contact"
                    className="ring-1 ring-gray-600 hover:bg-gray-600 hover:text-white font-bold py-2 px-4 rounded-full"
                >
                    Contact Info
                </a>
            </div>
            <div className="mt-2">
                <a href="https://www.linkedin.com/in/alcal-diaby-509774201/" target="_blank" rel="noopener noreferrer">
                    <img src="./public/images/linkedin.webp"
                        alt="LinkedIn"
                        className="h-12"
                    />
                </a>
            </div>
            <a href="#about">
                <img
                    src="./public/images/icons8-double-down-50.png"
                    alt=""
                    className="h-6 mt-6"
                />
            </a>
        </div>
    )


}