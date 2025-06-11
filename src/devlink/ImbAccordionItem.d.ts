import * as React from "react";
import * as Types from "./types";

declare function ImbAccordionItem(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  text?: React.ReactNode;
  text2?: React.ReactNode;
  link?: Types.Basic.Link;
  variant?: "Base" | "Open";
}): React.JSX.Element;
