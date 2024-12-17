"use client";

import React from "react";
import classNames from "classnames";

interface ButtonProps {
  href?: string; // יכול להיות null אם הכפתור לא מפנה לקישור
  label: string; // הטקסט של הכפתור
  variant?: "primary" | "secondary" | "cta"; // סגנונות מובנים
  onClick?: () => void; // אירוע לחיצה אם נדרש
  className?: string; // מחלקות מותאמות אישית
}

export default function Button({
  href,
  label,
  variant = "primary",
  onClick,
  className,
}: ButtonProps) {
  const baseStyles =
    "inline-block px-6 py-3 text-white font-semibold rounded-lg transition duration-300";
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600",
    secondary: "bg-gray-500 hover:bg-gray-600",
    cta: "bg-green-500 hover:bg-green-600",
  };

  const buttonClass = classNames(baseStyles, variants[variant], className);

  // כפתור רגיל אם אין קישור
  if (!href) {
    return (
      <button className={buttonClass} onClick={onClick}>
        {label}
      </button>
    );
  }

  // אם יש קישור, הכפתור משמש כתגית a
  return (
    <a href={href} className={buttonClass}>
      {label}
    </a>
  );
}
