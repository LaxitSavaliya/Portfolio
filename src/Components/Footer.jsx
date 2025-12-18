import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-slate-400 py-12">
            <div className="container mx-auto px-6 text-center">

                <a
                    href="#home"
                    className="text-2xl font-bold text-white mb-2 inline-block"
                >
                    Laxit Savaliya
                </a>

                <p className="text-sm text-slate-400 mb-6">
                    Full Stack Developer • MERN Stack
                </p>

                <div className="flex justify-center space-x-6 mb-6">
                    <a
                        href="https://github.com/LaxitSavaliya"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="hover:text-white transition-colors duration-300"
                    >
                        <Github />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/laxit-savaliya/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-white transition-colors duration-300"
                    >
                        <Linkedin />
                    </a>

                    <a
                        href="https://www.instagram.com/laxit._savaliya/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                        className="hover:text-white transition-colors duration-300"
                    >
                        <Instagram />
                    </a>
                </div>

                <p className="text-sm">
                    © {new Date().getFullYear()} Laxit Savaliya. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;