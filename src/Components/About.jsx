import laxit from "../assets/laxit.png";

const About = () => {
    return (
        <section id="about" className="py-24 bg-white animated-section">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

                    <div className="md:w-1/2 lg:w-2/5">
                        <img
                            src={laxit}
                            alt="Laxit Savaliya"
                            className="rounded-2xl shadow-2xl w-full"
                        />
                    </div>

                    <div className="md:w-1/2 lg:w-3/5">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                            About Me
                        </h2>

                        <p className="text-slate-600 mb-4">
                            I am a passionate Full Stack Developer with hands-on experience in
                            building real-world web applications using the MERN stack. I enjoy
                            developing scalable backend systems, designing RESTful APIs, and
                            creating responsive user interfaces that deliver smooth user
                            experiences.
                        </p>

                        <p className="text-slate-600 mb-4">
                            I have worked on projects like a Diamond Management System and a
                            Social Media Platform, where I implemented secure authentication
                            using JWT, integrated frontend and backend systems, and deployed
                            applications using platforms like Vercel and Render.
                        </p>

                        <p className="text-slate-600">
                            I strongly believe in continuous learning and improving my skills
                            through hands-on projects. I am currently focused on enhancing my
                            full-stack development expertise and looking for opportunities to
                            grow as a developer in a professional environment.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;