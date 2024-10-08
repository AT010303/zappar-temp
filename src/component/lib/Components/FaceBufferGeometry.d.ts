import * as ZapparThree from "@zappar/zappar-threejs";
import React from "react";
/**
 * A THREE.BufferGeometry that fits to the user's face and deforms as the user's expression changes.
 * @see https://docs.zap.works/universal-ar/web-libraries/react-threejs/face-tracking/
 */
declare const ZapparFaceBufferGeometry: React.ForwardRefExoticComponent<Pick<Omit<import("@react-three/fiber").ExtendedColors<import("@react-three/fiber").Overwrite<Partial<ZapparThree.FaceBufferGeometry>, import("@react-three/fiber").NodeProps<ZapparThree.FaceBufferGeometry, typeof ZapparThree.FaceBufferGeometry>>>, import("@react-three/fiber").NonFunctionKeys<{
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
    fillMouth?: boolean | undefined;
    fillEyeLeft?: boolean | undefined;
    fillEyeRight?: boolean | undefined;
    fillNeck?: boolean | undefined;
    fullHead?: boolean | undefined;
    animations?: any;
}, "dispose" | "id" | "uuid" | "name" | "type" | "children" | "up" | "position" | "rotation" | "quaternion" | "scale" | "matrix" | "layers" | "animations" | "userData" | "applyMatrix4" | "applyQuaternion" | "rotateX" | "rotateY" | "rotateZ" | "lookAt" | "attach" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "args" | "key" | "onUpdate" | "calculateNormals" | "updateFromFaceAnchorGroup" | "updateFromFaceAnchor" | "updateFromIdentityExpression" | "index" | "attributes" | "morphAttributes" | "morphTargetsRelative" | "groups" | "boundingBox" | "boundingSphere" | "drawRange" | "isBufferGeometry" | "getIndex" | "setIndex" | "setAttribute" | "getAttribute" | "deleteAttribute" | "hasAttribute" | "addGroup" | "clearGroups" | "setDrawRange" | "translate" | "center" | "setFromPoints" | "computeBoundingBox" | "computeBoundingSphere" | "computeTangents" | "computeVertexNormals" | "merge" | "normalizeNormals" | "toNonIndexed" | "drawcalls" | "offsets" | "addIndex" | "addDrawCall" | "clearDrawCalls" | "addAttribute" | "removeAttribute" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | "trackerGroup" | "fillMouth" | "fillEyeLeft" | "fillEyeRight" | "fillNeck" | "fullHead"> & React.RefAttributes<unknown>>;
export default ZapparFaceBufferGeometry;
