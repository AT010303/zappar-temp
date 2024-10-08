import * as ZapparThree from "@zappar/zappar-threejs";
import React from "react";
/**
 * A THREE.Mesh that fits the user's head and fills the depth buffer,
 * ensuring that the camera image of the head shows instead of any 3D elements behind it in the scene.
 *
 * Works using a full-head ZapparThree.FaceMesh with the mouth, eyes and neck filled in.
 * Its renderOrder is set to Number.MIN_SAFE_INTEGER to ensure it's rendered before any other objects in the scene,
 * and its material has the colorWrite property set to false so it fills the depth buffer but not the color buffer.
 * @see https://docs.zap.works/universal-ar/web-libraries/react-threejs/face-tracking/
 */
declare const zapparHeadMaskMesh: React.ForwardRefExoticComponent<Pick<Omit<import("@react-three/fiber").ExtendedColors<import("@react-three/fiber").Overwrite<Partial<import("three").Mesh<import("three").BufferGeometry, import("three").Material | import("three").Material[]>>, import("@react-three/fiber").NodeProps<import("three").Mesh<import("three").BufferGeometry, import("three").Material | import("three").Material[]>, typeof import("three").Mesh>>>, import("@react-three/fiber").NonFunctionKeys<{
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
    trackerGroup: React.MutableRefObject<ZapparThree.FaceAnchorGroup | undefined>;
    animations?: any;
}, "updateMatrixWorld" | "dispose" | "getWorldDirection" | "id" | "uuid" | "name" | "type" | "parent" | "children" | "up" | "position" | "rotation" | "quaternion" | "scale" | "modelViewMatrix" | "normalMatrix" | "matrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldNeedsUpdate" | "layers" | "visible" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "attach" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "args" | "key" | "onUpdate" | "geometry" | "material" | "morphTargetInfluences" | "morphTargetDictionary" | "isMesh" | "updateMorphTargets" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | "trackerGroup"> & React.RefAttributes<unknown>>;
export default zapparHeadMaskMesh;
