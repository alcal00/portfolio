export function Footer(){
    return(
        <footer className="bg-gray-200 p-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
            {/** Petite Navbar dans le Footer */}
            <nav className="flex space-x-4">
                <a href="#about" className="hover:text-gray-400">
                    À Propos
                </a>
                <a href="#tech" className="hover:text-gray-400">
                    Compétences
                </a>
                <a href="#projects" className="hover:text-gray-400">
                    Projets
                </a>
                <a href="#contact" className="hover:text-gray-400">
                    Contact
                </a>
            </nav>

            {/** Mention de droits d'auteur */}
            <p className="text-sm">
                &copy; 2023 Alcal Diaby - Tous droits réservés
            </p>
        </div>
    </footer>
    )
}