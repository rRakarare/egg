"use client";

import { useFluid,  } from "@funtech-inc/use-shader-fx";
import React from "react";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { FxMaterial } from "./fxMaterial";

extend({ FxMaterial });



function Fluid() {
    const { size } = useThree();
    const [updateFluid, setFluid, { output: fluid }] = useFluid({
       size,
       dpr: {
          shader: 0.2,
          fbo: 0.8,
       },
    });
 
    setFluid({
       densityDissipation: 0.99,
       velocityDissipation: 0.99,
       splatRadius: 0.001,
       pressureIterations: 1,
    });
 
    useFrame((state) => {
       updateFluid(state);
    });
 
    return (
       <>
          <mesh>
             <planeGeometry args={[2, 2]} />
             <FxMaterial u_fx={fluid} key={FxMaterial.key} />
          </mesh>
       </>
    );
}

export default Fluid;

export const FluidCanvas = () => {
  return (
    <Canvas>
      <Fluid />
    </Canvas>
  );
};
