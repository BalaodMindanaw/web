/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {

      'lg': {'max': '1220px'},
      // => @media (max-width: 1023px) { ... }

      'slg': {'max': '1100px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
  },
    extend: {
      fontFamily: {
        'fblack': ['Montserrat Black'],
        'fblack-italic': ['Montserrat BlackItalic'],
        'fbold': ['Montserrat Bold'],
        'fbold-italic': ['Montserrat BoldItalic'],
        'fextra-bold': ['Montserrat ExtraBold'],
        'fextra-bold-italic': ['Montserrat ExtraBoldItalic'],
        'fextra-light': ['Montserrat ExtraLight'],
        'fextra-light-italic': ['Montserrat ExtraLightItalic'],
        'fitalic': ['Montserrat Italic'],
        'flight': ['Montserrat Light'],
        'flight-italic': ['Montserrat LightItalic'],
        'fmedium': ['Montserrat Medium'],
        'fmedium-italic': ['Montserrat MediumItalic'],
        'fregular': ['Montserrat Regular'],
        'fsemi-bold': ['Montserrat SemiBold'],
        'fsemi-bold-italic': ['Montserrat SemiBoldItalic'],
        'fthin': ['Montserrat Thin'],
        'fthin-italic': ['Montserrat ThinItalic'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "marque": {
          '0%': { transform: 'translateX(-100%)' },
          '50%':  { transform: 'translateX(0%)' },
          '100%':  { transform: 'translateX(-100%)' },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        floatHouse: {
         
          '0%': { transform: 'translateX(10vw) rotate(0deg)',   },
          '100%': {transform: 'translateX(100vw) rotate(0deg)' },
        },
      },
      animation: {
        floatHouse: 'floatHouse 20s infinite',
        "accordion-down": "accordion-down 0.2s ease-out",
        "marquee": "marquee 5s ease-out ",

        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}