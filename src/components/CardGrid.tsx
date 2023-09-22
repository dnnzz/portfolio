import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
interface IProjects {}
export const projects = [
   {
      title: "Common",
      content: [
         { src: "/images/html.svg", name: "HTML" },
         { src: "/images/css.svg", name: "CSS" },
         { src: "/images/sass.svg", name: "SASS" },
         { src: "/images/bootstrap.svg", name: "Bootstrap" },
         { name: "Javascript", src: "/images/javascript.svg" },
      ],
   },
   {
      title: "Front-End",
      content: [
         { src: "/images/vue.svg", name: "Vue" },
         { src: "/images/nuxt.svg", name: "Nuxt" },
         { src: "/images/react.svg", name: "React" },
         { src: "/images/angular.svg", name: "Angular" },
      ],
   },
   {
      title: "Back-End",
      content: [
         { src: "/images/nodejs.svg", name: "Nodejs" },
         { src: "/images/csharp.svg", name: "C#" },
      ],
   },
   {
      title: "Productivity",
      content: [
         { src: "/images/jira.svg", name: "Jira" },
         { src: "/images/tailwind.svg", name: "Tailwind" },
         { src: "/images/git.svg", name: "Git" },
         { src: "/images/chatgpt.svg", name: "Chat GPT" },
         { src: "/images/vscode.svg", name: "VsCode" },
      ],
   },
];

export const CardGrid = () => {
   let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

   return (
      <div className="p-0 sm:p-0 md:pl-[7rem] md:pr-[7rem]">
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
                           {project.content.map((ctx, idx) => (
                              <div className="ml-4 text-center">
                                 <Image key={idx} width={45} height={45} priority src={ctx.src} alt="icon" />
                                 <span className="text-white">{ctx.name}</span>
                              </div>
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
