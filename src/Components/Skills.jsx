import { CheckCircle2, Database, LayoutTemplate, ServerCog, Wrench } from "lucide-react";

const Skills = () => {
    return (
        <section id="skills" className="py-24 animated-section">
            <div className="container mx-auto px-6">
                <h2 className="section-title text-center mb-8 text-4xl font-bold">My Technical Toolbox</h2>
                <p className="section-subtitle text-center mb-8">The skills, tools, and technologies I use to bring products to
                    life.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div
                        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-indigo-100 p-3 rounded-xl">
                                <LayoutTemplate className="w-7 h-7 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800">Frontend</h3>
                        </div>
                        <ul className="space-y-2 text-slate-600">
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-indigo-500" /><span>React.js & Redux</span></li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-indigo-500" /><span>JavaScript (ES6+)</span></li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-indigo-500" /><span>HTML5 & CSS3</span></li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-indigo-500" /><span>Tailwind & Material UI</span></li>
                        </ul>
                    </div>

                    <div
                        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-emerald-100 p-3 rounded-xl">
                                <ServerCog className="w-7 h-7 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800">Backend</h3>
                        </div>
                        <ul className="space-y-2 text-slate-600">
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" /><span>Node.js & Express.js</span></li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" /><span>RESTful APIs</span></li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" /><span>Middleware</span></li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" /><span>Passport.js Auth</span></li>
                        </ul>
                    </div>

                    <div
                        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-sky-100 p-3 rounded-xl">
                                <Database className="w-7 h-7 text-sky-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800">Databases</h3>
                        </div>
                        <ul className="space-y-2 text-slate-600">
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-sky-500" /><span>MongoDB</span></li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-sky-500" /><span>SQL</span></li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-sky-500" /><span>Java (Basic)</span></li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-sky-500" /><span>Data Structures</span></li>
                        </ul>
                    </div>

                    <div
                        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-amber-100 p-3 rounded-xl">
                                <Wrench className="w-7 h-7 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800">Tools & Workflow</h3>
                        </div>
                        <ul className="space-y-2 text-slate-600">
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-amber-500" /><span>Git & GitHub</span></li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-amber-500" /><span>VS Code</span></li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-amber-500" /><span>NPM</span></li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-amber-500" /><span>Responsive Design</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;