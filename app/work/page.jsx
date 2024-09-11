'use client'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import { DEFAULT_SERIF_FONT } from 'next/dist/shared/lib/constants';
const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'project 1',
    descrption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eum a culpa quaerat illum soluta, iure reprehenderit odit eligendi non quod? Quibusdam, error esse.',
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
    title: 'project 1',
    descrption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eum a culpa quaerat illum soluta, iure reprehenderit odit eligendi non quod? Quibusdam, error esse.',
    stack: [
      { name: 'Html' }, { name: 'Css 3' }, { name: 'javascript' }
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: '03',
    category: 'frontend',
    title: 'project 1',
    descrption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eum a culpa quaerat illum soluta, iure reprehenderit odit eligendi non quod? Quibusdam, error esse.',
    stack: [
      { name: 'Html' }, { name: 'Css 3' }, { name: 'javascript' }
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },

]
const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSliderChanger = (swiper) => {
  const currentIndex = swiper.activeIndex;
  setProject(projects[currentIndex]);
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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
              {/* descrption */}
              <p className='text-primary/60'>{project.descrption}</p>
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
              <div className='flex items-center gap-4'>
                {/* live project */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-primary/5 '>
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
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-primary/5 '>
                        <BsGithub className='text-primary text-3xl group-hover:text-accent-hover' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repositary</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper spaceBetween={30} slidesPerView={1} onSlideChange={handleSliderChanger} className='xl:h-[520px] mb-12' >
              {projects.map((project, index) => {
                return <SwiperSlide key={index}>sidfs</SwiperSlide>
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>

  )
}

export default Work
