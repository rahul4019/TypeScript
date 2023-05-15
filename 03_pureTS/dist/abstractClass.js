"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // some complex calculation
        return 8;
    }
}
// const r = new TakePhoto("front",'none') //* you can't directly create an instace from abstract class
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSapia() {
        console.log(`Sapia`);
    }
}
// * It instance should be created from inherited class
const r = new Instagram('front', 'none', 3);
console.log(r.getReelTime());
