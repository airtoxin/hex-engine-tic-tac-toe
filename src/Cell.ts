import { Geometry, Label, Polygon, SystemFont, Mouse, useDraw, useNewComponent, useType, Vector } from "@hex-engine/2d";

export type Parameters = {
  size: Vector;
  position: Vector;
  getContext: () => string;
  onClick: () => void;
};

export const Cell = ({size, position, getContext, onClick}: Parameters) => {
  useType(Cell);

  useNewComponent(() =>
    Geometry({
      shape: Polygon.rectangle(size),
      position
    })
  );

  const font = useNewComponent(() =>
    SystemFont({name: "sans-serif", size: size.y}));
  const label = useNewComponent(() => Label({font}));

  useDraw(context => {
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.strokeRect(0, 0, size.x, size.y);
    label.text = getContext();
    label.draw(context);
  });

  const mouse = useNewComponent(Mouse);
  mouse.onClick(onClick);
};
