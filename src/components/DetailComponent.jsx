import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";

const rows = ["hola"];

const columns = ["hola"];

export default function DetailComponent() {
    return (
        <Table aria-label="Example table with dynamic content">
            <TableHeader>
                {columns.map((column) =>
                    <TableColumn key={column.key}>{column.label}</TableColumn>
                )}
            </TableHeader>
            <TableBody>
                {rows.map((row) =>
                    <TableRow key={row.key}>
                        {(columnKey) => <TableCell>{getKeyValue(row, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}