import * as fabric from "fabric"; // v6
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

export type ToolType = "select" | "move";

const FabricContext = createContext<any>(undefined);

export const FabricProvider = ({ children }: { children: any }) => {
  const canvasRef = useRef<fabric.Canvas>(null);
  const [activeTool, setActiveTool] = useState<ToolType>("select");

  const [savedActiveTool, setSavedActiveTool] = useState<ToolType>("select");

  const htmlCanvasRef = useRef<HTMLCanvasElement>(null);

  const resizeCanvas = useCallback(() => {
    if (!canvasRef.current) return;
    const winW = window.innerWidth;
    const winH = window.innerHeight;

    canvasRef.current.width = winW;
    canvasRef.current.height = winH;
    canvasRef.current.renderAll();
  }, []);

  const activeToolRef = useRef(activeTool);
  const savedActiveToolRef = useRef(savedActiveTool);
  useEffect(() => {
    activeToolRef.current = activeTool;
    savedActiveToolRef.current = savedActiveTool;
  }, [activeTool, savedActiveTool]);

  function saveActiveTool() {
    setSavedActiveTool(activeToolRef.current);
  }

  function restoreActiveTool() {
    setActiveTool(savedActiveToolRef.current);
  }

  function enableTempMoveMode() {
    saveActiveTool();
    setActiveTool("move");
  }

  useEffect(() => {
    if (!htmlCanvasRef.current) return;

    canvasRef.current = new fabric.Canvas(htmlCanvasRef.current);

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvasRef.current?.dispose();
    };
  }, [resizeCanvas]);

  useEffect(() => {
    if (!canvasRef.current) return;

    if (activeTool === "move") {
      canvasRef.current.defaultCursor = "grabbing";
    } else {
      canvasRef.current.defaultCursor = "default";
    }
  }, [activeTool]);

  return (
    <FabricContext.Provider
      value={{
        htmlCanvasRef,
        activeTool,
        setActiveTool,
        saveActiveTool,
        restoreActiveTool,
        enableTempMoveMode,
      }}
    >
      {children}
    </FabricContext.Provider>
  );
};

export const useFabricContext = () => {
  const context = useContext(FabricContext);
  if (!context) {
    throw new Error("useFabricContext must be used within a FabricProvider");
  }
  return context;
};
