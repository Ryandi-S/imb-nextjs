import * as React from "react";
import * as Types from "./types";

declare function ImbCardItem(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  text?: React.ReactNode;
  variant?: "Base" | "without-icon";
}): React.JSX.Element;
