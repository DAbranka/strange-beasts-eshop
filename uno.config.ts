// uno.config.ts
import { defineConfig, presetUno, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify()
  ],
  rules: [],
  shortcuts: {
    'cart' : '',
    'btn': 'bg-black text-white p-3 font-bold text-xl uppercase border-none rounded-xl m-3 cursor-pointer',
    'heroTitle': 'text-9xl font-bold text-white',
    'productCard': 'bg-gray-300 w-sm flex justify-center items-center h-[450px] rounded-xl',
    'addCartBtn': 'bg-black hover:bg-prime text-white border-none text-2xl font-bold py-2 px-6 uppercase rounded-full cursor-pointer',
  },
  theme: {
      colors: {
        'prime': '#F04C61',
        'sec': '',
        'third': '',
        'black': '#0C0C0C',
        'white': '#F3F3F3',
  }}
})