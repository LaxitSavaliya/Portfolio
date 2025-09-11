const Education = () => {
    return (
        <section id="education" className="py-24 animated-section">
            <div className="container mx-auto px-6">
                <h2 className="section-title text-center mb-8 text-4xl font-bold">Education & Certificates</h2>
                <p className="section-subtitle text-center mb-12">My academic and professional learning journey.</p>
                <div className="relative max-w-2xl mx-auto">
                    <div className="absolute left-1/2 w-0.5 h-full bg-slate-200 -translate-x-1/2"></div>

                    <div className="relative mb-12">
                        <div className="flex items-center">
                            <div className="w-1/2 pr-8 text-right">
                                <h3 className="text-lg font-bold text-slate-800">Higher Secondary XII (GSEB)</h3>
                                <p className="text-sm text-slate-500">Shree Dharmajivan Swami Higher Secondary School</p>
                                <p className="text-sm font-medium text-indigo-600 mt-1">Completed 05/2021</p>
                            </div>
                            <div className="absolute left-1/2 w-4 h-4 bg-indigo-500 rounded-full -translate-x-1/2 border-4 border-white">
                            </div>
                            <div className="w-1/2 pl-8"></div>
                        </div>
                    </div>

                    <div className="relative mb-12">
                        <div className="flex items-center">
                            <div className="w-1/2 pr-8"></div>
                            <div className="absolute left-1/2 w-4 h-4 bg-indigo-500 rounded-full -translate-x-1/2 border-4 border-white">
                            </div>
                            <div className="w-1/2 pl-8 text-left">
                                <h3 className="text-lg font-bold text-slate-800">B.Tech, Information Technology</h3>
                                <p className="text-sm text-slate-500">Aditya Silver Oak Institute of Technology</p>
                                <p className="text-sm font-medium text-indigo-600 mt-1">Completed 06/2025</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative mb-12">
                        <div className="flex items-center">
                            <div className="w-1/2 pr-8 text-right">
                                <h3 className="text-lg font-bold text-slate-800">Web Development Certificate</h3>
                                <p className="text-sm text-slate-500">Apna College</p>
                                <p className="text-sm font-medium text-indigo-600 mt-1">Completed 07/2025</p>
                            </div>
                            <div className="absolute left-1/2 w-4 h-4 bg-indigo-500 rounded-full -translate-x-1/2 border-4 border-white">
                            </div>
                            <div className="w-1/2 pl-8">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Education;