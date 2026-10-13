import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Work = () => {
  useGSAP(() => {
    const workFlex = document.querySelector(".work-flex") as HTMLElement;
    const workSection = document.querySelector(".work-section") as HTMLElement;
    const boxes = document.querySelectorAll(".work-box");
    if (!workFlex || !workSection || !boxes.length) return;

    // Calculate how far .work-flex needs to scroll horizontally based on actual project card widths
    const getScrollDistance = () => {
      let totalWidth = 0;
      boxes.forEach((box) => {
        totalWidth += (box as HTMLElement).offsetWidth;
      });
      return Math.max(0, totalWidth - window.innerWidth + 200);
    };

    const tween = gsap.to(workFlex, {
      x: () => -getScrollDistance(),
      ease: "none",
    });

    const trigger = ScrollTrigger.create({
      trigger: workSection,
      start: "top top",
      end: () => `+=${getScrollDistance()}`,
      scrub: 1,
      pin: true,
      animation: tween,
      invalidateOnRefresh: true,
      id: "work",
    });

    return () => {
      trigger.kill();
      tween.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              num: "01",
              name: "Dost AI",
              cat: "AI Legal & Gov Platform",
              tools: "React · Firebase · Cloud Run · Gemini · OpenAI · Claude",
              image: "/images/dost_ai.jpg",
              link: "https://github.com/PERO-99",
            },
            {
              num: "02",
              name: "AI Security Monitor",
              cat: "Security Prototype",
              tools: "JavaScript · AI Tools · Frontend",
              image: "/images/security_monitor.jpg",
              link: "https://github.com/PERO-99",
            },
            {
              num: "03",
              name: "Gov Service Portal",
              cat: "Government Service Management",
              tools: "HTML · CSS · JavaScript",
              image: "/images/gov_portal.jpg",
              link: "https://github.com/PERO-99",
            },
            {
              num: "04",
              name: "Carbon Emission AI",
              cat: "Carbon Emission Platform",
              tools: "JavaScript · React · AI · Data Viz",
              image: "/images/carbon_emission.jpg",
              link: "https://github.com/PERO-99",
            },
            {
              num: "05",
              name: "Hackathon Apps",
              cat: "Rapid Prototype Collection",
              tools: "Various Stacks · AI-Assisted Dev",
              image: "/images/hackathon_apps.jpg",
              link: "https://github.com/PERO-99",
            },
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.num}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.cat}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
