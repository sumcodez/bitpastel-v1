"use client";

import dynamic from "next/dynamic";

const HomeOptimized = dynamic(() => import("../main/Main"), {
    ssr: false,
});

export default HomeOptimized;