"use client";

import dynamic from "next/dynamic";

const CareerOptimized = dynamic(() => import("../mainCareer/MainCareer"), {
    ssr: false,
});

export default CareerOptimized;