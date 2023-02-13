import styles from "../style";
import { google, robot, } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center cursor-pointer py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={google} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Thirdweb</span> Hackathon Project{" "}
            <span className="text-white"></span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            RUT Token<br className="sm:block hidden" />{" "}
            <span className="text-gradient">Play and earn</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Game.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Mint 1 RUT token for free from the token drop and launch game. In the game the goal is to pick up a Purple coin which gives you access to Mint and claim 10 RUT Tokens.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 p-20 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
