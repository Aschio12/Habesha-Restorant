/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust this based on your folder structure
      "./public/index.html"
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1E40AF",       // Custom blue
          secondary: "#FBBF24",     // Custom yellow
          accent: "#10B981",        // Custom green
          danger: "#EF4444",        // Error red
          muted: "#6B7280",         // Gray text
          background: "#F9FAFB",    // Light background
          dark: "#111827",          // Dark background
        },
        spacing: {
          '1': '0.25rem',
          '2': '0.5rem',
          '3': '0.75rem',
          '4': '1rem',
          '5': '1.25rem',
          '6': '1.5rem',
          '8': '2rem',
          '10': '2.5rem',
          '12': '3rem',
          '16': '4rem',
          '20': '5rem',
          '24': '6rem',
          '32': '8rem',
          '40': '10rem',
          '48': '12rem',
          '56': '14rem',
          '64': '16rem',
        },
        fontSize: {
          xs: '0.75rem',
          sm: '0.875rem',
          base: '1rem',
          lg: '1.125rem',
          xl: '1.25rem',
          '2xl': '1.5rem',
          '3xl': '1.875rem',
          '4xl': '2.25rem',
          '5xl': '3rem',
          '6xl': '4rem',
        },
        borderRadius: {
          none: '0',
          sm: '0.125rem',
          DEFAULT: '0.25rem',
          md: '0.375rem',
          lg: '0.5rem',
          xl: '0.75rem',
          '2xl': '1rem',
          '3xl': '1.5rem',
          full: '9999px',
        },
        fontFamily: {
          // Clean modern sans-serif for UI
          sans: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
          
          // Stylish serif for headings and elegant texts
          heading: ['Playfair Display', 'Merriweather', 'serif'],
        
          // Decorative gothic-style title font
          fraktur: ['"UnifrakturMaguntia"', '"UnifrakturCook"', 'cursive'],
        
          // Clean serif alternative
          serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        
          // Monospaced for code or techy UI
          mono: ['Fira Code', 'Menlo', 'Monaco', 'Consolas', '"Courier New"', 'monospace'],
        
          // Fun and casual fonts (good for creative sections)
          display: ['"Pacifico"', '"Lobster"', '"Dancing Script"', 'cursive'],
        },
        
        boxShadow: {
          sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
          DEFAULT: '0 1px 3px rgba(0, 0, 0, 0.1)',
          md: '0 4px 6px rgba(0, 0, 0, 0.1)',
          lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
          xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
        },
        screens: {
          xs: '475px',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
    },
    plugins: [],
  }
  