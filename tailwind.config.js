/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)']
      },
      colors: {
        'text-white-on-black': '#FFF',
        'text-gray-on-black': '#AAA',
        'text-gray-on-white': '#AAA',
        'text-black-on-white': '#181818',
        'text-black-on-white': '#181818',
        'line-gray-on-white': '#dbdbdb',
        'line-gray-on-black': '#575757',
        'offWhite': '#F6F6F6',
        'darkGray': "#979797",
        'lightGray': '#C5C5C5',
      },
      gridTemplateColumns: {
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-24': 'span 24 / span 24',
      },
      gridColumnStart: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
      },
      gridColumnEnd: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
      }
    }
  },
  plugins: [],
}