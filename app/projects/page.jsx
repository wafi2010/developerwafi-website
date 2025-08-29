'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Import Project Images
import FakeNewsImage from '@/public/projects-images/fake-news.jpg'
import RecipeWebAppImage from '@/public/projects-images/recipe-app.png'
import PortfolioWebImage from '@/public/projects-images/portfolio-web.png'
import NewsWebAppImage from '@/public/projects-images/news-app.jpg'


const projects = [
  {
    id: 1,
    title: "Fake News Headline Generator",
    description: "A Free And Funny Fake News Headline Generator.",
    // Correctly accessing the image URL using .src
    image: FakeNewsImage.src,
    project_github_code_link: "https://github.com/wafi2010/Fake-News-Headline-Generator",
    tech: ["Python"]
  },
  {
    id: 2,
    title: "Recipe WebApp",
    description: "A Free Recipe Idea Website.You Search The Recipes and Full Responsive.",
    // Correctly accessing the image URL using .src
    image: RecipeWebAppImage.src,
    project_github_code_link: "https://github.com/wafi2010/Recipe-App",
    tech: ["Html", "CSS", "JavaScript", "API"]
  },
  {
    id: 3,
    title: "Portfolio Website (portfolio website template)",
    description: "I Create A Free Portfolio Website Template.",
    // Correctly accessing the image URL using .src
    image: PortfolioWebImage.src,
    project_github_code_link: "",
    tech: ["EJS", "NodeJS", "ExpressJS", "MongoDB"]
  },
  {
    id: 4,
    title: "NewsMonky - News WebApp",
    description: "A Free News WebApp.Search News and Read News.",
    // Correctly accessing the image URL using .src
    image: NewsWebAppImage.src,
    project_github_code_link: "",
    tech: ["React", "Tailwind", "API"]
  },
];

export default function DarkProjectsSlider() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This effect runs only once after the component mounts on the client
    setIsClient(true);
  }, []);

  // Conditionally render the Swiper component only on the client side
  if (!isClient) {
    return null;
  }

  return (
    <div className="max-w-6xl mt-30 mx-auto py-16 px-4 relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-gray-600',
          bulletActiveClass: '!bg-white',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="!pb-20"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="!w-full max-w-md">
            <motion.div
              className="h-[550px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-800 flex flex-col"
            >
              <div className="h-1/2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  // The `project.image` is now a direct URL string
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
              </div>

              <div className="h-1/2 p-8 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.project_github_code_link}
                    className="w-full inline-block text-center px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-500 transition-all border border-gray-700"
                  >
                    { project.project_github_code_link === "" ? "NO CODE AVAILABLE!" : "GET FREE CODE (in GitHub)" }
                    
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev !text-white/80 hover:!text-white after:!text-xl"></div>
        <div className="swiper-button-next !text-white/80 hover:!text-white after:!text-xl"></div>
      </Swiper>

      {/* Glowing dots decoration */}
      <div className="absolute top-0 left-0 w-3 h-3 bg-blue-500 rounded-full filter blur-md -z-10"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 bg-purple-500 rounded-full filter blur-lg -z-10"></div>
    </div>
  );
}