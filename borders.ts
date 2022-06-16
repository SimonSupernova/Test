
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
const border2 = {
           color: Colors.semanticPrimaryPrimaryBackground,
           width: {
                   measure: 1,
                   unit: "Pixels",
                   css: "1px"
                  },
           position: "Inside",
         };
const klm = {
           color: Colors.paletteBlueBlue800,
           width: Measures.genericTiny,
           position: "Inside",
         };
const buttonsKlm3 = {
           color: Colors.paletteBlueBlue200,
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
      klm,
      buttonsKlm3,
}