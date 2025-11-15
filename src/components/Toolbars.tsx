import React, { useMemo } from "react";
import { useFabricContext } from "../hooks/useFabric";

const Toolbars = () => {
  const { activeTool, setActiveTool } = useFabricContext();

  const toolbars = useMemo(
    () => [
      {
        name: "Hand",
        icon: "lni lni-hand-stop",
        action: "move",
      },
      {
        name: "Move",
        icon: "lni lni-location-arrow-right",
        action: "select",
      },
      {
        name: "Triangle",
        icon: "lni lni-play",
        action: "triangle",
      },
      {
        name: "Rectangle",
        icon: "lni lni-rectangle",
        action: "rect",
      },
      {
        name: "Ellipse",
        icon: "lni lni-circle",
        action: "ellipse",
      },
    ],
    []
  );
  return (
    <div className="fixed flex items-center gap-0 z-50 py-1 bg-white bottom-10 -translate-x-1/2 left-1/2 h-[40px] w-[400px] shadow-sm rounded-lg border">
      {toolbars.map((toolbar) => (
        <div className="h-full flex items-center gap-1 pl-1">
          <button
            className="w-8 h-8 hover:bg-slate-100 flex cursor-pointer rounded-md items-center justify-center"
            key={toolbar.name}
            onClick={() => setActiveTool(toolbar.action as any)}
          >
            <i className={toolbar.icon} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Toolbars;
