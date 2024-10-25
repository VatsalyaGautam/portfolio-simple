import { OpacityAnimation } from "./OpacityAnimation.js";
import { RangedAnimationValueWithRandom } from "../../ValueWithRandom.js";
export class Opacity extends RangedAnimationValueWithRandom {
    constructor() {
        super();
        this.animation = new OpacityAnimation();
        this.value = 1;
    }
    load(data) {
        if (!data) {
            return;
        }
        super.load(data);
        const animation = data.animation;
        if (animation !== undefined) {
            this.animation.load(animation);
        }
    }
}
