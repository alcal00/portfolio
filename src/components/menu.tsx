import { useState } from 'react';

export function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
             <nav className="bg-white shadow-md">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center justify-between h-28">
                    <img 
                    src="images/Logo-removebg-preview.png" alt="" 
                    className='h-36 pb-2'
                    />
                    <div className="md:hidden">
                        <button className="text-2xl text-gray-900" onClick={toggleMenu}>
                            {menuOpen ? (<svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 50 50"
                            >
                                <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                            </svg>) : (
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}

                        </button>
                    </div>
                    <div className={`md:flex md:flex-row space-x-6 text-gray-900 hidden`}>
                        <a href="#about" className="text-2xl hover:text-gray-400">À Propos</a>
                        <a href="#tech" className="text-2xl hover:text-gray-400">Compétences</a>
                        <a href="#projects" className="text-2xl hover:text-gray-400">Projets</a>
                        <a href="#contact" className="text-2xl hover:text-gray-400">Contact</a>
                    </div>
                </div>
            </div>
            <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} w-44 absolute top-25 right-5 `}>
                    {/* Contenu du menu déroulant */}
                    <ul className="bg-white text-gray-900 mt-4 p-4 divide-y divide-gray-100 shadow rounded-lg">
                        <li className="py-2 hover:bg-gray-100">
                            <a href="#about">À Propos</a>
                        </li>
                        <li className="py-2 hover:bg-gray-100">
                            <a href="#tech">Compétences</a>
                        </li>
                        <li className="py-2 hover:bg-gray-100">
                            <a href="#projects">Projets</a>
                        </li>
                        <li className="py-2 hover:bg-gray-100">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
        </nav>
       
    )
}