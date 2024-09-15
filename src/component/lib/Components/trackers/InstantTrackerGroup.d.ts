import * as ZapparThree from "@zappar/zappar-threejs";
import React from "react";
/**
 * A THREE.Group which attaches content to a point on a surface in front of the user as it moves around in the camera view.
 * @see https://docs.zap.works/universal-ar/web-libraries/react-threejs/instant-world-tracking/
 */
declare const ZapparInstantTracker: React.ForwardRefExoticComponent<Pick<Omit<import("@react-three/fiber").ExtendedColors<import("@react-three/fiber").Overwrite<Partial<Omit<ZapparThree.InstantWorldAnchorGroup, "instantTracker">>, import("@react-three/fiber").NodeProps<Omit<ZapparThree.InstantWorldAnchorGroup, "instantTracker">, typeof ZapparThree.InstantWorldAnchorGroup>>>, import("@react-three/fiber").NonFunctionKeys<{
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
    placementMode?: boolean | undefined;
    placementCameraOffset?: import("@react-three/fiber").Vector3 | undefined;
    useInstantTracker?: ((instantTracker: ZapparThree.InstantWorldTracker) => void) | undefined;
    animations?: any;
    pipeline?: ZapparThree.Pipeline | undefined;
    placementUI?: ("toggle" | "placement-only") | undefined;
    enabled?: boolean | undefined;
}, "pipeline" | "updateMatrixWorld" | "dispose" | "getWorldDirection" | "id" | "uuid" | "name" | "type" | "parent" | "children" | "up" | "position" | "rotation" | "quaternion" | "scale" | "modelViewMatrix" | "normalMatrix" | "matrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldNeedsUpdate" | "layers" | "visible" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "attach" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "args" | "key" | "onUpdate" | "isGroup" | "setAnchorPoseFromCameraOffset" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | "camera" | "enabled" | "placementMode" | "placementUI" | "placementCameraOffset" | "useInstantTracker"> & React.RefAttributes<unknown>>;
export default ZapparInstantTracker;
