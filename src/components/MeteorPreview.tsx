import React from "react";
import { Meteor } from "@/components/Meteor";
interface IProps {
   experiences: Array<Object>;
}
const isMobile = window.innerWidth < 768;
export const MeteorPreview = ({ experiences }: IProps) => {
   const handlerClickLink = (website: string) => {
      window.open(website, "_blank");
   };
   return (
      <div className=" h-auto experience-section">
         {experiences.map((exp: any, i: number) => (
            <div className=" h-3/4 md:h-1/2 w-3/4  relative max-w-sm" key={i}>
               <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
               <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                  <h1 className="font-bold text-xl text-white mb-0 mt-4 relative z-50">Company: {exp.company}</h1>
                  <p className="font-normal text-base text-slate-500 mb-4 relative z-50">Tech Stack : {exp.tech}</p>
                  <div className="flex items-center mb-6">
                     <div className="flex-shrink-0  flex justify-center items-center">
                        <p className="text-white font-semibold text-lg">{exp.workStart}</p>
                     </div>
                     <hr className="mx-4 h-0.5 w-24" />
                     <div className="ml-1">
                        <h2 className="text-xl font-semibold text-white">{exp.workEnd}</h2>
                     </div>
                  </div>

                  <button
                     onClick={() => handlerClickLink(exp.website)}
                     className="border px-4 py-1 rounded-lg !text-sm  border-gray-500 text-gray-300">
                     Explore &rarr;
                  </button>

                  {/* Meaty part - Meteor effect */}
                  {!isMobile && <Meteor number={exp.numberOfMeteors} />}
               </div>
            </div>
         ))}
      </div>
   );
};
