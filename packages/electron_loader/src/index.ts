import p5, { Vector } from 'p5';
import { floor } from "lodash";
import { Particle } from "./particle";

import { createNoise3D } from 'simplex-noise';

import BlackPastFont from '../assets/blackpast.ttf';

const containerElement = document.getElementById('p5-container');

const sketch = (p: p5) => {
    const font = p.loadFont(BlackPastFont);
    const scale = 50; const cols = floor(window.innerWidth / scale);
    const rows = floor(window.innerHeight / scale); const inc = 0.1;
    const noise = createNoise3D(); let zoff = 0.0; let particles: Particle[];
    let flowField: Vector[]; let count = 0;

    p.setup = function() {
        p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL);
        p.pixelDensity(1);
        p.background(0);

        flowField = new Array(cols*rows);
        particles = Array(1000).fill(0).map(()=>new Particle());
    };

    p.draw = function() {
        if (count % 900 === 0) p.background(0);

        let yoff = 0;
        for (let y=0; y<rows; y++) {
            let xoff = 0;
            for (let x=0; x<cols; x++) {
                const index = x + y * cols;
                const angle = noise(xoff, yoff, zoff) * p.TWO_PI * 4;
                let v = Vector.fromAngle(angle);
                v.setMag(2);

                flowField[index] = v;

                xoff += inc;
            }
            yoff += inc;
        }


        particles.forEach(part => {
            part.FollowField(flowField, scale, cols);
            part.Update();
            part.Show(p);
        });

        p.textAlign(p.LEFT, p.CENTER);
        p.textFont(font);
        p.textSize(75);
        p.stroke(0);
        // p.strokeWeight(5);
        p.fill(0);
        p.text('CompX', 15, window.innerHeight/3);

        zoff += 0.0005;
        count++;
    };
};

new p5(sketch, containerElement);