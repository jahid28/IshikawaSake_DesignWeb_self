import React from "react";
import Image from "next/image";
const Story = () => {
  return (
    <div className="mt-6">
      <div className="relative overflow-hidden">
        <div className="w-[150%] lg:w-[96.5%] relative -translate-x-[19%] lg:translate-x-0">
          <Image
            // className=" w-[96.5%]"
            src="/MtFUJI_ILLUSTRATION_SET.png"
            width={3000}
            height={300}
            alt="nature video"
          />
        </div>

        <div className="absolute grid place-items-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <Image
            className="w-[2rem] sm:w-[4rem] lg:w-[6rem]"
            src="/LOGO_2_BK.png"
            width={100}
            height={300}
            alt="nature video"
          />
          <p className="en-vertical-text text-lg sm:text-3xl lg:text-6xl mt-3">
            STORY
          </p>
        </div>
      </div>

      <div className=" relative grid place-items-center">
        <Image
          className="w-[90%] lg:w-[80%]"
          src="/STORY_IMG_DUMMY.png"
          width={3000}
          height={300}
          alt="nature video"
        />
        <p className="vertical-text absolute text-white text-lg sm:text-xl lg:text-3xl">
          ものがたり
        </p>
      </div>

      <div className="flex justify-center relative w-[100%] mt-6 lg:mt-16">
        <p className="en-vertical-text mr-4 text-sm lg:text-base">
          ---- Message / History / Region
        </p>
        <p className="en-vertical-text mr-4 text-sm lg:text-base">
          READ MORE
          <Image
            className="inline-block relative left-[10%] mt-5"
            src="/READMORE_DROP.png"
            width={16}
            height={50}
            alt="nature video"
          />
        </p>
        <p className="vertical-text text-base lg:text-2xl mr-0">
          見飽きることはありません︒
        </p>
        <p className="vertical-text text-base lg:text-2xl mr-0">
          毎日眺めていても
        </p>
        <p className="vertical-text text-base lg:text-2xl mr-0">
          東側から望む富士の稜線はたおやかで︑
        </p>
        <p className="vertical-text text-base lg:text-2xl mr-4">
          富士山をつねに見上げる御殿場︒
        </p>
        <p className="vertical-text text-base lg:text-2xl mr-0">酒造りを</p>
        {/* </p> */}
      </div>
    </div>
  );
};

export default Story;
