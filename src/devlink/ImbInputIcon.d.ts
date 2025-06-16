import * as React from "react";
import * as Types from "./types";

declare function ImbInputIcon(props: {
  as?: React.ElementType;
  label?: React.ReactNode;
  image?: Types.Asset.Image;
  id?: Types.Basic.IdTextInput;
  type?: Types.Builtin.Text;
  variant?: "Base" | "input-button";
  inputProps?: Types.Devlink.RuntimeProps;
  errorText?: React.ReactNode;
  errorMessageProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
