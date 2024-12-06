import Marquee from "react-fast-marquee";
import BordoniLogo from "../assets/bordoni-loog.png";
import HolicsLogo from "../assets/holics-logo.png";
import TelmecLogo from "../assets/telmec-logo.png";

export const Clients = () => {
  return (
    <section
      id="clients"
      className="w-full py-12 md:py-24 lg:py-32 bg-[#f7f9fc] px-4 md:px-6 overflow-hidden"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Trusted Clients
        </h2>

        <Marquee autoFill={true}>
          <div className="flex">
            <img
              src={BordoniLogo}
              alt="boschetti bordoni logo"
              className="object-contain w-32 h-32 mx-4"
            />
            <img
              src={HolicsLogo}
              alt="DataHolics logo"
              className="object-contain w-32 h-32 mx-4"
            />
            <img
              src={TelmecLogo}
              alt="Telmec logo"
              className="object-contain w-32 h-32 mx-4"
            />
          </div>
        </Marquee>
      </div>
    </section>
  );
};
