import React from "react";
/**
 * A THREE.Mesh which will fit to the target image and use it's texture as a material.
 *  @param imageTarget The target image to use.
 * @see https://docs.zap.works/universal-ar/web-libraries/react-threejs/image-tracking/
 */
declare const targetImagePreviewMesh: React.ForwardRefExoticComponent<Pick<Omit<import("@react-three/fiber").ExtendedColors<import("@react-three/fiber").Overwrite<Partial<import("three").Mesh<import("three").BufferGeometry, import("three").Material | import("three").Material[]>>, import("@react-three/fiber").NodeProps<import("three").Mesh<import("three").BufferGeometry, import("three").Material | import("three").Material[]>, typeof import("three").Mesh>>>, import("@react-three/fiber").NonFunctionKeys<{
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
    imageTarget: import("@zappar/zappar/lib/imagetracker").ImageTarget;
    animations?: any;
}, "updateMatrixWorld" | "dispose" | "getWorldDirection" | "id" | "uuid" | "name" | "type" | "parent" | "children" | "up" | "position" | "rotation" | "quaternion" | "scale" | "modelViewMatrix" | "normalMatrix" | "matrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldNeedsUpdate" | "layers" | "visible" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "attach" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "args" | "key" | "onUpdate" | "geometry" | "material" | "morphTargetInfluences" | "morphTargetDictionary" | "isMesh" | "updateMorphTargets" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | "imageTarget"> & React.RefAttributes<unknown>>;
export default targetImagePreviewMesh;
