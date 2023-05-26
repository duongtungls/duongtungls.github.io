import classNames from "classnames";
import Image from "next/image";
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid'
import DescriptionTyping from "@/components/descriptionTyping";

export default function HeroSection() {
  return (
    <div
      className={classNames(
        "w-full",
        "h-auto",
        "relative",
        "box-border"
      )}
    >
      <div
        className={classNames(
          "absolute",
          "top-0",
          "left-0",
          "right-0",
          "bottom-0"
        )}
      >
        <div
          className={classNames(
            "absolute",
            "top-0",
            "left-0",
            "right-0",
            "bottom-0",
            "bg-fixed",
            "bg-no-repeat",
            "bg-cover",
            "bg-[url(/images/bg.jpg)]"
          )}
        ></div>
        <div
          className={classNames(
            "absolute",
            "top-0",
            "left-0",
            "right-0",
            "bottom-0",
            "z-20",
            "bg-[rgba(7,23,55,.8)]"
          )}
        ></div>
      </div>

      <div className={classNames("h-screen")}>
        <div
          className={classNames(
            "absolute",
            "z-30",
            "top-2/4",
            "left-2/4",
            "-translate-x-2/4",
            "-translate-y-2/4",
            "text-center",
            "flex",
            "flex-col",
            "items-center"
          )}
        >
          <Image
            alt="Tung Duong"
            width={200}
            height={200}
            src="/images/avatar.jpg"
            className={classNames(
              "w-[200px]",
              "h-[200px]",
              "rounded-full",
              "mb-9",
              "border-8",
              "border-white/50"
            )}
          />
          <h3
            className={classNames(
              "text-5xl",
              "text-white",
              "uppercase",
              "font-light"
            )}
          >
            Tung <span className={classNames("text-orange-500")}>Duong</span>
          </h3>
          <DescriptionTyping className={classNames("text-white")}/>
        </div>
      </div>

      <div className={classNames("absolute", "left-2/4", "bottom-[5%]", "-translate-x-2/4", "z-50", "animate-bounce-2s", "text-white" )}>
        <ChevronDoubleDownIcon width={30} height={30} />
      </div>
    </div>
  );
}
