import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
				fade: 'fadeIn .5s ease-in-out',
			},

			keyframes: {
				fadeIn: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
			},
      colors: {
        'black': {
          DEFAULT: '#0A0A0A'
        },
        'green': {
          DEFAULT: '#00F100'
        },
        'white': {
          DEFAULT: '#FDFDFD',
          dark: '#D4D4D4'
        },
        'grey': {
          light: '#4A4A4A',
          DEFAULT: '#1E1E1E',
          dark: '#1A1A1A'
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
export default config
