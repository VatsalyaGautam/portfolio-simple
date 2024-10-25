"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinksPlugin = void 0;
const LinkInstance_js_1 = require("./LinkInstance.js");
class LinksPlugin {
    constructor() {
        this.id = "links";
    }
    getPlugin(container) {
        return Promise.resolve(new LinkInstance_js_1.LinkInstance(container));
    }
    loadOptions() {
    }
    needsPlugin() {
        return true;
    }
}
exports.LinksPlugin = LinksPlugin;
