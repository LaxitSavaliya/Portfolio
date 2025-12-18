import {
    Github,
    Instagram,
    Linkedin,
    Mail,
    MessageCircleMore,
    Phone,
} from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-16 md:py-24 bg-slate-50 animated-section">
            <div className="container mx-auto px-6">
                <h2 className="text-center mb-4 text-4xl font-bold text-gray-800">
                    Contact Me
                </h2>
                <p className="text-center mb-12 text-gray-600 max-w-2xl mx-auto">
                    I’m actively looking for opportunities as a Full Stack Developer.
                    Feel free to reach out for collaboration, projects, or job discussions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* Contact Info */}
                    <div className="p-8 bg-white rounded-2xl shadow-xl border border-slate-200">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                            Contact Information
                        </h3>

                        <div className="flex items-center space-x-4 mb-5">
                            <span className="p-2 rounded-lg text-white bg-indigo-600">
                                <Mail />
                            </span>
                            <div>
                                <h4 className="font-medium text-gray-700">Email</h4>
                                <a
                                    href="mailto:laxitsavaliya23@gmail.com"
                                    className="text-indigo-600 hover:underline"
                                >
                                    laxitsavaliya23@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 mb-5">
                            <span className="p-2 rounded-lg text-white bg-indigo-600">
                                <Phone />
                            </span>
                            <div>
                                <h4 className="font-medium text-gray-700">Phone</h4>
                                <a
                                    href="tel:+917016917666"
                                    className="text-indigo-600 hover:underline"
                                >
                                    +91 7016917666
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 mb-5">
                            <span className="p-2 rounded-lg text-white bg-indigo-600">
                                <MessageCircleMore />
                            </span>
                            <div>
                                <h4 className="font-medium text-gray-700">WhatsApp</h4>
                                <a
                                    href="https://wa.me/7016917666"
                                    target="_blank"
                                    className="text-indigo-600 hover:underline"
                                >
                                    Start a chat
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 mb-5">
                            <span className="p-2 rounded-lg text-white bg-indigo-600">
                                <Linkedin />
                            </span>
                            <div>
                                <h4 className="font-medium text-gray-700">LinkedIn</h4>
                                <a
                                    href="https://www.linkedin.com/in/laxit-savaliya/"
                                    target="_blank"
                                    className="text-indigo-600 hover:underline"
                                >
                                    Laxit Savaliya
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 mb-5">
                            <span className="p-2 rounded-lg text-white bg-indigo-600">
                                <Github />
                            </span>
                            <div>
                                <h4 className="font-medium text-gray-700">GitHub</h4>
                                <a
                                    href="https://github.com/LaxitSavaliya"
                                    target="_blank"
                                    className="text-indigo-600 hover:underline"
                                >
                                    github.com/LaxitSavaliya
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <span className="p-2 rounded-lg text-white bg-indigo-600">
                                <Instagram />
                            </span>
                            <div>
                                <h4 className="font-medium text-gray-700">Instagram</h4>
                                <a
                                    href="https://www.instagram.com/laxit._savaliya/"
                                    target="_blank"
                                    className="text-indigo-600 hover:underline"
                                >
                                    laxit._savaliya
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="p-8 bg-white rounded-2xl shadow-xl border border-slate-200">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                            Send a Message
                        </h3>

                        <form aria-label="Contact form">
                            <div className="mb-3">
                                <label htmlFor="name" className="block text-slate-700 font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="block text-slate-700 font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="block text-slate-700 font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Your message..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;