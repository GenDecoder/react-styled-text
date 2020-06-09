"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpace = void 0;
var react_1 = __importDefault(require("react"));
function getSpace(n) {
    if (n === void 0) { n = 1; }
    var spaces = [];
    for (var i = 0; i < n; i++) {
        spaces.push(react_1.default.createElement("span", { key: "space-" + i }, "\u00A0"));
    }
    return react_1.default.createElement(react_1.default.Fragment, null, spaces);
}
exports.getSpace = getSpace;
//# sourceMappingURL=utils.js.map