"use client";

import dynamic from "next/dynamic";

const FreeQuoteOptimized = dynamic(() => import("../MainFreeQuote"), {
    ssr: false,
});

export default FreeQuoteOptimized;