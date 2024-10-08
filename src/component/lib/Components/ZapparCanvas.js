// "use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const fiber_1 = require("@react-three/fiber");
// eslint-disable-next-line import/no-extraneous-dependencies
const resize_observer_1 = require("@juggle/resize-observer");
/**
 * A canvas with linear encoding, auto-updating dpr as well as tone mapping disabled.
 */
const zapparCanvas = (props) => {
    const { children } = props;
    return (react_1.default.createElement(fiber_1.Canvas, Object.assign({ flat: true, resize: { polyfill: resize_observer_1.ResizeObserver }, linear: true, dpr: window.devicePixelRatio, id: "zapparCanvas" }, props, { gl: Object.assign({ antialias: false }, props.gl) }), children));
};
exports.default = zapparCanvas;
