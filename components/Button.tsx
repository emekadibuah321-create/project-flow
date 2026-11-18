import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "dark" | "ghost";
type Size = "md" | "sm";

type CommonProps = { variant?: Variant; size?: Size };

function classes(variant: Variant, size: Size) {
  return ["btn", `btn-${variant}`, size === "sm" ? "btn-sm" : ""].filter(Boolean).join(" ");
}

export function Button({
  variant = "dark",
  size = "md",
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type="button" className={classes(variant, size)} {...props} />;
}

export function ButtonLink({
  variant = "ghost",
  size = "md",
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={classes(variant, size)} {...props} />;
}
