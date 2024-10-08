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
const fiber_1 = require("@react-three/fiber");
/**
 * A THREE.Mesh that fits the user's head and fills the depth buffer,
 * ensuring that the camera image of the head shows instead of any 3D elements behind it in the scene.
 *
 * Works using a full-head ZapparThree.FaceMesh with the mouth, eyes and neck filled in.
 * Its renderOrder is set to Number.MIN_SAFE_INTEGER to ensure it's rendered before any other objects in the scene,
 * and its material has the colorWrite property set to false so it fills the depth buffer but not the color buffer.
 * @see https://docs.zap.works/universal-ar/web-libraries/react-threejs/face-tracking/
 */
const zapparHeadMaskMesh = (0, react_1.forwardRef)((props, ref) => {
    const { children, trackerGroup } = props;
    const headMaskMeshRef = react_1.default.useRef();
    const [faceMesh] = (0, react_1.useState)(new ZapparThree.HeadMaskMeshLoader().load());
    (0, fiber_1.useFrame)(() => {
        if (headMaskMeshRef.current && trackerGroup && trackerGroup.current) {
            headMaskMeshRef.current.updateFromFaceAnchorGroup(trackerGroup.current);
        }
    });
    if (!faceMesh)
        return null;
    return (react_1.default.createElement("primitive", Object.assign({ object: faceMesh, ref: (0, react_merge_refs_1.default)([headMaskMeshRef, ref]) }, props), children));
});
exports.default = zapparHeadMaskMesh;
