import { useDispatch } from "react-redux";
import { AppDispatch } from "../stores";

/**
 * Define the useAppDispatch hook
 * @returns The useAppDispatch hook
 */
export const useAppDispatch: () => AppDispatch = useDispatch;
