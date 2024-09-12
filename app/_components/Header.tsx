import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MastodonIcon } from "./icons/MastodonIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { TwitterIcon } from "./icons/TwitterIcon";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4 mb-16 backdrop-blur-md">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold"> Laurent Delatte</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-6 p-0 rounded-full"
            )}
            href="https://github.com/alphae-nix"
          >
            <GithubIcon size={12} className="text-foreground" />
          </Link>
          <Link
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0 rounded-full")}
            href="https://github.com/alphae-nix"
          >
            <MastodonIcon size={12} className="text-foreground" />
          </Link>
          <Link
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0 rounded-full")}
            href="https://mamot.fr/@alphanix"
          >
            <LinkedinIcon size={12} className="text-foreground" />
          </Link>
          <Link
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0 rounded-full")}
            href="https://github.com/alphae-nix"
          >
            <TwitterIcon size={12} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
