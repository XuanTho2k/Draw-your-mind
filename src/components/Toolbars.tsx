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
        icon: "lni lni-layout-9",
        action: "rect",
      },
      {
        name: "Ellipse",
        icon: "lni lni-life-guard-tube-1",
        action: "ellipse",
      },
    ],
    []
  );
  return (
    <div className="fixed flex items-center gap-0 z-50 py-1 bg-white bottom-10 -translate-x-1/2 left-1/2 h-[40px] w-[auto] shadow-sm rounded-lg border">
      <div className="relative w-fit flex items-center gap-1 px-1 py-1 ">
        <p className="text-[10px] whitespace-nowrap text-gray-500 absolute -top-6 left-1/2 transform -translate-x-1/2">
          To move canvas, hold <span className="font-bold">Space</span> and drag
          or use{" "}
          <span className="font-bold">
            Hand
            <span className="i-lineicons-hand" />
          </span>{" "}
          tool
        </p>
        {toolbars.map((toolbar, index) => (
          <div
            key={index}
            className={`h-full flex items-center gap-1 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-none ${
              activeTool === toolbar.action ? "bg-slate-200" : ""
            } cursor-pointer rounded-md`}
          >
            <button
              className="w-8 h-8 hover:bg-slate-100 flex cursor-pointer rounded-md items-center justify-center focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-none"
              key={toolbar.name}
              onClick={() => setActiveTool(toolbar.action as any)}
            >
              <i className={toolbar.icon} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toolbars;
