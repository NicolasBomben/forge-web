const Marquee = ({ items, direction = "left", speed = "normal", className = "" }) => {
  const speedClass = speed === "slow" ? "animate-marquee-slow" : "animate-marquee";
  const directionStyle = direction === "right" ? { animationDirection: "reverse" } : {};

  return (
    <div className={`marquee-container border-y border-[#222222] py-4 bg-[#0a0a0a] ${className}`}>
      <div className={`marquee-content ${speedClass}`} style={directionStyle}>
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center text-sm uppercase tracking-widest text-[#888888] mx-8"
          >
            {item}
            <span className="ml-8 text-[#f5e642]">·</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
