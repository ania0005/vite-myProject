import { colors } from '@mui/material';
import { Container } from 'postcss';

/**
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],

  theme: {
    extend: {
      colors  : {
        headingFirst: "#010f1c",
        headingSecondary: "#021d35",
      },
      container: {
        center: true,
        padding: "15px",
      },  
    },
    fontFamily: {
      primary: "Poppins",
      secondary: "Pacifico",
    },  
  },
  plugins: [],
};
