import { Html } from "@react-three/drei";
import { Loader } from "lucide-react";
const Loading = () => (
    <Html center>
        <div className="text-white items-center flex gap-2 w-80 justify-center"><Loader className="animate-spin"/><span> 3D Loading...</span></div>
    </Html>
);
export default Loading;