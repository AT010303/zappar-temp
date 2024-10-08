// "use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zustand_1 = __importDefault(require("zustand"));
const camera = (0, zustand_1.default)((set) => ({
    object: undefined,
    set: (camera) => set({ object: camera }),
}));
const imageTracker = (0, zustand_1.default)((set) => ({
    object: undefined,
    set: (tracker) => set({ object: tracker }),
}));
const instantTracker = (0, zustand_1.default)((set) => ({
    object: undefined,
    set: (tracker) => set({ object: tracker }),
}));
const faceTracker = (0, zustand_1.default)((set) => ({
    object: undefined,
    set: (tracker) => set({ object: tracker }),
}));
// const cameraEnvironmentMap = create<Store.cameraEnvironmentMap>((set) => ({
//   object: undefined,
//   set: (tracker) => set({ object: tracker }),
// }));
exports.default = {
    camera,
    imageTracker,
    instantTracker,
    faceTracker,
    // cameraEnvironmentMap,
};
