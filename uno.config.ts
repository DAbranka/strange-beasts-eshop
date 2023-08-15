// uno.config.ts
import { defineConfig, presetUno, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify()
  ],
  rules: [],
  shortcuts: {
    'cart' : 'font-bold text-3xl m-3',
    'btn': 'bg-black text-white p-3 font-bold text-xl uppercase border-none rounded-xl m-3 cursor-pointer'
  },
  theme: {
      colors: {
        'prime': '',
        'sec': '',
        'third': ''
  }}
})