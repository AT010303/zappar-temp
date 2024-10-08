import * as ZapparThree from "@zappar/zappar-threejs";
import React from "react";
/**
 * Creates a camera that you can use instead of a perspective camera.
 *
 * @see https://docs.zap.works/universal-ar/web-libraries/react-threejs/camera-setup/
 */
declare const ZapparCamera: React.ForwardRefExoticComponent<Pick<Omit<import("@react-three/fiber").ExtendedColors<import("@react-three/fiber").Overwrite<Partial<Omit<ZapparThree.Camera, "userCameraMirrorMode" | "rearCameraMirrorMode" | "poseMode" | "start">>, import("@react-three/fiber").NodeProps<Omit<ZapparThree.Camera, "userCameraMirrorMode" | "rearCameraMirrorMode" | "poseMode" | "start">, typeof ZapparThree.Camera>>>, import("@react-three/fiber").NonFunctionKeys<{
    position?: import("@react-three/fiber").Vector3 | undefined;
    up?: import("@react-three/fiber").Vector3 | undefined;
    scale?: import("@react-three/fiber").Vector3 | undefined;
    rotation?: import("@react-three/fiber").Euler | undefined;
    matrix?: import("@react-three/fiber").Matrix4 | undefined;
    quaternion?: import("@react-three/fiber").Quaternion | undefined;
    layers?: import("@react-three/fiber").Layers | undefined;
    dispose?: (() => void) | null | undefined;
}>> & {
    position?: import("@react-three/fiber").Vector3 | undefined;
    up?: import("@react-three/fiber").Vector3 | undefined;
    scale?: import("@react-three/fiber").Vector3 | undefined;
    rotation?: import("@react-three/fiber").Euler | undefined;
    matrix?: import("@react-three/fiber").Matrix4 | undefined;
    quaternion?: import("@react-three/fiber").Quaternion | undefined;
    layers?: import("@react-three/fiber").Layers | undefined;
    dispose?: (() => void) | null | undefined;
} & import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers & {
    userCameraMirrorMode?: ("poses" | "css" | "none") | undefined;
    rearCameraMirrorMode?: ("poses" | "css" | "none") | undefined;
    pipeline?: ZapparThree.Pipeline | undefined;
    poseMode?: ("anchor-origin" | "attitude" | "default") | undefined;
    userFacing?: boolean | undefined;
    animations?: any;
    sources?: {
        rearCamera?: (string | HTMLVideoElement | HTMLImageElement) | undefined;
        userCamera?: (string | HTMLVideoElement | HTMLImageElement) | undefined;
    } | undefined;
    makeDefault?: boolean | undefined;
    renderPriority?: number | undefined;
    permissionRequest?: boolean | undefined;
    onFirstFrame?: (() => void) | undefined;
    environmentMap?: boolean | undefined;
    start?: boolean | undefined;
    backgroundImageProps?: Partial<import("three").Texture> | undefined;
}, "userCameraMirrorMode" | "rearCameraMirrorMode" | "poseMode" | "start" | "pipeline" | "backgroundTexture" | "rawPose" | "poseAnchorOrigin" | "isPerspectiveCamera" | "rearCameraSource" | "userCameraSource" | "stop" | "setPoseModeAnchorOrigin" | "currentMirrorMode" | "updateFrame" | "_updateProjectionMatrix" | "updateMatrixWorld" | "dispose" | "matrixWorldInverse" | "projectionMatrix" | "projectionMatrixInverse" | "isCamera" | "getWorldDirection" | "id" | "uuid" | "name" | "type" | "parent" | "children" | "up" | "position" | "rotation" | "quaternion" | "scale" | "modelViewMatrix" | "normalMatrix" | "matrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldNeedsUpdate" | "layers" | "visible" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "attach" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "args" | "key" | "onUpdate" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | "environmentMap" | "userFacing" | "sources" | "makeDefault" | "renderPriority" | "permissionRequest" | "onFirstFrame" | "backgroundImageProps"> & React.RefAttributes<unknown>>;
export default ZapparCamera;
