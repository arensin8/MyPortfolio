import { Suspense } from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitConttols , Preload , useGLTF} from '@react-three/drei';
import CanvasLoader from '../Loader'

const Earth = () => {
    return (
        <div>
            
        </div>
    );
};

const EarthCanvas = () => {
    return (
        <Canvas 
            shadows
            frameloop="demand"
            gl={{preserveDrawingBuffer : true}}
            camera ={{}}
        >
            <Suspense fallback={<CanvasLoader />}>

            </Suspense>
        </Canvas>
    )
}

export default Earth;