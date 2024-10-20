"use client";

import React, { useState } from "react";
import Navbar from "../ui/Navbar";
import Sidebar from "../ui/Sidebar";

export default function Navigation() {
  const [expandSidebar, setExpandSidebar] = useState(false);

  return (
    <>
      <Navbar toggleSidebar={() => setExpandSidebar((x) => !x)} />
      <Sidebar
        expanded={expandSidebar}
        closeSidebar={() => setExpandSidebar(false)}
      />
    </>
  );
}
