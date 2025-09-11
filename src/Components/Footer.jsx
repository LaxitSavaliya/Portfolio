import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-slate-400 py-12">
            <div className="container mx-auto px-6 text-center">
                <a href="#" className="text-2xl font-bold text-white mb-4 inline-block">Laxit Savaliya</a>
                <div className="flex justify-center space-x-6 mb-6">
                    <a href="https://github.com/LaxitSavaliya" target="_blank"
                        className="hover:text-white transition-colors duration-300"><Github /></a>
                    <a href="https://www.linkedin.com/in/laxit-savaliya/" target="_blank"
                        className="hover:text-white transition-colors duration-300"><Linkedin /></a>
                    <a href="https://www.instagram.com/laxit._savaliya/" target="_blank"
                        className="hover:text-white transition-colors duration-300"><Instagram /></a>
                </div>
                <p>&copy; 2025 Laxit Savaliya. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;