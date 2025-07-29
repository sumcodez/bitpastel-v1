"use client";

import dynamic from "next/dynamic";

const PartnerOptimized = dynamic(() => import("../mainPartner/MainPartner"), {
    ssr: false,
});

export default PartnerOptimized;