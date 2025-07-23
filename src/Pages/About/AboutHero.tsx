import personalPhoto from "../../assets/icons/abouPagePhoto.jpg";
import upRight from "../../assets/icons/up right.svg"
import { useState } from "react";
import CV from "../../../public/cv/İlahə_Məmmədova_CV.pdf"
const AboutHero = () => {
  const [activeButton, setActiveButton] = useState<"resume" | "hire">("resume");

  const resumeClick = () => {
    setActiveButton("resume");

    // ✅ CV faylını yüklə
    const link = document.createElement("a");
    link.href = CV; 
    link.download = "Ilaha-Memmedova-CV.pdf";
    link.click();
  };

  const hireMeClick = () => {
    setActiveButton("hire");

    // ✅ Page-in contact hissəsinə scroll
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
          <div className="w-full lg:w-[85%] h-auto flex flex-col-reverse md:flex-row justify-center items-center gap-7 p-5">
        <div className="w-[90%] md:w-[70%] lg:w-[64%] flex  flex-col justify-center items-start gap-6">
          <div className="w-[90%] flex flex-col justify-center items-center gap-10">
            <h1 className="text-[#344054] text-3xl md:text-4xl font-semibold">
              About me
            </h1>
            <p className="text-xs md:text-sm lg:text-base">
              I’m a self-motivated and growth-oriented Junior Front-End
              Developer with hands-on experience in real-world projects. I
              specialize in building responsive, user-friendly, and scalable web
              interfaces using modern technologies such as HTML5, CSS3,
              JavaScript, TypeScript, React.js, and Tailwind CSS. I have a
              strong focus on writing clean, maintainable code and working
              efficiently with Git and GitHub in collaborative, Agile-driven
              teams. Currently, I’m expanding my skill set by learning Next.js
              and Node.js, aiming to transition into a full-stack development
              role.
            </p>
          </div>
      <div className="w-70 md:w-78 h-10 md:h-14 border border-[#FD853A] rounded-[60px] flex justify-center items-center gap-5">
      <button
        onClick={resumeClick}
        className={`w-28 md:w-32 h-8 md:h-10 rounded-4xl flex justify-center items-center gap-2 border transition-all duration-300 text-xs md:text-sm
          ${
            activeButton === "resume"
              ? "bg-[#FD853A] text-white border-white"
              : "bg-white text-[#FD853A] "
          }`}
      >
        Resume
        <img
          className={`w-5 lg:w-7 h-5 lg:h-7 transition-all duration-500 ${
            activeButton === "resume" ? "rotate-45" : ""
          }`}
          src={upRight}
          alt="arrow icon"
        />
      </button>

      <button
        onClick={hireMeClick}
        className={`w-28 md:w-32 h-8 md:h-10 rounded-4xl flex justify-center items-center gap-2 border transition-all duration-300 text-xs md:text-sm
          ${
            activeButton === "hire"
              ? "bg-[#FD853A] text-white border-white"
              : "bg-white text-[#FD853A]"
          }`}
      >
        Hire me
      </button>
    </div>
        </div>
        <div className="w-[200px] lg:w-[300px] h-[200px] lg:h-[300px] rounded-full bg-[#FD853A] flex justify-center items-center">
          <img
            className="w-full h-full object-cover rounded-full"
            src={personalPhoto}
            alt="personal photo"
          />
        </div>
      </div>

  );
};

export default AboutHero;
