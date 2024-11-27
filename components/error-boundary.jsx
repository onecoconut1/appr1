"use client";

import { useEffect } from "react";

export default function ErrorBoundary({ error, children }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Error:", error);
  }, [error]);

  if (error) {
    return (
      <div
        className="error-container"
        style={{ padding: "20px", textAlign: "center" }}
      >
        <h2>Something went wrong!</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return children;
}
