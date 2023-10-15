
export function Contact() {
    return (
        <div className="my-36" id="contact">
            <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                        Contactez-moi
                    </h3>
                    <p className="text-gray-600 mb-4">
                        N'hésitez pas à me contacter pour toute question ou opportunité.
                    </p>
                    <div className="flex items-center mb-2">
                        {/* By Freepik*/}
                        <img
                            src="./public/images/phone.png"
                            alt=""
                            className="h-5 w-5 text-gray-500 mr-2"
                        />
                        <span className="text-gray-700">+33 6 34 72 41 28</span>
                    </div>
                    <div className="flex items-center mb-2">
                        {/* By Those Icons*/}
                        <img
                            src="./public/images/email.png"
                            alt=""
                            className="h-5 w-5 text-gray-500 mr-2"
                        />
                        <a
                            href="mailto:alcal.rs221@gmail.com"
                            className="text-gray-700 hover:underline"
                        >
                            alcal.rs221@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center">
                        <img
                            src="./public/images/linkedin.webp"
                            alt=""
                            className="h-5 w-5 text-gray-500 mr-2"
                        />
                        <a
                            href="https://www.linkedin.com/in/alcal-diaby-509774201/"
                            target="_blank" rel="noopener noreferrer"
                            className="text-gray-700 hover:underline"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>


    )

}