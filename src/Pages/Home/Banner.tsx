import bannerDesign2 from "../../assets/icons/bannerDesign2.svg";

const Banner = () => {
  return (
    <div className="w-full h-screen">
      <div>
        <div>
          <img src={bannerDesign2} alt="ui design" />
        </div>
        <button className="border border-black py-2 px-3">Hello!</button>
        <p className="font-[urbanist] text-3xl font-semibold">I'M <span className="font-[urbanist] text-3xl font-semibold text-[#FD853A]">Ilaha</span>,<br />
        Front-End Devoloper</p>
      </div>
      <div></div>
    </div>
  );
};

export default Banner;
