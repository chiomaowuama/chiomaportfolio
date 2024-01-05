/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        ashbg:"#d1cfcf9d",
        bigscreenbg:"#d1cfcf9d",
        bgdark:"#2b2b33",
      },
      keyframes:{
        'slide':{
          '0% , 100%': { transform:'translateX(10px)'},
          '50%': { transform:'translateX(0)'},
          
        },
       
      },
    },
    animation:{
      'slide':'slide 12s ease-in-out infinite',

      
      
    },
    fontFamily:{
      inter:["inter"],
      textstyle:["Figtree"],
      body:["Raleway"]
    },
    screens:{
      sm:"640px",
      md:"768px",
      lg:"976px",
      xl:"1440px",
    }
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
}

