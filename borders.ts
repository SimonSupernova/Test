
import { Colors } from './colors';
import { Measures } from './measures';
const border = {
           color: Colors.semanticPrimaryPrimaryBackground,
           width: {
                   measure: 1,
                   unit: "Pixels",
                   css: "1px"
                  },
           position: "Inside",
         };
const borderNew = {
           color: Colors.paletteBlueBlue700,
           width: Measures.genericMedium,
           position: "Inside",
         };


export const Borders = {
      border,
      borderNew,
}