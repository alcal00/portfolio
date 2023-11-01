
export function About() {
    return (
        <div className="mt-48 flex flex-col items-center" id="about">
            <p className="font-semibold text-center text-gray-600">
                En savoir plus
            </p>
            <h1 className="text-center text-3xl font-bold">
                À propos de moi
            </h1>
            <div className="mt-12 flex md:flex-row flex-col gap-6">
                <div className="w-72 h-36 p-6 bg-white border border-gray-200 rounded-lg shadow scale-100 hover:scale-110 ease-in duration-300">
                    <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900">Experience</h5>
                    <p className="font-normal text-center text-gray-700">Développeur Front End (stage)</p>
                    <p className="font-normal text-center text-gray-700">Tokee</p>
                </div>
                <div className="w-72 h-36 p-6 bg-white border border-gray-200 rounded-lg shadow scale-100 hover:scale-110 ease-in duration-300">
                    <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900">Éducation</h5>
                    <p className="font-normal text-center text-gray-700">3ème année de BUT Informatique</p>
                    <p className="font-normal text-center text-gray-700">IUT Lyon 1</p>
                </div>
            </div>
            <div className="max-w-lg mt-6">
                <p className="font-semibold text-center text-gray-600">
                Étudiant en informatique, je souhaite apporter mes compétences en developpement web dans le cadre d'une alternance à partir du mois d'octobre 2023
                </p>
            </div>
            <a href="#tech">
                <img
                    src="images/icons8-double-down-50.png"
                    alt=""
                    className="h-6 mt-6 animate-bounce"
                />
            </a>
        </div>

    )

}