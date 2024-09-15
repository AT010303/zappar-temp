// "use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ZapparThree = __importStar(require("@zappar/zappar-threejs"));
const react_1 = __importStar(require("react"));
const react_merge_refs_1 = __importDefault(require("react-merge-refs"));
/**
 * A THREE.Mesh which will fit to the target image and use it's texture as a material.
 *  @param imageTarget The target image to use.
 * @see https://docs.zap.works/universal-ar/web-libraries/react-threejs/image-tracking/
 */
const targetImagePreviewMesh = (0, react_1.forwardRef)((props, ref) => {
    const { children, imageTarget } = props;
    const mesh = react_1.default.useMemo(() => new ZapparThree.TargetImagePreviewMesh(imageTarget), [imageTarget]);
    const meshRef = react_1.default.useRef();
    return (react_1.default.createElement("primitive", Object.assign({ object: mesh, ref: (0, react_merge_refs_1.default)([meshRef, ref]) }, props), children));
});
exports.default = targetImagePreviewMesh;
