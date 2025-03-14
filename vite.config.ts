import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import UnoCSS from 'unocss/vite'

import { defineConfig as UnoConfig, presetUno, presetAttributify, transformerAttributifyJsx } from 'unocss'
const unoConfig = UnoConfig(
  {
    presets: [
      presetUno(),
      presetAttributify()
    ],
    transformers: [
      // @ts-ignore
      transformerAttributifyJsx()
    ]
  }
)

// https://vite.dev/config/
export default defineConfig({
  plugins: [UnoCSS(unoConfig), react()],
})
