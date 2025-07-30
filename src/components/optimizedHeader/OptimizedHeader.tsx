"use client";
import dynamic from "next/dynamic";

const HeaderOptimized = dynamic(() => import("@/components/Header"), {
    ssr: false,
});

export default HeaderOptimized;