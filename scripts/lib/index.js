"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./styles.css");
var utils_1 = require("./utils");
var StyledText = function (_a) {
    var bold = _a.bold, center = _a.center, children = _a.children, className = _a.className, color = _a.color, fontFamily = _a.fontFamily, fontSize = _a.fontSize, hasLeftSpace = _a.hasLeftSpace, hasRightSpace = _a.hasRightSpace, highlighColor = _a.highlighColor, indent = _a.indent, letterSpacing = _a.letterSpacing, lineSpacing = _a.lineSpacing, marginTop = _a.marginTop, numberOfLines = _a.numberOfLines, _b = _a.selectable, selectable = _b === void 0 ? true : _b, style = _a.style, _c = _a.tabSize, tabSize = _c === void 0 ? 4 : _c, _d = _a.tag, tag = _d === void 0 ? 'span' : _d, uppercase = _a.uppercase, others = __rest(_a, ["bold", "center", "children", "className", "color", "fontFamily", "fontSize", "hasLeftSpace", "hasRightSpace", "highlighColor", "indent", "letterSpacing", "lineSpacing", "marginTop", "numberOfLines", "selectable", "style", "tabSize", "tag", "uppercase"]);
    var TextTag = "" + tag;
    var customStyles = {};
    bold && (customStyles.fontWeight = 'bold');
    center && (customStyles.textAlign = 'center');
    color && (customStyles.color = color);
    fontFamily && (customStyles.fontFamily = fontFamily);
    fontSize && (customStyles.fontSize = fontSize);
    highlighColor && (customStyles.backgroundColor = highlighColor);
    letterSpacing && (customStyles.letterSpacing = letterSpacing);
    lineSpacing && (customStyles.lineHeight = lineSpacing);
    marginTop && (customStyles.marginTop = marginTop);
    uppercase && (customStyles.textTransform = 'uppercase');
    return (react_1.default.createElement(TextTag, __assign({ className: "styled-text " + (className || ''), style: __assign(__assign(__assign(__assign({}, customStyles), (numberOfLines && {
            display: '-webkit-box',
            WebkitLineClamp: numberOfLines,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
        })), (!selectable && {
            WebkitTouchCallout: 'none' /* iOS Safari */,
            WebkitUserSelect: 'none' /* Safari */,
            MozUserSelect: 'none' /* Old versions of Firefox */,
            MsUserSelect: 'none' /* Internet Explorer/Edge */,
            userSelect: 'none' /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */,
        })), style) }, others),
        indent && utils_1.getSpace(tabSize),
        hasLeftSpace && utils_1.getSpace(),
        children,
        hasRightSpace && utils_1.getSpace()));
};
exports.default = StyledText;
//# sourceMappingURL=index.js.map