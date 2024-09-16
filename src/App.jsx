import React, { useEffect, useState } from "react";
import { ZapparCamera, InstantTracker, ZapparCanvas } from "./component/lib";
import { Suspense } from "react";
import { useAssetStore } from "./helper/assetStore";
import { useProgress } from "@react-three/drei";
import Loader from "./component/loader.jsx";

function App() {
  let [placementMode, setPlacementMode] = useState(true);
  const loadingStore = useAssetStore();
  const { progress, total } = useProgress();

  useEffect(() => {
    if(progress === 100){
      loadingStore.loaded();
    }
    // Simulate loading for 3 seconds and then stop the spinner
    if(total === 0){
      setTimeout(()=> {
        loadingStore.loaded();
      }, 3000)
    }

  }, [progress, total, loadingStore]);
    

  return (
    <>
      {/* Display spinner while loading */}
      {loadingStore.loading && <Loader/>}

      <ZapparCanvas>
        
        <ZapparCamera />
        <InstantTracker
          placementMode={placementMode}
          placementCameraOffset={[0, 0, -5]}
        >
          <Suspense fallback={null}>
            <mesh>
              <sphereBufferGeometry args={[1, 32, 32]} />
              <meshStandardMaterial color="hotpink" />
            </mesh>
          </Suspense>
        </InstantTracker>
        <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
      </ZapparCanvas>

      <div
        id="zappar-placement-ui"
        onClick={() => {
          setPlacementMode((currentPlacementMode) => !currentPlacementMode);
        }}
        onKeyDown={() => {
          setPlacementMode((currentPlacementMode) => !currentPlacementMode);
        }}
        role="button"
        tabIndex={0}
      >
        Tap here to
        {placementMode ? " place " : " pick up "}
        the object
      </div>
    </>
  );
}

export default App;
