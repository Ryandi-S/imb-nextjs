"use client";

import Header from "@/components/organisms/Header";
import useRouteRedirect from "@/hooks/useRouteRedirect";
import { ReactNode } from "react";

/**
 * Define a layout component that wraps around page content
 * Accepts a `children` prop to render nested components inside the layout
 * @param children - The children to render
 * @returns The layout component
 */
export default function WrapLayout({ children }: { children: ReactNode }) {
  /**
   * Invoke a custom hook for redirection logic (e.g., based on auth or route guards)
   * @returns The useRouteRedirect hook
   */
  useRouteRedirect();

  return (
    <main className="base-container-web pb-4">
      {/**
       * Render the global Header at the top
       * @returns The Header component
       */}
      <Header />

      {/**
       * Render all nested page content inside the layout
       * @returns The children
       */}
      {children}
    </main>
  );
}
