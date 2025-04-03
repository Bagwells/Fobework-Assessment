/** @type {import('tailwindcss').Config} */



const config = {
  darkMode: ["class"],
  
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    screens: {
      'base': '200px',
      'sm': '640px',
      'md': '760px',
      'lg': '1025px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    fontFamily: {
      'jakarta': ['Plus Jakarta Sans','sans-serif'],
      'Inter':['Inter','sans-serif'],
    },

    
    extend: {
      spacing: {
        '4.5':'18px',
        '5.5':'22px',
        '17.5':'70px',
        '50':'200px',
        '9.5':'38px',
      },

      colors: {
        'primary':'#BB372F',
        'secondary':'#3A3F51',
        'alert-success':'#00AC56',
        'alert-error':'#FF1F7D',
        'alert-warning':'#F5BF3D',
        'background':'#FDFDFD',
        'grey50':'#FAFAFA',
        'grey100':'#F5F5F5',
        'grey200':'#E5E5E5',
        'grey300':'#B2ABAB',
        'grey400':'#A3A3A3',
        'grey500':'#737373',
        'grey600':'#525252',
        'grey700':'#404040',
        'grey800':'#262626',
        'grey900':'#171717',
        'purple':'#6160DC',
        'blue':'#54C5EB',
        'orange':'#FFB74A',
        'red':'#FF4A55',
        'analyticbgred':'rgba(237, 84, 78, 0.12)',
        'analyticbggreen': 'rgba(52, 202, 165, 0.12)',
        'ph-grey':'#78828A',
        'borderCol':'#DADDDD',
        'textCol':'#26282C',
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

