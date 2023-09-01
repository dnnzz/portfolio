import { MeteorPreview } from "@/components/MeteorPreview";
import { MainBoxes } from "@/components/MainBoxes";
// import { Navbar } from "@/components/Navbar";
export default function Home() {
   const experiences = [
      {
         company: "GTS Web Apps",
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
   ];
   return (
      <main>
         {/* <Navbar /> */}
         <section id="Home">
            <MainBoxes />
         </section>
         <section id="Experiences">
            <h2 className="text-white text-4xl text-center">Experiences</h2>
            <MeteorPreview experiences={experiences} />
         </section>
      </main>
   );
}
