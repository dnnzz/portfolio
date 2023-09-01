import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
   return (
      <Html lang="en" className="scroll-smooth">
         <Head />
         <body className="bg-[#12151D] gridSlate absolute inset-0 border-b border-slate-100/5 bg-bottom bg-grid-slate-400/[0.05]">
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
