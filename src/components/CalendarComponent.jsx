import React from "react";
import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";

export default function CalendarComponent() {
    return (
        <div className="flex justify-center items-center gap-4 items-center py-1 ">
            <Calendar
                aria-label="Date (Min Date Value)"
                defaultValue={today(getLocalTimeZone())}
                minValue={today(getLocalTimeZone())}
            />
        </div>
    );
}