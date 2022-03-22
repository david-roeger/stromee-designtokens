
import { Colors } from './colors';
import { Measures } from './measures';

const baseGradientGreen = {
           type: 'Linear',
            direction: {
             from: {x: 0.009521489073790801, y: 0.7656250145339532 },
             to:   {x: 1, y: 0.15624999734086503 },
           },
            stops: [
             {
               color: "#6ddc91",
               position: 0
             },
             {
               color: "#8ee59c",
               position: 0.2497936189174652
             },
             {
               color: "#e8fdbce8",
               position: 1
             },
           ],
         };


export const Gradients = {
      baseGradientGreen,
}