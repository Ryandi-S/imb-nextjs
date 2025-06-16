import * as React from "react";
import * as Types from "./types";

declare function ImbButtonPrimary(props: {
  as?: React.ElementType;
  buttonText?: React.ReactNode;
  id?: Types.Basic.IdTextInput;
  variant?: "Base" | "secondary" | "tertier";
  runtimeProps?: Types.Devlink.RuntimeProps;
  children?: Types.Devlink.Slot;
  children2?: Types.Devlink.Slot;
}): React.JSX.Element;
