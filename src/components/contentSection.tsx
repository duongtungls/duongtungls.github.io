import classNames from "classnames";

export default function ContentSection() {
  return (
    <div className={classNames("pt-[100px]")}>
      <div className={classNames("w-full")}>
        <h3
          className={classNames(
            "text-5xl",
            "uppercase",
            "font-semibold",
            "leading-none",
            "-tracking-[.5px]",
            "pl-3.5",
          )}
        >
          About Me
        </h3>
      </div>
    </div>
  );
}
