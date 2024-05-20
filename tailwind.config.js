/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter_100Thin: ['Inter_100Thin'],
        Inter_200ExtraLight: ['Inter_200ExtraLight'],
        Inter_300Light: ['Inter_300Light'],
        Inter_400Regular: ['Inter_400Regular'],
        Inter_500Medium: ['Inter_500Medium'],
        Inter_600SemiBold: ['Inter_600SemiBold'],
        Inter_700Bold: ['Inter_700Bold'],
        Inter_800ExtraBold: ['Inter_800ExtraBold'],
        Inter_900Black: ['Inter_900Black'],
      },
    },
  },
  plugins: [],
}
