import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        className,
        "bg-accent/30 hover:bg-accent/50 transition-colors font-mono border-accent px-1 py-0.2 rounded-lg border text-primary"
      )}
      {...props}
    ></span>
  );
};