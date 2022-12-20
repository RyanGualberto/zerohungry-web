import React from "react";

export default function BackToTop() {
  if (window.pageYOffset > 100) {
    return (
      <button
        className="fixed bottom-4 right-4 bg-gray-100 p-4 rounded-full shadow-lg"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    );
  }
}
