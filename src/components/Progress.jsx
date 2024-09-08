import React from "react";
import { Progress } from "@nextui-org/react";

export default function ProgressTop({ value }) {
    return (
        <Progress aria-label="Loading..." value={ value} className="max-w-md" />
    );
}