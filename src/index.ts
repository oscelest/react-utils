import {DetailedHTMLProps, HTMLAttributes} from "react";

export * from "./functions";

export type HTMLComponentProps<E = HTMLDivElement> = DetailedHTMLProps<HTMLAttributes<E>, E>
