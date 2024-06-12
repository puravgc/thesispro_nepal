import { Button } from "@/components/ui/button";
import React from "react";
import TypingAnimation from "../typing_animation/TextAnimation";
const Hero = () => {
  return (
    <main className="flex justify-around h-[55vh]">
      <div className="flex flex-col gap-5 my-16 items-center">
        <h1 className="text-[4rem] font-bold leading-tight">
          Need Help for <br />
          <span className="text-sky-500 font-bold block">
            <TypingAnimation
            className="text-[4rem] block w-[30rem]"
              text="Assignments?"
            />
          </span>
        </h1>
        <h4 className="text-xl font-semibold text-center leading-snug">
          Your academic success, <br /> Our priority!
        </h4>
        <Button variant="destructive" className="w-fit">
          Order Now
        </Button>
      </div>
      <div>
        this is where the image will be placed
        {/* <Image 
                src={}
                alt='image of a boy sitting in chair infront of laptop!'
                height={760}
                width={1024}
            /> */}
      </div>
    </main>
  );
};

export default Hero;
