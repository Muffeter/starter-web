// unocss.config.ts
import { defineUsefulConfig } from 'unocss-preset-useful'
import transormerAttributifyJsx from "@unocss/transformer-attributify-jsx"

export default defineUsefulConfig(
  {
  },
  {
    transformers: [
      //@ts-ignore
      transormerAttributifyJsx()
    ]
  }
)
