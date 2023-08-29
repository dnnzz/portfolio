import type { Config } from "tailwindcss";
const config: Config = {
   content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
   theme: {
      extend: {
         colors: {
            sky: {
               "300": "rgba(144, 205, 244, 1)",
            },
            pink: {
               "300": "rgba(246, 135, 179, 1)",
            },
            green: {
               "300": "rgba(104, 211, 145, 1)",
            },
            yellow: {
               "300": "rgba(246, 224, 94, 1)",
            },
            red: {
               "300": "rgba(252, 129, 129, 1)",
            },
            purple: {
               "300": "rgba(159, 122, 234, 1)",
            },
            blue: {
               "300": "rgba(99, 179, 237, 1)",
            },
            indigo: {
               "300": "rgba(160, 174, 192, 1)",
            },
            violet: {
               "300": "rgba(192, 132, 252, 1)",
            },
         },
         animation: {
            "meteor-effect": "meteor 5s linear infinite",
         },
         keyframes: {
            meteor: {
               "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
               "70%": { opacity: "1" },
               "100%": {
                  transform: "rotate(215deg) translateX(-500px)",
                  opacity: "0",
               },
            },
         },
      },
   },
   plugins: [],
};
export default config;
