import { Github, Instagram, Linkedin } from "lucide-react";
import pdf from "../assets/Laxit_Savaliya-resume.pdf";

const Hero = () => {
    return (
        <section id="home" className="relative py-24 md:py-40">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50" />

            <div className="container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto">

                    <img
                        src="https://placehold.co/144x144/6366F1/FFFFFF?text=LS&font=poppins"
                        alt="Laxit Savaliya"
                        className="w-36 h-36 rounded-full mx-auto mb-6 shadow-2xl border-4 border-white"
                    />

                    <p className="text-lg text-indigo-600 font-semibold mb-2">
                        HELLO, I’M
                    </p>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-800 mb-4 leading-tight">
                        Laxit Savaliya
                    </h1>

                    <p className="text-2xl text-slate-600 font-medium mb-6">
                        Full Stack Developer (MERN Stack)
                    </p>

                    <p className="text-slate-500 max-w-2xl mx-auto mb-10">
                        I design and develop secure, scalable, and responsive web applications
                        using modern technologies. Experienced in building RESTful APIs,
                        implementing JWT-based authentication, and deploying full-stack
                        applications to production.
                    </p>

                    <div className="flex justify-center items-center flex-wrap gap-4">
                        <a
                            href="#contact"
                            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-indigo-200"
                        >
                            Contact Me
                        </a>

                        <a
                            href={pdf}
                            download="Laxit_Savaliya_Resume.pdf"
                            className="bg-white text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 border border-slate-200"
                        >
                            Download Resume
                        </a>
                    </div>

                    <div className="mt-12 flex justify-center items-center space-x-6">
                        <a
                            href="https://github.com/LaxitSavaliya"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="text-slate-500 hover:text-indigo-600 transition-colors duration-300"
                        >
                            <Github className="w-7 h-7" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/laxit-savaliya/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="text-slate-500 hover:text-indigo-600 transition-colors duration-300"
                        >
                            <Linkedin className="w-7 h-7" />
                        </a>

                        <a
                            href="https://www.instagram.com/laxit._savaliya/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                            className="text-slate-500 hover:text-indigo-600 transition-colors duration-300"
                        >
                            <Instagram className="w-7 h-7" />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;