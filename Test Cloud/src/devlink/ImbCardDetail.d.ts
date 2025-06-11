import * as React from "react";
import * as Types from "./types";

declare function ImbCardDetail(props: {
  as?: React.ElementType;
  headerIcon?: Types.Asset.Image;
  subheaderText?: React.ReactNode;
  headerMainText?: React.ReactNode;
  headerSecondaryText?: React.ReactNode;
  description?: React.ReactNode;
  descriptionSecondary?: React.ReactNode;
  footerText?: React.ReactNode;
  footerIcon1?: Types.Asset.Image;
  footerIcon2?: Types.Asset.Image;
  hasLink?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
