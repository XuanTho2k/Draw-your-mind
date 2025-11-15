import { useFabricContext } from "../hooks/useFabric";
import Toolbars from "./Toolbars";

const CanvasDrawer = () => {
  const { htmlCanvasRef, activeTool, setActiveTool } = useFabricContext();

  console.log("🚀 ~ Canvas.tsx:8 ~ CanvasDrawer ~ activeTool:", activeTool);

  return (
    <>
      <canvas ref={htmlCanvasRef} />
      <Toolbars />
    </>
  );
};

export default CanvasDrawer;
