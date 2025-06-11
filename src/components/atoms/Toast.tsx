"use client";

import { useEffect, useState } from "react";

// Define the props for the Toast component
type Props = {
  message: string; // The message to display in the toast
  type?: "success" | "error" | undefined; // Type of toast (affects background color)
  onClose: () => void; // Callback function to remove the toast from the UI
};

const Toast = ({ message, type = "success", onClose }: Props) => {
  // State to control the visibility of the toast
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide the toast after 2.5 seconds (fade-out) using setTimeout
    const timer = setTimeout(() => setVisible(false), 2500);

    // Fully remove the toast from the DOM after 3 seconds using setTimeout
    const remove = setTimeout(() => onClose(), 3000);

    // Clear timeouts when component unmounts to prevent memory leaks
    return () => {
      clearTimeout(timer);
      clearTimeout(remove);
    };
  }, [onClose]);

  // Determine background color based on toast type (success or error)
  const bg = type === "success" ? "bg-green-500" : "bg-red-500";

  // Render the toast component with fade-out animation and background color
  return (
    <div
      className={`fixed top-4 right-4 px-4 py-2 text-white rounded shadow-lg z-50 transition-opacity duration-500
        ${bg} ${visible ? "opacity-100" : "opacity-0"}`}
    >
      {message}
    </div>
  );
};

export default Toast;
