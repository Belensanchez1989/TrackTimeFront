import React from "react";
import { TimeInput } from "@nextui-org/react";
import { Time } from "@internationalized/date";

export default function InputHour() {
    return (
        <div className="flex flex-wrap gap-4">
            <TimeInput label="Event Time" defaultValue={new Time(11, 45)} />
            <TimeInput label="Event Time" />
        </div>
    );
}