"use client";

import dynamic from "next/dynamic";

const PortfolioOptimized = dynamic(() => import("../mainPortfolio/MainPortfolio"), {
    ssr: false,
});

export default PortfolioOptimized;