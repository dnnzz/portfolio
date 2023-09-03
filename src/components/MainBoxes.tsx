import React from "react";
import { BoxesContainer } from "@/components/BoxesContainer";
// import { twMerge } from "tailwind-merge";
import { Navbar } from "@/components/Navbar";
export const MainBoxes = () => {
   const [isMobile, setIsMobile] = React.useState<boolean>(false);
   React.useEffect(() => {
      setIsMobile(window.innerWidth < 768);
   }, []);
   return (
      <div className="h-96 relative w-full overflow-hidden bg-[#12151D] flex flex-col items-center justify-center rounded-lg">
         <Navbar />
         <div className="absolute inset-0 w-full h-full bg-[#12151D] z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

         {isMobile ? null : <BoxesContainer />}
         <h1 className="md:text-4xl text-xl text-white relative z-20 !p-0 !m-0">Hello I&apos;m Deniz 👋</h1>
         <p className="text-center mt-2 text-neutral-300 relative z-20">
            &quot;Experienced computer engineer specializing in front-end development. Crafting engaging user interfaces with modern tools. Check out
            my portfolio!&quot;
         </p>
      </div>
   );
};
