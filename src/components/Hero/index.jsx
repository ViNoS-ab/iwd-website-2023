import heroImg from "../../assets/Hero/hero-img.png";
import arrow from "../../assets/icons/line-end-circle-toRight.png";
import arrowRight from "../../assets/icons/line-end-circle-toLeft.png";
import CounterContainer from "./CounterContainer";
const Hero = () => {
  return (
    <section id="home" className="pt-12">
      <div align="center" className="overflow-hidden ">
        <div className="hidden md:flex md:flex-row gap-2 justify-start items-center md:mt-[9vw] md:-ml-36">
          <img src={arrow} alt="point-right" className="w-[20%] 2xl:w-[18%]" />
          <span>Welcome to this beautiful community!</span>
        </div>
        <div className="container ">
          <div className="flex md:flex-row flex-col items-center md:gap-36 gap-12 mt-36 sm:mt-32 md:mt-0 ">
            <div className="flex flex-col justify-center items-center md:items-start">
              <p className="font-bold leading-[58px] text-5xl md:text-[6vw] lg:text-[6.5vw] md:text-left lg:leading-[104px] 2xl:leading-[150px]">
                Dare to <br /> be{" "}
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-iwd-blue to-iwd-green">
                  Creative!
                </span>
              </p>

              <p className="my-6 text-iwd-gray text-[17px] leading-[24px] md:text-left lg:leading-[32px] 2xl:leading-[48px] 2xl:text-2xl">
                How will you “Dare To Be” this International Women’s Day in wtm
                Algiers chapter?
              </p>
              <div>
                <button className="bg-iwd-dark mt-2 text-iwd-white py-2 px-6 rounded-full hover:bg-iwd-blue transform-all duration-500 hover:text-bold lg:text-2xl lg:px-12 lg:py-[15px] 2xl:py-[23px] 2xl:px-16">
                  Register
                </button>
              </div>
            </div>

            <img
              src={heroImg}
              alt="hero image"
              className="lg:w-[40%] lg:h-[40%] w-[80%] h-[80%]"
            ></img>
          </div>
        </div>

        <div className="hidden md:flex md:flex-row gap-2 justify-end items-center md:pt-8 md:-mr-36 ">
          <span>Together we thrive!</span>
          <img
            src={arrowRight}
            alt="point-right"
            className="w-[20%] 2xl:w-[18%]"
          />
        </div>
        <CounterContainer countDownLimit={1678381200000} />
      </div>
    </section>
  );
};

export default Hero;
