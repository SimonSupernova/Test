
import { Colors } from './colors';
import { Measures } from './measures';
const zavaBlue = {
           color: "#306ca5",
           width: {
                   measure: 5,
                   unit: "Pixels",
                   css: "5px"
                  },
           position: "Inside",
         };
const cta = {
           color: Colors.buttonCta,
           width: {
                   measure: 2,
                   unit: "Pixels",
                   css: "2px"
                  },
           position: "Inside",
         };
const newBorder = {
           color: "#316c82",
           width: {
                   measure: 2,
                   unit: "Pixels",
                   css: "2px"
                  },
           position: "Inside",
         };
const demoBlue = {
           color: Colors.paletteBlueBlue200,
           width: {
                   measure: 2,
                   unit: "Pixels",
                   css: "2px"
                  },
           position: "Inside",
         };


export const Borders = {
      zavaBlue,
      cta,
  /** Test */
      newBorder,
      demoBlue,
}