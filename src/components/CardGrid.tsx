import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
export const projects = [
   {
      title: "Common",
      icons: ["/images/html.svg", "/images/css.svg", "/images/javascript.svg"],
   },
   {
      title: "Front-End",
      icons: ["/images/vue.svg", "/images/nuxt.svg", "/images/react.svg", "/images/angular.svg"],
   },
   {
      title: "Back-End",
      icons: ["/images/nodejs.svg", "/images/csharp.svg"],
   },
   {
      title: "Productivity",
      icons: ["/images/jira.svg", "/images/tailwind.svg", "images/git.svg", "images/chatgpt.svg"],
   },
   // ...rest of the projects
];

export const CardGrid = () => {
   let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

   return (
      <div style={{ padding: "0 7rem 0 7rem;" }}>
         <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2  py-10">
            {projects.map((project, idx) => (
               <div
                  key={project.title}
                  className="relative group  block p-2 h-full w-full "
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}>
                  <AnimatePresence>
                     {hoveredIndex === idx && (
                        <motion.span
                           className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block  rounded-3xl"
                           layoutId="hoverBackground" // required for the background to follow
                           initial={{ opacity: 0 }}
                           animate={{
                              opacity: 1,
                              transition: { duration: 0.15 },
                           }}
                           exit={{
                              opacity: 0,
                              transition: { duration: 0.15, delay: 0.2 },
                           }}
                        />
                     )}
                  </AnimatePresence>
                  <div className=" rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800/[0.2] border border-transparent group-hover:border-slate-700 relative z-50">
                     <div className="relative z-50">
                        <div className="p-4">
                           <h4 className="text-zinc-100 font-bold tracking-wide mt-4">{project.title}</h4>
                        </div>
                        <div className="flex" key={idx}>
                           {project.icons.map((icon, idx) => (
                              <Image key={idx} width={45} height={45} priority src={icon} alt="icon" />
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};
