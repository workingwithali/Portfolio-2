'use client'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image'; // Added missing import for Image component
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'project 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eum a culpa quaerat illum soluta, iure reprehenderit odit eligendi non quod? Quibusdam, error esse.', // Fixed typo in 'description'
    stack: [
      { name: 'Html' }, { name: 'Css 3' }, { name: 'javascript' }
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: '02',
    category: 'frontend',
    title: 'project 2', // Fixed duplicate title
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eum a culpa quaerat illum soluta, iure reprehenderit odit eligendi non quod? Quibusdam, error esse.', // Fixed typo in 'description'
    stack: [
      { name: 'Html' }, { name: 'Css 3' }, { name: 'javascript' }
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: '03',
    category: 'frontend',
    title: 'project 3', // Fixed duplicate title
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eum a culpa quaerat illum soluta, iure reprehenderit odit eligendi non quod? Quibusdam, error esse.', // Fixed typo in 'description'
    stack: [
      { name: 'Html' }, { name: 'Css 3' }, { name: 'javascript' }
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },

]
const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSliderChange = (swiper) => { // Fixed typo in function name
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none '>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/* outline */}
              <div className='text-8xl leading-none font-extrabold text-transparent  text-outline'>{project.num}</div>
              {/* category */}
              <h2 className='text-[42px] font-bold leading-none text-primary group-hover:text-accent-hover translate-all duration-500 capitalize'>{project.category} Project</h2>
              {/* description */}
              <p className='text-primary/60'>{project.description}</p>
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className='text-xl text-accent'>
                      {item.name}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className='border border-primary/20'></div>
              {/* button */}
              <div className='flex items-center  gap-4'>
                {/* live project */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='flex justify-center items-center w-[70px] h-[70px] rounded-full bg-primary/5 '>
                        <BsArrowUpRight className='text-primary text-3xl group-hover:text-accent-hover' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='flex justify-center items-center w-[70px] h-[70px] rounded-full bg-primary/5 '>
                        <BsGithub className='text-primary text-3xl group-hover:text-accent-hover' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p> {/* Fixed typo in 'Repository' */}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper spaceBetween={30} slidesPerView={1} onSlideChange={handleSliderChange} className='xl:h-[520px] mb-12' >
              {projects.map((project, index) => {
                return <SwiperSlide key={index} className='w-full'>
                  <div className='h-[460px] relative group flex justify-center items-center bg-accent'>
                    {/* overlay */}
                    <div className='absolute top-0 bottom-0 w-full h-full bg-primary/10 z-10'></div>
                    {/* image */}
                    <div className='relative w-full h-full'>
                      <Image src={project.image} fill className='object-cover' alt='image' />
                    </div>
                  </div>
                </SwiperSlide>
              })}

              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50% - 22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>

  )
}

export default Work