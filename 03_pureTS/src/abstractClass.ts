abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
  abstract getSapia(): void;
  getReelTime(): number {
    // some complex calculation
    return 8;
  }
}

// const r = new TakePhoto("front",'none') //* you can't directly create an instace from abstract class

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSapia(): void {
    console.log(`Sapia`);
  }
}

// * It instance should be created from inherited class
const r = new Instagram('front', 'none', 3);

console.log(r.getReelTime());
