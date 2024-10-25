(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Bounce = void 0;
    class Bounce {
        constructor() {
            this.distance = 200;
        }
        load(data) {
            if (!data) {
                return;
            }
            if (data.distance !== undefined) {
                this.distance = data.distance;
            }
        }
    }
    exports.Bounce = Bounce;
});
