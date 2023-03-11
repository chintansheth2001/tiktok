import React from "react";

import { Bars3Icon } from "@heroicons/react/24/outline";
export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-teal-500 py-2 px-4 text-left text-lg z-50 text-white flex gap-2">
      <Bars3Icon className="h-8 w-8 " /> Header
    </header>
  );
};
