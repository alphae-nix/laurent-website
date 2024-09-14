import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { TwitterIcon } from "./icons/TwitterIcon";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code } from "./Code";

export const Hero = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4">
      <div className="flex-[2] flex flex-col gap-2">
        <h2 className="text-5xl font-caption font-bold text-primary">
          Laurent Delatte
        </h2>
        <h3 className="text-3xl font-caption"> Software Developer </h3>
        <p className="text-base">
          Hey 👋, I'm Laurent, a passionate developer from France 🇫🇷. I'm always
          eager to learn new things and explore the world. Feel free to reach
          out!
        </p>{" "}
        <div className="flex justify-center space-x-4">
          <a href="/CV Laurent Delatte.pdf" download="CV Laurent Delatte.pdf">
            <Button className="text-current bg-inherit border bg-zinc-900 hover:bg-black w-fit">
              <svg
                className="w-3.5 h-3.5 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
              </svg>{" "}
              Download my CV{" "}
            </Button>
          </a>
          <a
            href="/public_key.asc"
            download="Laurent_Delatte_PGP_Public_Key.asc"
          >
            <Button className="text-current bg-inherit border bg-zinc-900 hover:bg-black w-fit">
              <svg
                className="w-3.5 h-3.5 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
              </svg>{" "}
              PGP Key
            </Button>
          </a>
        </div>
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
