/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Flowbite React 컴포넌트를 사용하는 경우 아래 줄을 추가
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Flowbite React를 사용하는 경우 아래 줄을 추가
    require('flowbite/plugin')
  ],
}