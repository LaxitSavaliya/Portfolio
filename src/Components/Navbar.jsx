import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        const handleScroll = () => {
            setIsOpen(false);
        };

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="bg-white/90 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 shadow-md">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">

                {/* Brand */}
                <a href="#home" className="flex flex-col leading-tight">
                    <span className="text-2xl font-bold text-indigo-600">
                        Laxit Savaliya
                    </span>
                    <span className="text-xs text-slate-500">
                        Full Stack Developer
                    </span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-slate-700 font-medium hover:text-indigo-600 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <a
                    href="#contact"
                    className="hidden md:inline-block bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
                >
                    Contact Me
                </a>

                {/* Mobile Menu */}
                <div className="relative md:hidden" ref={menuRef}>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isOpen}
                        className="p-2 border rounded-lg"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg overflow-hidden">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="block py-3 px-6 text-slate-700 hover:bg-indigo-50"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="block py-3 px-6 text-slate-700 hover:bg-indigo-50 font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </a>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;