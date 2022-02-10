
import { Colors } from './colors';
import { Measures } from './measures';
const sDark = {
           color: Colors.actionBorderDefault,
           witdh: Measures.px,
           position: "Center",
         };
const _0 = {
           color: Colors.actionBorderDefault,
           witdh: {
                   measure: 0,
                   unit: "Pixels",
                   css: "0px"
                  },
           position: "Center",
         };
const mDark = {
           color: "#000000",
           witdh: Measures._05,
           position: "Inside",
         };
const lDark = {
           color: Colors.actionBorderDefault,
           witdh: Measures._1,
           position: "Inside",
         };


export const Borders = {
      sDark,
      _0,
      mDark,
      lDark,
}