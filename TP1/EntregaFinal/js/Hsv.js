class Hsv extends Filter {
    constructor(context, imagenData, quantity) {
       super(context, imagenData); 
       this.quantity = quantity;
    }

    rgbToHsv (r, g, b) {
        let red, green, blue, max, min ,d;
        red = r / 255;
        green = g / 255;
        blue = b / 255;
  
        max = Math.max(red, green, blue);
        min = Math.min(red, green, blue);
  
        d = max-min;
        // calcular V
        let v = max;
        // calcular S
        let s;
        if(d == 0){
          s = 0;
        }
        else {
          s =  d / max;
        }
        // calcular H
        let h; 
        if (max == min){
            h = 0;
        }
        else if(max == red){
          h =  (60 * ((green - blue) / d) + 360) % 360;
        } 
        else if(max == green){
          h = (60 * ((blue - red) / d) + 120) % 360;
        }
        else if(max == blue){
          h =  (60 * ((red - green) / d) + 240) % 360;
        }
  
        return {
            h: Math.round(h),
            s: Math.round(s*100),
            v: Math.round(v*100)
        };
    }

    hsvToRgb(hue, sat, vib) {

        let rgb = { };
        let h = Math.round(hue);
        let s = Math.round(sat * 255 / 100);
        let v = Math.round(vib * 255 / 100);
    
            if (s == 0) {
            rgb.r = rgb.g = rgb.b = v;
            } else {
            let t1 = v;
            let t2 = (255 - s) * v / 255;
            let t3 = (t1 - t2) * (h % 60) / 60;
    
                if (h == 360) h = 0;
    
                    if (h < 60) { rgb.r = t1; rgb.b = t2; rgb.g = t2 + t3 }
                    else if (h < 120) { rgb.g = t1; rgb.b = t2; rgb.r = t1 - t3 }
                    else if (h < 180) { rgb.g = t1; rgb.r = t2; rgb.b = t2 + t3 }
                    else if (h < 240) { rgb.b = t1; rgb.r = t2; rgb.g = t1 - t3 }
                    else if (h < 300) { rgb.b = t1; rgb.g = t2; rgb.r = t2 + t3 }
                    else if (h < 360) { rgb.r = t1; rgb.g = t2; rgb.b = t1 - t3 }
                    else { rgb.r = 0; rgb.g = 0; rgb.b = 0 }
            }
    
        return { r: Math.round(rgb.r), g: Math.round(rgb.g), b: Math.round(rgb.b) };
    }
}