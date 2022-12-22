
import { Colors } from './colors';
import { Measures } from './measures';
const border = {
           color: Colors.paletteGreenGreen800,
           width: {
                   measure: 1,
                   unit: "Pixels",
                   css: "1px"
                  },
           position: "Inside",
         };
const border2 = {
           color: Colors.paletteBlueBlue1000,
           width: {
                   measure: 1,
                   unit: "Pixels",
                   css: "1px"
                  },
           position: "Inside",
         };
const border3 = {
           color: Colors.semanticPrimaryPrimaryActivebackground,
           width: {
                   measure: 1,
                   unit: "Pixels",
                   css: "1px"
                  },
           position: "Inside",
         };


export const Borders = {
      border,
      border2,
      border3,
}