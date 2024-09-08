import React from "react";
import { Button } from "@nextui-org/react";

export default function ButtonHome() {
    return (
        <div className="flex gap-4 items-center">
            <Button color="primary" size="lg">
                Reservar ahora
            </Button>
        </div>
    );
}