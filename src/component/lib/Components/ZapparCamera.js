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
/* eslint-disable react/prop-types */
const ZapparThree = __importStar(require("@zappar/zappar-threejs"));
const react_1 = __importStar(require("react"));
const cameraTexture_1 = require("@zappar/zappar-threejs/lib/cameraTexture");
const react_merge_refs_1 = __importDefault(require("react-merge-refs"));
const fiber_1 = require("@react-three/fiber");
const store_1 = __importDefault(require("../store"));
class ZapparCameraAdditional extends ZapparThree.Camera {
    constructor() {
        super(...arguments);
        this.updateProjectionMatrix = () => { };
    }
}
// First frame rendered R3f tries to update the projection matrix of the default camera.
// Zappar camera does not have this method, so we create a noop
(0, fiber_1.extend)({ ZapparCameraAdditional });
/**
 * Creates a camera that you can use instead of a perspective camera.
 *
 * @see https://docs.zap.works/universal-ar/web-libraries/react-threejs/camera-setup/
 */
const ZapparCamera = (0, react_1.forwardRef)((props, ref) => {
    const { userFacing = false, rearCameraMirrorMode, userCameraMirrorMode, poseMode, poseAnchorOrigin, pipeline, sources, makeDefault = true, renderPriority = 2, environmentMap = false, permissionRequest = true, onFirstFrame, start = true, backgroundImageProps, } = props;
    const { gl, set } = (0, fiber_1.useThree)((state) => state);
    const hadFirstFrame = react_1.default.useRef(false);
    const [cameraTexture] = (0, react_1.useState)(new cameraTexture_1.CameraTexture());
    const cameraEnvMap = (0, react_1.useMemo)(() => {
        return environmentMap ? new ZapparThree.CameraEnvironmentMap() : undefined;
    }, [environmentMap]);
    (0, react_1.useEffect)(() => {
        if (backgroundImageProps && cameraTexture)
            Object.assign(cameraTexture, backgroundImageProps);
    }, [backgroundImageProps, cameraTexture]);
    const cameraRef = react_1.default.useRef();
    const [permissionGranted, setPermissionGranted] = (0, react_1.useState)(false);
    const store = {
        camera: store_1.default.camera((state) => state),
        // cameraEnvironmentMap: useStore.cameraEnvironmentMap((state) => state),
    };
    (0, react_1.useEffect)(() => {
        const activePipeline = pipeline || ZapparThree;
        activePipeline.glContextSet(gl.getContext());
    }, [pipeline, gl]);
    // TODO: If not making default, scene's texture should not be changed, and camera should not tick.
    // TODO: Instead, it should be exposed to user to set when needed.
    (0, react_1.useEffect)(() => {
        if (makeDefault) {
            set(() => ({ camera: cameraRef.current }));
        }
    }, [makeDefault]);
    (0, react_1.useEffect)(() => {
        if (!cameraRef.current)
            return;
        store.camera.set(cameraRef.current);
        if (!start)
            return;
        if (permissionGranted || !permissionRequest) {
            cameraRef.current.start(userFacing);
        }
        else {
            ZapparThree.permissionRequest().then((granted) => {
                setPermissionGranted(granted);
                if (granted)
                    cameraRef.current.start(userFacing);
                else
                    ZapparThree.permissionDeniedUI();
            });
        }
    }, [userFacing, permissionRequest, start]);
    (0, react_1.useEffect)(() => {
        if (!cameraRef.current)
            return;
        switch (rearCameraMirrorMode) {
            case "poses":
                cameraRef.current.rearCameraMirrorMode = ZapparThree.CameraMirrorMode.Poses;
                break;
            case "css":
                cameraRef.current.rearCameraMirrorMode = ZapparThree.CameraMirrorMode.CSS;
                break;
            case "none":
            default:
                cameraRef.current.rearCameraMirrorMode = ZapparThree.CameraMirrorMode.None;
                break;
        }
        switch (userCameraMirrorMode) {
            case "none":
                cameraRef.current.userCameraMirrorMode = ZapparThree.CameraMirrorMode.None;
                break;
            case "css":
                cameraRef.current.userCameraMirrorMode = ZapparThree.CameraMirrorMode.CSS;
                break;
            case "poses":
            default:
                cameraRef.current.userCameraMirrorMode = ZapparThree.CameraMirrorMode.Poses;
                break;
        }
        switch (poseMode) {
            case "anchor-origin":
                cameraRef.current.poseMode = ZapparThree.CameraPoseMode.AnchorOrigin;
                cameraRef.current.poseAnchorOrigin = poseAnchorOrigin;
                break;
            case "attitude":
                cameraRef.current.poseMode = ZapparThree.CameraPoseMode.Attitude;
                break;
            case "default":
            default:
                cameraRef.current.poseMode = ZapparThree.CameraPoseMode.Default;
                break;
        }
    }, [rearCameraMirrorMode, userCameraMirrorMode, poseMode, poseAnchorOrigin]);
    (0, fiber_1.useFrame)(({ gl, scene }) => {
        if (!cameraRef.current)
            return;
        if (onFirstFrame && !hadFirstFrame.current && cameraRef.current.pipeline.frameNumber() > 0) {
            hadFirstFrame.current = true;
            onFirstFrame();
        }
        cameraEnvMap === null || cameraEnvMap === void 0 ? void 0 : cameraEnvMap.update(gl, cameraRef.current);
        cameraRef.current.updateFrame(gl);
        gl.render(scene, cameraRef.current);
    }, renderPriority);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("primitive", { dispose: null, object: cameraTexture, attach: "background" }),
        environmentMap && react_1.default.createElement("primitive", { dispose: null, object: cameraEnvMap.environmentMap, attach: "environment" }),
        react_1.default.createElement("zapparCameraAdditional", Object.assign({ dispose: null, args: [{ pipeline, userCameraSource: sources === null || sources === void 0 ? void 0 : sources.userCamera, rearCameraSource: sources === null || sources === void 0 ? void 0 : sources.rearCamera, backgroundTexture: cameraTexture }], ref: (0, react_merge_refs_1.default)([cameraRef, ref]) }, props))));
});
exports.default = ZapparCamera;
