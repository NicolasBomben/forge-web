import { useSpring, animated } from "@react-spring/web";
import { useTranslation } from "react-i18next";
import { Rocket } from "lucide-react";

export const HeroSection = () => {

  const { t } = useTranslation();

  {
    /* H1 animation */
  }
  const h1Animation = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { mass: 1, tension: 200, friction: 20 },
  });

  {
    /* Span animation */
  }
  const spanAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-10px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 300,
    config: { mass: 1, tension: 200, friction: 20 },
  });
  {
    /* P animation */
  }
  const pAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(10px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 600,
    config: { mass: 1, tension: 200, friction: 20 },
  });

  const buttonAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(-1000px)" },
    to: { opacity: 1, transform: "translateX(0px)" },
    delay: 700,
    config: { mass: 1, tension: 200, friction: 20 },
  });

  return (
    <section className="min-h-screen flex items-center w-full py-12 md:py-24 lg:py-32 px-4 md:px-6 bg-gradient-to-b from-violet-100 to-white overflow-hidden relative">
      <div className="container mx-auto relative z-10 pt-16">
        <div className="flex flex-col items-center space-y-4 text-center">
          <animated.h1
            style={h1Animation}
            className="font-poppins font-bold text-4xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-gray-900"
          >
            {t("mainTitle")}
            <animated.span style={spanAnimation} className="block text-primary">
              {t("mainTitleSub")}
            </animated.span>
          </animated.h1>

          <animated.p
            style={pAnimation}
            className="mt-6 max-w-[600px] font-poppins font-normal text-lg sm:text-xl md:text-2xl text-gray-600"
          >
            {t("subTitle")}
          </animated.p>

          <animated.button 
              style={buttonAnimation} 
              className="mt-10">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 bg-primary hover:bg-primary/90 text-white font-poppins font-light transition-colors"
            >
              {t("buttonMain")}
              <Rocket className="w-4 h-4 ml-2" />
            </a>
          </animated.button>
        </div>
      </div>
    </section>
  );
};
