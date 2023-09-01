import React from "react";
import { Meteor } from "@/components/Meteor";
interface IProps {
   experiences: Array<Object>;
}
export const MeteorPreview = ({ experiences }: IProps) => {
   const handlerClickLink = (website: string) => {
      window.open(website, "_blank");
   };
   return (
      <div className=" h-[40rem] experience-section">
         {experiences.map((exp: any, i: number) => (
            <div className=" h-3/4 md:h-1/2 w-3/4  relative max-w-sm" key={i}>
               <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
               <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                  {/* <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                      <svg
                         xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 24 24"
                         strokeWidth="1.5"
                         stroke="currentColor"
                         className="h-2 w-2 text-gray-300">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
                      </svg>
                   </div> */}

                  <h1 className="font-bold text-xl text-white mb-0 mt-4 relative z-50">{exp.company}</h1>

                  <p className="font-normal text-base text-slate-500 mb-4 relative z-50">Tech Stack : {exp.tech}</p>

                  <button
                     onClick={() => handlerClickLink(exp.website)}
                     className="border px-4 py-1 rounded-lg !text-sm  border-gray-500 text-gray-300">
                     Explore &rarr;
                  </button>

                  {/* Meaty part - Meteor effect */}
                  <Meteor number={exp.numberOfMeteors} />
               </div>
            </div>
         ))}
      </div>
   );
};
