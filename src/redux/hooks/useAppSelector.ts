import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../stores";

/**
 * Define the useAppSelector hook
 * @returns The useAppSelector hook
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
