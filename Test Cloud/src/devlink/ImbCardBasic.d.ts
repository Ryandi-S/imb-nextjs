import * as React from "react";
import * as Types from "./types";

declare function ImbCardBasic(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  title?: React.ReactNode;
  text?: React.ReactNode;
  link?: Types.Basic.Link;
  closable?: Types.Visibility.VisibilityConditions;
  hasLink?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
