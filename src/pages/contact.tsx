
export function Contact() {
    return (
        <div className="my-60" id="contact">
            <div className="max-w-sm max-[390px]:w-5/6 mx-auto bg-white rounded-xl shadow-md overflow-hidden scale-100 hover:scale-105 ease-in duration-300">
                <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                        Comment me contacter ?
                    </h3>
                    <p className="text-gray-600 mb-4">
                       Je suis joignable par email, téléphone ou sur Linkedin.
                    </p>
                    <div className="flex items-center mb-2">
                        {/* By Freepik*/}
                        <img
                            src="images/phone.png"
                            alt=""
                            className="h-5 w-5 text-gray-500 mr-2"
                        />
                        <span className="text-gray-700">+33 6 34 72 41 28</span>
                    </div>
                    <div className="flex items-center mb-2">
                        {/* By Those Icons*/}
                        <img
                            src="images/email.png"
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
                            src="images/linkedin.webp"
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