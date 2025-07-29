"use client";

import dynamic from "next/dynamic";

const FooterOptimized = dynamic(() => import("../Footer"), {
    ssr: false,
});

export default FooterOptimized;