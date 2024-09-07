import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

export default function DropdownComponent() {
    const items = [
        {
            key: "servicios",
            label: "Servicios",
        },
        {
            key: "calendary",
            label: "Calendario",
        }
    ];

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant="faded"
                >
                    Servicios
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Dynamic Actions" items={items}>
                {(item) => (
                    <DropdownItem
                        key={item.key}
                        color={item.key === "delete" ? "danger" : "default"}
                        className={item.key === "delete" ? "text-danger" : ""}
                    >
                        {item.label}
                    </DropdownItem>
                )}
            </DropdownMenu>
        </Dropdown>
    );
}
