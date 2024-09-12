import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { TwitterIcon } from "./icons/TwitterIcon";
import Link from "next/link";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        className,
        "bg-accent/30 hover:bg-accent/50 transition-colors font-mono border-accent px-1 py-0.5 rounded-sm text-primary"
      )}
      {...props}
    ></span>
  );
};

export const Hero = () => {
  return (
    <Section className="flex max-lg:flex-col items-start outline-">
      <div className="flex-[2]">
        <h2 className="text-5xl font-caption font-bold text-primary">
          Laurent Delatte
        </h2>
        <h3 className="text-3xl font-caption"> Software Developer </h3>
        <p className="text-base">
          Lorem ipsum dolor 
          <Link href="https://laurent.delatte.ovh">
          <Code className="inline-flex items-center gap-1">
            {" "}
            <TwitterIcon size={16} className="inline" />
            Twitter
          </Code>
          </Link>
          sit amet consectetur adipisicing elit. Labore quas voluptas dolore hic
          possimus officiis sapiente, assumenda fuga perferendis ut culpa
          dignissimos aut deserunt eum nisi. Dolore alias excepturi aliquam!
        </p>
      </div>
      <div className="flex-1 ">
        <img
          src="/img/lolo.jpeg"
          alt="Laurent face"
          className="w-64 h-64 rounded-full object-cover max-w-xs"
        />
      </div>
    </Section>
  );
};
