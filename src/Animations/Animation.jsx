import { useEffect, useRef } from "react";

const Animation = ({ children }) => {

    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("section-visible");
                    }
                });
            },
            { threshold: 0.1 }
        );
        const { current } = sectionRef;
        if (current) {
            current.classList.add("section-hidden");
            observer.observe(current);
        }

        return () => {
            if (current) observer.unobserve(current);
        }
    }, []);

    return (
        <div ref={sectionRef} className="animated-section">
            {children}
        </div>
    );
}

export default Animation;