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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ZapparThree = __importStar(require("@zappar/zappar-threejs"));
/**
 * Creates a THREE.DefaultLoadingManager which is applied to all assets that can be loaded.
 * @see https://docs.zap.works/universal-ar/web-libraries/threejs/loading-manager/
 */
function ZapparLoader(props) {
    const { style, onLoad } = props;
    (0, react_1.useEffect)(() => {
        const loader = new ZapparThree.DefaultLoaderUI({
            style: style,
            onLoad,
        });
        return () => loader.dispose();
    }, [props]);
    return null;
}
exports.default = ZapparLoader;
