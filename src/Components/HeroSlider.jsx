import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/images/g33.jpg";
import img2 from "../assets/images/g44.jpg";
import img3 from "../assets/images/g11.jpg";
import img4 from "../assets/images/g22.jpg";

const images = [img1, img2, img3, img4];

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const HeroSlider = () => {
  const [index, setIndex] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    let loaded = 0;
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loaded++;
        if (loaded === images.length) setAllLoaded(true);
      };
    });
  }, []);

  useEffect(() => {
    if (!allLoaded) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [allLoaded]);

  if (!allLoaded) {
    return (
      <section className="flex items-center justify-center h-screen bg-black text-white text-xl">
        Loading...
      </section>
    );
  }

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#0F0F0F] to-[#1A1A1A] font-sans">
      {/* Hidden preloaded images */}
      <div className="hidden">
        {images.map((src, i) => (
          <img key={i} src={src} alt={`preload-${i}`} loading="eager" />
        ))}
      </div>

      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={index}
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${images[index]})` }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 bg-[#0000008a] flex flex-col justify-end sm:justify-center items-center text-center px-6 pb-20 sm:pb-0">
        <div className="max-w-4xl text-white space-y-5">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow"
            initial="hidden"
            animate="visible"
            variants={textVariant}
            custom={1}
          >
            <span className="bg-gradient-to-r from-[#FBBF24] to-[#E63946] text-transparent bg-clip-text">
              THE FUTURE OF
            </span>
            <br />
            FLEX PRINTING
          </motion.h1>

          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-white/90"
            initial="hidden"
            animate="visible"
            variants={textVariant}
            custom={2}
          >
            CUSTOM DESIGNS IN YOUR HANDS
          </motion.h2>

          <motion.p
            className="text-gray-300 text-base max-w-xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={textVariant}
            custom={3}
          >
            From banners to hoardings, our high-quality flex printing offers custom solutions to match your brand.
          </motion.p>

          {/* Button Group with animation */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <motion.a
              href="/#vendor"
              className="bg-gradient-to-r from-[#FBBF24] to-[#E63946] text-white px-6 py-3 rounded-full text-sm sm:text-base font-semibold hover:brightness-110 shadow-lg transition"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Vendor Registration
            </motion.a>

            <motion.div
  className="relative group"
  animate={{ y: [0, -4, 0] }}
  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
>
  <a
    href="https://forms.gle/2miVJp5JaHHRCpwG8"
    target="_blank"
    rel="noopener noreferrer"
    className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-white/20 shadow-lg transition"
  >
    CRM
  </a>
  <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-max max-w-xs px-3 py-2 bg-black text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
    Customer Relationship Management
  </div>
</motion.div>


            <motion.a
              href="/#employee"
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full text-sm sm:text-base font-semibold hover:brightness-110 shadow-lg transition"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            >
              Employee Record
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
