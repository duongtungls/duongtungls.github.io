import classNames from "classnames";
import Image from "next/image";

const nav = [
  {
    label: "HOME",
    href: "#home",
  },
  {
    label: "ABOUT",
    href: "#ABOUT",
  },
  {
    label: "SERVICES",
    href: "#SERVICES",
  },
  {
    label: "PORTFOLIO",
    href: "#PORTFOLIO",
  },
  {
    label: "NEWS",
    href: "#NEWS",
  },
  {
    label: "CONTACT",
    href: "#CONTACT",
  },
];

export default function Sidebar() {
  return (
    <div
      className={classNames(
        "fixed",
        "w-[300px]",
        "h-full",
        "bg-[#041230]",
        "transition",
        "ease-in-out"
      )}
    >
      <div
        className={classNames(
          "px-12",
          "py-12",
          "w-full",
          "flex",
          "justify-center",
          "border-b",
          "border-white/10"
        )}
      >
        <a href="#">
          <Image
            alt=""
            src="/images/desktop-logo.png"
            width={86}
            height={125}
          />
        </a>
      </div>

      <div className={classNames("pr-5", "pl-14", "mt-12")}>
        <ul className="list-none">
          {nav.map((item, index) => (
            <li key={index} className={classNames("pb-5")}>
              <a
                href={item.href}
                className={classNames(
                  "relative",
                  "text-lg",
                  "decoration-none",
                  "text-white",
                  "hover:text-[#e3872d]",
                  "pb-5",
                  "uppercase",
                  "transition-all",
                  "duration-300",
                  "ease-[ease]",
                  "before:absolute",
                  "before:content-['']",
                  "before:h-[2px]",
                  "before:bg-[#e3872d]",
                  "before:top-[8px]",
                  "before:left-full",
                  "before:translate-y-1/2",
                  "before:ml-[13px]",
                  "before:transition-all",
                  "before:duration-300",
                  "before:ease-[ease]",
                  "before:w-0",
                  "before:hover:w-[35px]"
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li></li>
        </ul>
      </div>
    </div>
  );
}
