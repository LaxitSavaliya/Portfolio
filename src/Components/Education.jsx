const Education = () => {
    return (
        <section id="education" className="py-24 animated-section">
            <div className="container mx-auto px-6">
                <h2 className="text-center mb-6 text-4xl font-bold text-slate-800">
                    Education & Certifications
                </h2>
                <p className="text-center mb-12 text-slate-600">
                    My academic background and professional learning journey.
                </p>

                <div className="relative max-w-2xl mx-auto">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 w-0.5 h-full bg-slate-200 -translate-x-1/2"></div>

                    {/* Higher Secondary */}
                    <div className="relative mb-12">
                        <div className="flex items-center">
                            <div className="w-1/2 pr-8 text-right">
                                <h3 className="text-lg font-bold text-slate-800">
                                    Higher Secondary (XII) – GSEB
                                </h3>
                                <p className="text-sm text-slate-500">
                                    Shree Dharmajivan Swami Higher Secondary School
                                </p>
                                <p className="text-sm font-medium text-indigo-600 mt-1">
                                    Completed • May 2021
                                </p>
                            </div>

                            <div className="absolute left-1/2 w-4 h-4 bg-indigo-500 rounded-full -translate-x-1/2 border-4 border-white"></div>

                            <div className="w-1/2 pl-8"></div>
                        </div>
                    </div>

                    {/* B.Tech */}
                    <div className="relative mb-12">
                        <div className="flex items-center">
                            <div className="w-1/2 pr-8"></div>

                            <div className="absolute left-1/2 w-4 h-4 bg-indigo-500 rounded-full -translate-x-1/2 border-4 border-white"></div>

                            <div className="w-1/2 pl-8 text-left">
                                <h3 className="text-lg font-bold text-slate-800">
                                    Bachelor of Technology (B.Tech) – Information Technology
                                </h3>
                                <p className="text-sm text-slate-500">
                                    Aditya Silver Oak Institute of Technology
                                </p>
                                <p className="text-sm font-medium text-indigo-600 mt-1">
                                    Completed • June 2025
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Certificate */}
                    <div className="relative mb-12">
                        <div className="flex items-center">
                            <div className="w-1/2 pr-8 text-right">
                                <h3 className="text-lg font-bold text-slate-800">
                                    Full Stack Web Development Certification
                                </h3>
                                <p className="text-sm text-slate-500">
                                    Apna College
                                </p>
                                <p className="text-sm font-medium text-indigo-600 mt-1">
                                    Completed • July 2025
                                </p>
                            </div>

                            <div className="absolute left-1/2 w-4 h-4 bg-indigo-500 rounded-full -translate-x-1/2 border-4 border-white"></div>

                            <div className="w-1/2 pl-8"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Education;