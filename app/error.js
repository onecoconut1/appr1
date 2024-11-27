"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Error:", error);
  }, [error]);

  return (
    <div
      className="error-container"
      style={{ padding: "20px", textAlign: "center" }}
    >
      <h2>Something went wrong!</h2>
      <button
        onClick={() => reset()}
        style={{
          padding: "8px 16px",
          backgroundColor: "#ff4444",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Try again
      </button>
    </div>
  );
}
