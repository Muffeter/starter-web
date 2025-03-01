// unocss.config.ts
import { defineUsefulConfig } from 'unocss-preset-useful'
import transormerAttributifyJsx from "@unocss/transformer-attributify-jsx"
import { presetUno, presetAttributify } from 'unocss'

export default defineUsefulConfig(
  {
  },
  {
    presets: [
      presetUno(),
      presetAttributify()
    ],
    transformers: [
      //@ts-ignore
      transormerAttributifyJsx()
    ]
  }
)
