"use client";

import dynamic from "next/dynamic";

const TeamOptimized = dynamic(() => import("../mainTeam/MainTeam"), {
    ssr: false,
});

export default TeamOptimized;