import {
    CheckCircle2,
    Database,
    LayoutTemplate,
    ServerCog,
    Wrench,
} from "lucide-react";

const Skills = () => {
    return (
        <section id="skills" className="py-24 animated-section">
            <div className="container mx-auto px-6">
                <h2 className="text-center mb-6 text-4xl font-bold text-slate-800">
                    Technical Skills
                </h2>
                <p className="text-center mb-12 text-slate-600">
                    Technologies and tools I use to build modern web applications.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Frontend */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-indigo-100 p-3 rounded-xl">
                                <LayoutTemplate className="w-7 h-7 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800">Frontend</h3>
                        </div>
                        <ul className="space-y-2 text-slate-600">
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                                <span>React.js</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                                <span>JavaScript (ES6+)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                                <span>HTML5 & CSS3</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                                <span>Tailwind CSS</span>
                            </li>
                        </ul>
                    </div>

                    {/* Backend */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-emerald-100 p-3 rounded-xl">
                                <ServerCog className="w-7 h-7 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800">Backend</h3>
                        </div>
                        <ul className="space-y-2 text-slate-600">
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                <span>Node.js</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                <span>Express.js</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                <span>RESTful APIs</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                <span>JWT Authentication</span>
                            </li>
                        </ul>
                    </div>

                    {/* Database */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-sky-100 p-3 rounded-xl">
                                <Database className="w-7 h-7 text-sky-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800">Database</h3>
                        </div>
                        <ul className="space-y-2 text-slate-600">
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-sky-500" />
                                <span>MongoDB</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-sky-500" />
                                <span>SQL (Basic)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Tools */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-amber-100 p-3 rounded-xl">
                                <Wrench className="w-7 h-7 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800">Tools</h3>
                        </div>
                        <ul className="space-y-2 text-slate-600">
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-amber-500" />
                                <span>Git & GitHub</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-amber-500" />
                                <span>VS Code</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-amber-500" />
                                <span>Postman</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-amber-500" />
                                <span>Vercel & Render</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;