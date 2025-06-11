"use client";

import { Roboto } from "next/font/google";
// import "@/styles/globals.css";
// import "@/devlink/global.css";
import "./globals.css";
import { Provider } from "react-redux";
import { persistor, store } from "@/stores";
import WrapLayout from "./_wrap-layout";
import { PersistGate } from "redux-persist/integration/react";
import { ReactNode } from "react";

/**
 * Configure Roboto font with a CSS variable for use in the application
 * @returns The Roboto font
 */
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

/**
 * Define the root layout component that wraps around page content
 * @param children - The children to render
 * @returns The root layout component
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  /**
   * Render the HTML structure with the Roboto font applied to the body
   * @returns The HTML structure
   */
  return (
    <html lang="en">
      {/* Apply global font and background styling to body */}
      <body className={`${roboto.variable} antialiased bg-[#F2F0EF]`}>
        {/* Provide Redux store to the entire app */}
        <Provider store={store}>
          {/* Delay rendering until persisted state has been retrieved */}
          <PersistGate loading={null} persistor={persistor}>
            {/**
             * Wrap all content inside the layout
             * @returns The WrapLayout component
             */}
            <WrapLayout>{children}</WrapLayout>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
