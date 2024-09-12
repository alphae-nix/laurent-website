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
        "bg-accent/30 hover:bg-accent/50 transition-colors font-mono border-accent px-1 py-0.5 rounded-xl text-primary"
      )}
      {...props}
    ></span>
  );
};

export const Hero = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4">
      <div className="flex-[2] flex flex-col gap-2">
        <h2 className="text-5xl font-caption font-bold text-primary">
          Laurent Delatte
        </h2>
        <h3 className="text-3xl font-caption"> Software Developer </h3>
        <p className="text-base">
          Lorem ipsum dolor
          <Link href="https://laurent.delatte.ovh">
            <Code className="inline-flex items-center gap-1 border">
              {" "}
              <TwitterIcon size={16} className="inline h-auto" />
              Twitter
            </Code>
          </Link>
          <Code className="inline-flex items-center gap-1 border">
            {" "}
            <img
              style={{ width: 16, height: "auto" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/2560px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png"
              alt="France flag"
            />
            France
          </Code>
          sit amet consectetur adipisicing elit. Labore quas voluptas dolore hic
          possimus officiis sapiente, assumenda fuga perferendis ut culpa
          dignissimos aut deserunt eum nisi. Dolore alias excepturi aliquam!
        </p>
      </div>
      <div className="flex-1 max-lg:m-auto ml-auto">
        <img
          src="/img/lolo.jpeg"
          alt="Laurent face"
          className="w-56 h-56 rounded-full object-cover "
        />
      </div>
    </Section>
  );
};
