'use client'
import Photo from "@/components/Photo"
import Socials from "@/components/Socials"
import Stats from "@/components/Stats"
import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"
import { motion } from "framer-motion"

const textAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Home = () => {
  return (
    <motion.section className="h-full" initial="hidden" animate="visible">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <motion.div
            variants={textAnimation}
            className="text-center xl:text-left order-2 xl:order-none"
          >
            <span className="text-green-400">Software Engineer</span>
            <h1 className="h1">
              Hello I'm <br />
              <span className="text-accent">Ali Rashid</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-gray-800">
              I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.9 }}
              >
                <Button variant="outline" size="lg" className="uppercase items-center gap-2 hacker-btn">
                  <span>Download CV</span>
                  <FiDownload />
                </Button>
              </motion.div>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyle="flex gap-6" iconStyle="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-base hover:bg-accent hover:text-black transition-all duration-500" />
              </div>
            </div>
          </motion.div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </motion.section>
  );
};

export default Home;
