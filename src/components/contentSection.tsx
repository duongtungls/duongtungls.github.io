import classNames from "classnames";

export default function ContentSection() {
  return (
    <div className={classNames("py-[100px]")}>
      <div className={classNames("max-w-6xl", "ml-auto", "mr-auto", "px-[40px]")}>
        <div className={classNames("relative","before:absolute", "before:content-['']", "before:w-[6px]", "before:h-full", "before:bg-[#e3872d]", "before:top-[2px]")}>
          <h3
            className={classNames(
              "text-5xl",
              "uppercase",
              "font-semibold",
              "leading-none",
              "-tracking-[.5px]",
              "pl-6"
            )}
          >
            About Me
          </h3>
          <span className={classNames("pl-6")}>
            Main informations about me
          </span>
        </div>
      </div>
    </div>
  );
}
