import { MoveTrailFill } from "./MoveTrailFill.js";
export class MoveTrail {
    constructor() {
        this.enable = false;
        this.length = 10;
        this.fill = new MoveTrailFill();
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.fill !== undefined) {
            this.fill.load(data.fill);
        }
        if (data.length !== undefined) {
            this.length = data.length;
        }
    }
}
