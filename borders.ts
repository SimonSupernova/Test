
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
const dhTest = {
           color: Colors.paletteGreenGreen1000,
           width: Measures.genericTiny,
           position: "Inside",
         };
const begumBlueBorderToken = {
           color: Colors.paletteBlueBlue300,
           width: {
                   measure: 2,
                   unit: "Pixels",
                   css: "2px"
                  },
           position: "Inside",
         };
const testBorder = {
           color: Colors.paletteGreenGreen100,
           width: Measures.genericTiny,
           position: "Inside",
         };
const borderX = {
           color: Colors.semanticPrimaryPrimaryActivebackground,
           width: Measures.genericTiny,
           position: "Inside",
         };
const test = {
           color: Colors.paletteGreenGreen1000,
           width: {
                   measure: 2,
                   unit: "Pixels",
                   css: "2px"
                  },
           position: "Inside",
         };
const carvana = {
           color: Colors.paletteGreenGreen800,
           width: Measures.genericTiny,
           position: "Inside",
         };
const test = {
           color: Colors.semanticPrimaryPrimaryHoverbackground,
           width: {
                   measure: 2,
                   unit: "Pixels",
                   css: "2px"
                  },
           position: "Inside",
         };


export const Borders = {
      border,
      border2,
      klm,
      buttonsKlm3,
  /** Nice colour */
      dhTest,
  /** A test for our Turkish colleague */
      begumBlueBorderToken,
      testBorder,
      borderX,
      test,
      carvana,
  /** Test */
      test,
}