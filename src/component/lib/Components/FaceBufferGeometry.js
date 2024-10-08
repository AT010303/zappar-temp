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
const { FaceBufferGeometry } = ZapparThree;
(0, fiber_1.extend)({ FaceBufferGeometry });
/**
 * A THREE.BufferGeometry that fits to the user's face and deforms as the user's expression changes.
 * @see https://docs.zap.works/universal-ar/web-libraries/react-threejs/face-tracking/
 */
const ZapparFaceBufferGeometry = (0, react_1.forwardRef)((props, ref) => {
    const { fillMouth = false, fillEyeLeft = false, fillEyeRight = false, fillNeck = false, fullHead = false, children, trackerGroup } = props;
    const faceBufferGeometryRef = react_1.default.useRef();
    const [faceMesh, setFaceMesh] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        if (fullHead) {
            setFaceMesh(new ZapparThree.FaceMeshLoader().loadFullHeadSimplified({
                fillMouth,
                fillEyeLeft,
                fillEyeRight,
                fillNeck,
            }));
        }
        else {
            setFaceMesh(new ZapparThree.FaceMeshLoader().loadFace({
                fillMouth,
                fillEyeLeft,
                fillEyeRight,
            }));
        }
    }, [fillMouth, fillEyeLeft, fillEyeRight, fillNeck]);
    // TODO: Handle multiple anchors
    (0, fiber_1.useFrame)(() => {
        if (faceBufferGeometryRef.current && trackerGroup && trackerGroup.current) {
            faceBufferGeometryRef.current.updateFromFaceAnchorGroup(trackerGroup.current);
        }
    });
    if (!faceMesh)
        return null;
    return (react_1.default.createElement("faceBufferGeometry", Object.assign({ args: [faceMesh], ref: (0, react_merge_refs_1.default)([faceBufferGeometryRef, ref]) }, props), children));
});
exports.default = ZapparFaceBufferGeometry;
