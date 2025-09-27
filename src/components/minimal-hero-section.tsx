import { motion } from "framer-motion";
const MinimalHeroSection = () => {
  return <section className="min-h-screen w-full bg-background flex flex-col">
      <div className="flex-1 flex flex-col justify-center items-center gap-20 px-4 relative">
        <div className="absolute inset-0 bg-background opacity-70 z-0"></div>
        <video className="absolute inset-0 w-full h-full object-cover z-[1]" autoPlay muted loop playsInline controls={false} aria-label="Background video showcasing AI technology and web development">
          <source src="https://res.cloudinary.com/dqd4dvem7/video/upload/v1754907365/rowzd837annraukcew5z_fgftkj.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-0 left-0 right-0 h-32 z-[2]" style={{
        background: 'linear-gradient(to top, black, transparent)'
      }}></div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-black rounded-full z-[8]" style={{
        filter: 'blur(60px)',
        transform: 'translateX(-50%) translateY(calc(-50% + 50px))'
      }}></div>
        
        <div className="w-full max-w-4xl flex flex-col justify-center items-center relative z-10">
          <motion.div className="w-full max-w-screen-2xl text-center flex flex-col justify-center items-center" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }}>
            <span className="text-foreground font-normal leading-tight break-words text-4xl md:text-6xl lg:text-7xl xl:text-8xl">Step 1</span>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default MinimalHeroSection;