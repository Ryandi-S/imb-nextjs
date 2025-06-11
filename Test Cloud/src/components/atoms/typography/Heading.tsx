import { JSX, ReactNode } from "react";

// Define the props that the Heading component will accept
type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6; // Optional heading level (default is 1)
  children: ReactNode; // Content to be rendered inside the heading
  className?: string; // Optional additional CSS classes
};

// Functional component for rendering semantic headings (h1–h6)
export default function Heading({
  level = 1, // Default to h1 if no level is provided
  children,
  className = "",
}: HeadingProps) {
  // Dynamically determine which HTML heading tag to use
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  // Define base styling for each heading level
  const baseClass = {
    1: "text-3xl font-bold",
    2: "text-2xl font-semibold",
    3: "text-xl font-semibold",
    4: "text-lg font-medium",
    5: "text-base font-medium",
    6: "text-sm font-medium",
  };

  // Render the heading with corresponding tag and styling
  return <Tag className={`${baseClass[level]} ${className}`}>{children}</Tag>;
}
