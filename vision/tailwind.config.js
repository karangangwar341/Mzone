/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'white':'#ffffff',
      'texthover': '#1e1b4b',
      'sidebarc': '#4285F4',
      'yellow':'#fcd34d',
      'bg-transparent':	'background-color: transparent',
      'black':'#000000',
    },
    extend: {
      scrollbar: theme => ({
        'hide': 'scrollbar-width: none;',
      }),
      backgroundImage: theme => ({ 
        'radial-gradient': 'radial-gradient(circle, #172651, #010101)'
        
      }),
    }
  },
  plugins: [
  ],
  
}