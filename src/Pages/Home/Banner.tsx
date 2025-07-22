import bannerDesign2 from "../../assets/icons/bannerDesign2.svg";
import bannerDesign from "../../assets/icons/bannerDesign.svg";
import personalPhoto from "../../assets/icons/photo for cv.png";
import quote from "../../assets/icons/quote-up.svg";
const Banner = () => {
  return (
    <div className="w-full h-[600px] flex flex-col justify-between items-center gap-25 mt-5">
      <div className="flex flex-col justify-between items-center gap-30 group">
        <div className=" relative flex flex-col justify-center items-center gap-5  ">
          <div className="w-15 flex h-16 items-end">
            <button className="border border-black h-10 px-4 rounded-4xl text-lg">
              Hello!
            </button>
            <div className="w-7 h-7 absolute top-2.5 left-[66%] md:left-[58%] ">
              <img
                className="w-full h-full object-cover"
                src={bannerDesign2}
                alt="ui design"
              />
            </div>
          </div>
          <p className="font-[urbanist] text-3xl md:text-6xl font-semibold text-center">
            I'M
            <span className="font-[urbanist] text-3xl md:text-6xl font-semibold text-[#FD853A] px-3">
               Ilaha
            </span>
            ,<br />
            Front-End Devoloper
          </p>
          <div className="w-7 h-7 left-[-8%] md:left-[-6%] absolute bottom-[-10%] md:bottom-[-8%]"><img className="w-full h-full object-cover rotate-180" src={bannerDesign2} alt="design" /></div>
        </div>
        <div className="flex justify-center w-full ">
          <div className="w-60 lg:w-80 h-32 flex flex-col items-start left-[6%] lg:left-[10%] absolute top-[50%] md:top-[95%] xl:top-[70%] group-hover:top-[40%] transition-all duration-500">
            <div className="w-9 h-9">
              <img
                className="w-full h-full object-cover"
                src={quote}
                alt="quote icon"
              />
            </div>
            <p className="text-xs md:text-base ">
              Specializing in HTML, CSS, JavaScript, and React — I build elegant
              and efficient web interfaces.
            </p>
          </div>
          <div className="flex h-80 flex-col justify-center items-center relative">
            <div className="w-90 md:w-110 lg:w-150 h-45 md:h-55 lg:h-75 bg-[#FD853A] rounded-t-full relative z-0  bottom-[10%]"></div>
            <div className="w-3xl h-65 absolute z-10">
              <img
                className="w-full h-full object-cover  bottom-[30%] opacity-0 group-hover:opacity-100 transition-all duration-500"
                src={bannerDesign}
                alt="design"
              />
            </div>
            <div className="absolute w-100 lg:w-130 h-100 md:h-130 lg:h-160 z-20 bottom-[22%] md:bottom-[15%] lg:bottom-[13%]  ">
              <img
                className="w-full h-full object-cover"
                src={personalPhoto}
                alt="personal photo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
