"use client";
import classNames from "classnames";
import { TypeAnimation } from "react-type-animation";

export default function DescriptionTyping({ className }: any) {
  return (
    <p className={classNames("text-2xl", className)}>
      {`I'm a `}
      <TypeAnimation
        sequence={[
          "Web Developer",
          2000, // Waits 2s
          "React Native Developer",
          2000, // Waits 2s
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        className={classNames('font-bold')}
      />
    </p>
  );
}
