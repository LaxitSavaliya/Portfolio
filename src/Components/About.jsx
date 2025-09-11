const About = () => {
    return (
        <section id="about" className="py-24 bg-white animated-section">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                    <div className="md:w-1/2 lg:w-2/5">
                        <img src="https://placehold.co/600x600/E2E8F0/4A5568?text=Portrait" alt="About Me Photo"
                            className="rounded-2xl shadow-2xl w-full" />
                    </div>
                    <div className="md:w-1/2 lg:w-3/5">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
                        <p className="text-slate-600 mb-4">
                            I'm a Full Stack Developer specializing in the MERN stack. I have a passion for creating clean, efficient,
                            and user-friendly web applications. My experience in personal projects includes developing RESTful APIs,
                            implementing robust user authentication, and building seamless integrations between the front-end and
                            back-end.
                        </p>
                        <p className="text-slate-600">
                            I am a firm believer in continuous learning and am always exploring new technologies to enhance my skills.
                            When I'm not coding, I enjoy playing sports, web surfing, and traveling to experience new cultures.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;