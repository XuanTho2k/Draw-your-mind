import { useEffect } from "react";
import { useFabricContext } from "../hooks/useFabric";
import Toolbars from "./Toolbars";

const CanvasDrawer = () => {
  const {
    htmlCanvasRef,
    activeTool,
    setActiveTool,
    enableTempMoveMode,
    restoreActiveTool,
  } = useFabricContext();

  useEffect(() => {
    let isSpaceDown = false;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" && !isSpaceDown) {
        e.preventDefault();
        isSpaceDown = true;
        enableTempMoveMode();
      }
    };

    const onKeyUp = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        isSpaceDown = false;
        restoreActiveTool();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  return (
    <>
      <canvas ref={htmlCanvasRef} />
      <Toolbars />
    </>
  );
};

export default CanvasDrawer;
