"use strict";
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
/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
const ZapparThree = __importStar(require("@zappar/zappar-threejs"));
const react_1 = __importStar(require("react"));
const fiber_1 = require("@react-three/fiber");
const react_merge_refs_1 = __importDefault(require("react-merge-refs"));
const store_1 = __importDefault(require("../../store"));
const PlacementUI_1 = __importDefault(require("../util/PlacementUI"));
const trackerEnabled_1 = __importDefault(require("../../hooks/trackerEnabled"));
const { InstantWorldAnchorGroup } = ZapparThree;
(0, fiber_1.extend)({ InstantWorldAnchorGroup });
/**
 * A THREE.Group which attaches content to a point on a surface in front of the user as it moves around in the camera view.
 * @see https://docs.zap.works/universal-ar/web-libraries/react-threejs/instant-world-tracking/
 */
const ZapparInstantTracker = (0, react_1.forwardRef)((props, ref) => {
    const { camera, placementMode, children, placementCameraOffset, pipeline, placementUI, useInstantTracker, enabled } = props;
    const InstantTrackerGroupRef = (0, react_1.useRef)();
    const [_placementMode, set_placementMode] = (0, react_1.useState)(placementMode);
    (0, react_1.useEffect)(() => {
        set_placementMode(placementMode);
    }, [placementMode, placementUI]);
    const [instantWorldTracker, setInstantWorldTracker] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        setInstantWorldTracker(new ZapparThree.InstantWorldTracker(pipeline));
    }, [pipeline]);
    const store = store_1.default.camera((state) => state);
    const zapparCamera = (camera === null || camera === void 0 ? void 0 : camera.current) ? camera.current : store.object;
    const placementOffset = placementCameraOffset || { x: 0, y: 0, z: -5 };
    (0, react_1.useEffect)(() => {
        if (instantWorldTracker) {
            if (useInstantTracker)
                useInstantTracker(instantWorldTracker);
        }
    }, [useInstantTracker, instantWorldTracker]);
    (0, fiber_1.useFrame)(() => {
        if (_placementMode && instantWorldTracker) {
            if (Array.isArray(placementOffset)) {
                instantWorldTracker.setAnchorPoseFromCameraOffset(placementOffset[0], placementOffset[1], placementOffset[2]);
            }
            else if (typeof placementOffset === "number") {
                instantWorldTracker.setAnchorPoseFromCameraOffset(0, 0, placementOffset);
            }
            else if (placementOffset.x !== undefined) {
                // Older versions of r3f
                instantWorldTracker.setAnchorPoseFromCameraOffset(placementOffset.x, placementOffset.y, placementOffset.z);
            }
        }
    });
    (0, trackerEnabled_1.default)(instantWorldTracker, enabled);
    if (!zapparCamera || !instantWorldTracker)
        return null;
    const _placementUI = placementUI ? react_1.default.createElement(PlacementUI_1.default, { placementType: placementUI, onInteract: async (placed) => set_placementMode(placed) }) : undefined;
    // If a user provides a placement UI type, render that component.
    return (react_1.default.createElement(react_1.default.Fragment, null,
        _placementUI,
        react_1.default.createElement("instantWorldAnchorGroup", Object.assign({ ref: (0, react_merge_refs_1.default)([InstantTrackerGroupRef, ref]), args: [zapparCamera, instantWorldTracker] }, props), children)));
});
exports.default = ZapparInstantTracker;
