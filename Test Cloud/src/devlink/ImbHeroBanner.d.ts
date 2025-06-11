import * as React from "react";
import * as Types from "./types";

declare function ImbHeroBanner(props: {
  as?: React.ElementType;
  subtitle?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  image?: Types.Asset.Image;
}): React.JSX.Element;
