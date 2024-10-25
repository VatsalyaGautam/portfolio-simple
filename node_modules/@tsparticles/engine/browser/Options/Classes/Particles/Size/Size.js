import { RangedAnimationValueWithRandom } from "../../ValueWithRandom.js";
import { SizeAnimation } from "./SizeAnimation.js";
export class Size extends RangedAnimationValueWithRandom {
    constructor() {
        super();
        this.animation = new SizeAnimation();
        this.value = 3;
    }
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        const animation = data.animation;
        if (animation !== undefined) {
            this.animation.load(animation);
        }
    }
}
