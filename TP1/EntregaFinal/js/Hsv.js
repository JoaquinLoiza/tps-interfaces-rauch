class Hsv extends Filter {
    constructor(context, imagenData, quantity) {
       super(context, imagenData); 
       this.quantity = quantity;
    }

    setQuantity(q) {
        this.quantity = q;
    }

    rgbToHsv (r, g, b) {
        let rabs, gabs, babs, rr, gg, bb, h, s, v, diff, diffc, percentRoundFn;
        rabs = r / 255;
        gabs = g / 255;
        babs = b / 255;
        v = Math.max(rabs, gabs, babs),
        diff = v - Math.min(rabs, gabs, babs);
        diffc = c => (v - c) / 6 / diff + 1 / 2;
        percentRoundFn = num => Math.round(num * 100) / 100;
        if (diff == 0) {
            h = s = 0;
        } else {
            s = diff / v;
            rr = diffc(rabs);
            gg = diffc(gabs);
            bb = diffc(babs);
    
            if (rabs === v) {
                h = bb - gg;
            } else if (gabs === v) {
                h = (1 / 3) + rr - bb;
            } else if (babs === v) {
                h = (2 / 3) + gg - rr;
            }
            if (h < 0) {
                h += 1;
            }else if (h > 1) {
                h -= 1;
            }
        }
        return {
            h: Math.round(h * 360),
            s: percentRoundFn(s * 100),
            v: percentRoundFn(v * 100)
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