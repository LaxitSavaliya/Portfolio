const Project = () => {
    return (
        <section id="projects" className="py-24 bg-white animated-section">
            <div className="container mx-auto px-6">
                <h2 className="text-center mb-6 text-4xl font-bold text-slate-800">
                    Projects
                </h2>
                <p className="text-center mb-12 text-slate-600">
                    Real-world projects demonstrating my full-stack development skills.
                </p>

                <div className="grid md:grid-cols-2 gap-10">

                    {/* Diamond Project */}
                    <div className="rounded-lg shadow-md overflow-hidden flex flex-col">
                        <img
                            src="https://placehold.co/600x400/34D399/FFFFFF?text=Diamond+Management+System"
                            alt="Diamond Management System"
                            className="w-full h-52 object-cover"
                        />

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-slate-800 mb-2">
                                Diamond Management System
                            </h3>

                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-xs bg-gray-200 px-2 py-1 rounded">React</span>
                                <span className="text-xs bg-gray-200 px-2 py-1 rounded">Node.js</span>
                                <span className="text-xs bg-gray-200 px-2 py-1 rounded">Express.js</span>
                                <span className="text-xs bg-gray-200 px-2 py-1 rounded">MongoDB</span>
                                <span className="text-xs bg-gray-200 px-2 py-1 rounded">JWT</span>
                            </div>

                            <p className="text-slate-600 mb-4 flex-grow">
                                A full-stack MERN application developed to manage and display
                                diamond-related data efficiently. Implemented secure user
                                authentication using JWT, RESTful APIs for data handling, and a
                                responsive UI. The application is fully deployed with the frontend
                                on Vercel and backend on Render.
                            </p>

                            <div className="flex space-x-4 mt-auto">
                                <a
                                    href="https://diamond-frontend-umber.vercel.app"
                                    target="_blank"
                                    className="font-semibold text-indigo-600 hover:underline"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href="https://github.com/LaxitSavaliya/diamond-frontend"
                                    target="_blank"
                                    className="font-semibold text-indigo-600 hover:underline"
                                >
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Project */}
                    <div className="rounded-lg shadow-md overflow-hidden flex flex-col">
                        <img
                            src="https://placehold.co/600x400/6366F1/FFFFFF?text=Social+Media+Platform"
                            alt="Social Media Platform"
                            className="w-full h-52 object-cover"
                        />

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-slate-800 mb-2">
                                Social Media Platform
                            </h3>

                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-xs bg-gray-200 px-2 py-1 rounded">Node.js</span>
                                <span className="text-xs bg-gray-200 px-2 py-1 rounded">Express.js</span>
                                <span className="text-xs bg-gray-200 px-2 py-1 rounded">MongoDB</span>
                                <span className="text-xs bg-gray-200 px-2 py-1 rounded">JWT</span>
                                <span className="text-xs bg-gray-200 px-2 py-1 rounded">REST API</span>
                            </div>

                            <p className="text-slate-600 mb-4 flex-grow">
                                A backend-driven social media application that allows users to
                                register, authenticate, create posts, and interact securely.
                                Designed scalable REST APIs, handled user authorization, and
                                structured MongoDB schemas following real-world backend practices.
                            </p>

                            <div className="flex space-x-4 mt-auto">
                                <a
                                    href="https://github.com/LaxitSavaliya/Social-_Media"
                                    target="_blank"
                                    className="font-semibold text-indigo-600 hover:underline"
                                >
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;