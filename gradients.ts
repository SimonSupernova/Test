
import { Colors } from './colors';
import { Measures } from './measures';

const rainbow = {
           type: 'Linear',
            direction: {
             from: {x: 0.5, y: 0 },
             to:   {x: 0.5, y: 1 },
           },
            stops: [
             {
               color: "#ab0dcae7",
               position: 0
             },
             {
               color: "#2ff3fff1",
               position: 0.4538445723684211
             },
             {
               color: "#ec2a2a",
               position: 1
             },
           ],
         };


export const Gradients = {
  /** Rainbow gradient */
      rainbow,
}