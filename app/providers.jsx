"use client";
import { ThemeProvider } from "next-themes";

import React from "react";

const Providers = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:text-gray-200 dark:bg-slate-800 min-h-screen">{children}</div>
    </ThemeProvider>
  );
};

export default Providers;
