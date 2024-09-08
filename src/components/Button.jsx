import React from "react";
import { Button } from "@nextui-org/react";

export default function ButtonHome({ onClick ,children}) {
    return (
        <div className="flex gap-4 items-center">
            <Button color="primary" size="lg" onClick={onClick} >
            {children}
            </Button>
        </div>
    );
}