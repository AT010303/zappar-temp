import React, { useEffect, useState } from "react";
import { ZapparCamera, InstantTracker, ZapparCanvas } from "./component/lib";
import { Suspense } from "react";
import { useAssetStore } from "./helper/assetStore";
import { useProgress } from "@react-three/drei";

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
      {loadingStore.loading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          {/* Independent spinner */}
          <div
            style={{
              border: "8px solid #f3f3f3", // Light grey background for spinner
              borderRadius: "50%",
              borderTop: "8px solid #00FF00", // Green top to animate
              width: "50px",
              height: "50px",
              animation: "spin 1s linear infinite", // Rotation animation
            }}
          />
          <div style={{ color: "white", fontSize: "12px", marginTop: "15px" }}>
            Loading...
          </div>
        </div>
      )}

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
