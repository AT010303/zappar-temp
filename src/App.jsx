import React, { useState } from 'react';
import { Loader, ZapparCamera, InstantTracker, ZapparCanvas } from './component/lib'
import { Suspense } from 'react';

function App() {
    let [placementMode, setPlacementMode] = useState(true); 
    return (
    <>
        <ZapparCanvas>
          <ZapparCamera />
          <InstantTracker placementMode={placementMode} placementCameraOffset={[0, 0, -5]}>
            <Suspense fallback={null}>
            <mesh>
              <sphereBufferGeometry args={[1, 32, 32]} />
              <meshStandardMaterial color="hotpink" />
            </mesh>
            </Suspense>
          </InstantTracker>
          <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
          
          <Loader />
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
        {placementMode ? ' place ' : ' pick up '}
        the object
      </div>
      </>
        
    );
}

export default App;
