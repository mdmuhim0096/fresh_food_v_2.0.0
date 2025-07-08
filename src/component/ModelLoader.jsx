import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

const ModelLoader = ({ url , position, rotation, scale}) => {
    useEffect(() => {
        useGLTF.preload(url);
    }, [url]);

    const { scene } = useGLTF(url);
    return <primitive
        object={scene}
        position={position}        // [x, y, z]
        rotation={rotation}        // [x, y, z] in radians
        scale={scale} />;
};

export default ModelLoader;