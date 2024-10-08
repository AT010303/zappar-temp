import * as ZapparThree from "@zappar/zappar-threejs";
import React from "react";
/**
 * A `THREE.Group` which attaches content to a known point (landmark) on a face as it moves around in the camera view.
 * Landmarks will remain accurate, even as the user's expression changes.
 * @see https://docs.zap.works/universal-ar/web-libraries/react-threejs/face-tracking/
 */
declare const zapparFaceLandmark: React.ForwardRefExoticComponent<Pick<Omit<import("@react-three/fiber").ExtendedColors<import("@react-three/fiber").Overwrite<Partial<ZapparThree.FaceLandmarkGroup>, import("@react-three/fiber").NodeProps<ZapparThree.FaceLandmarkGroup, typeof ZapparThree.FaceLandmarkGroup>>>, import("@react-three/fiber").NonFunctionKeys<{
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
    camera?: React.MutableRefObject<ZapparThree.Camera | undefined> | undefined;
    trackerGroup?: React.MutableRefObject<ZapparThree.FaceAnchorGroup | undefined> | undefined;
    target: "eye-left" | "eye-right" | "ear-left" | "ear-right" | "nose-bridge" | "nose-tip" | "nose-base" | "lip-top" | "lip-bottom" | "mouth-center" | "chin" | "eyebrow-left" | "eyebrow-right";
    animations?: any;
}, "updateMatrixWorld" | "dispose" | "getWorldDirection" | "id" | "uuid" | "name" | "type" | "parent" | "children" | "up" | "position" | "rotation" | "quaternion" | "scale" | "modelViewMatrix" | "normalMatrix" | "matrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldNeedsUpdate" | "layers" | "visible" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "attach" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "args" | "key" | "onUpdate" | "currentAnchor" | "isGroup" | "faceTracker" | "landmark" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | "trackerGroup" | "camera" | "target"> & React.RefAttributes<unknown>>;
export default zapparFaceLandmark;
