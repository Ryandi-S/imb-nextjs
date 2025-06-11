import { ReactNode } from "react";

// Define the props the Button component will accept
type Props = {
  onClick: () => void; // Function to run when button is clicked
  children: ReactNode; // Button content (text, icon, etc.)
  variant?: "primary" | "danger" | "success" | "secondary"; // Optional style variant
  className?: string; // Optional additional CSS classes
};

const Button = ({
  onClick,
  children,
  variant = "primary", // Default variant if none is passed
  className,
}: Props) => {
  // Define style classes for each button variant
  const variantClass = {
    primary: "bg-[#BAF029] hover:opacity-80 text-[#003C44]",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    success: "bg-green-600 hover:bg-green-700 text-white",
    secondary: "bg-gray-300 hover:bg-gray-400 text-black",
  }[variant];

  // Render the button with the appropriate styles and behavior
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full cursor-pointer ${variantClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
