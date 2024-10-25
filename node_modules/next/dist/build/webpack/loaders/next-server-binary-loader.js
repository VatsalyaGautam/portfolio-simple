"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return nextErrorBrowserBinaryLoader;
    }
});
const _path = /*#__PURE__*/ _interop_require_default(require("path"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function nextErrorBrowserBinaryLoader() {
    let relativePath = _path.default.relative(this.rootContext, this.resourcePath);
    if (!relativePath.startsWith(".")) {
        relativePath = "./" + relativePath;
    }
    return `module.exports = __non_webpack_require__(${JSON.stringify(relativePath)})`;
}

//# sourceMappingURL=next-server-binary-loader.js.map