import { forwardRef } from "react";

export const Scroll = forwardRef<HTMLDivElement>((_, ref) => {
  return <div ref={ref} className="h-[50px]" />;
});
