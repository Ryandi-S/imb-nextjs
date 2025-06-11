import * as React from "react";
import * as Types from "./types";

declare function ImbMenuLink(props: {
  as?: React.ElementType;
  text?: React.ReactNode;
  image?: Types.Asset.Image;
}): React.JSX.Element;
