import React from "react";
import { Divider } from "@nextui-org/react";

export default function DividerTop() {
    return (
        <div className="max-w-md mt-10 ml-2">
            <div className="space-y-1">
                <h3 className="text-3xl font-bold">Servicios</h3>
            </div>
            <Divider className="my-6" />
            <div className="flex h-5 items-center space-x-4 text-small">
            </div>
        </div>
    );
}
