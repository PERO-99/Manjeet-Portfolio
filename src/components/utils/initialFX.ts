import { SplitText } from "gsap-trial/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  var landingText = new SplitText(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  const TextProps = { type: "chars,lines", linesClass: "split-h2" };
  const text1 = new SplitText(".landing-h2-1", TextProps);
  const text2 = new SplitText(".landing-h2-2", TextProps);

  // Crucial: immediately hide text2 characters so it NEVER overlaps with text1
  gsap.set(text2.chars, { opacity: 0, y: 60 });
  gsap.set(".landing-h2-2", { opacity: 1, visibility: "visible" });

  // Initial intro reveal for text1 ("Web Dev")
  gsap.fromTo(
    text1.chars,
    { opacity: 0, y: 60, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.03,
      delay: 0.4,
    }
  );

  // Smooth alternating cycle between Web Dev and CS Student without any overlap
  const roleTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1.5, delay: 3.5 });

  roleTimeline
    // Text 1 leaves (slides up and fades out)
    .to(text1.chars, {
      y: -60,
      opacity: 0,
      duration: 0.7,
      ease: "power3.inOut",
      stagger: 0.02,
    })
    // Text 2 enters from below
    .fromTo(
      text2.chars,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.inOut",
        stagger: 0.02,
      },
      "-=0.3"
    )
    // Hold Text 2 for 3 seconds
    .to({}, { duration: 3 })
    // Text 2 leaves (slides up and fades out)
    .to(text2.chars, {
      y: -60,
      opacity: 0,
      duration: 0.7,
      ease: "power3.inOut",
      stagger: 0.02,
    })
    // Text 1 enters from below
    .fromTo(
      text1.chars,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.inOut",
        stagger: 0.02,
      },
      "-=0.3"
    );
}
