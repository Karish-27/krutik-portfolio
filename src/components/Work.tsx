import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        name: "Vibewear",
        category: "E-Commerce",
        tools: "React, Node.js, MongoDB, Express",
        image: "/images/vibewear.png",
        link: "https://vibewear-two.vercel.app/", // Replace with your actual project link
    },
    {
        name: "Space Portfolio",
        category: "Portfolio Website",
        tools: "React, Three.js, TypeScript, GSAP",
        image: "/images/spaceportfolio.png",
        link: "https://spaceportfolio-henna.vercel.app/", // Replace with your actual project link
    },
    {
        name: "Dashboard",
        category: "Admin Dashboard",
        tools: "React, TypeScript, Tailwind CSS",
        image: "/images/dashboard.png",
        link: "https://dashboard-theta-five-49.vercel.app/dashboard/home", // Replace with your actual project link
    },
    {
        name: "Portfolio",
        category: "Portfolio Website",
        tools: "React, TypeScript, Tailwind CSS, React Three, Three, Shader Gradient",
        image: "/images/portfolio.png",
        link: "https://portfolio-website-tajs.vercel.app/", // Replace with your actual project link
    },
];

const Work = () => {
    useEffect(() => {
        let translateX: number = 0;

        function setTranslateX() {
            const box = document.getElementsByClassName("work-box");
            const rect = box[0].getBoundingClientRect();
            const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
            translateX = rect.width * box.length - parentWidth;
        }

        setTranslateX();

        const ctx = gsap.context(() => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".work-section",
                    start: "top top",
                    end: () => `+=${translateX}`,
                    scrub: true,
                    pin: true,
                    id: "work",
                    invalidateOnRefresh: true,
                },
            });

            timeline.to(".work-flex", {
                x: () => -translateX,
                ease: "none",
            });
        });

        return () => ctx.revert();
    }, []);
    return (
        <div className="work-section" id="work">
            <div className="work-watermark-row" aria-hidden="true">
                <span>M&nbsp;&nbsp;Y</span>
                <span>R&nbsp;&nbsp;E&nbsp;&nbsp;C&nbsp;&nbsp;E&nbsp;&nbsp;N&nbsp;&nbsp;T</span>
                <span>W&nbsp;&nbsp;O&nbsp;&nbsp;R&nbsp;&nbsp;K</span>
            </div>
            <div className="work-container section-container">
                <h2 className="work-featured-heading">FEATURED DESIGNS</h2>
                <div className="work-flex">
                    {projects.map((project, index) => (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="work-box"
                            key={index}
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <div className="work-info">
                                <div className="work-title">
                                    <h3>{index + 1}</h3>

                                    <div>
                                        <h4>{project.name}</h4>
                                        <p>{project.category}</p>
                                    </div>
                                </div>
                                <h4>Tools and features</h4>
                                <p>{project.tools}</p>
                            </div>
                            <WorkImage image={project.image} alt={project.name} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
