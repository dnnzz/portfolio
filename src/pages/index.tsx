import { MeteorPreview } from "@/components/MeteorPreview";
import { MainBoxes } from "@/components/MainBoxes";
import { CardGrid } from "@/components/CardGrid";
export default function Home() {
   const experiences = [
      {
         company: "GTSFly GmbH",
         tech: "VueJS , .Net , Asp.Net",
         workStart: "JAN 2023",
         workEnd: "Present",
         website: "https://gtsfly.de/",
         numberOfMeteors: 7,
      },
      {
         company: "Akinon",
         tech: "jQuery , ReactJS , Jinja Templates",
         workStart: "OCT 2022",
         workEnd: "DEC 2022",
         website: "https://akinon.com/",
         numberOfMeteors: 5,
      },
      {
         company: "Parabol",
         tech: "AngularJS , ReactJS , jQuery",
         workStart: "FEB 2022",
         workEnd: "OCT 2022",
         website: "https://www.paraboly.com/",
         numberOfMeteors: 3,
      },
   ].reverse();
   return (
      <main>
         {/* <Navbar /> */}
         <section id="Home">
            <MainBoxes />
         </section>
         <section id="Experiences" className="h-[35rem]">
            <h2 className="text-white text-4xl text-center">Experiences</h2>
            <MeteorPreview experiences={experiences} />
         </section>
         <section id="SkillSet">
            <h2 className="text-white text-4xl text-center">Skill Set</h2>
            <CardGrid />
         </section>
      </main>
   );
}
