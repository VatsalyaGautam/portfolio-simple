import { AnimationOptions, RangedAnimationOptions } from "./AnimationOptions.js";
import { setRangeValue } from "../../Utils/NumberUtils.js";
export class ValueWithRandom {
    constructor() {
        this.value = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.value !== undefined) {
            this.value = setRangeValue(data.value);
        }
    }
}
export class AnimationValueWithRandom extends ValueWithRandom {
    constructor() {
        super();
        this.animation = new AnimationOptions();
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
export class RangedAnimationValueWithRandom extends AnimationValueWithRandom {
    constructor() {
        super();
        this.animation = new RangedAnimationOptions();
    }
    load(data) {
        super.load(data);
    }
}
