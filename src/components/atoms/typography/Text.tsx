import { ReactNode } from "react";

// Define the props for the Text component
type TextProps = {
  children: ReactNode; // The content to be displayed inside the <p> tag
  size?: "sm" | "base" | "lg"; // Optional text size (default is "base")
  className?: string; // Optional additional custom classes
};

// Functional component for rendering paragraph text with size and styling
export default function Text({
  children,
  size = "base", // Default text size
  className = "",
}: TextProps) {
  // Determine Tailwind text size class based on the `size` prop
  const sizeClass = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
  }[size];

  // Render the text inside a paragraph element with styling
  return (
    <p className={`${sizeClass} m-0 text-gray-800 ${className}`}>{children}</p>
  );
}
