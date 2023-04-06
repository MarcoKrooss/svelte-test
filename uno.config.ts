import { defineConfig } from 'unocss';
import transformerDirectives from '@unocss/transformer-directives';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import presetIcons from 'unocss/preset-icons';
import presetMini from 'unocss/preset-mini';
import presetUno from 'unocss/preset-uno';
import presetWebFonts from 'unocss/preset-web-fonts';
import presetWind from 'unocss/preset-wind';

export default defineConfig({
  exclude: ['node_modules', '.git', '.vscode', 'build'],
  presets: [
    presetUno(),
    presetMini(),
    presetWind(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      }
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        roboto: 'Roboto'
      }
    })
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()]
});
