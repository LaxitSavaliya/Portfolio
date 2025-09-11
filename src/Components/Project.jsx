const Project = () => {
    return (
        <section id="projects" className="py-24 bg-white animated-section">
            <div className="container mx-auto px-6">
                <h2 className="section-title text-center mb-8 text-4xl font-bold">My Projects</h2>
                <p className="section-subtitle text-center mb-8">Here are some of the projects I'm proud of.</p>
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="card">
                        <img src="https://placehold.co/600x400/6366F1/FFFFFF?text=FarAway&font=poppins" alt="FarAway Project"
                            className="w-full h-52 object-cover" />
                        <div className="p-6 flex-grow flex flex-col">
                            <h3 className="text-xl font-bold text-slate-800 mb-2">FarAway - Secure Rental Platform</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">Node.js</span><span
                                    className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">Express</span><span
                                        className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">MongoDB</span><span
                                            className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">Passport.js</span>
                            </div>
                            <p className="text-slate-600 mb-4 flex-grow">A full-stack web app for creating, managing, and reviewing
                                listings with CRUD operations. Features secure authentication with Passport.js, Cloudinary for image
                                uploads, and a review system with ratings and validation.</p>
                            <div className="flex space-x-4 mt-auto">
                                {/* <a href="#" className="font-semibold text-indigo-600 hover:underline">Live Demo</a> */}
                                <a href="https://github.com/LaxitSavaliya/FarAway" target="_blank"
                                    className="font-semibold text-indigo-600 hover:underline">Source Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://placehold.co/600x400/34D399/FFFFFF?text=Vlake&font=poppins" alt="Vlake Project"
                            className="w-full h-52 object-cover" />
                        <div className="p-6 flex-grow flex flex-col">
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Vlake - Chat & Video Calling App</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">React</span><span
                                    className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">Node.js</span><span
                                        className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">Stream API</span><span
                                            className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">JWT</span>
                            </div>
                            <p className="text-slate-600 mb-4 flex-grow">A full-stack app for language learning with real-time chat/video
                                calls using Stream API. Implemented JWT authentication, friend requests, notifications, and state
                                management with Zustand and React Query.</p>
                            <div className="flex space-x-4 mt-auto">
                                {/* <a href="#" className="font-semibold text-indigo-600 hover:underline">Live Demo</a> */}
                                <a href="https://github.com/LaxitSavaliya/Vlake-Real-time-Chat-Video-Calling-App" target="_blank"
                                    className="font-semibold text-indigo-600 hover:underline">Source Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;