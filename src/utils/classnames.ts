import classnames, { Argument } from "classnames";
import { twMerge } from "tailwind-merge";

export const cx = (...args: Argument[]) => twMerge(classnames(args));
