import path from "path";
export default function nextErrorBrowserBinaryLoader() {
    let relativePath = path.relative(this.rootContext, this.resourcePath);
    if (!relativePath.startsWith(".")) {
        relativePath = "./" + relativePath;
    }
    return `module.exports = __non_webpack_require__(${JSON.stringify(relativePath)})`;
}

//# sourceMappingURL=next-server-binary-loader.js.map